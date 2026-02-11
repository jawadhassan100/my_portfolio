import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      
      // Save to database first
      await storage.createMessage(input);

      // Try to send email if credentials exist
      // Note: In a real app, you might want to use a job queue or handle this asynchronously
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail', // Or use generic SMTP host/port from env
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to self
            subject: `Portfolio Contact: ${input.name}`,
            text: `
              Name: ${input.name}
              Email: ${input.email}
              Message: ${input.message}
            `,
            replyTo: input.email
          };

          await transporter.sendMail(mailOptions);
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // Don't fail the request if email fails, since we saved to DB
        }
      } else {
        console.log("Email credentials not found, skipping email send. Message saved to DB.");
      }

      res.json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        console.error("Contact form error:", err);
        res.status(500).json({ message: "Failed to process message" });
      }
    }
  });

  return httpServer;
}

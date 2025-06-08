import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { brevoEmailService } from "./brevo-email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message in storage
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification via Brevo
      try {
        await brevoEmailService.sendContactFormEmail({
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          message: validatedData.message,
          companyName: validatedData.companyName || undefined
        });
        console.log('Email notification sent successfully via Brevo');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email fails, just log the error
      }
      
      res.json({ 
        success: true, 
        message: "Contact message received successfully",
        id: message.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          error: "Internal server error" 
        });
      }
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        error: "Internal server error" 
      });
    }
  });

  // Brevo email service test endpoint
  app.post("/api/test-email", async (req, res) => {
    try {
      const isConnected = await brevoEmailService.testConnection();
      if (isConnected) {
        res.json({ 
          success: true, 
          message: "Brevo email service is configured and working properly" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Brevo email service connection failed. Please check your API key and configuration." 
        });
      }
    } catch (error) {
      console.error("Brevo email test error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to test Brevo email service" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

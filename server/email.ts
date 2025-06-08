import nodemailer from 'nodemailer';
import type { ContactMessage } from '@shared/schema';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export class EmailService {
  private transporter: nodemailer.Transporter;
  private fromEmail: string;
  private toEmail: string;

  constructor() {
    // Get email configuration from environment variables
    const emailConfig: EmailConfig = {
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || ''
      }
    };

    this.fromEmail = process.env.FROM_EMAIL || 'noreply@bnbytes.software';
    this.toEmail = process.env.TO_EMAIL || 'contact@bnbytes.software';

    this.transporter = nodemailer.createTransport(emailConfig);
  }

  async sendContactFormEmail(contactData: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    companyName?: string;
  }): Promise<void> {
    const mailOptions = {
      from: this.fromEmail,
      to: this.toEmail,
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: this.generateEmailTemplate(contactData),
      text: this.generatePlainTextEmail(contactData),
      replyTo: contactData.email
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully');
    } catch (error) {
      console.error('Error sending contact form email:', error);
      throw new Error('Failed to send email');
    }
  }

  private generateEmailTemplate(data: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    companyName?: string;
  }): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #22c55e; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
          .message { min-height: 100px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>BnB Software - bnbytes.software</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            
            ${data.companyName ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.companyName}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value message">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generatePlainTextEmail(data: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    companyName?: string;
  }): string {
    return `
New Contact Form Submission - BnB Software

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.companyName ? `Company: ${data.companyName}\n` : ''}Subject: ${data.subject}

Message:
${data.message}

Submitted: ${new Date().toLocaleString()}
    `.trim();
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error('Email service connection test failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();
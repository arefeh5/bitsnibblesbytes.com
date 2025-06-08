import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';

export class BrevoEmailService {
  private apiInstance: TransactionalEmailsApi;
  private fromEmail: string;
  private toEmail: string;

  constructor() {
    // Initialize Brevo API with API key
    this.apiInstance = new TransactionalEmailsApi();
    this.apiInstance.setApiKey('api-key', process.env.BREVO_API_KEY || '');
    
    this.fromEmail = process.env.FROM_EMAIL || 'contact@bnbytes.software';
    this.toEmail = process.env.TO_EMAIL || 'contact@bnbytes.software';
  }

  async sendContactFormEmail(contactData: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    companyName?: string;
  }): Promise<void> {
    const sendSmtpEmail = new SendSmtpEmail();
    
    sendSmtpEmail.subject = `New Contact Form Submission from ${contactData.firstName} ${contactData.lastName}`;
    sendSmtpEmail.htmlContent = this.generateEmailTemplate(contactData);
    sendSmtpEmail.textContent = this.generatePlainTextEmail(contactData);
    sendSmtpEmail.sender = { name: "BnB Software", email: this.fromEmail };
    sendSmtpEmail.to = [{ email: this.toEmail, name: "BnB Software Team" }];
    sendSmtpEmail.replyTo = { email: contactData.email, name: `${contactData.firstName} ${contactData.lastName}` };

    try {
      const result = await this.apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log('Contact form email sent successfully via Brevo:', result.body);
    } catch (error) {
      console.error('Error sending contact form email via Brevo:', error);
      throw new Error('Failed to send email through Brevo');
    }
  }

  private generateEmailTemplate(data: {
    firstName: string;
    lastName: string;
    email: string;
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
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
          .header { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; font-size: 24px; }
          .header p { margin: 10px 0 0 0; opacity: 0.9; }
          .content { background: #f8fafc; padding: 30px 20px; border: 1px solid #e2e8f0; border-top: none; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #374151; margin-bottom: 5px; display: block; }
          .value { padding: 12px; background: white; border-radius: 6px; border: 1px solid #d1d5db; }
          .message-field { min-height: 100px; white-space: pre-wrap; }
          .footer { background: #374151; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
          .timestamp { color: #6b7280; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>BnB Software - Professional Technology Consulting</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <div class="value">${data.email}</div>
          </div>
          
          ${data.companyName ? `
          <div class="field">
            <span class="label">Company:</span>
            <div class="value">${data.companyName}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">Message:</span>
            <div class="value message-field">${data.message}</div>
          </div>
          
          <div class="timestamp">
            Submitted: ${new Date().toLocaleString('en-US', { 
              timeZone: 'America/New_York',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} EST
          </div>
        </div>
        <div class="footer">
          <p>This email was automatically generated from the BnB Software contact form.</p>
          <p>You can reply directly to this email to respond to ${data.firstName}.</p>
        </div>
      </body>
      </html>
    `;
  }

  private generatePlainTextEmail(data: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    companyName?: string;
  }): string {
    return `
NEW CONTACT FORM SUBMISSION - BnB Software

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.companyName ? `Company: ${data.companyName}\n` : ''}
Message:
${data.message}

Submitted: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/New_York',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})} EST

---
This email was automatically generated from the BnB Software contact form.
You can reply directly to this email to respond to ${data.firstName}.
    `.trim();
  }

  async testConnection(): Promise<boolean> {
    try {
      // Test the connection by attempting to get account info
      const accountApi = new brevo.AccountApi();
      await accountApi.getAccount();
      return true;
    } catch (error) {
      console.error('Brevo connection test failed:', error);
      return false;
    }
  }
}

export const brevoEmailService = new BrevoEmailService();
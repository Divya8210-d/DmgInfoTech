import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, company, service, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure the Email transporter
        // For demo@gmail.com, you must use an App Password
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'demo@gmail.com',
                pass: process.env.EMAIL_PASS || 'your-app-password',
            },
        });

        // Send a response email to the user who filled the contact form
        const mailOptionsToUser = {
            from: process.env.EMAIL_USER || 'demo@gmail.com',
            to: email, // Sending to the email received in the contact form
            subject: 'Thank you for contacting us!',
            text: `Hello ${name},\n\nThank you for reaching out to us. We have received your message regarding "${service}" and one of our representatives will contact you shortly.\n\nYour message:\n${message}\n\nBest regards,\nYour Company Team`,
            html: `
        <p>Hello <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to us. We have received your message regarding "${service}" and one of our representatives will contact you shortly.</p>
        <p><strong>Your message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
          ${message}
        </blockquote>
        <br/>
        <p>Best regards,<br/>DMG Infotech</p>
      `,
        };

        // Optionally, send an email to the company to notify them of the lead
        const mailOptionsToCompany = {
            from: process.env.EMAIL_USER || 'demo@gmail.com',
            to: process.env.EMAIL_USER || 'demo@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `A new contact form was submitted.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'none'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        // Send the emails
        await transporter.sendMail(mailOptionsToUser);
        await transporter.sendMail(mailOptionsToCompany);

        return NextResponse.json(
            { message: 'Emails sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}

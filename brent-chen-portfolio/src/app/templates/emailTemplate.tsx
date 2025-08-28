import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message
}) => (
  <div>
    <h2>New Contact Form Submission</h2>
    <p><strong>First Name:</strong> {firstName}</p>
    <p><strong>Last Name:</strong> {lastName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <div>{message}</div>
  </div>
);
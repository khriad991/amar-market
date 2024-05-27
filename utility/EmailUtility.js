import nodemailer from "nodemailer";
export async function SendEmail(EmailTo, EmailText, EmailSubject) {
    let Transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'giles39@ethereal.email',
            pass: 'v2DQKUYxBC7X91uF6V'
        }
        // tls: { rejectUnauthorized: false },
    });
    let MailOption = {
        from: "Next Ecommerce <giles39@ethereal.email>",
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
    };
    return await Transport.sendMail(MailOption);
}

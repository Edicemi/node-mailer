const nodemailer = require('nodemailer');
require('dotenv').config();

const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS } = process.env;

exports.sendMail = async config => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const info = await transporter.sendMail({
            from: 'victoriataiwo1998@gmail.com',
            ...config,
        });

        return `Message sent', ${nodemailer.getTestMessageUrl(info)}`;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
const nodemailer = require('nodemailer')
const { APPLICATION_PASSWORD } = process.env;

async function sendMailing(gmail, title, body) {
    const emailRegex = /\S+@\S+\.\S+/;

    if (typeof gmail !== 'string') {
        throw new Error('El parámetro gmail debe ser un string');
    }

    if (!emailRegex.test(gmail)) {
        throw new Error('El parámetro gmail debe ser un email válido');
    }

    if (typeof title !== 'string') {
        throw new Error('El parámetro title debe ser un string');
    }

    if (typeof body !== 'string') {
        throw new Error('El parámetro body debe ser un string');
    }

    const transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, // port: 587,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "wineryhenry@gmail.com", // generated ethereal user
            pass: `${APPLICATION_PASSWORD}` , // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '<wineryhenry@gmail.com>', // sender address
        to: gmail, // list of receivers
        subject: title, // Subject line
        html: body, // html body
    });

    return info;
}


module.exports = {sendMailing}
import nodemailer from "nodemailer";


async function main(body) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "fullofbulk@gmail.com",
            pass: "zvujxrgfqvwndfbb"
        },
    })


    await transporter.sendMail({
        from: `"Kyle Kearney`,
        to: "kyledkearney@gmail.com",
        subject: "New Form Submission",
        text: `name: ${body.first} ${body.last},\r message: ${body.message},\r phone: ${body.phone},\r company: ${body.company}, `,
    })
}

export default async function handler(req, res) {
    const body = req.body;

    main(body).then(() => {
        res.status(200).json({title: "Ahhh that's better",  message: "You must be eating a lot of fiber that went nice and smooth. We will reach out with in the next business day.", button: "Wash your hands and go home", code: 200 })
    }).catch(() => {
        res.status(400).json({title: "Grab the plunger",  message: "Thumper dumper alert, looks like the pipes got backed up. Give that another shot.", button: "Retake the browns to the super bowl", code: 400 })
    });

}
const express = require('express');


const { sendMail } = require("./helpers/email")
const app = express()



app.use(express.json());


app.use("/sendmail", async(req, res, next) => {
    const { email } = req.body;
    const config = {
        to: email,
        subject: "Hello",
        html: `<p>This is a mailAPI</p>`
    }
    const t = await sendMail(config);
    console.log(t)
    return res.json({
        msg: "Sent sucessfuly"
    })

})


const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log('Server listening on port:', port);
});
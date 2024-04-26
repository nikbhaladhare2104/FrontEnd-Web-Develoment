import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

const day = new Date("June 24, 2023 11:13:00");
let today = day.getDay();

let type = "a Weekday";
let msg = "It's time to work hard!";

if (today === 0 || today ===1) {
    type = "a Weekend";
    msg = "It's time to have fun!"
}


// app.get("/", (req, res) => {
//     if (today === 0 || today === 1) {
//         res.send(`<h1>Hey! its the Weekend! Its time to have fun!`);
//     } else {
//         res.send(`<h1>Hey! its the Weekday! Its time to work hard!`);
//     }

// })

app.get("/", (req, res) => {
   
    res.render("index.ejs", {
        dayType : type,
        message : msg
    });
});



app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
});





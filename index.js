import express from "express";
import bodyParser from "body-parser";

const app = express();
const port =3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {   

    res.render("index.ejs");
});
app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});
app.get("/about", (req, res) => {
    res.render("about.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/login", (req, res) => {
    res.render("login.ejs");
});
app.get("/signUp", (req, res) => {
    res.render("signUp.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
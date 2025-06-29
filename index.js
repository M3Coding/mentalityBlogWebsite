import express from "express";
import bodyParser from "body-parser";

const app = express();
const port =3000;
let posts = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json()); // Needed to parse JSON in POST body
app.get("/", (req, res) => {   

    res.render("index.ejs");
});
app.get("/blog", (req, res) => {
    
    res.render("blog.ejs", {posts: posts});
});
//need to add the blog title as h2 and name and also the functionality of delete. 
app.post("/submit", (req, res) =>{
    var today = new Date()
    const newPost= {
        id: Date.now(),
        content: req.body.userPost,
        today: today,
        blogTitle: req.body.blogTitle,
        userName:req.body.userName

        };
        posts.push(newPost);
    
    res.redirect("/blog");
})
app.post("/update", (req, res) => {
  const { id, content } = req.body;
  const post = posts.find(p => p.id == id);
  if (post) {
    post.content = content;
  }
  res.sendStatus(200);
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
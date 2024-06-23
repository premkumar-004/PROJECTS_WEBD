const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// default content for home, about and contact pages
const homeStartingContent =
  "This is Blog Website in which you can compose new Blog Posts by writing '/compose' after the current URL and you will see your composed post on the Home Page itself";

const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";

const contactContent =
  "If you want to contact me for any SaaS project, dm me at LinkedIn (lovishbansal00)";

// create express app
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect to mongodb
// mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(
  `mongodb+srv://lovishbansal330:${process.env.password}@cluster0.ycwfqtm.mongodb.net/blogDB`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// create schema
const postSchema = {
  title: String,
  content: String,
};

// create model
const Post = mongoose.model("Post", postSchema);

// home route
app.get("/", async function (req, res) {
  await Post.find({})
    .then((posts) => {
      res.render("home", {
        homeContent: homeStartingContent,
        posts: posts,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// default routes for about and contact pages
app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});
app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});
app.get("/compose", (req, res) => {
  res.render("compose");
});

// post route for compose page
app.post("/compose", (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });
  post
    .save()
    .then(() => {
      console.log("Post saved successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/");
});

// route for dynamic posts
app.get("/posts/:postid", (req, res) => {
  const requestedPostId = req.params.postid;
  Post.findOne({ _id: requestedPostId })
    .then((post) => {
      res.render("post", {
        title: post.title,
        content: post.content,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// listen on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});

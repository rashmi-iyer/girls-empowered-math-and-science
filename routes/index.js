var express = require("express");
var router = express.Router();

//root route
router.get("/", function(req,res){
    res.render("home");
});

//about page
router.get("/about", function(req,res){
    res.render("about");
});

//register page
router.get("/register", function(req,res){
    res.render("register");
});

//contact page
router.get("/contact", function(req,res){
    res.render("contact");
});

//donate page
router.get("/donate", function(req,res){
    res.render("donate");
});

//team page
router.get("/team", function(req,res){
    res.render("team");
});

module.exports = router;
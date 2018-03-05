var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/YelpCamp");
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs')

//Schema - 
var camp_ground_schema = new mongoose.Schema({
  name:String,
  image:String
});
var Campground = mongoose.model("Campground", camp_ground_schema);
//insert into DB - 
// Campground.create(
// 	{ name: "Pokagon State Park", image:"http://www.photosforclass.com/download/pixabay-2788677"},
// 	function(err, camp){
// 		if(err)
// 			console.log(err);
// 		else{
// 			console.log("Campground created");
// 			console.log(camp);
// 		}
// 	}
// 	);

/*
var campground = [
		{ name: "Clifty Falls State Park", image:"http://www.photosforclass.com/download/pixabay-839807"},
		{ name: "Pokagon State Park", image:"http://www.photosforclass.com/download/pixabay-2788677"},
		{ name: "Hardin Ridge Recreation Area", image:"http://www.photosforclass.com/download/pixabay-3111921"},
		{ name: "McCormick's Creek State Park", image:"http://www.photosforclass.com/download/pixabay-2692058"},
		{ name: "Turkey Run State Park", image:"http://www.photosforclass.com/download/pixabay-2513008"},
		{ name: "Clifty Falls State Park", image:"http://www.photosforclass.com/download/pixabay-839807"},
		{ name: "Pokagon State Park", image:"http://www.photosforclass.com/download/pixabay-2788677"},
		{ name: "Hardin Ridge Recreation Area", image:"http://www.photosforclass.com/download/pixabay-3111921"},
		{ name: "McCormick's Creek State Park", image:"http://www.photosforclass.com/download/pixabay-2692058"},
		{ name: "Turkey Run State Park", image:"http://www.photosforclass.com/download/pixabay-2513008"}
];
*/	
app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
	Campground.find({}, function(err, camp){
		if(err)
			console.log(err);
		else{
			res.render("campgrounds", {campground:camp});
			console.log(camp);
		}
	});
});

app.get("/campgrounds/new", function(req, res){
	res.render("new_form");	
});


app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	//save to mongdb
	Campground.create({name:name, image:image}, function(err, camp){
		if(err)
			console.log(err);
		else{
			console.log("New camp created");
			res.redirect("/campgrounds")
		}
	});
	
});




//When running on aws - 
//app.listen(3000, function () {
//  console.log('Yelp Camp app listening on port 3000!')
//});

//When running on cloud 9 - 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Yelp Camp app listening on port'+process.env.PORT);
});




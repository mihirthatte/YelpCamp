var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs')



app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campground = [
		{ name: "Clifty Falls State Park", image:"http://www.photosforclass.com/download/pixabay-839807"},
		{ name: "Pokagon State Park", image:"http://www.photosforclass.com/download/pixabay-2788677"},
		{ name: "Hardin Ridge Recreation Area", image:"http://www.photosforclass.com/download/pixabay-3111921"},
		{ name: "McCormick's Creek State Park", image:"http://www.photosforclass.com/download/pixabay-2692058"},
		{ name: "Turkey Run State Park", image:"http://www.photosforclass.com/download/pixabay-2513008"}
	];
	res.render("campgrounds", {campground:campground});	

});







app.listen(3000, function () {
  console.log('Yelp Camp app listening on port 3000!')
})




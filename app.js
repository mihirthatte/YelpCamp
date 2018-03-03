var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs')


var campground = [
		{ name: "Clifty Falls State Park", image:"http://www.photosforclass.com/download/pixabay-839807"},
		{ name: "Pokagon State Park", image:"http://www.photosforclass.com/download/pixabay-2788677"},
		{ name: "Hardin Ridge Recreation Area", image:"http://www.photosforclass.com/download/pixabay-3111921"},
		{ name: "McCormick's Creek State Park", image:"http://www.photosforclass.com/download/pixabay-2692058"},
		{ name: "Turkey Run State Park", image:"http://www.photosforclass.com/download/pixabay-2513008"}
];
	
app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campground:campground});	

});

app.get("/campgrounds/new", function(req, res){
	res.render("new_form");	
});


app.post("/campgrounds", function(req, res){
	//get data from post request and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	campground.push({name:name, image:image});
	res.redirect("/campgrounds")
});




//When running on aws - 
//app.listen(3000, function () {
//  console.log('Yelp Camp app listening on port 3000!')
//});

//When running on cloud 9 - 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Yelp Camp app listening on port'+process.env.PORT);
});




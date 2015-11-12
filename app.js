//	Andrew Rodrigues
//	11/9/2015
//	Version 3.0
//	jQuery Slideshow
//	Changes background image & preloads

var galleryImages = [
	{image: "url('1.jpg')",title: "Icy Slide Plugin 3.0",color: '#3498db'},
	{image: "url('2.jpg')",title: "Modern Browser Support",color: '#2ecc71'},
	{image: "url('3.jpg')",title: "Easily Editable Clean Code",color: '#9b59b6'},
	{image: "url('4.jpg')",title: "Template & CSS Included",color: '#7f8c8d'},
	{image: "url('5.jpg')",title: "GitHub Repository Included",color: 'orange'},
	{image: "url('6.jpg')",title: "Updated Regularly",color: '#9b59b6'},
	{image: "url('7.jpg')",title: "Unlimited Slide Support",color: '#2ecc71'},
	{image: "url('8.jpg')",title: "Easy Timing Adjustments",color: '#3498db'},
	{image: "url('9.jpg')",title: "User-Friendly Code",color: '#2ecc71'},
	{image: "url('10.jpg')",title: "Too Many Slides!",color: '#e74c3c'},
];

var i = 1;
preload = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

$(document).ready(function() {
	for (var j = 0; j < preload.length; j++) {
		$('#preload').append('<img src="' + preload[j] + '">');
	}
});

var change = function changeImage() {
	if (i >= galleryImages.length) {
		i = 0;
	};
	var nextImage = galleryImages[i].image;
	$('#fullGallery').css('background-image', galleryImages[i].image);
	$('#title').css('color', galleryImages[i].color);
	$('#button').css('background', galleryImages[i].color);
	$('#title').text(galleryImages[i].title);
	i = i + 1;
}

$('#fullGallery').css('background-image', galleryImages[0].image);
$('#title').text(galleryImages[0].title);
$('#title').css('color', galleryImages[0].color);
$('#button').css('background', galleryImages[0].color);

setInterval(change,3000);
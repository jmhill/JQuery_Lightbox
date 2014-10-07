//Problem: User when clicking on image goes to dead end page.
//Solution: Create overlay with larger image.

// create overlay div
var $overlay = $('<div id="overlay"></div>');

// An image to add to overlay
var $image = $("<img>");

//2.2. A caption
var $caption = $("<p></p>");

// Add the image to the overlay div
$overlay.append($image);
// add caption after image
$overlay.append($caption);

// Add an overlay to page
$("body").append($overlay);

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  //stop the normal behavior of going to a new page on link click
  event.preventDefault();
  // store the href of the clicked image as a variable.
  var imageLocation = $(this).attr("href");
  
  //Change the src attribute of div image to grabbed src from clicked image
  $image.attr("src", imageLocation);

  //1.3. Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

  //Show the overlay
  $overlay.show();
});



//3. When overlay is clicked
$overlay.click(function(){
  $overlay.hide();
});
  //3.1. Hide overlay
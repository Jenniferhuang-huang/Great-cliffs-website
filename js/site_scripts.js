var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class = 'partner'>";
var closeList = "</li>";

//Create a loop to create 6 images starting with index of 0
for (var i = 0; i < 6; i++) {
  fileNames.push("partner-pic" + (i + 1));
  photos.push(
    "<img src = 'images/partners/" +
      fileNames[i] +
      ".png' alt = 'partner picture " +
      (i + 1) +
      "'>"
  ); //assemble full image elements
  image = openList + photos[i] + closeList;
  imageList.push(image);
}
//Display all six images from the array in the album
document.getElementById("partners").innerHTML = imageList.join(" ");




/*var rnum = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
var rimg = "dice" + rnum + ".png"; // Creates the image file name (e.g., dice1.png)
var rsrc = "images/" + rimg; // Creates the image source path (e.g., images/dice1.png)

var img1 = document.querySelectorAll("img")[0]; // Selects the first <img> element
img1.setAttribute("src", rsrc); // Sets the 'src' attribute of img1 to the generated image source

var rnum2 = Math.floor(Math.random()*6)+1;
var rimg2 = "images/dice"+rnum2+".png";
var img2= document.querySelectorAll("img")[0];
img2.setAttribute("src",rimg2);
*/

var rnum = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
var rimg = "dice" + rnum + ".png"; // Creates the image file name (e.g., dice1.png)
var rsrc = "images/" + rimg; // Creates the image source path (e.g., images/dice1.png)

var img1 = document.querySelectorAll("img")[0]; // Selects the first <img> element
img1.setAttribute("src", rsrc); // Sets the 'src' attribute of img1 to the generated image source

var rnum2 = Math.floor(Math.random() * 6) + 1;
var rimg2 = "images/dice" + rnum2 + ".png";
var img2 = document.querySelectorAll("img")[1]; // Selects the second <img> element
img2.setAttribute("src", rimg2);

if (rnum === rnum2) {
      document.querySelector("h1").innerHTML = "MATCH DRAW";
} else if (rnum > rnum2) {
      document.querySelector("h1").innerHTML = "Player 1 won 😒";
} else {
     document.querySelector("h1").innerHTML = "Player 2 won 😜";
}

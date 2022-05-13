var skills = ["Design Bussiness", "Design Strategy", "Audience Bussiness"];
var counter = 0;
var repeater;
var previousSkill = document.querySelector(".big-text");
var arraylength = skills.length - 1;
const and_sign = document.querySelector("h4");
const background_image = document.querySelector("#section1");

function display_skills() {
  if (counter === arraylength) {
    counter = 0;
  } else {
    counter++;
  }
  previousSkill.innerHTML = skills[counter];
}

setTimeout(display_skills, 2000);
var myInterval = setInterval(function () {
  display_skills();
}, 2000);

// Functions for & images

function first_image() {
  var image1 =
    "url(https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FsYXh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)";
  background_image.style.backgroundImage = image1;
  background_image.style.backgroundRepeat = "no-repeat";
  background_image.style.backgroundSize = "50% 50%";
  background_image.style.backgroundPosition = "70% 20%";
}

function second_image() {
  var image2 =
    "url(https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsYXh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)";
  background_image.style.backgroundImage = image2;
  background_image.style.backgroundRepeat = "no-repeat";
  background_image.style.backgroundPosition = "80% 100%";
}

function third_image() {
  background_image.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1487424439918-bc6b5bef0380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60), url(https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60) ";
  background_image.style.backgroundRepeat = "no-repeat, no-repeat";
  background_image.style.backgroundPosition = "bottom right,top left";
}

function fourth_image() {
  background_image.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)";
  background_image.style.backgroundRepeat = "no-repeat";
  background_image.style.backgroundSize = "50% 50%";
  background_image.style.backgroundPosition = "center";
}

// function to call different background images

var images = [
  "url(https://images.unsplash.com/photo-1487424439918-bc6b5bef0380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
  "url(https://images.unsplash.com/photo-1581196607303-95c00f31c676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
  "url(https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
];

function image_changer() {
  setTimeout(first_image, 500);
  setTimeout(second_image, 1000);
  setTimeout(third_image, 1500);
  setTimeout(fourth_image, 2000);
}

// and_sign.addEventListener("mouseover", image_changer);

const x = "23";

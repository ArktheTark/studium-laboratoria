let prev_button = document.getElementById("prev-btn");
let next_button = document.getElementById("next-btn");
const imgArray = ["business-cat", "mouth-cat", "cough-cat"];

prev_button.addEventListener("click", function () {
  let active_image = document.querySelector(".active");
  let other_image = document.querySelector(".image:not(.active)");
  //console.log(other_image);
  let current_img_src = active_image.getAttribute("src").slice(7);
  let index = imgArray.indexOf(current_img_src.replace(".png", ""));
  let prev_index;
  switch (index) {
    case 0:
      prev_index = imgArray.length - 1;
      break;
    default:
      prev_index = index - 1;
  }
  other_image.setAttribute("src", `images/${imgArray[prev_index]}.png`);
  active_image.classList.toggle("active");
  setTimeout(function () {
    other_image.classList.toggle("active");
  }, 500);
});

next_button.addEventListener("click", function () {
  let active_image = document.querySelector(".active");
  let other_image = document.querySelector(".image:not(.active)");

  let current_img_src = active_image.getAttribute("src").slice(7);
  let index = imgArray.indexOf(current_img_src.replace(".png", ""));
  let next_index;
  switch (index) {
    case 2:
      next_index = 0;
      break;
    default:
      next_index = index + 1;
  }
  other_image.setAttribute("src", `images/${imgArray[next_index]}.png`);
  active_image.classList.toggle("active");
  setTimeout(function () {
    other_image.classList.toggle("active");
  }, 500);
});

let image = document.getElementById("current-img");
let prev_button = document.getElementById("prev-btn");
let next_button = document.getElementById("next-btn");
const imgArray = ["business-cat", "mouth-cat", "cough-cat"];

prev_button.addEventListener("click", function () {
  let current_img_src = image.getAttribute("src").slice(7);
  let index = imgArray.indexOf(current_img_src.replace(".png", ""));
  //console.log(index);
  let prev_index;
  switch (index) {
    case 0:
      prev_index = imgArray.length - 1;
      break;
    default:
      prev_index = index - 1;
  }
  //console.log(prev_index);
  image.setAttribute("src", `images/${imgArray[prev_index]}.png`);
  //console.log(index);
});

next_button.addEventListener("click", function () {
  let current_img_src = image.getAttribute("src").slice(7);
  let index = imgArray.indexOf(current_img_src.replace(".png", ""));
  let next_index;
  switch (index) {
    case 2:
      next_index = 0;
      break;
    default:
      next_index = index + 1;
  }
  //console.log(next_index);
  image.setAttribute("src", `images/${imgArray[next_index]}.png`);
  //console.log(index);
});

const preview = document.getElementById("preview");
const editor = document.getElementById("editor");

const updatedPreview = function (e) {
  // stops the listener from bubbling up the DOM
  console.log(e.target.value);
  e.stopPropagation();
  console.log("keypress detected");
  console.log(e.target.value);
  preview.innerHTML = `${marked.parse(e.target.value)}`;
};

editor.addEventListener("input", updatedPreview);

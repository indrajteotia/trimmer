const imageInput = document.getElementById("image-input");
const uploadedImage = document.getElementById("uploaded-image");

imageInput.addEventListener("change", function (e) {
  const uploadedFile = e.target.files[0];
  uploadedImage.style.display = "";
  const imageUrl = URL.createObjectURL(uploadedFile);
  uploadedImage.src = imageUrl;
});
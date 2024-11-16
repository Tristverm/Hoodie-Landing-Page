window.onload = function () {
  document.getElementById("our-products").scrollIntoView({
    behavior: "smooth", // Scrolls smoothly to the section
  });
};
const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);
let viewingState = 1;
let newArrivalsBtn = document.getElementById("new-arrivals");
newArrivalsBtn.addEventListener("click", () => {
  viewingState = 1;
  if (viewingState === 1) {
    itemsArray[1].style.display = "none";
    itemsArray[2].style.display = "none";
    itemsArray[3].style.display = "none";
    itemsArray[4].style.display = "block";
    itemsArray[5].style.display = "block";
    itemsArray[6].style.display = "block";
  }
});
let topRatingBtn = document.getElementById("top-rating");
topRatingBtn.addEventListener("click", () => {
  viewingState = 2;
  if (viewingState === 2) {
    itemsArray[1].style.display = "block";
    itemsArray[2].style.display = "block";
    itemsArray[3].style.display = "block";
    itemsArray[4].style.display = "none";
    itemsArray[5].style.display = "none";
    itemsArray[6].style.display = "none";
  }
});
let bestSellerBtn = document.getElementById("best-seller");
bestSellerBtn.addEventListener("click", () => {
  viewingState = 3;
  if (viewingState === 3) {
    itemsArray[1].style.display = "none";
    itemsArray[2].style.display = "none";
    itemsArray[3].style.display = "block";
    itemsArray[4].style.display = "block";
    itemsArray[5].style.display = "none";
    itemsArray[6].style.display = "none";
  }
});


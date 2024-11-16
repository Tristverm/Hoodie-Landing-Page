// window.onload = function () {
//   document.getElementById("our-products").scrollIntoView({
//     behavior: "smooth", // Scrolls smoothly to the section
//   });
// };
const logo = document.getElementById("logo");
const itemsArray = document.getElementsByClassName("item");
for (let i = 0; i < itemsArray.length; i++) {
  itemsArray[i].style.transition = "all 0.9s ease-in-out";
}

console.log(itemsArray);
let viewingState = 1;
let allBtn = document.getElementById("all");
let newArrivalsBtn = document.getElementById("new-arrivals");
let bestSellerBtn = document.getElementById("best-seller");
let topRatingBtn = document.getElementById("top-rating");
logo.addEventListener("click", () => {
  logo.scrollIntoView({ behavior: "smooth" });
});
allBtn.addEventListener("click", () => {
  viewingState = 4;
  newArrivalsBtn.classList.remove("active-AllNewArrival-button");
  all.classList.add("active-AllNewArrival-button");
  bestSellerBtn.classList.remove("active-button");
  topRatingBtn.classList.remove("active-button");
  if (viewingState === 4) {
    itemsArray[1].style.display = "block";
    itemsArray[2].style.display = "block";
    itemsArray[3].style.display = "block";
    itemsArray[4].style.display = "block";
    itemsArray[5].style.display = "block";
  }
});
newArrivalsBtn.addEventListener("click", () => {
  viewingState = 1;
  newArrivalsBtn.classList.add("active-AllNewArrival-button");
  all.classList.remove("active-AllNewArrival-button");
  bestSellerBtn.classList.remove("active-button");
  topRatingBtn.classList.remove("active-button");
  if (viewingState === 1) {
    itemsArray[1].style.display = "none";
    itemsArray[2].style.display = "none";
    itemsArray[3].style.display = "none";
    itemsArray[4].style.display = "block";
    itemsArray[5].style.display = "block";
  }
});

topRatingBtn.addEventListener("click", () => {
  viewingState = 2;
  newArrivalsBtn.classList.remove("active-AllNewArrival-button");
  all.classList.remove("active-AllNewArrival-button");
  bestSellerBtn.classList.remove("active-button");
  topRatingBtn.classList.add("active-button");
  if (viewingState === 2) {
    itemsArray[1].style.display = "block";
    itemsArray[2].style.display = "block";
    itemsArray[3].style.display = "block";
    itemsArray[4].style.display = "none";
    itemsArray[5].style.display = "none";
  }
});

bestSellerBtn.addEventListener("click", () => {
  viewingState = 3;
  newArrivalsBtn.classList.remove("active-AllNewArrival-button");
  all.classList.remove("active-AllNewArrival-button");
  bestSellerBtn.classList.add("active-button");
  topRatingBtn.classList.remove("active-button");
  if (viewingState === 3) {
    itemsArray[1].style.display = "none";
    itemsArray[2].style.display = "none";
    itemsArray[3].style.display = "none";
    itemsArray[4].style.display = "block";
    itemsArray[5].style.display = "block";
  }
});

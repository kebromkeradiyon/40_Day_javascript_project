const reviews = document.querySelectorAll(".review");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === index);
  });
}

prev.addEventListener("click", () => {
  current = (current - 1 + reviews.length) % reviews.length;
  showReview(current);
});

next.addEventListener("click", () => {
  current = (current + 1) % reviews.length;
  showReview(current);
});

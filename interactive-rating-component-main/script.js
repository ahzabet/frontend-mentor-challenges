const card = document.querySelector(".card");
const ratingForm = document.querySelector(".rating");
const rating_feedback = document.querySelector(".rating-feedback");
const submit_pre = document.querySelector(".submit_pre");
const submit = document.querySelector(".submit");
const submit_post = document.querySelector(".submit_post");
let rating;

ratingForm.addEventListener("change", handleRating);

if (!rating) {
  submit.disabled = true;
  submit.style.opacity = 0.5;
}

function handleRating() {
  const form = new FormData(this);
  rating = parseInt(form.get("rating"), 10);
  console.log(rating);

  if (rating) {
    submit.disabled = false;
    submit.style.opacity = 1;
  }
}

submit.addEventListener("click", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  card.style.paddingTop = "2.813rem";
  submit_pre.classList.add("d-none");
  rating_feedback.textContent = "You selected " + rating + " out of 5";
  submit_post.classList.remove("d-none");
}

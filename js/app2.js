const card_1 = document.querySelector(".inner-box_1");
const card_2 = document.querySelector(".inner-box_2");
const card_3 = document.querySelector(".inner-box_3");

card_1.addEventListener("click", () => {
  card_1.classList.toggle('is-flipped');
})
card_2.addEventListener("click", () => {
    card_2.classList.toggle('is-flipped');
  })
  card_3.addEventListener("click", () => {
    card_3.classList.toggle('is-flipped');
  })
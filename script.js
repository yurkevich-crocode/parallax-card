const parallaxCards = document.querySelectorAll(".parallax-card");
parallaxCards.forEach((element) => {
  const front = element.querySelector(".parallax-card__front");
  const back = element.querySelector(".parallax-card__back");
  element.addEventListener("click", () => {
    front.classList.add("parallax-card__rotate");
    back.classList.add("parallax-card__rotate");

    setTimeout(() => {
      front.classList.toggle("parallax-card__hide");
      back.classList.toggle("parallax-card__hide");
      front.classList.remove("parallax-card__rotate");
      back.classList.remove("parallax-card__rotate");
    }, 500);
  });
});

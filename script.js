const parallaxCards = document.querySelectorAll(".parallax-card");

parallaxCards.forEach((element) => {
  let timeSpend;
  const front = element.querySelector(".parallax-card__front");
  const imgF = front.querySelector(".parallax-card__image");
  const back = element.querySelector(".parallax-card__back");
  const imgB = back.querySelector(".parallax-card__image");
  const textF = element.querySelector(".parallax-card__text-front");
  const textB = element.querySelector(".parallax-card__text-back");

  if (front.classList.contains("parallax-card__hide")) {
    textF.style.display = "none";
    textB.style.display = "block";
  } else {
    textF.style.display = "block";
    textB.style.display = "none";
  }

  function move(e) {
    clearTimeout(timeSpend);

    let x = e.layerX;
    let y = e.layerY;
    console.log(x);
    if (element.classList.contains("parallax-card__rotate")) {
      imgB.style.transform = `translate(${((x - 200) / 5) * -1}px,${
        ((y - 175) / 5) * -1
      }px) scale(1.4)`;
      element.style.transform = `rotateY(${(x - 120) / 7}deg) rotateX(${
        180 + ((y - 205) / 7) * -1
      }deg)`;
    } else {
      imgF.style.transform = `translate(${((x - 200) / 5) * -1}px,${
        ((y - 175) / 5) * -1
      }px)  scale(1.4)`;
      element.style.transform = `rotateY(${(x - 120) / 7}deg) rotateX(${
        ((y - 200) / 7) * -1
      }deg)`;
    }
  }

  element.addEventListener("mouseenter", () => {
    element.addEventListener("mousemove", move);
  });

  element.addEventListener("mouseleave", () => {
    timeSpend = setTimeout(() => {
      if (element.classList.contains("parallax-card__rotate")) {
        element.style.transform = `rotateY(0deg) rotateX(180deg)`;
        imgB.style.transform = `translate(0px,0px) scale(1.4)`;
      } else {
        element.style.transform = `rotateY(0deg) rotateX(0deg)`;
        imgF.style.transform = `translate(0px,0px)  scale(1.4) rotateX(0deg)`;
      }
      element.removeEventListener("mousemove", move);
    }, 2000);
  });

  element.addEventListener("click", () => {
    element.classList.toggle("parallax-card__rotate");
    front.classList.toggle("parallax-card__hide");
    back.classList.toggle("parallax-card__hide");
    if (element.classList.contains("parallax-card__rotate")) {
      element.style.transform = `rotateY(0deg) rotateX(180deg)`;
    } else {
      element.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }

    if (front.classList.contains("parallax-card__hide")) {
      textF.style.display = "none";
      textB.style.display = "block";
    } else {
      textF.style.display = "block";
      textB.style.display = "none";
    }
  });
});

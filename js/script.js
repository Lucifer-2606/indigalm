document.addEventListener("DOMContentLoaded", () => {
  // Animated Text Dynamic
  function typeEffect(element, speed) {
    let text = element.textContent.trim();
    element.textContent = "";
    let i = 0;

    let timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  const speed = 50;
  const elements = document.querySelectorAll(".animation-para");

  elements.forEach((el) => {
    el.style.display = "inline-block";
    typeEffect(el, speed);
  });

  // Swiper 1

  const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // Swiper 2
  const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // Swiper 3
  const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // Swiper 4
  const swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // Swiper 5
  const swiper5 = new Swiper(".swiper5", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    freeMode: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });
  // Swiper 6
  const swiper6 = new Swiper(".swiper6", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 30,
        },
      },
      576: {
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0,
        },
      },
    },
  });

  // Wishlist
  const heart = document.querySelectorAll(".fa-heart");
  heart.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("active");
    });
  });
  // Add to cart
  const plusButtons = document.querySelectorAll(".bottomSwiper-right");

  plusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });
});

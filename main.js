import "./style.scss";
import gsap from "gsap";

const duration = 0.75;
const duration2 = 0.3;
const ease = "elastic.out(1, 0.5)";

const items = document.querySelectorAll(".item");
const container = document.querySelector(".container-block");
const details = document.querySelectorAll(".details");

items.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(container, {
      width: function () {
        switch (index) {
          case 0:
            return 500;
          case 1:
            return 460;
          case 2:
            return 480;
        }
      },
      height: function () {
        switch (index) {
          case 0:
            return 222 + 68;
          case 1:
            return 194 + 68;
          case 2:
            return 136 + 68;
        }
      },
      y: 17,
      borderRadius: 24,
      duration: duration,
      ease: ease,
    });
    switch (index) {
      case 0:
        gsap.to(details[0], {
          opacity: 1,
          duration: duration2,
          zIndex: 2,
        });
        gsap.to(details[1], {
          opacity: 0,
          duration: duration2,
          zIndex: 1,
        });
        gsap.to(details[2], {
          opacity: 0,
          duration: duration2,
          zIndex: 1,
        });
        break;
      case 1:
        gsap.to(details[0], {
          opacity: 0,
          duration: duration2,
          zIndex: 1,
        });
        gsap.to(details[1], {
          opacity: 1,
          duration: duration2,
          zIndex: 2,
        });
        gsap.to(details[2], {
          opacity: 0,
          duration: duration2,
          zIndex: 1,
        });
        break;
      case 2:
        gsap.to(details[0], {
          opacity: 0,
          duration: duration2,
          zIndex: 1,
        });
        gsap.to(details[1], {
          opacity: 0,
          duration: duration2,
          zIndex: 1,
        });
        gsap.to(details[2], {
          opacity: 1,
          duration: duration2,
          zIndex: 2,
        });
        break;
    }
  });
  item.addEventListener("mouseleave", () => {
    const isHover0 = details[0].matches(":hover");
    const isHover1 = details[1].matches(":hover");
    const isHover2 = details[2].matches(":hover");
    if (isHover0 || isHover1 || isHover2) return;
    gsap.to(container, {
      width: 410,
      height: 48,
      y: 0,
      borderRadius: 16,
      duration: duration,
      ease: ease,
    });
    gsap.to(details[0], {
      opacity: 0,
      duration: 0,
      zIndex: 1,
    });
    gsap.to(details[1], {
      opacity: 0,
      duration: 0,
      zIndex: 1,
    });
    gsap.to(details[2], {
      opacity: 0,
      duration: 0,
      zIndex: 1,
    });
  });
});

// function scroll() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector("#main").style.transform
//       ? "transform"
//       : "fixed",
//   });
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
// }

// scroll();

function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", (yash) => {
    gsap.to(cursor, {
      x: yash.x,
      y: yash.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect();

function page2Animation() {
  gsap.registerPlugin(ScrollTrigger);
  var upperPart = document.querySelector(".upper-part");
  var lowerPart = document.querySelector(".lower-part");
  gsap.from(upperPart, {
    opacity: 0,
    y: 120,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: upperPart,
      start: "top 40%", // Adjust these values as needed
      end: "top 37%", // Adjust these values as needed
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(lowerPart, {
    opacity: 0,
    stagger: 0.2,
    y: 120,
    duration: 2,
    scrollTrigger: {
      trigger: lowerPart,
      start: "top 40%", // Adjust these values as needed
      end: "top 37%", // Adjust these values as needed
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });
}

page2Animation();

function page4Animation() {
  gsap.registerPlugin(ScrollTrigger);

  var upperPart = document.querySelector("#page4-upper");
  var lowerPart = document.querySelector("#page4-lower-part");

  gsap.from(upperPart, {
    opacity: 0,
    y: 60,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: upperPart,
      start: "top 60%", // Adjust these values as needed
      end: "top 55%", // Adjust these values as needed
      scrub: 5,
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(lowerPart, {
    opacity: 0,
    stagger: 0.2,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: lowerPart,
      start: "top 60%", // Adjust these values as needed
      end: "top 55%", // Adjust these values as needed
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });
}

page4Animation();

function page6Animation() {
  gsap.registerPlugin(ScrollTrigger);

  var upperPart = document.querySelector("#page6-upper");
  var lowerPart = document.querySelector("#page6-lower");

  gsap.from(upperPart, {
    opacity: 0,
    y: 60,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: upperPart,
      start: "top 60%", // Adjust these values as needed
      end: "top 55%", // Adjust these values as needed
      scrub: 5,
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(lowerPart, {
    opacity: 0,
    stagger: 0.2,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: lowerPart,
      start: "top 60%", // Adjust these values as needed
      end: "top 55%", // Adjust these values as needed
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });
}

page6Animation();

function sliderFunc() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  });
}

sliderFunc();

var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader h3", {
  opacity: 0,
  x: -40,
  stagger: 0.1,
});
tl.to("#loader", {
  opacity: 0,
  display: "none",
});
tl.from("#page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  delay: -0.5,
});

let granimInstance = new Granim({
  element: "#granim-canvas",
  name: "granim",
  opacity: [1, 1],
  states: {
    "default-state": {
      gradients: [
        ["#834D9B", "#D04ED6"],
        ["#1CD8D2", "#93EDC7"],
      ],
    },
  },
});

// import Typewriter from "typewriter-effect/dist/core";

// new Typewriter("#typewriter", {
//   strings: ["Hello", "World"],
//   autoStart: true,
// });

// $(document).ready(function () {
//   var scrollLink = $(".scroll");

//   scrollLink.click(function (e) {
//     e.preventDefault();
//     $("body,html").animate(
//       {
//         scrollTop: $(this.hash).offset().top,
//       },
//       1000
//     );
//   });

//   $(window).scroll(function () {
//     var scrollbarLocation = $(this).scrollTop();

//     scrollLink.each(function () {
//       var sectionOffset = $(this.hash).offset().top - 20;

//       if (sectionOffset <= scrollbarLocation) {
//         $(this).parent().addClass("active");
//         $(this).parent().siblings().removeClass("active");
//       }
//     });
//   });
// });

// $(function () {
//   var navbar = $(".navbar");

//   $(window).scroll(function () {
//     if ($(window).scrollTop() <= 40) {
//       navbar.removeClass("navbar-scroll");
//     } else {
//       navbar.addClass("navbar-scroll");
//     }
//   });
// });

// background en dégradé de couleurs //

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

// Affichage de la navbar complète dès que l'on dépasse 100px au scroll et dispartion dès que l'on remonte sur le site
let navbarElement = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbarElement.classList.add("fixed-top", "fixed");
  } else {
    navbarElement.classList.remove("fixed-top", "fixed");
  }
});

//Ajoute un padding top pour toutes les sections, en faisant un calcul injecté dans la propriét padding top
//le calcul comprend la récupération de la hauteur du menu, auquel on ajoute 30px pour épurer lors du clic sur le menu
$("section").css("paddingTop", parseFloat($("#menu").css("height")) + 30);

//On ajuste la taille du dégradé, pour qu'il soit égal à la hauteur total du body, après les modifications faîtes
// précédemment sur la hauteur des sections.
$("#granim-canvas").height($("body").height());

$("#menu")
  .find("a")
  .on("click", function () {
    // $("section").css("paddingTop", parseFloat($("#menu").css("height")) + 30);
    $("#granim-canvas").height($("body").height());
  });

$(window).resize(function () {
  $("#granim-canvas").height($("body").height());
});

//effet typewriter//
var typewriter = document.getElementById("typewriter");
new Typewriter(typewriter, {
  strings: ["Carine Mercier"],
  autoStart: true,
  loop: true,
});

var div_1 = document.querySelector(".chapter-1");
var div_2 = document.querySelector(".chapter-2");
var div_3 = document.querySelector(".chapter-3");
var divs = [div_1, div_2, div_3];
var elem = document.querySelector("#section-1");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

moveSlider();
function moveSlider() {
  var i = 0;
  elem = divs[i].innerHTML;

  next.addEventListener("click", function() {
    i++;
    if (i == divs.length) {
      i = 0;
    }
    elem = divs[i].innerHTML;
  });
}
//------------------------------------------------
// var texts = ["text 1", "text 2", "text 3"];
// var elem = document.querySelector("#elem");
// var prev = document.querySelector("#prev");
// var next = document.querySelector("#next");

// slide();

// function slide() {
//   var i = 0;
//   elem.innerHTML = texts[0];

//   next.addEventListener("click", function() {
//     i++;
//     if (i == texts.length) {
//       i = 0;
//     }
//     elem.innerHTML = texts[i];
//   });

//   prev.addEventListener("click", function() {
//     i--;
//     if (i == -1) {
//       i = texts.length - 1;
//     }
//     elem.innerHTML = texts[i];
//   });
// }
// ---------------------------------------------------
//    TIMER   //

// var i = 1;
// elem.innerHTML = texts[0];
// window.setInterval(function() {
//   elem.innerHTML = texts[i];
//   i++;

//   if (i == texts.length) {
//     i = 0;
//   }
// }, 1000);

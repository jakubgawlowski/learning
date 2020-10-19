"use strict";

licznik = 0;

function wykonaj(dzialanie) {
  var el = document.getElementById("licznik");

  if (dzialanie === 'odejmij') {
    licznik--;
  } else if (dzialanie === 'reset') {
    licznik = 0;
  } else if (dzialanie === 'dodaj') {
    licznik++;
  } else {
    console.log("Wystąpił błąd");
  }

  el.innerHTML = licznik;

  if (licznik < 0) {
    el.style.color = "red";
  } else if (licznik == 0) {
    el.style.color = "black";
  } else if (licznik > 0) {
    el.style.color = "green";
  } else {
    console.log("Wystąpił błąd");
  }
}
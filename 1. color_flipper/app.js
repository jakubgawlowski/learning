function getColourCode(){
  var wartosc = Math.floor(Math.random() * 0xfffff * 1000000).toString(16);
  wartosc = wartosc.slice(0, 6);
  console.log(wartosc);

  changeBackgroundColour(wartosc);
}

function changeBackgroundColour(wartosc){
  document.body.style.backgroundColor = (`#${wartosc}`);
  document.getElementById("colour").innerHTML = `#${wartosc}`;
}

// TODO: Stopka i nagłówek mają pasujący, ciemniejszy odcień
// TODO: Tekst zmienia kolor w zależności od jasności tła
// const printBtn = document.getElementById('print_btn');
function printBtnActive(){
  logicTest = confirm("Você deseja imprimir seu trabalho?");
  if (logicTest == true){
      print();            
  } else {
      alert('A, ok tudo bem, até mais!')
  }
}
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >0)
})
function previewFile() {
  const preview = document.querySelector('#employeer_photo');
  const file = document.querySelector('#chose_photo').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
// carregar o arquivo de imagem
function logoFile() {
  const preview = document.querySelector('#brand_logo');
  const file = document.querySelector('#chose_logo').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
// Barcode Generator
function codeBarGen() {
let codebar = document.querySelector("#codebar-input-number");
codebar = codebar.value;

JsBarcode("#code128", codebar, {
  fontSize: 0,
  lineColor: "black",
});
}
JsBarcode();

// card flip
var cards = document.querySelector('.card'); // Pegar todas ocorrências
cards.forEach((card) => { // Iterar sobre elas adicionando o listener
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
})

// caixa de ajuda
function Mudarestado(help_me) {
  var visibility = document.querySelector('.help_me').style.visibility;
  if(visibility == "visible")
      document.querySelector('.help_me').style.visibility = 'hidden';
  else
      document.querySelector('.help_me').style.visibility = 'visible';
}

function Menu_side() {
  var right = document.querySelector('.menu_side_options').style.right;
  if(right == "0px")
      document.querySelector('.menu_side_options').style.right = '-80px';
  else
      document.querySelector('.menu_side_options').style.right = '0';
}


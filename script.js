
// const printBtn = document.getElementById('print');
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
    const preview = document.querySelector('#employeeimage');
    const file = document.querySelector('#employeerInput').files[0];
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
    const preview = document.querySelector('#logo');
    const file = document.querySelector('#logoInput').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}



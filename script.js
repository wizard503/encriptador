var texto = document.querySelector("textarea");
var encriptar = document.querySelector(".encriptar");
var desencriptar = document.querySelector(".desencriptar");
var copiar = document.querySelector(".copiar");
var output = document.querySelector(".output");
var pantalla = (document.querySelector(".pantalla").style.display = "none");

texto.value = "";
texto.focus();

function btnEncriptar() {
	var palabras = encript(texto.value);
	output.value = palabras;

	if (palabras != "") {
		var palabras = encript(texto.value);
		output.value = palabras;

		var cuadro = (document.querySelector(".msj").style.display = "none");
		pantalla = document.querySelector(".pantalla").style.display = "";
		texto.value = "";
	} else {
		var cuadro = (document.querySelector(".msj").style.display = "");
		pantalla = document.querySelector(".pantalla").style.display ="none";		
		Swal.fire({
			icon: "error",
			iconColor: "#9e039c",
			background: "#E3E0DE",
			title: "Oops...",
			confirmButtonColor: "#9e039c",
			text: "El campo de texto está vacio, escriba el texto que desea encriptar",
		});
	}
}
function btnDesencriptar() {
	var palabras = desencript(texto.value);
	output.value = palabras;

	if (palabras != "") {
		var palabras = desencript(texto.value);
		output.value = palabras;

		var cuadro = (document.querySelector(".msj").style.display = "none");
		pantalla = document.querySelector(".pantalla").style.display = "";
		texto.value = "";
	} else {
		var cuadro = (document.querySelector(".msj").style.display = "");
		pantalla = document.querySelector(".pantalla").style.display ="none";
		Swal.fire({
			icon: "error",
			iconColor: "#9e039c",
			background: "#E3E0DE",
			title: "Oops...",
			confirmButtonColor: "#9e039c",
			text: "El campo de texto está vacio, escriba el texto que desea encriptar",
		});
	}
}
function encript(palabras) {
	var frase = palabras.toLowerCase();
	var encriptada = "";
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (frase.includes(matrizCodigo[i][0])) {
			frase = frase.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return frase;
	// if(palabras!=""){
	// 	for(var i=0;i<frase.length;i++){
	// 		if(frase[i]=="a"){
	// 			encriptada+="ai";
	// 		}else if(frase[i]=="e"){
	// 			encriptada+="enter";
	// 		}else if(frase[i]=="i"){
	// 			encriptada+="imes";
	// 		}else if(frase[i]=="o"){
	// 			encriptada+="ober";
	// 		}else if(frase[i]=="u"){
	// 			encriptada+="ufat";
	// 		}else{
	// 			encriptada+=frase[i];
	// 		}
	// 	}
	// 	var cuadro=document.querySelector(".msj").style.display="none";
	// 	pantalla=document.querySelector(".pantalla").style.display='';

	// 	output.value=encriptada
	// }else{

	// }
}
function desencript(palabras) {
	var frase = palabras.toLowerCase();
	var mapLetters = {
		ai: "a",
		enter: "e",
		imes: "i",
		ober: "o",
		ufat: "u",
	};
	var desencriptada = frase.replace(
		/ai|enter|imes|ober|ufat/gi,
		function (matched) {
			return mapLetters[matched];
		}
	);
	return desencriptada;
}

function copi() {
	output.select();
	navigator.clipboard.writeText(output.value);
	Swal.fire({
		icon: "success",
		iconColor: "#9e039c",
		background: "#E3E0DE",
		title: "¡Bien!",
		confirmButtonColor: "#9e039c",
		text: "Texto copiado correctamente",
	});
	//document.execCommand('copy');
}

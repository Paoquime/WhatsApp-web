window.addEventListener("load", function(){

	var msjInput = document.getElementById("mensajes");
	var boxChat = document.getElementById("chat");
	var perfil = document.getElementsByClassName("avatar");
	var imgPerfil = document.getElementById("img");
	var namePerfil = document.getElementById("nameP")
	var laboratoria = document.getElementById("uLabo");
	var raymi = document.getElementById("uRaymi");
	var mariana = document.getElementById("uMariana");
	var chama = document.getElementById("uAna");
	var chamo = document.getElementById("uRodulfo");
	var andrea = document.getElementById("uAndrea");
	var papu = document.getElementById("uPapu");
	var katy = document.getElementById("uKaty");
	var aldo = document.getElementById("uAldo");
	var curricula = document.getElementById("uLaboCurri");
	var jose = document.getElementById("uJose");

	var contactos = [laboratoria, raymi, mariana, chama, chamo, andrea, papu, katy, aldo, curricula, jose];

	for(elemento of contactos){
	  	elemento.addEventListener("click", cambiarUsuario);
	}

	msjInput.addEventListener("keyup", function(e){
		var tecla = e.keyCode;
		if (tecla == 13) {
			agregarMsj();
		}
	});

	function agregarMsj() {
		var contentBur = document.createElement("div");
		contentBur.classList.add("w-message", "w-message-out");
		boxChat.appendChild(contentBur);

		var burbuja = document.createElement("div");
		burbuja.classList.add("w-message-text");
		contentBur.appendChild(burbuja);

		var texto = document.createElement("p");
		texto.innerText = msjInput.value;
		burbuja.insertBefore(texto, burbuja.children[0]);

		var fecha = new Date();
	    var hora = fecha.getHours();
	    var min = fecha.getMinutes();
	    var almacenaHora = document.createElement("div");
	    almacenaHora.classList.add("time");
	    almacenaHora.innerText = hora + ":" + min;
	    burbuja.insertBefore(almacenaHora, burbuja.children[1]);

	}

	function cambiarUsuario(){
		imgPerfil.src = this.childNodes[1].src;
		namePerfil.textContent = this.childNodes[3].textContent;
	}
	
});

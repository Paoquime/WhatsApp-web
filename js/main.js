window.addEventListener("load", function(){

	var msjInput = document.getElementById("mensajes");
	var boxChat = document.getElementById("chat");
	var header = document.getElementById("header");
	var parentText = document.getElementsByClassName(".w-message-text")[0];
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
	 	elemento.addEventListener("click", vaciarChat);
	}

	mensajes.addEventListener("keyup", function(e){
		var tecla = e.keyCode;
		agregarMsj(tecla);
	});

	function agregarMsj(tecla) {
		var burbuja = document.createElement("div");
		burbuja.setAttribute("id", "bubbleGreen");
		boxChat.appendChild(burbuja);

		if (tecla == 13) {
			burbuja.innerText = msjInput.value;
		}

		var fecha = new Date();
	    var hora = fecha.getHours();
	    var min = fecha.getMinutes();
	    var almacenaHora = document.createElement("div");
	    almacenaHora.classList.add("hora");
	    almacenaHora.innerText = hora + ":" + min;
	    almacenaHora.appendChild(burbuja);
	}

	function cambiarUsuario(){
		header.innerHTML = contactos.value;
	}

	function vaciarChat(){
		boxChat.remove();
	}

});

var indice = 0;
var profesores = {
	nombres: ["Juan Antonio Alanís Rodríguez", 
	"Guillermina Jauregui Arroyo",
	"Isabel Cristina Elizondo Ordóñez",
	"Raúl Flores Herrera",
	"Delia Aurora Galván Sánchez",
	"Adriana del Carmen Cantú Quintanilla",
	"Olegario Pérez González",
	"Dora Elia Cienfuegos Zurita",
	"Oscar Villareal Reyes",
	"Claudio Alberto Patin Torres",
	"María Dhelma Rendón Saldívar",
	"Elvira Guadalupe Rincón Flores",
	"Silvia González Durán",
	"Raul Gerardo Salinas Gonzalez",
	"Francisco Javier Morales Cirio",
	"Andrés Guerrero Elizondo",
	"María Guadalupe Tobías Lara"
	],
	nocalificaciones: [49,40,56,57,116,56,78,59,35,4,70,11,44,11,2,57,29],
	facilidad: [6.9,7.8,5.5,5.4,8.3,5.7,4.9,5.8,3.8,10.0,6.5,6.3,7.4,6.8,6.0,7.2,6.6],
	ayuda: [6.2,6.2,5.5,6.0,9.4,5.2,4.4,7.3,8.7,8.5,7.3,5.1,7.6,5.7,8.5,8.0,6.9],
	claridad: [6.0,6.5,6.2,5.9,9.6,4.8,5.1,7.2,8.5,8.5,8.0,6.3,7.8,6.4,5.0,7.9,4.9]
};




function mejorProfe(){
	var primeraCualidad = null;
	var segundaCualidad = null;
	var terceraraCualidad = null;
	var elementos = document.getElementsByClassName("primera-cualidad");
	for(var i = 1; i < elementos.length; i++){
      if(elementos[i].checked){
           primeraCualidad = elementos[i].value;
           i = elementos.length;
      }
	}
	elementos = document.getElementsByClassName("segunda-cualidad");
	for(var i = 1; i < elementos.length; i++){
      if(elementos[i].checked){
           segundaCualidad = elementos[i].value;
           i = elementos.length;
      }
	}
	elementos = document.getElementsByClassName("tecera-cualidad");
	for(var i = 1; i < elementos.length; i++){
      if(elementos[i].checked){
           terceraCualidad = elementos[i].value;
           i = elementos.length;
      }
	}
	/*
		3 = Facilidad
		2 = Ayuda
		1 = Claridad
	*/
	var ranking = 0;
	//var element = document.getElementById("result").value;
	//element.innerHTML = "New Header";
	//var indice = 
	document.getElementById("result").innerHTML = primeraCualidad;
};


/*Evitar dos opciones iguales*/
function ningunaSelec(nombre){

};


function revisarUno1(){
	if(document.getElementById("primera_opcion1").checked){
		//Quitar seleccion de otras filas
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		//Quitar seleccion de otras columnas
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("primera_opcion3").checked = false;
	}

	if(document.getElementById("primera_opcion2").checked){
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("primera_opcion3").checked = false;
	}


	if(document.getElementById("primera_opcion3").checked){
		document.getElementById("segunda_opcion3").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("primera_opcion1").checked = false;
	}

};


function revisarUno2(){
	if(document.getElementById("segunda_opcion1").checked){
		//Quitar seleccion de otras filas
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		//Quitar seleccion de otras columnas
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
	}

	if(document.getElementById("segunda_opcion2").checked){
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("tercera_opcion2").checked = false;	
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
	}

	
	if(document.getElementById("segunda_opcion3").checked){
		document.getElementById("primera_opcion3").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("segunda_opcion1").checked = false;
	}

};

function revisarUno3(){
	if(document.getElementById("tercera_opcion1").checked){
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
	}

	
	if(document.getElementById("tercera_opcion2").checked){
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
	}

	
	if(document.getElementById("tercera_opcion3").checked){
		document.getElementById("primera_opcion3").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
	}

};


function revisarDos1(){
	if(document.getElementById("primera_opcion2").checked){
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("primera_opcion3").checked = false;
	}

	if(document.getElementById("primera_opcion1").checked){
		//Quitar seleccion de otras filas
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		//Quitar seleccion de otras columnas
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("primera_opcion3").checked = false;
	}

	if(document.getElementById("primera_opcion3").checked){
		document.getElementById("segunda_opcion3").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("primera_opcion1").checked = false;
	}

};


function revisarDos2(){
	if(document.getElementById("segunda_opcion2").checked){
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("tercera_opcion2").checked = false;	
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
	}

	if(document.getElementById("segunda_opcion1").checked){
		//Quitar seleccion de otras filas
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		//Quitar seleccion de otras columnas
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
	}
	
	if(document.getElementById("segunda_opcion3").checked){
		document.getElementById("primera_opcion3").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("segunda_opcion1").checked = false;
	}
};

function revisarDos3(){
	if(document.getElementById("tercera_opcion2").checked){
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
	}

	if(document.getElementById("tercera_opcion1").checked){
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
	}
	
	if(document.getElementById("tercera_opcion3").checked){
		document.getElementById("primera_opcion3").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
	}

};


function revisarTres1(){
	if(document.getElementById("primera_opcion3").checked){
		document.getElementById("segunda_opcion3").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("primera_opcion1").checked = false;
	}

	if(document.getElementById("primera_opcion2").checked){
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("primera_opcion3").checked = false;
	}

	if(document.getElementById("primera_opcion1").checked){
		//Quitar seleccion de otras filas
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		//Quitar seleccion de otras columnas
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("primera_opcion3").checked = false;
	}
};



function revisarTres2(){
	if(document.getElementById("segunda_opcion3").checked){
		document.getElementById("primera_opcion3").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("segunda_opcion1").checked = false;
	}

	if(document.getElementById("segunda_opcion2").checked){
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("tercera_opcion2").checked = false;	
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
	}

	if(document.getElementById("segunda_opcion1").checked){
		//Quitar seleccion de otras filas
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		//Quitar seleccion de otras columnas
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
	}
};

function revisarTres3(){
	if(document.getElementById("tercera_opcion3").checked){
		document.getElementById("primera_opcion3").checked = false;
		document.getElementById("segunda_opcion3").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
	}

	if(document.getElementById("tercera_opcion2").checked){
		document.getElementById("primera_opcion2").checked = false;
		document.getElementById("segunda_opcion2").checked = false;
		document.getElementById("tercera_opcion1").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
	}

	if(document.getElementById("tercera_opcion1").checked){
		document.getElementById("primera_opcion1").checked = false;
		document.getElementById("segunda_opcion1").checked = false;
		document.getElementById("tercera_opcion2").checked = false;
		document.getElementById("tercera_opcion3").checked = false;
	}
};
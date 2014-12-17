var indice = 0;
var profesores = {
	nombres: [
	"Juan Antonio Alanís Rodríguez", 
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
	numcalificaciones: [49,40,56,57,116,56,78,59,35,4,70,11,44,11,2,57,29],
	facilidad: [6.9,7.8,5.5,5.4,8.3,5.7,4.9,5.8,3.8,10.0,6.5,6.3,7.4,6.8,6.0,7.2,6.6],
	ayuda: [6.2,6.2,5.5,6.0,9.4,5.2,4.4,7.3,8.7,8.5,7.3,5.1,7.6,5.7,8.5,8.0,6.9],
	claridad: [6.0,6.5,6.2,5.9,9.6,4.8,5.1,7.2,8.5,8.5,8.0,6.3,7.8,6.4,5.0,7.9,4.9],
	//Inicializar el ranking con valores cualquiera (Los de claridad)
	ranking:[6.0,6.5,6.2,5.9,9.6,4.8,5.1,7.2,8.5,8.5,8.0,6.3,7.8,6.4,5.0,7.9,4.9],
	prioridad1: 1,
	prioridad2: 1,
	prioridad3: 1,
	calcularRanking : function() {
		console.log("Sin ordenar: ");
		for(var contador = 0; contador < this.nombres.length; contador++){
			this.ranking[contador] = (this.facilidad[contador]*this.prioridad1) + (this.ayuda[contador]*this.prioridad2) + (this.claridad[contador]*this.prioridad3);
			console.log(this.ranking[contador]);
		}
    },
    ordenarRanking : function() {
    	//Lo se, es bubble sort :/ pero son sólo 17! YOLO
    	var intercambiados;
    	do {
        	intercambiados = false;
        	for (var i = 0; i < this.ranking.length-1; i++) {
            	if (this.ranking[i] > this.ranking[i+1]) {
                	var temp1 = this.ranking[i];
                	var temp2 = this.nombres[i];
                	var temp3 = this.numcalificaciones[i];
                	var temp4 = this.facilidad[i];
                	var temp5 = this.ayuda[i];
                	var temp6 = this.claridad[i];
                	this.ranking[i] = this.ranking[i+1];
                	this.nombres[i] = this.nombres[i+1];
                	this.numcalificaciones[i] = this.numcalificaciones[i+1];
                	this.facilidad[i] = this.facilidad[i+1];
                	this.ayuda[i] = this.ayuda[i+1];
                	this.claridad[i] = this.claridad[i+1];
                	this.ranking[i+1] = temp1;
                	this.nombres[i+1] = temp2;
                	this.numcalificaciones[i+1] = temp3;
                	this.facilidad[i+1] = temp4;
                	this.ayuda[i+1] = temp5;
                	this.claridad[i+1] = temp6;
                	this.intercambiados = true;
            	}
        	}
    	} while (intercambiados);
    	console.log("ordenados: ");    
		for(var contador = 0; contador < this.nombres.length; contador++){
			console.log(this.ranking[contador]);
		}
    }
};




function mejorProfe(){
	var primeraCualidad = 0;
	var segundaCualidad = 0;
	var terceraCualidad = 0;
	//Recoger los valores de las opciones seleccionadas
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
	primeraCualidad++;
	segundaCualidad++;
	terceraCualidad++;
	var ofacilidad = 1;
	var oayuda = 1;
	var oclaridad = 1;
	/*
		Codigos de los valores regresados por los checkboxes
		4 = Facilidad
		3 = Ayuda
		2 = Claridad
		1 = Sin preferencia
	*/
	if(primeraCualidad == 4){
		ofacilidad = 4;
		if(segundaCualidad == 3){
			oayuda = 3;
			if(terceraCualidad == 2){
				oclaridad == 2;
			}
		}
		else if(segundaCualidad == 2){
			oclaridad = 3;
			if(terceraCualidad == 3){
				oayuda == 2;
			}
		}
	}
	else if(primeraCualidad == 3){
		var oayuda = 4;
		if(segundaCualidad == 4){
			ofacilidad = 3;
			if(terceraCualidad == 2){
				oclaridad == 2;
			}
		}
		else if(segundaCualidad == 2){
			oclaridad = 3;
			if(terceraCualidad == 4){
				ofacilidad == 2;
			}
		}
	}
	else if(primeraCualidad == 2){
		var oclaridad = 4;
		if(segundaCualidad == 3){
			oayuda = 3;
			if(terceraCualidad == 4){
				ofacilidad == 2;
			}
		}
		else if(segundaCualidad == 4){
			ofacilidad = 3;
			if(terceraCualidad == 3){
				oayuda == 2;
			}
		}
	}
	//Inicializar objeto
	profesores.prioridad1 = ofacilidad;
	profesores.prioridad2 = oayuda;
	profesores.prioridad3 = oclaridad;
	profesores.calcularRanking();
	profesores.ordenarRanking();
	//var element = document.getElementById("result").value;
	//element.innerHTML = "New Header";
	document.getElementById("rnombre").innerHTML = profesores.nombres[0];
	document.getElementById("rfacilidad").innerHTML = profesores.facilidad[0];
	document.getElementById("rayuda").innerHTML = profesores.ayuda[0];
	document.getElementById("rclaridad").innerHTML = profesores.claridad[0];
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
var tiempoDecrecer = 100; //tiempo que pasa en milisegundos para que decrezaca
var tamaDecrecer = 2; //px que pierde cada vez (mínimo 2)
var s_ob13 = document.getElementById("ob13"); //la diana
var sonidoAcierto = document.getElementById("soniacierto"); //presentar los sonidos
var sonidoFallo = document.getElementById("sonifallo");
var puntuacion3 = 0;
var fallo3 = 0;
var porcentajeAciertosFallos3 = 0;
var rachaAciertos3 = 0;
var campo3 = document.getElementById("objetivos3");
var dianasSalaPequeño = 0;
var arraySalaPequeña = [];
var repeticionDecrecer;
var mejorRachaPuntos = 0;
var dianasDesparecidas = 0;
var repeticionDecrecer; //setInterval(decreciendo , tiempoDecrecer)

var anchuraAnterior = campo3.offsetWidth;
var alturaAnterior = campo3.offsetHeight;
var trampasHechas = 0;
var volumenGeneral;
var sonidoVolumen = document.getElementById("soniambiente"); //cambiar
var tamañoDianaGlobal = 60;
var aux_tamañoDianaGlobal = tamañoDianaGlobal;
var colorFondo;
var colorDiana = "#D11C19";
estadoMouse = Boolean; //false => no está encmia de objetivos3 / true => está encmia de objetivos3

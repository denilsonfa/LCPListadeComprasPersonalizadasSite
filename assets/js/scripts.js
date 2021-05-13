/*
=============================================================

LCP (LISTA DE COMPRAS PERSONALIZADAS): 
Aplicação Android para Auxílio na Criação de uma Lista de Compras 

Feito por: 
Denilson Fabiano de Araujo 
Izabela Aquino de Oliveira
Weslei Giovani Evaristo da Silva

=============================================================
*/

/* --- BARRA FIXA --- */

window.onscroll = function() {scrollFunction()};
	
function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById("fixbar").style.position = "fixed";
		document.getElementById("fixbar").style.width = "100%";
		document.getElementById("fixbar").style.top = "0";
		document.getElementById("fixbar").style.background = "#000f";
	} else {
		document.getElementById("fixbar").style.position = "relative";
		document.getElementById("fixbar").style.width = "inherit";
		document.getElementById("fixbar").style.top = "0";
		document.getElementById("fixbar").style.background = "#0000";
	}
}
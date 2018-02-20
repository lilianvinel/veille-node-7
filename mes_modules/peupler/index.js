"use strict";

let max = 5;

let tableauPrenom = [
	"Francis",
	"Thomas",
	"Angel",
	"Alison",
	"Pierre"
];

let tableauNom = [
	"Laporte",
	"Tucci",
	"Bryan",
	"Smith",
	"Picola"
];

let tableauNum = [
	"514-514-5151",
	"514-123-4568",
	"438-222-2222",
	"438-999-9999",
	"350-111-1111"
];

let tableauCourriel = [
	"514-514-5151",
	"514-123-4568",
	"438-222-2222",
	"438-999-9999",
	"350-111-1111"
];

const peupler_json = () => {

	let position = Math.floor(Math.random()*max)

	for (let k=0 ; k<5; k++){
		position = Math.floor(Math.random()*max)
		
	}

	return('{"nom":' +'"'+tableauNom[position]+'"'+',"prenom":'+'"'+tableauPrenom[position]+'"'+',"telephone":' +'"'+ tableauNum[position] +'"'+',"courriel":' +'"'+ tableauCourriel[position]+'"'+'}');
}

module.exports = peupler_json
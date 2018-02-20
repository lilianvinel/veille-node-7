"use strict";
const tableau = require('./tableau.js');

const max = tableau.length;

console.log('max = ' + max)

const peupler_json = () => {

	let position = Math.floor(Math.random()*max)
	let tabVille = []

	for (let k=0 ; k<10; k++){
		position = Math.floor(Math.random()*max)
		tabVille.push(tableau[position])
	}

	return(tabVille);
}

module.exports = peupler_json
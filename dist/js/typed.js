const TypeWriter = function(txtElement, words, wait = 3000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
	// // console.log('Hello World');
	// current index of word
	const current = this.wordIndex % this.words.length;
	// Get full text of Current word
	const fullTxt = this.words[current];

	// //console.log(fullTxt);

	// Check if deleting
	if (this.isDeleting) {
		// Remove a Char
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		// Add Char
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	// Insert txt into element
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

	// Initial Type Speed
	let typeSpeed = 170;

	if (this.isDeleting) {
		typeSpeed /= 3;
	}

	// if word is complete
	if (!this.isDeleting && this.txt === fullTxt) {
		// Make a pause at the end
		typeSpeed = this.wait;
		// set delete to true
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		// move to the next word
		this.wordIndex++;

		// pause before start typring
		typeSpeed = 500;
	}

	setTimeout(() => this.type(), typeSpeed);
};

// Init on Dom Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');

	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}

/********************************************** 
## Scroll Magic
***********************************************/

// Init ScrollMagic
var controller = new ScrollMagic.Controller();
// About Section
var ourScene = new ScrollMagic.Scene({
	triggerElement: '#about',
	triggerHook: 0.81,
})
	.setClassToggle('#about', 'fade-in')
	.addTo(controller);

// Services Section
var ourScene = new ScrollMagic.Scene({
	triggerElement: '.services',
	triggerHook: 0.81,
})
	.setClassToggle('.services', 'fade-in')
	.addTo(controller);

// portfolio Section
var ourScene = new ScrollMagic.Scene({
	triggerElement: '.portfolio',
	triggerHook: 0.81,
})
	.setClassToggle('.portfolio', 'fade-in')
	.addTo(controller);

// Testimonial Section
var ourScene = new ScrollMagic.Scene({
	triggerElement: '.testimonials',
	triggerHook: 0.81,
})
	.setClassToggle('.testimonials', 'fade-in')
	.addTo(controller);

// Contact Section
var ourScene = new ScrollMagic.Scene({
	triggerElement: '.contact',
	triggerHook: 0.81,
})
	.setClassToggle('.contact', 'fade-in')
	.addTo(controller);

// skill bar
var skillBarScene = new ScrollMagic.Scene({
	triggerElement: '.skill-container',
	triggerHook: 0.81,
})
	.setClassToggle('.skill-container', 'load-right')
	.addTo(controller);

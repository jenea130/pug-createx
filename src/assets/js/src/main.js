import headerScroll from "./modules/scroll/headerScroll";
import studiesClass from "./modules/studies/studiesClass";

window.addEventListener("DOMContentLoaded", function () {

	const studies = document.querySelector('.studies');
	if (studies) {
		studiesClass();
	}

	headerScroll();
});

import animationTitle from "./modules/animation";
import studiesClass from "./modules/studies/studiesClass";

window.addEventListener("DOMContentLoaded", function () {
	console.log("some thing for me");

	const studies = document.querySelector('.studies');
	console.log(studies, "studies");
	if (studies) {
		studiesClass();
	}
	// animationTitle();
});

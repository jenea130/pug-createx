import caseStudiesFilter from "./modules/filter/caseStudiesFilter";
import headerScroll from "./modules/scroll/headerScroll";
import studiesClass from "./modules/studies/studiesClass";

window.addEventListener("DOMContentLoaded", function () {

	const studies = document.querySelector('.studies');
    const filter_btn = document.querySelector('.filter__btn');
	if (studies) {
		studiesClass();
	}
	if (filter_btn) {
		caseStudiesFilter();
	}

	headerScroll();
});

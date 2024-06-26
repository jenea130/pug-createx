import caseStudiesFilter from "./modules/filter/caseStudiesFilter";
import headerScroll from "./modules/scroll/headerScroll";
import studiesClass from "./modules/studies/studiesClass";
import videoPlay from "./modules/video/videoPlay";
import toggleMenu from "./modules/header/toggleMenu";
import scrollToHeader from "./modules/scroll/scrollToHeader";

window.addEventListener("DOMContentLoaded", function () {
	const studies = document.querySelector('.studies');
    const filter_btn = document.querySelector('.filter__btn');
    const video = document.querySelector('.video');
	if (studies) {
		studiesClass();
	}
	if (filter_btn) {
		caseStudiesFilter();
	}
	if (video) {
		videoPlay();
	}

	headerScroll();
	toggleMenu();
	scrollToHeader();
});
export default function studiesClass() {
	const studies = document.querySelector('.studies');

    const path = window.location.pathname;
    // console.log(path);
    if (path === "/our-services.html") {
        studies.classList.add('studies--services');
    }

}
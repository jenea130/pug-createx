export default function headerScroll() {
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            if (!header.classList.contains("fixed")) {
                header.classList.add("fixed");
            }
        } else {
            if (header.classList.contains("fixed")) {
                header.classList.remove("fixed");
            }
        }
    });
}
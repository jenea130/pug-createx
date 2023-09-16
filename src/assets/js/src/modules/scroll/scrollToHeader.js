export default function scrollToHeader(){
    const footer_bottom__navigation = document.querySelector('.footer-bottom__navigation');
    footer_bottom__navigation.addEventListener('click', function(e){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
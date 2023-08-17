export default function videoPlay() {
    const video = document.querySelector('.video');
    const video_play = document.querySelector('.video__play');

    video_play.addEventListener('click', function() {
        video.classList.add('active');
    })
}
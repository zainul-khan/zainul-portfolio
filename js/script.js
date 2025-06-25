function getSeasonalVideo() {
    const month = new Date().getMonth() + 1; // Get current month (1-12)
    let videoSrc = "";

    if (month >= 3 && month <= 5) {
        videoSrc = "./assets/videos/summer.mp4"; // Desert video
    } else if (month >= 6 && month <= 9) {
        videoSrc = "./assets/videos/monsoon.mp4"; // Rain video
    } else {
        videoSrc = "./assets/videos/winter.mp4"; // Snow video
    }

    return videoSrc;
}

document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("bgVideo");
    videoElement.src = getSeasonalVideo();
});
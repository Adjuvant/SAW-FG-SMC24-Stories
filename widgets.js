// A function to pause all audio elements and set their button states to 'pause'
const pauseAllAudios = () => {
    $.each($(".play"), function() {
        let audioElem = $(this).siblings(".audio")[0];
        let icon = $(this).children(".material-icons");

        if (!audioElem.paused) {
            audioElem.pause();
            icon.text("play_circle_outline");
            $(this).removeClass('pulse');
        }
    });
};

// get all play buttons and add icon switcher listener
$.each($(".play"), function() {
    $(this).on("click", function() {

        pauseAllAudios(); // pause all other audios

        let audioElem = $(this).siblings(".audio")[0];
        let icon = $(this).children(".material-icons");

        if (audioElem.paused) {
            audioElem.play();
            icon.text("pause_circle_outline");
            $(this).addClass('pulse'); // Add pulse class
        } else {
            audioElem.pause();
            icon.text("play_circle_outline");
            $(this).removeClass('pulse'); // Remove pulse class
        }
    });
});

// get all mute buttons and add icon switcher listener, currently not in use
$.each($(".mute"), function() {
    $(this).on("click", function() {
        let audioElem = $(this).siblings(".audio")[0];
        let icon = $(this).children(".material-icons");

        if (audioElem.muted) {
            audioElem.muted = false;
            icon.text("volume_off");
        } else {
            audioElem.muted = true;
            icon.text("volume_up");
        }
    });
});
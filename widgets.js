// A function to get the audio element and the icon
const getAudioAndIcon = (elem) => {
    let audioElem = elem.siblings(".audio")[0];
    let icon = elem.children(".material-icons");
    return [audioElem, icon];
};

// A function to toggle the audio play
const toggleAudioPlay = (audioElem, icon, button) => {
    if (audioElem.paused) {
        audioElem.play();
        icon.text("pause_circle_outline");
        button.addClass('pulse'); // Add pulse class
    } else {
        audioElem.pause();
        icon.text("play_circle_outline");
        button.removeClass('pulse'); // Remove pulse class
    }
};

// A function to pause all audio elements, except the one specified as an exception, and set their button states to 'pause'
const pauseAllAudios = (exception) => {
    $.each($(".play"), function() {
        if (this !== exception) {
            let [audioElem, icon] = getAudioAndIcon($(this));
            if (!audioElem.paused) {
                audioElem.pause();
                icon.text("play_circle_outline");
                $(this).removeClass('pulse');
            }
        }
    });
};

// get all play buttons and add icon switcher listener
$.each($(".play"), function() {
    $(this).on("click", function() {
        pauseAllAudios(this); // pause all other audios except the one being clicked
        let [audioElem, icon] = getAudioAndIcon($(this));
        toggleAudioPlay(audioElem, icon, $(this));
    });
});

// get all mute buttons and add icon switcher listener, currently not in use
$.each($(".mute"), function() {
    $(this).on("click", function() {
        let [audioElem, icon] = getAudioAndIcon($(this));
        if (audioElem.muted) {
            audioElem.muted = false;
            icon.text("volume_off");
        } else {
            audioElem.muted = true;
            icon.text("volume_up");
        }
    });
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});
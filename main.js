$( document ).ready(function() {
    // Get the li elements
    const infoButton = document.querySelector('#info-button');
    const story1Button = document.querySelector('#story1-button');
    const story2Button = document.querySelector('#story2-button');

// A function to remove the 'active' class from all elements
    function removeActiveClass() {
        infoButton.classList.remove('active');
        story1Button.classList.remove('active');
        story2Button.classList.remove('active');
    }

// Add event listeners to each button
    infoButton.addEventListener('click', () => {
        removeActiveClass();
        infoButton.classList.add('active');
    });

    story1Button.addEventListener('click', () => {
        removeActiveClass();
        story1Button.classList.add('active');
    });

    story2Button.addEventListener('click', () => {
        removeActiveClass();
        story2Button.classList.add('active');
    });

    function updateDisplay(showId, hideId1, hideId2) {
        document.getElementById(showId).style.display = 'block';
        document.getElementById(hideId1).style.display = 'none';
        document.getElementById(hideId2).style.display = 'none';
    }

    document.getElementById("info-button").addEventListener("click", function () {
        updateDisplay("info", "story1", "story2");
    });

    document.getElementById("story1-button").addEventListener("click", function () {
        updateDisplay("story1", "info", "story2");
    });

    document.getElementById("story2-button").addEventListener("click", function () {
        updateDisplay("story2", "info", "story1");
    });

// Hide dropdown at the beginning
    $('.dropdown-trigger').hide();

    $('#story1-button, #story2-button').click(function(){
        // Show dropdown when either story1-button or story2-button is clicked
        $('.dropdown-trigger').show();
    });

    $('#info-button').click(function(){
        // Hide dropdown when info-button is clicked
        $('.dropdown-trigger').hide();
    });

    $(".dropdown-trigger").dropdown();

    // Manage partial href button search from dropdown
    $('#dropdown1 a').click(function(event) {
        event.preventDefault();

        // remove '#' and get part of the id
        var partialId = $(this).attr('href').slice(1);

        // Select the elements which `id` contains partialId and is currently visible
        var target = $("p[id*='" + partialId + "']:visible");

        if (target.length > 0) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        } else {
            // Handle the case when no section matches the criteria
            console.error('No matching section found for', partialId);
        }
    });
});

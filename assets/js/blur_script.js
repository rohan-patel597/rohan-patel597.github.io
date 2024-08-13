document.addEventListener('scroll', function() {
    console.log('Scroll event detected'); // Debugging line to check if the script runs

    var navBar = document.getElementById('nav');
    var blurOverlay = document.getElementById('blur-overlay');
    var navHeight = navBar.offsetHeight;
    var contentSections = document.querySelectorAll('section');

    contentSections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        var sectionTop = rect.top;
        var sectionBottom = rect.bottom;

        console.log(`Section ${section.id}: top=${sectionTop}, bottom=${sectionBottom}`); // Debugging line

        // Determine if the section is currently behind the navbar
        if (sectionTop < navHeight && sectionBottom > 0) {
            // Show and position the blur overlay
            blurOverlay.style.top = `${sectionTop}px`;
            blurOverlay.classList.remove('hidden');
            console.log(`Blurring section ${section.id}`); // Debugging line
        } else {
            // Hide the blur overlay
            blurOverlay.classList.add('hidden');
        }
    });
});

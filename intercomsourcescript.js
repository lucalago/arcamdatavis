var win2;

function openSecondaryWindow() {
    return win2 = window.open('/projection.html', 'secondary', 'width=600,height=600');
}

function flash() {
    ('body').css('background-color', 'red').animate({
        'background-color': '#fff'
    });
}

(function() {

    if (!openSecondaryWindow()) (document.body).prepend('<a href="#">Popup blocked.  Click here to open the secondary window.</a>').click(function() {
        openSecondaryWindow();
        return false;
    });

    ('#inc').click(function() {
        if (win2) win2.increment();
        else alert('The secondary window is not open.');
        return false;
    });
});
var win2;

function openSecondaryWindow() {
    return win2 = window.open('https://lucalago.github.io/arcamdatavis/projection.html', 'secondary', 'width=1920,height=1080');
}

function flash() {
    $('body').css('background-color', 'red').animate({
        'background-color': '#fff'
    });
}

$(function() {

    if (!openSecondaryWindow()) $(document.body).prepend('<a href="#">Popup blocked.  Click here to open the secondary window.</a>').click(function() {
        openSecondaryWindow();
        return false;
    });

    $('#inc').click(function() {
        if (win2) win2.increment();
        else alert('The secondary window is not open.');
        return false;
    });
});

var i = 0;

function increment() {
    $('span').text(++i + ' time' + (i == 1 ? '' : 's'));
}

$(function() {
    $('a').click(function() {
       if (opener) opener.flash();
        else alert('Main window is closed.');
        return false;
    }); 
});
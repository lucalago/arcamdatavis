var i = 0;

function increment() {
    ('span').text(++i + ' time' + (i == 1 ? '' : 's'));
}

(function() {
    ('a').click(function() {
       if (opener) opener.flash();
        else alert('Main window is closed.');
        return false;
    }); 
});
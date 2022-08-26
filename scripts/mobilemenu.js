document.getElementById('open').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('open');
});

document.getElementById('user').addEventListener('click', function() {
    document.getElementById('useroption').classList.toggle('open');
});

// check if online every 5 seconds
setInterval(function() {
    if (navigator.onLine) {
        document.getElementById('o').style.display = 'none';
    } else {
        document.getElementById('o').style.display = 'flex';
        console.log("Lost connection");
    }
}, 5000);

var i = 1;

$('#start').click(function() {
    alert('Chúc mừng valentine trắng! Thanh zang xinh đẹp!<3');
    $('#start').hide();


    $('#them').html('<source src="./images/sound.mp3" type="audio/mp3">');

    setInterval(function() {
        i++;
        if (i % 2 == 0) {
            document.getElementById('show1').src = "./images/" + i + ".jpg";
            $('#show1').fadeIn(1000);
            $('#show2').fadeOut(1000);
        } else {
            document.getElementById('show2').src = "./images/" + i + ".jpg";
            $('#show2').fadeIn(1000);
            $('#show1').fadeOut(1000);
        }
        if (i > 6) {
            i = 1;
        }
    }, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    $("#open").on('click', function() {
        $('#mySidenav').css({
            display:"block",
            width: "100%"
        });
    });
    $('.closebtn').on('click', function() {
        $('#mySidenav').css({
            display:"none",
            width: "0"
        });
        
    });
        $('.fa-search').on('click', function() {
        var pretraga = $('.pretraga1');
        if (pretraga.hasClass('blok')) {
            pretraga.removeClass('blok');
        } else {
            pretraga.addClass('blok');
        }
        });
    
    
    // document.querySelector('.closebtn').addEventListener('click', function() {
    //     document.getElementById('mySidenav').style.width = "0";
    // });
    // document.getElementById("open").addEventListener('click', function() {
    //     document.getElementById('mySidenav').style.width = "100%";
    // });
    if (location.pathname == "/galerija.html") {
        Gallery();
    }
    document.querySelector(".topdugme").addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});


function Gallery() {
    var container = $('.gallery-container');
    var exit = $('.gallery-container span');
    var kliker = $('.slika-galerija img');
    exit.on('click', function() {
        container.fadeOut(300, function() {
            $(this).css({
                display: "none"
            });
        });
    });
    kliker.on('click', function(event) {
        container.fadeIn(300, function() {
            $(this).css({
                display: "flex"
            })
        })
        var src = event.currentTarget.attributes[0].value;
        $('.gallery-container img').attr('src', src);
    });
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".topdugme").style.display = "block";
    } else {
        document.querySelector(".topdugme").style.display = "none";
    }
}


function Gallery() {
    var container = $('.gallery-container');
    var exit = $('.gallery-container span');
    var kliker = $('.slika-galerija img');
    exit.on('click', function() {
        container.fadeOut(300, function() {
            $(this).css({
                display: "none"
            });
        });
    });
    kliker.on('click', function(event) {
        container.fadeIn(300, function() {
            $(this).css({
                display: "flex"
            })
        })
        var src = event.currentTarget.attributes[0].value;
        $('.gallery-container img').attr('src', src);
    });
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".topdugme").style.display = "block";
    } else {
        document.querySelector(".topdugme").style.display = "none";
    }
}



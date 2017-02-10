var delayDisplay = 2000;
var timer = null;
var currentImage = 0;
var speedSliding = 1000;
var automaticMode = false; 

var imgs = [
    "imgs/beach.jpg",
    "imgs/wheat.jpg", 
    "imgs/lac.jpg",
    "imgs/stones.jpg", 
    "imgs/wood.jpg", 
    "imgs/plain.jpg"
];

var finalImage = ['100%', '100%', '0%', '0%'];
var effect = effects.HE;

$("#rightBt").click(function(){
        modifCssImage();
        nextImage();
        $("img").attr("src", imgs[currentImage]);
        animateNextImage();
});

$("#leftBt").click(function(){
    modifCssImage();
    previousImage();
    $("img").attr("src", imgs[currentImage]);
    animateNextImage(); 
});

$("#btnAuto") .click(function(){
    $(this).toggleClass("btnPushed");
    automaticMode = !automaticMode;
    if (automaticMode) {
        timer = setInterval( function() {
            $("#rightBt").trigger("click");
        },speedSliding + delayDisplay ); }
    else {
        clearTimeout(timer);
    }
});

$("#effects").change(function(){
    var nbEffect = $(this).val();
    switch (nbEffect) {
        case "HE":
            effect = effects.HE;
            break;
         case "IHE":
            effect = effects.IHE;
            break;    
        case "VE":
            effect = effects.VE;
            break;
        case "IVE":
            effect = effects.IVE;
            break;    
        case "CE":
            effect = effects.CE;
            break;
        case "TLC":
             effect = effects.TLC;
             break;
        case "TRC":
            effect = effects.TRC;
             break;
        case "BRC":
             effect = effects.BRC;
             break;
        case "BLC":
             effect = effects.BLC;
             break;
    }
});

$("#rangeSpeed").change(function(){
    if ($(this).val() == 2) {
        $("#led").show();
        speedSliding = 400;
    } else {
        $("#led").hide();
        speedSliding = 800;
    }
});

function nextImage() {
    currentImage++;
    if (currentImage > 5) {
        currentImage = 0;
    }
}

function previousImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = 5;
    }
}

function modifCssImage() {
    $("img").css({
        width: effect.width,
        height: effect.height,
        top: effect.top,
        left: effect.left,
        opacity: 0
    });
}

function animateNextImage() {
     $("img").animate({
            width: '100%', 
            height: '100%',
            top: '0%',
            left: '0%',
            opacity: '1'
        },               
            speedSliding,'',function(){
             $("#slider").css({
                backgroundImage: "url("+imgs[currentImage]+")"
            });
        });
}
    
    
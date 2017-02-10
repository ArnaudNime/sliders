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
var imgArray = [
    'img/thumbs-fungus.png',
    'img/thumbs-fridgebot.png',
    // 'http://placehold.it/400x300'],

    curIndex = 0;
    imgDuration = 2000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    
    setTimeout(function() {
        document.getElementById('slider').background = imgArray[curIndex];
        document.getElementById('slider').className = "";
    },2000);
    
    curIndex++;
    
    if (curIndex == imgArray.length) { 
        curIndex = 0; 
    }
    setTimeout(slideShow, imgDuration);
}

slideShow();



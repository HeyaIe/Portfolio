// Slideshow
// Display first image
var slideIndex = 1;
showSlides(slideIndex);
var myTimer;

// Change slides when arrow buttons are triggered
function plusSlides(n){
    clearInterval(myTimer);

    if(n<0){
        showSlides(slideIndex -= 1);
    }
    else{
        showSlides(slideIndex += 1);
    }
    // Automatic slideshow
    if(n===-1){
        myTimer = setInterval(function(){plusSlides(n+2)}, 4000);
    }
    else{
        myTimer = setInterval(function(){plusSlides(n+1)}, 4000);
    }

}

// Change slides when dots are triggered
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    // Set all slide display to none
    for(i=0; i<slides.length; ++i){
        slides[i].style.display = "none";
    }
    // Remove active class from all dots
    for(i=0; i<dots.length; ++i){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Display image
    slides[slideIndex - 1].style.display = "block";
    // Add active class to dot associated with slide
    dots[slideIndex - 1].className += " active";
}

// Pauses slideshow
function pause(){
    clearInterval(myTimer);
}
// Resumes slideshow
function resume(){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}

// Open form
function openForm(){
    document.getElementById("myForm").style.display = "block";
}

// Close form
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

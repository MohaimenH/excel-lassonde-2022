// Get the button:
let mybutton = document.getElementById("scroll-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openPopUp(a){
    let popup = document.getElementById("popup".concat(a));
    let previous = document.getElementsByClassName("open-popup");

    
    if(previous.length > 0) { //checks if there is more than 1 popup
        previous.item(0).classList.remove("open-popup"); //closes previous popup
    }

    popup.classList.add("open-popup"); //open (new) popup by making it visible
}

function closePopUp(a){
    let popup = document.getElementById("popup".concat(a));
    popup.classList.remove("open-popup"); //remove popup by removing visibility
}
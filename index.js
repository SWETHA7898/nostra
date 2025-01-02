var sidenav=document.getElementById("sidenav")
var menu=document.getElementById("menu-activate")
var close=document.getElementById("close-side")

menu.addEventListener("click",function()
{
sidenav.style.left=0
})

close.addEventListener("click",function()
{
sidenav.style.left="-60%"
})

var id=document.getElementById("offer-close")
var offer=document.getElementById("offer")
id.addEventListener("click",function()
{
  offer.style.display="none"
})


// Select the slider container and navigation buttons

// Scroll amount (change based on your design, e.g., width of one image)


const slider = document.querySelector('.slider-image');
const leftButton = document.querySelector('.slider-left i');
const rightButton = document.querySelector('.slider-right i');

// Scroll amount (width of one image, which is 97vw)
const scrollAmount = window.innerWidth * 0.97;

// Handle left button click
leftButton.addEventListener('click', () => {
    // Check if we're not at the beginning (current scroll position > 0)
    if (slider.scrollLeft > 0) {
        slider.scrollBy({
            left: -scrollAmount,  // Scroll to the left by one image width
            behavior: 'smooth',   // Smooth scrolling animation
        });
    }
});

// Handle right button click
rightButton.addEventListener('click', () => {
    // Calculate the maximum scrollable width
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // Check if we're not at the end (current scroll position < max scrollable width)
    if (slider.scrollLeft < maxScroll) {
        slider.scrollBy({
            left: scrollAmount,   // Scroll to the right by one image width
            behavior: 'smooth',   // Smooth scrolling animation
        });
    }
});




var like = document.querySelectorAll(".like-button");

for (let count = 0; count < like.length; count++) {
    like[count].addEventListener("click", function() {
        if (like[count].src.includes("images/blackheart.png")) {
            like[count].src = "images/redheart.png"; // Path to your red heart image
            // Optionally update alt text for accessibility
        } else {
            like[count].src = "images/blackheart.png"; // Path to your black heart image
            // Optionally update alt text for accessibility
        }
    });
}





 







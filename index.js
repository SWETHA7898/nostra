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


var slider = document.querySelector('.slider-image');
var leftButton = document.querySelector('#slide-left-activate');
var  rightButton = document.querySelector('#slide-right-activate');
var slidermargin=0
console.log(leftButton)
console.log(rightButton)

rightButton.addEventListener("click",

    function(){
        slidermargin=slidermargin+100
        console.log(slidermargin)
    
        if(slidermargin>200)
        {
            slidermargin=0
            
            
            slider.style.marginLeft=0;
        }
        else{
            slider.style.marginLeft="-"+slidermargin+"vw";
        }
        
       
    
    }
    )
    
leftButton.addEventListener("click",
    
    function(){
    
        if(slidermargin==0)
        {
           
            slidermargin=200
            slider.style.marginLeft="-"+slidermargin+"vw";
        }
        else{
    
            slidermargin=slidermargin-100
        slider.style.marginLeft="-"+slidermargin+"vw";
        }
        
        
    }
    )
    
    





var like = document.querySelectorAll(".like-button");

for (let count = 0; count < like.length; count++) {
    like[count].addEventListener("click", function() {
        if (like[count].src.includes("images/blackheart.png")) {
            like[count].src = "images/redheart.png"; 
        } else {
            like[count].src = "images/blackheart.png"; 
        }
    });
}


window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})





 







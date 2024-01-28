let home= document.getElementsByClassName("displayy");
let guest = document.getElementsByClassName("display");
let resett = document.getElementsByClassName("reset");
  
let homePlay = 0
let guestPlay = 0
function addOne(){
   homePlay = homePlay + 1
   home.textContent = homePlay;
}

function addTwo(){
    homePlay = homePlay + 2
   home.textContent = homePlay;
}

function addThree(){
    homePlay = homePlay + 3
    home.textContent = homePlay;
 }

 function addOnee(){
    guestPlay = guestPlay + 1
    guest.textContent = guestPlay;
 }
 
 function addTwoo(){
    guestPlay = guestPlay + 2
    guest.textContent = guestPlay;
 }
 
 function addThreee(){
    guestPlay = guestPlay + 3
     guest.textContent = guestPlay;
  }

  function resets(){
    homePlay = 0;
    guestPlay = 0;
    home.textContent = homePlay;
    guest.textContent = guestPlay;

  }
  




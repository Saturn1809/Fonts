
document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("poster-txt");

    const text1 = `<span class="large-font">GLAMM UP LIKE A STAR</span>`;
    const text2 = `<span class="medium-font">INDIA'S NO. 1 D2C MAKEUP BRAND</span>`;
    const texts = [text1, text2];
    let index = 0;

    setInterval(() => {
        textContainer.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % texts.length;
            textContainer.innerHTML = texts[index];
            textContainer.style.opacity = 1;
        }, 500); 
    }, 3000); 
});

function openNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left='0';
    } else{
        console.error('error: side panel not found');
    }
}

function closeNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left='-320px';
    } else{
        console.error('error: side panel not found');
    }
}

function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='100vh';
        searchpanel.style.borderRadius='0';
    } else{
        console.error('error: search panel not found');
    }
}

function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='0';
        searchpanel.style.borderTopLeftRadius='100%';
        searchpanel.style.borderTopRightRadius='100%';
    } else{
        console.error('error: search panel not found');
    }
}

var counter=1;
setInterval(function(){
    document.getElementById('radio'+ counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},5000);


gsap.to(".imagecontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    stagger: 3,
    repeat: -1,
    repeatDelay: 3, 
  });
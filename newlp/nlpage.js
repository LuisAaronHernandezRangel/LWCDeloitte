const button = document.querySelector('.icon-menu');
const menu= document.querySelector('.menu')
const tache=document.querySelector('.icon-close')
button.addEventListener('click', () => { 
    console.log("LWC Training Course")
    button.style.color = 'red';
    button.style.fontSize = '20px';
    menu.style.display='block'
});
tache.addEventListener('click', () => { 
    console.log("LWC Training Course")
    button.style.color = 'white';
    button.style.fontSize = '20px';
    menu.style.display='none'
});

// Select the target element using a query selector
//const element =document.querySelector('.target-element');
// Modify the element's properties
//element.style.display = 'none'; // Hide the element
//element.style.display= 'block'; // Show the element

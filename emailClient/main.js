'use strict'

// const button = document.querySelector("#sidebar button");
// button.addEventListener("click", buttonClicked);

// function buttonClicked(){
//     console.log('button clicked!!');
// }


const articles = document.querySelectorAll("#main-container .email-feed article");
const preview = document.querySelector('#main-container .email-preview');
const previewRecipient = preview.querySelector('.email-header .content p .recipient-name');
const previewContent = preview.querySelector('.email-content');
const previewTitle = preview.querySelector('.email-header .content h2')
const previwHora=preview.querySelector('.email-header .content p .email-date')
const menuBoton= document.querySelector('.hamburger-button')
const menuCompose=document.querySelector("#sidebar button")
const divMenu= document.querySelector("#sidebar div")

menuBoton.addEventListener("click",menuClicked);
menuCompose.addEventListener("click",menuComposed);

function menuComposed(){
        if(divMenu.classList.contains("menu-able")){
        divMenu.classList.replace("menu-able","menu-disabled")
        console.log(divMenu)
        }
}

function menuClicked(){
    console.log(divMenu)
    console.log("hola")
    divMenu.classList.add("menu-disabled")
    divMenu.classList.replace("menu-disabled","menu-able") 
    
}

articles.forEach(article => article.addEventListener("click", () => {
    //Unseen email
    article.classList.remove('unseen-email');
    //Access article content
    const recipient = article.querySelector('.recipient');
    const description = article.querySelector('.description');
    const title = article.querySelector('.title');

    //console.log('description: ', description);
    //console.log('description innerHTML: ', description.innerHTML);

    previewContent.innerHTML = description.innerHTML;
    previewRecipient.innerHTML = recipient.innerHTML;
    previewTitle.innerHTML = title.innerHTML
    previwHora.innerHTML= new Date()
}));




/*articles.forEach((article) => {
    article.addEventListener("click", () => {
        article.classList.remove('unseen-email');
    });
});
//console.log('articles', articles);
//

function addArticleEvent(article){
   

    function articleClicked(){
       
    }
}*/

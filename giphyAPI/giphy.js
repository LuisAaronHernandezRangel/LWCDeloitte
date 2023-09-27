
let keywordrefresh=""
let suma=2;
async function apiGifRetrieve (keyword){
  let buscador= keyword?keyword:"food";
  console.log("url",buscador)
  const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FO5V9EiMQE6wO5UP2D7r4W2KaUTdgojW&s=${buscador}`)
  const gif = await res.json();
  const url = gif.data.images.original.url;
  console.log("url",url)
  return url;
  }
  async function retrieveGif(){ 
    const buscarvariable = document.getElementById("input").value;
    keywordrefresh=buscarvariable;
    let btnbuscar=document.getElementById('buscar')
    let btnrefresh=document.getElementById('refresh')
    btnbuscar.disabled=true
    btnrefresh.disabled=true
    console.log("buscar",buscarvariable)
    const gifurl = await apiGifRetrieve(buscarvariable);
    createImage(gifurl);
    btnbuscar.disabled=false
    btnrefresh.disabled=false
    document.getElementById("input").value=""
    console.log('gifurl', gifurl);
  }

  async function apiGifRetrieve2 (keyword){
    
    let buscador= keyword?keyword:"food";
    suma=suma+2
    console.log("url",buscador)
    const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=FO5V9EiMQE6wO5UP2D7r4W2KaUTdgojW&s=${buscador}&offset=${suma}`)
    const gif = await res.json();
    const url = gif.data.images.original.url;
    console.log("url",url)
    return url;
    }
    async function retrieveGif2(){ 
      // const buscarvariable = document.getElementById("input").value;
      buscarvariable=keywordrefresh;
      let btnbuscar=document.getElementById('buscar')
      let btnrefresh=document.getElementById('refresh')
      console.log("buscar",buscarvariable)
      btnbuscar.disabled=true
      btnrefresh.disabled=true
      const gifurl = await apiGifRetrieve2(buscarvariable);
      createImage(gifurl);
      btnbuscar.disabled=false
      btnrefresh.disabled=false
      document.getElementById("input").innerHTML=""
      console.log('gifurl', gifurl);
    }

  function createImage(gifurl){
  const img = document.createElement('img'); 
  const body= document.querySelector('body');
  const out = document.querySelector('.container');
  img.src=gifurl;
  out.insertAdjacentElement('afterbegin',img)
  //body.append(img);
  }
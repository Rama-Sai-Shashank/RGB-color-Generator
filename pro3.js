const redslider=document.getElementById("redslider");
const greenslider=document.getElementById("greenslider");
const blueslider=document.getElementById("blueslider");

const redvalueSpan=document.getElementById("redvalue");
const greenvalueSpan=document.getElementById("greenvalue");
const bluevalueSpan=document.getElementById("bluevalue");

const colorbox=document.getElementById("colorbox");
const copybutton=document.getElementById("copybutton");
const inputtypevalue=document.getElementById("inputtype");

redslider.addEventListener('input',updatecolor);
greenslider.addEventListener('input',updatecolor);
blueslider.addEventListener('input',updatecolor);
copybutton.addEventListener('click', copyrgbvalue);

function updatecolor() {
    const redvalue= redslider.value;
    const greenvalue= greenslider.value;
    const bluevalue= blueslider.value;

    console.log(redvalue,greenvalue,bluevalue);
    const rgbcolor= `rgb(${redvalue}, ${greenvalue}, ${bluevalue})` ;
    console.log(rgbcolor);

    colorbox.style.backgroundColor= rgbcolor;

    redvalueSpan.textContent= redvalue;
    greenvalueSpan.textContent= greenvalue;
    bluevalueSpan.textContent= bluevalue;

    inputtypevalue.textContent= rgbcolor;
}

updatecolor();

function copyrgbvalue(){
    const redvalue= redslider.value;
    const greenvalue= greenslider.value;
    const bluevalue= blueslider.value;
    const rgbcolor= `rgb(${redvalue}, ${greenvalue}, ${bluevalue})` ;
    navigator.clipboard.writeText(rgbcolor)
        .then(()=>{
            alert("Rgb color copied:"+ rgbcolor);
        })
        .catch(((error)=>{
            console.error("Failed to copy");
        }));
}
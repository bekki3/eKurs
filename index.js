const htmlBody=document.querySelector("#htmlBody");
const nightModeBtn=document.querySelector("#nightModeBtn");
const section=document.querySelector("#section");
let num=0;
const quiz = (num)=>{
    console.log(num);
}
function nightMode() {
    if (num%2===0) {
    htmlBody.style.backgroundColor="rgb(50,50,50)";
    nightModeBtn.style.backgroundImage="url(images/dayIcon.png)"
    section.style.background="rgb(100,100,100)"
    }
    else{
    htmlBody.style.backgroundColor="white";
    nightModeBtn.style.backgroundImage="url(images/nightIcon.png)"
    section.style.backgroundImage="url(images/taggedBg.png)";
    }
    num++;
}
console.log(window.innerWidth);
if (window.innerWidth>800) {
    const elements = document.getElementsByClassName("folder");
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].style.width="10.8%";
        elements[i].style.height="17vw";
        elements[i].style.fontSize="2.3vw";
        
}
}
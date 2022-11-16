function onTextChange(){
    let firstName = document.querySelector(".name").value;
    let lastName = document.querySelector(".surname").value;

    document.querySelector(".front-name").innerHTML = firstName;
    document.querySelector(".front-last").innerHTML = lastName;
}

function onColorPickerChange(){
    let cardColor = document.querySelector(".card-front");
    let colorPicker = document.querySelector(".color-picker");

    let colorVal = colorPicker.value;
    cardColor.style.backgroundColor = colorVal;
}
function hideBg() {
    let bgButtons = document.querySelector(".bg-buttons");
    let cardBg = document.querySelector(".card-front");
    let chbox;
    chbox=document.getElementById('bg-switch');

    if (chbox.checked) {
        cardBg.style.background = 'url(media/bg/2.png)';
        cardBg.style.backgroundSize = "cover";
        cardBg.style.backgroundRepeat = "no-repeat";

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;

        bgButtons.style.display = "block";
    }
    else {
        cardBg.style.background = 'none';

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
        bgButtons.style.display = "none";
    }
}

function mirClick(){
    document.getElementById("card-logo").src="media/img/mir-logo.svg";
}
function masterClick(){
    document.getElementById("card-logo").src="media/img/mastercard-logo.svg";
}
function visaClick(){
    document.getElementById("card-logo").src="media/img/visa-logo.svg";
}

function changeChip(){
    let chip = document.querySelector(".front-content");
    let chbox;
    chbox=document.getElementById('chip-switch');

    if (chbox.checked) {
        chip.style.opacity = "1";
    }
    else {
        chip.style.opacity = "0";
    }
}

function hideLogo(){
    let logoButtons = document.querySelector(".logo-buttons");
    let logo = document.querySelector(".logo");
    let chbox;
    chbox=document.getElementById('logo-switch');

    if (chbox.checked) {
        logo.style.opacity = "1";
        logoButtons.style.display = "block";
    }
    else {
        logo.style.opacity = "0";
        logoButtons.style.display = "none";
    }
}

function reset(){
    location.reload();
}

function bg1(){
    let chbox;
    chbox=document.getElementById('bg-switch');
    let cardBg = document.querySelector(".card-front");
    if(chbox.checked){
        cardBg.style.background = 'url(media/bg/1.png)';
        cardBg.style.backgroundSize = "cover";
        cardBg.style.backgroundRepeat = "no-repeat";

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
    else{
        cardBg.style.background = 'none';

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
}
function bg2(){
    let chbox;
    chbox=document.getElementById('bg-switch');
    let cardBg = document.querySelector(".card-front");
    if(chbox.checked){
        cardBg.style.background = 'url(media/bg/2.png)';
        cardBg.style.backgroundSize = "cover";
        cardBg.style.backgroundRepeat = "no-repeat";

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
    else{
        cardBg.style.background = 'none';

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
}
function bg3(){
    let chbox;
    chbox=document.getElementById('bg-switch');
    let cardBg = document.querySelector(".card-front");
    if(chbox.checked){
        cardBg.style.background = 'url(media/bg/3.jpg)';
        cardBg.style.backgroundSize = "cover";
        cardBg.style.backgroundRepeat = "no-repeat";

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
    else{
        cardBg.style.background = 'none';

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
}
function bg4(){
    let chbox;
    chbox=document.getElementById('bg-switch');
    let cardBg = document.querySelector(".card-front");
    if(chbox.checked){
        cardBg.style.background = 'url(media/bg/4.png)';
        cardBg.style.backgroundSize = "cover";
        cardBg.style.backgroundRepeat = "no-repeat";

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
    else{
        cardBg.style.background = 'none';

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
}
function bg5(){
    let chbox;
    chbox=document.getElementById('bg-switch');
    let cardBg = document.querySelector(".card-front");
    if(chbox.checked){
        cardBg.style.background = 'url(media/bg/5.jpg)';
        cardBg.style.backgroundSize = "cover";
        cardBg.style.backgroundRepeat = "no-repeat";

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
    else{
        cardBg.style.background = 'none';

        let colorPicker = document.querySelector(".color-picker");
        let colorVal = colorPicker.value;
        cardBg.style.backgroundColor = colorVal;
    }
}
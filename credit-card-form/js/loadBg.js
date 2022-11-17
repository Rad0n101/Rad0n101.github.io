function loadBg(){
    let imgInp = document.getElementById("imgInp");
    const [file] = imgInp.files;

    if(file){
        let chbox;
        chbox=document.getElementById('bg-switch');
        let cardBg = document.querySelector(".card-front");
        if(chbox.checked){
            cardBg.style.background = `url(${URL.createObjectURL(file)})`;
            cardBg.style.backgroundSize = "500px 305px";
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
}
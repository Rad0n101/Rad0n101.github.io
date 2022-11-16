function darkMode(){
    let darkModeSwitch = document.getElementById('dark-mode-switch');
    
    let bgSwitch = document.getElementById('bg-switch');
    let logoSwitch = document.getElementById('logo-switch');
    let chipSwitch = document.getElementById('chip-switch');

    let bgSlider = document.getElementById('s1');
    let logoSlider = document.getElementById('s2');
    let chipSlider = document.getElementById('s3');
    let darkModeSlider = document.getElementById('s4');

    let bgDiv = document.body;

    let controlPanel = document.querySelector(".control-panel");

    let controlPanelP1 = document.getElementById("p1");
    let controlPanelP2 = document.getElementById("p2");
    let controlPanelP3 = document.getElementById("p3");
    let controlPanelP4 = document.getElementById("p4");
    let controlPanelP5 = document.getElementById("p5");

    let btn1 = document.getElementById("b1");
    let btn2 = document.getElementById("b2");
    let btn3 = document.getElementById("b3");
    let btn4 = document.getElementById("b4");
    let btn5 = document.getElementById("b5");
    let btn6 = document.getElementById("b6");
    let btn7 = document.getElementById("b7");
    let btn8 = document.getElementById("b8");
    let btn9 = document.getElementById("b9");

    let card1 = document.querySelector(".card");
    let card2 = document.querySelector(".card-front");

    let colorPicker = document.querySelector(".color-picker");

    if (darkModeSwitch.checked) {
        bgDiv.style.backgroundColor = "#1e1e1e";

        if(bgSwitch.checked){
            bgSlider.style.backgroundColor = "#008d1c";
        }else{
            bgSlider.style.backgroundColor = "#303030";
        }
        bgSwitch.onchange = function(){
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

            if(bgSwitch.checked){
                bgSlider.style.backgroundColor = "#008d1c";
            }else{
                bgSlider.style.backgroundColor = "#303030";
            }
        }

        if(logoSwitch.checked){
            logoSlider.style.backgroundColor = "#008d1c";
        }else{
            logoSlider.style.backgroundColor = "#303030";
        }
        logoSwitch.onchange = function(){
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

            if(logoSwitch.checked){
                logoSlider.style.backgroundColor = "#008d1c";
            }else{
                logoSlider.style.backgroundColor = "#303030";
            }
        }

        if(chipSwitch.checked){
            chipSlider.style.backgroundColor = "#008d1c";
        }else{
            chipSlider.style.backgroundColor = "#303030";
        }
        chipSwitch.onchange = function(){
            let chip = document.querySelector(".front-content");
            let chbox;
            chbox=document.getElementById('chip-switch');
        
            if (chbox.checked) {
                chip.style.opacity = "1";
            }
            else {
                chip.style.opacity = "0";
            }

            if(chipSwitch.checked){
                chipSlider.style.backgroundColor = "#008d1c";
            }else{
                chipSlider.style.backgroundColor = "#303030";
            }
        }

        darkModeSlider.style.backgroundColor = "#008d1c";

        colorPicker.style.backgroundColor = "#36363600";

        controlPanel.style.backgroundColor = "#1e1e1e";
        controlPanel.style.boxShadow = "8px 8px 26px -4px rgb(0 0 0 / 50%) inset";

        controlPanelP1.style.color = "#999999";
        controlPanelP2.style.color = "#999999";
        controlPanelP3.style.color = "#999999";
        controlPanelP4.style.color = "#999999";
        controlPanelP5.style.color = "#999999";

        btn1.style.backgroundColor = "#2c2c2c";
        btn2.style.backgroundColor = "#2c2c2c";
        btn3.style.backgroundColor = "#2c2c2c";
        btn4.style.backgroundColor = "#2c2c2c";
        btn5.style.backgroundColor = "#2c2c2c";
        btn6.style.backgroundColor = "#2c2c2c";
        btn7.style.backgroundColor = "#2c2c2c";
        btn8.style.backgroundColor = "#2c2c2c";
        btn9.style.backgroundColor = "#2c2c2c";

        card1.style.boxShadow = "-10px -10px 25px 2px rgb(0 0 0 / 21%) inset, 16px 16px 20px 0px rgb(0 0 0 / 40%)";
        card2.style.boxShadow = "-10px -10px 25px 2px rgb(0 0 0 / 21%) inset, 16px 16px 20px 0px rgb(0 0 0 / 40%)";

        btn1.onmouseover = function(){
            btn1.style.backgroundColor = "rgb(62 62 62)";
        }
        btn1.onmouseleave = function(){
            btn1.style.backgroundColor = "#2c2c2c";
        }
        
        btn2.onmouseover = function(){
            btn2.style.backgroundColor = "rgb(62 62 62)";
        }
        btn2.onmouseleave = function(){
            btn2.style.backgroundColor = "#2c2c2c";
        }
    
        btn3.onmouseover = function(){
            btn3.style.backgroundColor = "rgb(62 62 62)";
        }
        btn3.onmouseleave = function(){
            btn3.style.backgroundColor = "#2c2c2c";
        }
    
        btn4.onmouseover = function(){
            btn4.style.backgroundColor = "rgb(62 62 62)";
        }
        btn4.onmouseleave = function(){
            btn4.style.backgroundColor = "#2c2c2c";
        }
    
        btn5.onmouseover = function(){
            btn5.style.backgroundColor = "rgb(62 62 62)";
        }
        btn5.onmouseleave = function(){
            btn5.style.backgroundColor = "#2c2c2c";
        }
    
        btn6.onmouseover = function(){
            btn6.style.backgroundColor = "rgb(62 62 62)";
        }
        btn6.onmouseleave = function(){
            btn6.style.backgroundColor = "#2c2c2c";
        }
    
        btn7.onmouseover = function(){
            btn7.style.backgroundColor = "rgb(62 62 62)";
        }
        btn7.onmouseleave = function(){
            btn7.style.backgroundColor = "#2c2c2c";
        }
    
        btn8.onmouseover = function(){
            btn8.style.backgroundColor = "rgb(62 62 62)";
        }
        btn8.onmouseleave = function(){
            btn8.style.backgroundColor = "#2c2c2c";
        }

        btn9.onmouseover = function(){
            btn9.style.backgroundColor = "#ff000010";
        }
        btn9.onmouseleave = function(){
            btn9.style.backgroundColor = "#2c2c2c";
        }

        btn1.style.color = "#999999";
        btn2.style.color = "#999999";
        btn3.style.color = "#999999";
        btn4.style.color = "#999999";
        btn5.style.color = "#999999";
        btn6.style.color = "#999999";
        btn7.style.color = "#999999";
        btn8.style.color = "#999999";
        btn9.style.color = "red";
    }
    else {
        bgDiv.style.backgroundColor = "#f7f8fc";

        colorPicker.style.backgroundColor = "#fff";

            if(bgSwitch.checked){
                bgSlider.style.backgroundColor = "#00cd28";
            }else{
                bgSlider.style.backgroundColor = "#ccc";
            }
            bgSwitch.onchange = function(){
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

                if(bgSwitch.checked){
                    bgSlider.style.backgroundColor = "#00cd28";
                }else{
                    bgSlider.style.backgroundColor = "#ccc";
                }
            }
    
            if(logoSwitch.checked){
                logoSlider.style.backgroundColor = "#00cd28";
            }else{
                logoSlider.style.backgroundColor = "#ccc";
            }
            logoSwitch.onchange = function(){
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

                if(logoSwitch.checked){
                    logoSlider.style.backgroundColor = "#00cd28";
                }else{
                    logoSlider.style.backgroundColor = "#ccc";
                }
            }
    
            if(chipSwitch.checked){
                chipSlider.style.backgroundColor = "#00cd28";
            }else{
                chipSlider.style.backgroundColor = "#ccc";
            }
            chipSwitch.onchange = function(){
                let chip = document.querySelector(".front-content");
                let chbox;
                chbox=document.getElementById('chip-switch');
            
                if (chbox.checked) {
                    chip.style.opacity = "1";
                }
                else {
                    chip.style.opacity = "0";
                }

                if(chipSwitch.checked){
                    chipSlider.style.backgroundColor = "#00cd28";
                }else{
                    chipSlider.style.backgroundColor = "#ccc";
                }
            }
    
        darkModeSlider.style.backgroundColor = "#ccc";

        controlPanel.style.backgroundColor = "#ffffff";
        controlPanel.style.boxShadow = "6px 6px 26px 0px rgb(34 60 80 / 20%) inset";

        controlPanelP1.style.color = "#000";
        controlPanelP2.style.color = "#000";
        controlPanelP3.style.color = "#000";
        controlPanelP4.style.color = "#000";
        controlPanelP5.style.color = "#000";

        btn1.style.backgroundColor = "white";
        btn2.style.backgroundColor = "white";
        btn3.style.backgroundColor = "white";
        btn4.style.backgroundColor = "white";
        btn5.style.backgroundColor = "white";
        btn6.style.backgroundColor = "white";
        btn7.style.backgroundColor = "white";
        btn8.style.backgroundColor = "white";
        btn9.style.backgroundColor = "white";

        card1.style.boxShadow = "-10px -10px 25px 2px rgb(255 255 255 / 13%) inset, 16px 16px 20px 0px rgb(18 31 41 / 51%)";
        card2.style.boxShadow = "-10px -10px 25px 2px rgb(255 255 255 / 13%) inset, 16px 16px 20px 0px rgb(18 31 41 / 51%)";

        btn1.onmouseover = function(){
            btn1.style.backgroundColor = "#f5f5f5";
        }
        btn1.onmouseleave = function(){
            btn1.style.backgroundColor = "#fff";
        }
        
        btn2.onmouseover = function(){
            btn2.style.backgroundColor = "#f5f5f5";
        }
        btn2.onmouseleave = function(){
            btn2.style.backgroundColor = "#fff";
        }
    
        btn3.onmouseover = function(){
            btn3.style.backgroundColor = "#f5f5f5";
        }
        btn3.onmouseleave = function(){
            btn3.style.backgroundColor = "#fff";
        }
    
        btn4.onmouseover = function(){
            btn4.style.backgroundColor = "#f5f5f5";
        }
        btn4.onmouseleave = function(){
            btn4.style.backgroundColor = "#fff";
        }
    
        btn5.onmouseover = function(){
            btn5.style.backgroundColor = "#f5f5f5";
        }
        btn5.onmouseleave = function(){
            btn5.style.backgroundColor = "#fff";
        }
    
        btn6.onmouseover = function(){
            btn6.style.backgroundColor = "#f5f5f5";
        }
        btn6.onmouseleave = function(){
            btn6.style.backgroundColor = "#fff";
        }
    
        btn7.onmouseover = function(){
            btn7.style.backgroundColor = "#f5f5f5";
        }
        btn7.onmouseleave = function(){
            btn7.style.backgroundColor = "#fff";
        }
    
        btn8.onmouseover = function(){
            btn8.style.backgroundColor = "#f5f5f5";
        }
        btn8.onmouseleave = function(){
            btn8.style.backgroundColor = "#fff";
        }

        btn9.onmouseover = function(){
            btn9.style.backgroundColor = "#ff000010";
        }
        btn9.onmouseleave = function(){
            btn9.style.backgroundColor = "#fff";
        }

        btn1.style.color = "#000";
        btn2.style.color = "#000";
        btn3.style.color = "#000";
        btn4.style.color = "#000";
        btn5.style.color = "#000";
        btn6.style.color = "#000";
        btn7.style.color = "#000";
        btn8.style.color = "#000";
        btn9.style.color = "red";
    }
}
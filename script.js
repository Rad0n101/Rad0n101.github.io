function ricroll(){
    let r = "https://dropmefiles.com/5CzuC";
    window.location.assign("https://dropmefiles.com/5CzuC");
}

function onButtonClick(){
    let rnd = Math.floor(Math.random() * 3) + 1

    switch (rnd){
        case 1:
            alert("Lorem ipsum dolor sit amet");
            break;
        case 2:
            alert("Тут была ссылка на рикрол");
            break;
        case 3:
            alert("hello world?");
            break;    
    }
}
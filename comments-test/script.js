let comments = [];
loadComments();

function send(){
    event.preventDefault();

    let commentName = document.getElementById("name");
    let commentBody = document.getElementById("comment-body");

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }
    commentName.value = "";
    commentBody.value = "";
    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
    localStorage.setItem("comments", JSON.stringify(comments));
}
function loadComments(){
    if(localStorage.getItem("comments")) comments = JSON.parse(localStorage.getItem("comments"));
    showComments();
}
function showComments(){
    let commentField = document.getElementById("comment-field");
    let out = "";

    comments.forEach(function(item){
        // out += `<p>${item.name}</p>`;
        // out += `<p><em>${timeConverter(item.time)}</em></p>`;
        // out += `<p>${item.body}</p>`;

        out += `<div class="comment-block">
                    <p class="date"><em>${timeConverter(item.time)}</em></p>
                    <br>
                    <p class="username">${item.name}</p>
                    <br>
                    <p class="comment-text">${item.body}</p>
                </div>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Янв','Фев','Марта','Апр','Мая','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
}
const like_form = document.querySelector(".like");
const like_input = document.querySelector(".like input");
const like_ul = document.querySelector(".like-list");
let like_list = [];

const LIKE_KEY = "like";

function saveLike(){
    localStorage.setItem(LIKE_KEY,JSON.stringify(like_list));
}

function deleteList(event){
    const li = event.target.parentElement;
    li.remove();
    like_list=like_list.filter((like)=> like.id !== parseInt(li.id));
    saveLike();
}

function paintLike(likeObj){
    const li = document.createElement("li");
    li.id = likeObj.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerText = likeObj.item;
    btn.innerText = `✕`;

    li.appendChild(span);
    li.appendChild(btn);
    like_ul.appendChild(li);
    

    btn.addEventListener("click",deleteList)
    
}

function onSubmit(event){
    event.preventDefault();
    const like = like_input.value;
    like_input.value="";
    const likeObj = {
        item: like,
        id: Date.now()
    } 
    like_list.push(likeObj);
    paintLike(likeObj);
    saveLike();
}

like_form.addEventListener("submit",onSubmit);

const getLike = localStorage.getItem(LIKE_KEY);

if (getLike !== null){
    const parsedLike = JSON.parse(getLike);
    like_list = parsedLike;
    like_list.forEach(paintLike);
}
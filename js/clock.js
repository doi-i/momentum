const date = document.querySelector(".date");
const clock = document.querySelector(".clock");

function clockTiktok(){
    const forDate = new Date();
    const years = String(forDate.getFullYear());
    const monthes = String(forDate.getMonth()+1).padStart(2,"0");
    const dates = String(forDate.getDate()).padStart(2,"0");
    const hours = String(forDate.getHours()).padStart(2,"0");
    const minutes = String(forDate.getMinutes()).padStart(2,"0");
    date.innerText = `${years}/${monthes}/${dates}`;
    clock.innerText = `${hours}시${minutes}분`;


}

clockTiktok();
setInterval(clockTiktok,60000);
const clock=document.querySelector("#clock span:last-child");
const calendar=document.querySelector("#clock span:first-child");

const formatingClock=()=>{

    const now=new Date();

    const year=now.getFullYear();
    const month=String(now.getMonth()+1).padStart(2,"0");
    const date=String(now.getDate()).padStart(2,"0");

    calendar.innerText=`${year}-${month}-${date}`;

    const dt=new Date();

    const hours=String(dt.getHours()).padStart(2,"0");
    const minutes=String(dt.getMinutes()).padStart(2,"0");
    const seconds=String(dt.getSeconds()).padStart(2,"0");

    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

formatingClock();
setInterval(formatingClock,1000);

const getCalendar=()=>{
    const now=new Date();

    const year=now.getFullYear();
    const month=String(now.getMonth()+1).padStart(2,"0");
    const date=String(now.getDate()).padStart(2,"0");

    calendar.innerText=`${year}-${month}-${date}`;
}
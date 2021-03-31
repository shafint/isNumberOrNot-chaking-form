const input =document.querySelector(".input");
const number =document.querySelector(".number");


input.addEventListener("input",(event)=>{
    const value=event.target.value;
    if(isNaN(value)){
        number.classList.add("active");
            return false;
    }else{
        number.classList.remove("active");
    }
})
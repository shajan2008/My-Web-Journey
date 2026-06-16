let button = document.getElementById(`switch`);
let isDark = true;
button.addEventListener(`click`, function(){
    if(isDark){
       document.body.style.backgroundColor = `#FFD700`;
       isDark = false;
    }
    else{
        document.body.style.backgroundColor = `#0A0A0A`;
    }
});

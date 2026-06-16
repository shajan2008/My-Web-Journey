let toggle = document.getElementById(`togglebtn`);
toggle.addEventListener(`change`, function(){
    if(toggle.checked){
        document.body.style.backgroundColor = `white`;
    }
    else{
        document.body.style.backgroundColor = `#0A0A0A`;
    }
})
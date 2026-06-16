let toggle = document.getElementById(`togglebtn`);
let icon = document.querySelector(`.icon`);
toggle.addEventListener(`change`, function(){
    if(toggle.checked){
        document.body.style.backgroundColor = `white`;
        document.body.style.color = `black`;
        icon.textContent = `⭐️`;
        document.querySelectorAll(`td, th`).forEach(cell => {
            cell.style.color = `#000000`;
        })
    }
    else{
        document.body.style.backgroundColor = `black`;
        document.body.style.color =`#ffffff`;
        icon.textContent = `☀️`;
        document.querySelectorAll(`td, th`).forEach(cell => {
            cell.style.color = `#ffffff`;
        });
    }
})
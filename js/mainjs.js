    const list = document.querySelectorAll("li");
for(i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", (event) => {
        event.target.classList.add("contact");
    } );
}
for(i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseout", (event) => {
        event.target.classList.remove("contact");
    } );
}
    const inputs = document.getElementsByTagName("input");
for(i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", (event) => {
        console.log(event.target);
        event.target.placeholder = "";
    } );
}

    let scroll = document.getElementsByClassName("askme");
scroll[0].onclick = function() {
    window.scrollTo({
        top: 1018,
        behavior: "smooth"
    });
};
    let submit = document.getElementsByClassName("submit")[0];
    let alert = document.getElementsByClassName("alert")[0];
    let error = document.getElementsByClassName("error")[0];

    submit.onclick = function(){
        if (inputs[0].value !="" && inputs[1].value !="" && inputs[2].value !="" && document.getElementById("message").value != "" ){
            error.style.display ="none";
        for(q = 0; q < inputs.length; q++) {
            inputs[q].value = "";
        }
        document.getElementById("message").value = "";
        alert.style.display = "flex";
        submit.style.display = "none";
        setTimeout(function(){alert.style.display = "none"; submit.style.display = "block"; }, 3000);
        }else{
          error.style.display = "flex";
    
        } 
    };
document.getElementsByClassName("burger")[0].addEventListener("click", (event) => {
    document.getElementsByClassName("menu-burger")[0].classList.toggle("active");
    
});
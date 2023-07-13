let div = document.querySelector("div");

div.addEventListener("click", function(){
    this.style.background = "yellow";
});

console.log("STYLE------", div.style);
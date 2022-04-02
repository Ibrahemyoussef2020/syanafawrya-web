function asideScale() {
    document.getElementById("fixed-bar").style.transform ="translate(0%,0)scale(1.1,1.1)";  
}

function asideTranslate() {
    document.getElementById("fixed-bar").style.transform ="translate(-50%,0)scale(0,0)"  
}
/*****machine***** */
const  articleI = document.querySelectorAll("article > div");
const  articleB = document.querySelectorAll("article > p");

for(let s = 0 ; s < articleI.length ; s++){
    articleI[s].addEventListener("click" , _=>{
        articleB.forEach(e => {
            e.title == articleI[s].className ? e.classList.toggle("fit-content") : "";   
        });
    })
    console.log(articleI[s])
}

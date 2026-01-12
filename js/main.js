

var test=document.querySelector("h1")


var inc=document.querySelector(".btn-outline-success");
var rest=document.querySelector(".btn-outline-warning");
var dec=document.querySelector(".btn-outline-danger");

changeColor()

inc.addEventListener("click" , function(){
    
    test.innerHTML++;
    changeColor()
})
 
rest.addEventListener("click" , function(){
    test.innerHTML=0 ;
    changeColor()
})

dec.addEventListener("click" , function(){

    test.innerHTML--;
   changeColor()
})

function changeColor(){
     if(test.innerHTML < 0 ){
        test.classList.add("text-danger")
                test.classList.remove("text-success")

    }else{
        test.classList.remove("text-danger")
        test.classList.remove("text-success")
    }
    if(test.innerHTML == 0){
        test.classList.add("text-success")
    }
}
let btn = document.getElementById("myBtn");
let secBtn = document.getElementById("myBtnn");

let div = document.getElementById("myDiv");

function someFun(event){
 console.log(`Target element ${event.target.id} current element ${event.currentTarget}`);
    // count++;
    // console.log(`you have have clicked button ${count} times`);


}
let count =0 ;
btn.addEventListener("click", someFun);
secBtn.addEventListener("click", someFun);
div.addEventListener("click", someFun);
let body = document.body.addEventListener("click", someFun);



// /////////////////////////////////////////////////////


// let btn = document.getElementById("myBtn");
// let secBtn = document.getElementById("myBtnn");
// let div = document.getElementById("myDiv");
// let body = document.body.addEventListener("click", (e)=>{
//     if(e.target.id === "myBtn"){
//         console.log(`you click 1 ${e.target.id}`);
//     }else if(e.target.id === "myBtnn"){
//         console.log(`you click 2 ${e.target.id}`);
//     }else{
//         console.log(`Target element ${e.target.id} current element ${e.currentTarget}`);
//     }
// });

//btn.dataset.myNewBtn = "sushsilBk";

// ////////////////////////////////////////////////////////////

// let category = document.querySelector("#category");
// category.addEventListener("click", (e)=>{
//     console.log(e);
//     console.log(e.target);
//     if(e.target.tagName == "LI"){
//         window.location.href = "/"+e.target.id;
//     }
// })

// // ////////////////////////////////////////////////////////




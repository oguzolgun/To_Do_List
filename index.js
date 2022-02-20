let task = document.getElementById("input_");
let btn = document.getElementById("btn_");
let sonuc = document.getElementById("sonuc");
// let sonuc2 = document.querySelector("li");

btn.addEventListener("click", () => {
  const li = document.createElement('li');
  const input = document.createElement("input");
  const label = document.createElement("label");
  const btn2 = document.createElement("button");

  label.appendChild(document.createTextNode(task.value));
  btn2.appendChild(document.createTextNode("-"));

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(btn2);
  
  sonuc.appendChild(li);
  task.value ="";

  btn2.id="btn_2";
  label.id="labels";
  btn2.addEventListener("click", (e) => {
  e.target.parentElement.remove();
  }); 

    input.type = "checkbox";
    input.id ="checkbox"
    let box = document.querySelectorAll("input[type=checkbox]")
    box.forEach((e)=>{
      e.addEventListener("change", ()=>{
          if (e.checked == false){
              e.parentElement.style.backgroundColor = "yellow";
              e.parentElement.style.textDecoration = "none";
          }
          else{
              e.parentElement.style.backgroundColor = "green";
              e.parentElement.style.textDecoration = "line-through";
          }
      });
    });
});



























//   btn.addEventListener("click", ()=>{
//   let t = task.value;

//     sonuc.innerHTML += `<li id="list"><input type="checkbox" id="check"> ${t} <button id="btn2">-</button></li>`
          
    
//     console.log(sonuc2);
//     var btn2 = document.getElementById("btn2")
//     var list = document.getElementById("list")
//     var  tik = document.getElementById("check");

    
// });







// let tik = document.getElementById("check");
    
    // tik.addEventListener("checked", ()=>{
    //     t.style = "line-through";
    // });

//   let new_btn = document.createElement("button")
//   new_btn.setAttribute("id","btn2")
//             document.querySelector('ul').appendChild(new_btn);

// var btn2 = document.getElementById("btn2")
//     sonuc.innerHTML-= `<div><li><input type="checkbox" id="check">${t} <button id="btn2">-</button></li><div>`
// for (let i = 0; i < btn2.length; i++) {

//   btn2[i].removeEventListener('click', ()=>{

     
//       // liAl[i].className = "sil"

//     // tik[i].addEventListener("checked", ()=>{
//     //     t.style.text-decoration ; "line-through";
//     // });
//   });
  
// }
// console.log(btn2)
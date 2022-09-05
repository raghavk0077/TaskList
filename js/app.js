let addBtn = document.getElementById("addTaskBtn");
addBtn.addEventListener("click", addTask);

let count = 0;
let countId = 0;
function addTask(){
    let container = document.getElementById("container");

    let card = document.createElement("div");
    // card.setAttribute("id", `${count}`);
    // card.setAttribute("class", "taskCard");
    card.id = count;
    card.className = "taskCard";


    let title = String(prompt("Enter Title of your task"));
    let nos = Number(prompt("Enter the number of task items you want to add"));
    
    let items = new Array();
    for(let i = 0; i < nos; i++){
        items[i] = prompt("Enter your task item " + (i+1));
    }


    card.innerHTML += `<h2>${title}</h2>`;

    for(let i = 0; i < nos; i++){
        card.innerHTML += `<h4>
                                <input type="checkbox" onclick="check(item${countId}, label${countId})" id="item${countId}">
                                <label for="item${countId}" id = "label${countId}">${items[i]}</label>
                            </h4>`
        countId++;
    }

    card.innerHTML+=`<btn class="delBtn" id="delBtn" onclick="del(${card.id})"><i class="fa-solid fa-trash"></i></btn>`
    
    container.appendChild(card);
    count++;
}

function check(item_id, label_id){

    // let ITEM_ID = item_id;
    // let LABEL_ID =  label_id;

    if(item_id.checked == true){
        label_id.style.textDecorationLine="line-through";
        label_id.style.color="#C2C2C2";
    }
    else{
        label_id.style.textDecorationLine="none";
        label_id.style.color="black";
    }
}

function del(card_id)
{
    const b=document.getElementById(card_id);
    b.remove();
}

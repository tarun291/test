var button = document.getElementById("btn")
var ip = document.getElementById("ipt")
var parent = document.getElementById("parent");















ip.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addToDo(ip.value);
    }
})
button.addEventListener("click", function (event) {
    addToDo(ip.value);
})
function addToDo(value){
    if (!value) {
        return;
    }
    var todoContainer = document.createElement("div");
    parent.appendChild(todoContainer);
    var textNode = document.createElement("p");
    textNode.innerHTML = value;
    todoContainer.appendChild(textNode);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    todoContainer.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        parent.removeChild(todoContainer)
    })
    var readButton = document.createElement("button");
    readButton.innerHTML = "read";
    todoContainer.appendChild(readButton);
    readButton.addEventListener("click", function () {
        textNode.style.textDecoration = "line-through";
    })
    ip.value = "";
    var todos=localStorage.getItem("todos");
    if(todos){
        //converts into arry from string
        todos=JSON.parse(todos);
    }else{
        todos=[];
    }
    todos.push(value);
    console.log(todos)
    todos=JSON.stringify(todos);
    localStorage.setItem("todos",todos);
}


function checkValidTodo(value){
    if(value){
        return true;
    }
    return false;
}
function getTodos(){
    var todos=localStorage.getItem("todos");
    if(todos){
        return JSON.parse(todos);
    }
    return [];    
}



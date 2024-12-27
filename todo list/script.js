
const input=document.getElementById('input');

const task=[];
const ul=document.getElementById('ul');
const li=document.getElementsByTagName('li');
function addTask(){
    task.push(input.value);
    input.value='';
    render();
}
function render(){
    list.innerHTML='';
    task.forEach((item)=>{
        const li=document.createElement('li');
        li.innerHTML=item;
        list.appendChild(li);
    });
}
function removeTask(){
    task.pop();
    render();
}
function clearAll(){
    task.length=0;
    render();
}


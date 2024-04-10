document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", e =>{
    e.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description").value;
    BuildTasks(newTaskDescription);
    form.reset(); 
    
   
  })
});


function BuildTasks(task){
 // console.log(task)
  const p = document.createElement("p")
  p.textContent = task;
  document.querySelector("#tasks").appendChild(p);
  const btn = document.createElement("button");
  btn.textContent = "DELETE"
  p.appendChild(btn)
  btn.addEventListener("click", deleteTask)
}

function deleteTask(e){
  e.target.parentNode.remove();
}
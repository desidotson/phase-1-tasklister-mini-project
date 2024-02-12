document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form'); 
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskDescription = document.querySelector("#new-task-description");
    handleTask(taskDescription.value);
  })
})

function handleTask(task){
  const li = document.createElement('li')
  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'remove'
  li.textContent = task
  li.appendChild(btn)

  document.querySelector("#tasks").appendChild(li)
}

function handleDelete (e){
   e.target.parentNode.remove()
}
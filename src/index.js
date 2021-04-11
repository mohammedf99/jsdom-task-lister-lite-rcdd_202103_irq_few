document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  
  form.addEventListener('submit', function(){
    const li = document.createElement('li');
    li.innerText = input.value;
    
  })
});

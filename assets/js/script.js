window.onload = function () {
    countUncheckedTodos(); 
  };
  
  const form = document.querySelector("form");
  const allTodoLists = document.querySelector(".all-todos"); 
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    createTodo();
  });
  
  function createTodo() {
    const todoText = form.addTodo.value.trim();
  
    if (todoText === "") {
      return;
    }
  
    const li = document.createElement("li");
    li.classList.add("todos");
    li.className = '.todo-item';
    li.innerHTML = `
      <input type="checkbox" class="isCompleted" onclick="isCompleted(this)"/>
      <span>${todoText}</span>
      <button class="delete" onclick="deleteTodo(this)">Delete</button>
      <button class="edit" onclick="editTodo(this)">Edit</button>
    `;
  
    allTodoLists.appendChild(li);
    form.addTodo.value = "";
  
    updatecounterVisibility();
    countUncheckedTodos()
  }
  
  function deleteTodo(button) {
    const listItem = button.parentNode;
    listItem.remove();
    updatecounterVisibility();
    countUncheckedTodos()
  }
  
  function editTodo(button) {
    const listItem = button.parentNode;
    const span = listItem.querySelector("span");
    const inputField = document.createElement("input");
    inputField.className = "input-field";
    inputField.type = "text";
    inputField.value = span.innerText;
  
    listItem.replaceChild(inputField, span);
  
    inputField.select();
    inputField.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const trimmedValue = inputField.value.trim();
        if (trimmedValue !== "") {
          span.innerText = trimmedValue;
          listItem.replaceChild(span, inputField);
          updatecounterVisibility();
          countUncheckedTodos()
        }
      }
    });
  }
  
  function isCompleted(event) {
    const span = event.nextElementSibling;
    span.classList.toggle("active");
    updatecounterVisibility();
    countUncheckedTodos()
  }
  
  const last__listItem = document.createElement("div");
  last__listItem.className = "counter-container";
  
  const counter = document.createElement("div");
  counter.className = "counter";
  last__listItem.appendChild(counter);
  
  const last__listItem1 = document.createElement("button");
  last__listItem1.className = "btns";
  const last__listItem2 = document.createElement("button");
  last__listItem2.innerHTML = "All";
  last__listItem2.className = "btns";
  const last__listItem3 = document.createElement("button");
  last__listItem3.innerHTML = "Active";
  last__listItem3.className = "btns";
  const last__listItem4 = document.createElement("button");
  last__listItem4.innerHTML = "Completed";
  last__listItem4.className = "btns";
  
  const last__listItem5 = document.createElement("button");
  last__listItem5.innerHTML = "Clear Completed";
  last__listItem5.className = "btns";
  
  counter.appendChild(last__listItem1);
  counter.appendChild(last__listItem2);
  counter.appendChild(last__listItem3);
  counter.appendChild(last__listItem4);
  counter.appendChild(last__listItem5);
  const todo__main = document.querySelector('.todo__main');
  todo__main.appendChild(last__listItem);

  function countUncheckedTodos() {
       const todos = document.querySelectorAll('.all-todos li'); 
      let uncheckedCount = 0; 
    todos.forEach(function(todo) {
         const checkbox = todo.querySelector('.isCompleted');
        if (checkbox && !checkbox.checked) {
        uncheckedCount++;
      }
    });
    last__listItem1.innerHTML = ` ${uncheckedCount} items left`;
  }
  function updatecounterVisibility() {
    const todos = document.querySelectorAll(".all-todos li");
    const last__listItem = document.querySelector(".counter-container");
  
    if (todos.length > 0) {
      last__listItem.style.display = "flex";
    } else {
      last__listItem.style.display = "none";
    }
  }
  last__listItem2.addEventListener("click", showAll);
  last__listItem3.addEventListener("click", showActive);
  last__listItem4.addEventListener("click", showCompleted);
  last__listItem5.addEventListener("click", clearCompleted);
  function showAll() {
    const todos = document.querySelectorAll(".all-todos li");
    todos.forEach(function (todo) {
      todo.style.display = "inline-flex";
    });
    updatecounterVisibility();
  }
  function showActive() {
    const todos = document.querySelectorAll(".all-todos li");
    todos.forEach(function (todo) {
      const checkbox = todo.querySelector(".isCompleted");
      if (checkbox && !checkbox.checked) {
        todo.style.display = "inline-flex";
      } else {
        todo.style.display = "none";
      }
    });
    updatecounterVisibility();
  }
  function showCompleted() {
    const todos = document.querySelectorAll(".all-todos li");
    todos.forEach(function (todo) {
      const checkbox = todo.querySelector(".isCompleted");
      if (checkbox && checkbox.checked) {
        todo.style.display = "inline-flex";
      } else {
        todo.style.display = "none";
      }
    });
    updatecounterVisibility();
  }
  function clearCompleted() {
    const todos = document.querySelectorAll(".all-todos li");
    todos.forEach(function (todo) {
      const checkbox = todo.querySelector(".isCompleted");
      if (checkbox && checkbox.checked) {
        todo.remove();
      }
    });
    updatecounterVisibility();
  }
  document.addEventListener('DOMContentLoaded', function () {
    const moonIcon = document.querySelector('.moon');
    const sunIcon = document.querySelector('.sun');
    const background = document.querySelector('.background');
    const body = document.body;
    const todoMain = document.querySelector('.todo__main');
    const input = document.querySelector('.input__main');
    const allTodos = document.querySelectorAll('.container ul li'); 
    const btns = document.querySelectorAll('.btns');
    const allTodoItems = document.querySelectorAll('.todo-item');
    const checker = document.querySelector('.isCompleted');
    const container = document.querySelector('.container');
    const allTodoItemss = document.querySelector('.all-todos');
    moonIcon.addEventListener('click', () => {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
      const backgroundImage = background.querySelector('.lightMode');
      if (backgroundImage) {
        backgroundImage.src = './assets/images/DarkModeBAckground.png';
      }
      body.style.backgroundColor = '#171823';
      container.style.backgroundColor = '#27253D !important';
      todoMain.style.boxShadow = '0px 35px 50px -15px rgba(0, 0, 0, 0.50)';
      input.style.backgroundColor = '#25273D';
      btns.forEach(e => {
        e.style.color = '#5B5E7E';
      });
      allTodoItemss.style.backgroundColor = '#25273D !important';
      counter.style.backgroundColor = '#25273D';
      // checker.style.backgroundColor = '#25273D';
      allTodos.forEach(li => {
        li.classList.add('todo-itemm');
        li.style.backgroundColor = '#25273D';
      });
          });
      sunIcon.addEventListener('click', () => {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
        const backgroundImage = background.querySelector('.lightMode');
      if (backgroundImage) {
        backgroundImage.src = './assets/images/LightModeBackground.png';
      }
        body.style.backgroundColor = '#fff';
      todoMain.style.boxShadow = '0px 35px 50px -15px rgba(194, 195, 214, 0.50)';
      input.style.backgroundColor = '#fff';
        allTodos.forEach(li => {
        li.style.color = '';
        li.style.backgroundColor = ''; 
      });
        btns.forEach(e => {
        e.style.color = ''; 
      });
        allTodoItems.forEach(li => {
        li.style.color = ''; 
        li.style.backgroundColor = '#fff'; 
      });
      console.log(allTodoItems);
      counter.style.backgroundColor = '';
    });
    
   
  });

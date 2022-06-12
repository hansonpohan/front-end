const addBtn = document.querySelector('#add-btn')
const myTodo = document.querySelector('#my-todo')
const input = document.querySelector('#new-todo')
let todoList = (JSON.parse(localStorage.getItem('todoList')) === []) ? [] : JSON.parse(localStorage.getItem('todoList'))

function addElement(text) {
  let newList = document.createElement('li')
  newList.innerHTML += `
  <label>${text}</label><i class="delete fa fa-trash"></i>
  `
  myTodo.appendChild(newList)
  todoList.push(text)
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

addBtn.addEventListener('click', event => {
  const value = input.value
  addElement(value)
  input.value = ''
})

function setStorage() {
}

function renderTodoList() {
  let htmlContent = ''
  todoList.forEach(element => {
    htmlContent += `<li><label>${element}</label><i class="delete fa fa-trash"></i><li>`
  })
  myTodo.innerHTML = htmlContent
}


renderTodoList()

myTodo.addEventListener('click', event => {
  const target = event.target
  const innerText = event.target.innerText
  if (target.classList.contains('delete')) {
    removeElement(target)
  } else if (target.tagName === 'LABEL') {
    target.classList.toggle('checked')
  }
})

function removeElement(target) {
  // 取得target.parentElement.firstChildren.innerText 去filter陣列摒除了此值其餘加入新陣列
  const text = target.parentElement.firstElementChild.innerText
  todoList = todoList.filter(element => element !== text)
  target.parentElement.remove()
  localStorage.setItem('todoList', JSON.stringify(todoList))
}


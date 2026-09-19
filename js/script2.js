const tasks = ["task 1", "task 2", "task 3"];

function displayTasks() {
    console.clear()
    tasks.forEach((task, index) => {
        console.log(`${index + 1} => task name: ${task}`)
    })
}

function updateTask() {
    let selectedIndex = +prompt("enter task to update")
    let updatedTask = prompt("enter new task name")
    tasks.splice(selectedIndex - 1, 1, updatedTask)
    displayTasks()
}
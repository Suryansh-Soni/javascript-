// task
let todo = [];
let mode = prompt("Enter a command (add, list, delete, quit)");

while (true) {
  if (mode === "quit") {
    console.log("Quitting...");
    break;
  }

  if (mode === "add") {
    let task = prompt("Enter a task");
    todo.push(task);
    console.log("Task added");
  } else if (mode === "list") {
    console.log("----------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("----------");
  } else if (mode === "delete") {
    let idx = prompt("Enter the index to be deleted");
    todo.splice(idx, 1);
    console.log("Task deleted");
  } else {
    console.log("Incorrect request");
  }

  mode = prompt("Enter a command (add, list, delete, quit)");
}

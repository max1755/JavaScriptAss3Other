// DomContentLoaded event fires when html document loads
// Connecting with html inputs, and buttons to create a basic todo list
document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('userInput');
  const newButton = document.getElementById('newButton');
  const listItems = document.getElementById('listItems');
  const completedItems = document.getElementById('completedItems');
  const ding = document.getElementById('ding');

  // Letting the user add tasks in a list
  const addTask = () => {
      const text = userInput.value;
      if (!text) return;
      const task = document.createElement('li');
      task.textContent = text;
      task.classList.add('task');

      // Checkbox created so user can check off each task once completed
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
          task.classList.add('checked');
          ding.play();
          if(checkbox.checked) {
            completedItems.append(task);
          } else {
            listItems.append(task);
            task.classList.remove('checked'); //Removing an item from the completed side
          }
      });

      // Delete button created to remove the task entirely 
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => {
          task.remove();
      });

      task.prepend(checkbox);// Prepend puts checkbox before task
      task.append(deleteButton);// Append puts delete button after
      listItems.append(task);
      userInput.value = '';
  };

  // This creates an event to make the new button clickable to enter a task
  newButton.addEventListener('click', addTask);

  // This creates an alternative to clicking new button, by just hitting enter key to add a task
  userInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});

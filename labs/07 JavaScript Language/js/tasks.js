// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

function removeDuplicates() {
    'use strict';

    var newList = [];
    var count = 0;
    var start = false;
    for (var i = 0; i < tasks.length; i++) {
        for (var j = 0; j < newList.length; j++) {
            if ( tasks[i] === newList[j] ) {
                start = true;
            }
        }
        count++;
        if (count === 1 && start === false) {
            newList.push(tasks[i]);
        }
        start = false;
        count = 0;
    }
    tasks = newList;
    tasks.pop();
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Filter event
filter.addEventListener('keyup', filterItems);
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', deleteItem);

var locStorageLen = localStorage.length; // grabs the length of local storage (number of unique keys and values)
// Delete item from the item list:
function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        // This if statement helps the event listener for the deleteItem function and focus on the delete button.
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            localStorage.removeItem(e.target.parentElement.firstChild.textContent);
        }
    }
}
if (locStorageLen == 0) {
    console.log("Local storage is empty");
} else {
    for (i = 0; i <= locStorageLen - 1; i++) {
        // looping through the local storage keys and grabing the unique key names.
        var itemNameLS = localStorage.key(i);
        // Create a new li elemnet
        var li = document.createElement('li');

        // Add class
        li.className = 'list-group-item';
        // Add text node with input value
        li.appendChild(document.createTextNode(itemNameLS));
        // Create delete button element
        var delButton = document.createElement('button');
        // Add classes to delete button
        delButton.className = "btn btn-danger btn-sm float-right delete";
        // Append text node
        delButton.appendChild(document.createTextNode("X"));
        // Add delete button
        li.appendChild(delButton);

        // Add new list-item to the list
        itemList.appendChild(li);
    }
}

// Add Item function:
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('input-item').value; // get the input value

    // Create a new li elemnet
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create delete button element
    var delButton = document.createElement('button');
    // Add classes to delete button
    delButton.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    delButton.appendChild(document.createTextNode("X"));
    // Add delete button
    li.appendChild(delButton);

    // Add new list-item to the list
    if (newItem === '') { // pervent empty inputs into the item list
        console.log("Empty input");
    } else {
        itemList.appendChild(li);
        // Local Storage:
        localStorage.setItem(newItem, newItem); // cretaing a new local storage key and value.
    }
}
// Filter Item function:
function filterItems(e) {
    //covert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list items 
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none';
        }
    });

}

// localStorage.clear() // Clears all data from local storage
/*
Make a Todo List

0. Make it so that after entering the task description, in the text field and clicking the "Add Task" button, a new task appears inside the element with the id todo-list.
1. the ability to remove tasks (add an x button)
2. the ability to check off tasks - strikes them out wo removing (add a checkbox)
3. the ability to delete a task
4. the ability to edit an existing task

*/

$('#addButton').on('click', function(event) {
	if ($('#deleteMe').text() != '') {
		//if the placeholder li item is still present, delete it the first time the user adds a to-do item
		// console.log($('#deleteMe').text());
		$('#deleteMe').remove();
	}
	var $taskText = $('#description').val(); //get the text from the input box
	// console.log($taskText);
	$('#todo-list').append(
		// `<li><span>X </span><input type="checkbox" class="cbox"></input> ${$taskText} <div class="edit"></div></li>`
		`<li><button class="delete">X</button> <input type="checkbox" class="cbox"><input type="text" value="test" style="display: none;"></input> ${$taskText} <div class="edit"></div></li>`
	); //add the text we've entered in the input field as an li item in our list
	// $('#todo-list').append(`<input type="text" value="test" style="display: none;" class="hidden">`);
	$('#description').val(''); //reset the input field to blank
});

//delete a to-do item by clicking on X
$('ul').on('click', '.delete', function(event) {
	$(this).parent().fadeOut(500, function(event) {
		$(this).remove(); //we don't need parent again here since we've already selected the parent on the line above
	}); //.parent selects the parent, in this case the li tag that encloses our span
	event.stopPropagation(); //this will prevent other events from triggering as a result of this span being clicked
	//in this case, this span is inside an li, and we have seperate event listeners for that li that otherwise will trigger, too
});

//grey out and strike through the text when the checkbox is clicked
$('ul').on('click', '.cbox', function() {
	// console.log('cbox clicked');
	$(this).parent().toggleClass('completed'); //we already selected the cbox, whose parent is the li item, and that is when needs the class toggle
});

//edit existing list items
$('ul').on('click', '.edit', function() {
	// console.log('pencil clicked');
	var $taskPlaceholder = $(this).parent().text(); //this stores the previous task in case the user decides not to edit it after all
	// console.log($taskPlaceholder);
	var liHTMLPlaceholder = $(this).parent().html(); //this stores all the html of the li item
	// console.log(liHTMLPlaceholder);
	$(this).parent().html(`<input type="text"></input>`); //this is the exact same html format as before for the li item, minus any text that was within it.

	$("input[type='text']").on('keypress', function(event) {
		if (event.which === 13) {
			//13 is the enter key
			var $newToDoText = $(this).val();
			console.log($newToDoText);
			//create a new li and add to ul
			$(this)
				.parent()
				.html(
					`<button class="delete">X</button> <input type="checkbox" class="cbox"><input type="text" value="test" style="display: none;"></input> ${$newToDoText} <div class="edit"></div></<button>`
				);
			$("input[type='text']").off('keypress'); //*IMPORTANT* this turns off the keypress event listener we turned on earlier. Important b/c if we dont turn it off the user can hit enter at a later time and the code will have a coniption
		}
	});
});

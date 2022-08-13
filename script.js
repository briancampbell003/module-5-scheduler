// Use dayjs to display today's date
let today = dayjs().format("dddd, MM/DD/YYYY");
$("#currentDay").text(today);

// Call previous entries from local storage
let oldEntries = JSON.parse(localStorage.getItem("SavedItems")) || [];
for (let i = 0; i < oldEntries.length; i++) {
    // Set variables holding data for saved events
    let rowDiv = oldEntries[i].row;
    let savedText = oldEntries[i].text;

    // Populate block with matching saved text
    $("#"+rowDiv).children(1).children(1).children().val(savedText);
    
}

// Save new values with button using event target logic
let saveBtn = $(".saveBtn");
saveBtn.on('click', function( event ) {
    event.preventDefault();
    // Use jQuery logic to capture rowid and corresponding event to save
    let targetRow = $(event.target).parent().parent();
    let textToSave = targetRow.children(1).children().children().val();
    let rowAndText = {row: targetRow.attr("id"), text: textToSave};
    
    // Create and store array with saved items
    let arrayToSave = JSON.parse(localStorage.getItem("SavedItems")) || [];
    arrayToSave.push(rowAndText);
    localStorage.setItem("SavedItems", JSON.stringify(arrayToSave));

});



// Add color displays based on current time
let hour = dayjs().hour();
if (hour > 8) {
    $("#8am-block").addClass("bg-light");
} else if (hour < 8) {
    $("#8am-block").addClass("bg-success");
} else {
    $("#8am-block").addClass("bg-danger");
}

if (hour > 9) {
    $("#9am-block").addClass("bg-light");
} else if (hour < 9) {
    $("#9am-block").addClass("bg-success");
} else {
    $("#9am-block").addClass("bg-danger");
}

if (hour > 10) {
    $("#10am-block").addClass("bg-light");
} else if (hour < 10) {
    $("#10am-block").addClass("bg-success");
} else {
    $("#10am-block").addClass("bg-danger");
}

if (hour > 11) {
    $("#11am-block").addClass("bg-light");
} else if (hour < 11) {
    $("#11am-block").addClass("bg-success");
} else {
    $("#11am-block").addClass("bg-danger");
}

if (hour > 12) {
    $("#12pm-block").addClass("bg-light");
} else if (hour < 12) {
    $("#12pm-block").addClass("bg-success");
} else {
    $("#12pm-block").addClass("bg-danger");
}

if (hour > 13) {
    $("#1pm-block").addClass("bg-light");
} else if (hour < 13) {
    $("#1pm-block").addClass("bg-success");
} else {
    $("#1pm-block").addClass("bg-danger");
}

if (hour > 14) {
    $("#2pm-block").addClass("bg-light");
} else if (hour < 14) {
    $("#2pm-block").addClass("bg-success");
} else {
    $("#2pm-block").addClass("bg-danger");
}

if (hour > 15) {
    $("#3pm-block").addClass("bg-light");
} else if (hour < 15) {
    $("#3pm-block").addClass("bg-success");
} else {
    $("#3pm-block").addClass("bg-danger");
}

if (hour > 16) {
    $("#4pm-block").addClass("bg-light");
} else if (hour < 16) {
    $("#4pm-block").addClass("bg-success");
} else {
    $("#4pm-block").addClass("bg-danger");
}

if (hour > 17) {
    $("#5pm-block").addClass("bg-light");
} else if (hour < 17) {
    $("#5pm-block").addClass("bg-success");
} else {
    $("#5pm-block").addClass("bg-danger");
}

if (hour > 18) {
    $("#6pm-block").addClass("bg-light");
} else if (hour < 18) {
    $("#6pm-block").addClass("bg-success");
} else {
    $("#6pm-block").addClass("bg-danger");
}
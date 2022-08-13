let today = dayjs().format("dddd, MM/DD/YYYY");
$("#currentDay").text(today);

let hour = dayjs().hour();

// Call previous entries from local storage
let oldEntries = JSON.parse(localStorage.getItem("SavedItems")) || [];
for (let i = 0; i < oldEntries.length; i++) {
    // let populateMe = oldEntries[i].row.children(1).children().children();
    let rowDiv = oldEntries[i].row;
    // $("rowDiv").children(1).children(1).text = oldEntries[i].text;
    $("rowDiv").children(1).children(1).text = "Hello!";

    console.log(oldEntries);
}

// Save values with button using event target logic
let saveBtn = $(".saveBtn");
saveBtn.on('click', function( event ) {
    event.preventDefault();
    let targetRow = $(event.target).parent().parent();
    let textToSave = targetRow.children(1).children().children().val();
    let rowAndText = {row: targetRow.attr("id"), text: textToSave};
    let arrayToSave = JSON.parse(localStorage.getItem("SavedItems")) || [];
    arrayToSave.push(rowAndText);
    localStorage.setItem("SavedItems", JSON.stringify(arrayToSave));

    console.log(targetRow);
    console.log("something");
    console.log(textToSave);
});



// Add color displays based on current time
if (hour < 8) {
    $("#8am-block").addClass("bg-light");
} else if (hour > 8) {
    $("#8am-block").addClass("bg-success");
} else {
    $("#8am-block").addClass("bg-danger");
}

if (hour < 9) {
    $("#9am-block").addClass("bg-light");
} else if (hour > 9) {
    $("#9am-block").addClass("bg-success");
} else {
    $("#9am-block").addClass("bg-danger");
}

if (hour < 10) {
    $("#10am-block").addClass("bg-light");
} else if (hour > 10) {
    $("#10am-block").addClass("bg-success");
} else {
    $("#10am-block").addClass("bg-danger");
}

if (hour < 11) {
    $("#11am-block").addClass("bg-light");
} else if (hour > 11) {
    $("#11am-block").addClass("bg-success");
} else {
    $("#11am-block").addClass("bg-danger");
}

if (hour < 12) {
    $("#12pm-block").addClass("bg-light");
} else if (hour > 12) {
    $("#12pm-block").addClass("bg-success");
} else {
    $("#12pm-block").addClass("bg-danger");
}

if (hour < 13) {
    $("#1pm-block").addClass("bg-info");
} else if (hour > 13) {
    $("#1pm-block").addClass("bg-success");
} else {
    $("#1pm-block").addClass("bg-danger");
}

if (hour < 14) {
    $("#2pm-block").addClass("bg-light");
} else if (hour > 14) {
    $("#2pm-block").addClass("bg-success");
} else {
    $("#2pm-block").addClass("bg-danger");
}

if (hour < 15) {
    $("#3pm-block").addClass("bg-light");
} else if (hour > 15) {
    $("#3pm-block").addClass("bg-success");
} else {
    $("#3pm-block").addClass("bg-danger");
}

if (hour < 16) {
    $("#4pm-block").addClass("bg-light");
} else if (hour > 16) {
    $("#4pm-block").addClass("bg-success");
} else {
    $("#4pm-block").addClass("bg-danger");
}

if (hour < 17) {
    $("#5pm-block").addClass("bg-light");
} else if (hour > 17) {
    $("#5pm-block").addClass("bg-success");
} else {
    $("#5pm-block").addClass("bg-danger");
}

if (hour < 18) {
    $("#6pm-block").addClass("bg-light");
} else if (hour > 18) {
    $("#6pm-block").addClass("bg-success");
} else {
    $("#6pm-block").addClass("bg-danger");
}
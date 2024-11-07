// WAP to read five subject marks and print total marks and grade
// Grade:
// >=60% - First
// >=45% and <60% - Second
// >=35% and <45% - Third
// <35% - Fail

let hindi = parseInt(prompt("Enter Hindi Marks "));
let english = parseInt(prompt("Enter English Marks "));
let math = parseInt(prompt("Enter Math Marks "));
let physics = parseInt(prompt("Enter Physics Marks "));
let chemistry = parseInt(prompt("Enter Chemistry Marks "));

document.write("Hindi Marks: " + hindi + "<br>");
document.write("English Marks: " + english + "<br>");
document.write("Math Marks: " + math + "<br>");
document.write("Physics Marks: " + physics + "<br>");
document.write("Chemistry Marks: " + chemistry + "<br>");

let total = hindi + english + math + physics + chemistry;
let percentage = (total / 500) * 100; // Calculate percentage

document.write("Total Marks: " + total + " / 500<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>"); // Display percentage

// Determine the grade based on percentage
let grade;
if (percentage >= 60) {
    grade = "First";
} else if (percentage >= 45) {
    grade = "Second";
} else if (percentage >= 35) {
    grade = "Third";
} else {
    grade = "Fail";
}

document.write("Grade: " + grade + "<br>");

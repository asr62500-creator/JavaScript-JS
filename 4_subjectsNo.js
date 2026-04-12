let m1 = Number(prompt("Enter marks of subject 1:"));
let m2 = Number(prompt("Enter marks of subject 2:"));
let m3 = Number(prompt("Enter marks of subject 3:"));
let m4 = Number(prompt("Enter marks of subject 4:"));

let sum = m1 + m2 + m3 + m4;
let avg = sum / 4;

document.write("Total marks: " + sum + "<br>");
document.write("Average marks: " + avg);
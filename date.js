// Get Date and Year
let currentDate = new Date().toLocaleDateString();
let date = document.getElementById('date');

let currentYear = new Date().getFullYear();
let year = document.getElementById('year');

date.textContent = currentDate;

year.textContent = currentYear;

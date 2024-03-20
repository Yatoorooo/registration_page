'use strict';
function displayData() {
    let form = document.getElementById("registrationForm");
    let formData = new FormData(form);

    let tableHTML = "<h2>Реєстраційні дані</h2><table>";
    for (let pair of formData.entries()) {
        tableHTML += "<tr><td>" + pair[0] + "</td><td>" + pair[1] + "</td></tr>";
    }
    tableHTML += "</table>";

    let registrationDetailsDiv = document.getElementById("registrationDetails");
    registrationDetailsDiv.innerHTML = tableHTML;
}
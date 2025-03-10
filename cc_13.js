//Task 2: Adding Employee Cards Dynamically
document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");

    function addEmployeeCard(name, position) {
        const card = document.createElement("div");
        card.classList.add("employee-card");

        const nameElem = document.createElement("h3");
        nameElem.textContent = name;

        const positionElem = document.createElement("p");
        positionElem.textContent = position;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        card.appendChild(nameElem);
        card.appendChild(positionElem);
        card.appendChild(removeBtn);
        employeeContainer.appendChild(card);
    }

    // Test Cases
    addEmployeeCard("Alice Johnson", "Software Engineer");
    addEmployeeCard("Bob Smith", "Project Manager");
});


//Task 3: Bulk Update on Employee Cards
function highlightAllEmployees() {
    const cards = Array.from(document.querySelectorAll(".employee-card"));
    cards.forEach(card => {
        card.style.border = "2px solid blue";
        card.style.backgroundColor = "#f0f8ff";
    });
}

// Test Case
highlightAllEmployees();

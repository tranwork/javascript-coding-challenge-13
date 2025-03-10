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


//Task 4: Employee Card Removal with Event Bubbling
employeeContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        event.stopPropagation();
        event.target.parentElement.remove();
    } else {
        console.log("Employee Card Clicked");
    }
});


//Task 5: Inline Editing for Employee Cards
employeeContainer.addEventListener("dblclick", (event) => {
    const card = event.target.closest(".employee-card");
    if (!card) return;

    const nameElem = card.querySelector("h3");
    const positionElem = card.querySelector("p");

    const nameInput = document.createElement("input");
    nameInput.value = nameElem.textContent;

    const positionInput = document.createElement("input");
    positionInput.value = positionElem.textContent;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";

    card.innerHTML = "";
    card.appendChild(nameInput);
    card.appendChild(positionInput);
    card.appendChild(saveBtn);

    saveBtn.addEventListener("click", () => {
        nameElem.textContent = nameInput.value;
        positionElem.textContent = positionInput.value;

        card.innerHTML = "";
        card.appendChild(nameElem);
        card.appendChild(positionElem);
        card.appendChild(saveBtn);
    });
});

 # Employee Management System Dashboard

##  Challenge Overview
This project is an **interactive dashboard** for managing employees in a company. It demonstrates **DOM manipulation**, **event handling**, and **dynamic content updates** to simulate a real-world employee management system.

##  Features
- **Dynamically Add Employee Cards**  
- **Bulk Update Employee Cards**  
- **Remove Employee Cards with Event Bubbling**  
- **Inline Editing of Employee Details**

##  Tasks Implemented
###  Task 1: Base Structure Created
- Set up the basic **HTML structure** with semantic elements.
- Added a container `<div id="employeeContainer">` for dynamic employee cards.
- Included placeholder content in the **header** and **footer**.

###  Task 2: Dynamic Employee Cards
- Created employee cards dynamically using **JavaScript**.
- Each card contains:
  - Employee **name**
  - Employee **position**
  - A **Remove** button.

###  Task 3: Bulk Update Using NodeLists
- Used **querySelectorAll** to select all employee cards.
- Converted **NodeList to an Array** and applied bulk updates (e.g., styling changes).

###  Task 4: Remove Employee Cards & Event Bubbling
- Implemented **remove functionality** for employee cards.
- Used **event delegation** on the parent container.
- **Stopped event propagation** for specific elements.

###  Task 5: Inline Editing for Employee Cards
- Enabled **double-click editing** on employee cards.
- Allowed users to **modify employee details** dynamically.
- Provided a **Save** button to update the details.
# Kanban Board and To-Do Web Application

A clean, production-ready Kanban-style task management web application created by Aromaphilic Deepak. This application features dynamic task creation, native drag-and-drop mechanics across multi-stage workflows, and persistent local database memory.

## Key Features

* **Multi-Stage Kanban Workflow:** Track your daily work lifecycle across three dedicated semantic columns: To_Do, In Progress, and Done.
* **Native Drag-and-Drop System:** Built using native HTML5 drag attributes to seamlessly move cards between lanes with real-time UI highlight states using hover-over classes.
* **Local Database Engine:** Uses the browser's localStorage API to cache task titles, details, and column coordinates so your workflow stays intact through page refreshes.
* **Modal Task Inputs:** A streamlined pop-up container to quickly input titles and summaries, automatically clearing the input fields upon task creation.
* **Automated Lane Metrics:** Smart DOM counters inside each column that track item metrics automatically.

## Tech Stack and Structure

The application runs completely client-side without any third-party libraries or external frameworks:

* **index.html:** Controls the semantic structure, navigation layers, main kanban layout wrappers, and the modal element.
* **style.css:** Dictates the visual aesthetic, flexbox board grids, modal positioning transitions, and drag states.
* **script.js:** Handles DOM event listeners, state hydration, dynamic node mutations, and local storage syncing.

## How to Run Locally

1. Clone or download this project folder onto your local system.
2. Open the folder and double-click the index.html file to instantly run the application in your primary web browser.
3. Add a few cards, test dragging them between columns, and refresh the page to witness the active database preservation.

# React Todo List

A simple and interactive Todo List application built with React. This project demonstrates the use of React hooks, component structure, and local storage for persistent state management.

## Features

- Add new tasks to your todo list
- Mark tasks as completed
- Delete individual tasks
- Delete all tasks at once
- Tasks persist in local storage
- Responsive and clean UI with Tailwind CSS

## Folder Structure

```
TODOLIST/
├── src/
│   ├── Components/
│   │   ├── Hooks/
│   │   │   ├── StateHelper.jsx
│   │   │   ├── TodoAdd.jsx
│   │   │   ├── TodoDate.jsx
│   │   │   ├── TodoMap.jsx
│   │   │   ├── TodoDeleteAll.jsx
│   │   │   ├── LocalStaorage.js
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Todo-List-by-React.git
   cd Todo-List-by-React/TODOLIST
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Usage

- Enter a task in the input field and press "Add" to add it to your list.
- Click the checkbox to mark a task as completed.
- Click the delete icon to remove a single task.
- Click "Delete All" to clear the entire list.

## Technologies Used

- React
- Tailwind CSS
- JavaScript (ES6+)
- Local Storage API

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

**Happy Coding!**
# Desktop Todo Application with Electron, React, and TypeScript

A modern desktop todo application that demonstrates the integration of Electron.js with React and TypeScript, featuring IPC communication and file-system-based data persistence.

## 🚀 Features

- Cross-platform desktop application
- React-based user interface with TypeScript
- Electron IPC communication between main and renderer processes
- File system persistence for todos
- Real-time updates and state management
- Error handling and validation
- Modern UI with responsive design

## 🛠️ Tech Stack

- Electron.js - Desktop application framework
- React - UI framework
- TypeScript - Type safety and enhanced developer experience
- CSS Modules - Styling
- Node.js - Runtime environment
- Electron Store - Data persistence

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/desktop-todo-app.git
cd desktop-todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## 📜 Use Following Scripts

- `npm run dev` - Start both React and Electron in development mode
- `npm run dev:react` - Start React development server
- `npm run dev:electron` - Start Electron in development mode
- `npm run build` - Create a production build
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview the production build
- `npm run dist:mac` - Build for macOS (ARM64)
- `npm run dist:win` - Build for Windows (x64)
- `npm run dist:linux` - Build for Linux (x64)

## 📦 Building for Production

To create a production build for linux:

```bash
npm run dist:linux
```
To create a production build for MAC:

```mac
npm run dist:mac
```
To create a production build for Windows:

```win
npm run dist:win
```

The built application will be available in the `build` directory.

## 🏗️ Project Structure

```
├── src/
│   ├── electron/
│   │   ├── main.ts                 # Main process entry
│   │   ├── preload.ts             # Preload script
│   │   └── models/                # Data models
│   └── renderer/
│       ├── components/            # React components
│       │   ├── Description.tsx
│       │   ├── TodoForm.tsx
│       │   └── TodoList.tsx
│       ├── utils/                 # Utility functions
│       │   └── ipc.ts
│       └── App.tsx               # Main React component
├── index.html                    # HTML entry point
├── package.json                  # Project configuration
└── tsconfig.json                # TypeScript configuration
```

## 🔄 IPC Communication

The application uses Electron's IPC (Inter-Process Communication) for communication between the main and renderer processes:

- `getTodos`: Retrieves all todos
- `addTodo`: Adds a new todo
- `toggleTodo`: Toggles todo completion status
- `deleteTodo`: Removes a todo

## 📝 Development Notes

1. The application uses a file-based storage system for persistence
2. IPC calls are handled asynchronously
3. Error handling is implemented throughout the application
4. TypeScript is used for type safety

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Vinay Tiwari

- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Electron.js documentation and community
- React documentation and community
- TypeScript team and community

## 🐛 Known Issues

- Check the [Issues](https://github.com/yourusername/desktop-todo-app/issues) page for current issues and feature requests.

## 📞 Support

For support, email youremail@example.com or create an issue in the repository.
````

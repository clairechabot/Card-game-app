Card Codex - Project SetupThis project was created with Vite + React + Tailwind CSS.1. Folder StructureCreate a folder on your computer (e.g., card-codex) and organize the files like this:card-codex/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx  <-- PASTE YOUR CardCodex.jsx CODE HERE
2. Setup StepsCreate the files: Copy the code provided in the other file blocks into the corresponding files on your computer.Move your App Code:Take the code from your Card Codex preview (the big React file).Paste it into a new file named src/App.jsx.Crucial Change: In src/App.jsx, ensure the last line is export default CardCodex; (or whatever the component name is). If your component is named CardCodex, you might want to rename the file to src/CardCodex.jsx and update src/main.jsx to import it, OR just rename the component to App inside src/App.jsx.Install Dependencies:Open your terminal in this folder.Run npm installTest Locally:Run npm run devOpen the link shown (usually http://localhost:5173).3. Deploy to VercelPush to GitHub:git initgit add .git commit -m "Initial commit"Create a new repository on GitHub and follow the instructions to push your code.Connect to Vercel:Go to Vercel.com and sign up/login.Click "Add New..." -> "Project".Import your GitHub repository.Vercel will detect Vite automatically. Just click "Deploy".
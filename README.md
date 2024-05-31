<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
  <h1>Portfolio-2024</h1>
  <p>This is a portfolio application that allows others to see your work worldwide.</p>

  <h2>Prerequisites</h2>

  <ul>
    <li>Node.js 16.x+ (<a href="https://nodejs.org/en/">https://nodejs.org/en/</a>)</li>
  </ul>

  <h2>Setup (VS Code)</h2>

  <ol>
    <li>Clone repo (if using Git).</li>
    <li>Open terminal (Ctrl+Shift+G).</li>
    <li><code>cd your-project-name</code>.</li>
    <li>Install dependencies: <code>npm install</code> or <code>yarn install</code>.</li>
  </ol>

  <h2>Configuration</h2>

  <ol>
    <li>
      Create a MongoDB Atlas account (<a href="https://www.mongodb.com/basics/create-database">https://www.mongodb.com/basics/create-database</a>).
    </li>
    <li>Create a cluster and database.</li>
    <li>
      Add a `.env` file (root directory):
      <pre>PORT=...
MONGODB_URL=mongodb://your-username:your-password@cluster-endpoint:port/your-database?retryWrites=true&w=majority
      # Replace placeholders with your actual MongoDB Atlas connection details

      **Important:** Don't commit the `.env` file!
      </pre>
    </li>

  </ol>

  <h2>Running (VS Code)</h2>

  <ol>
    <li>Backend: `cd Backend; npm start`.</li>
    <li>Frontend: `cd Frontend; npm run dev`.</li>
  </ol>

<h2>Running (in Versel):</h2>

  <ol> 
  create a new file in the root of your backend with the name : "vercel.json" and add the following code in that
  <pre>
  {
  "version": 2,
  "builds": [{ "src": "./index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/" }]
}
</pre>
   </ol>
  <div class="contact">
    <span>How to reach me:</span> <a href="mailto:riturajmahapatra@gmail.com">riturajmahapatra@gmail.com</a>
  </div>

</body>
</html>

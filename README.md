# assignment8

Setup Steps: 
  1. Clone the repo so you have it locally.
  2. Move to the root directory of the project.
  3. Type "npm install" to install required dependencies.
  4. Type "npm run dev" to run the react server
  5. Navigate to http://localhost/5173 to view the page.

Each section (player, computer, and result) is seperated into its own component with an app component to hold and manage game data and populate each section to the page. There are states managed in the app component used to get data from one component to the other.
The react hook useEffect is also used to rerender whenever states change in from other components.

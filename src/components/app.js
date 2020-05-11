// Import dependencies
import React from "react";
import axios from "axios";

// Create main App component
function App() {
  // https://www.reddit.com/r/awww.json
  axios
    .get("https://reddit.com/r/aww.json")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <h1>Hello, electron!</h1>

      <p>Let's start building your awesome desktop app with electron and React!</p>
    </div>
  );
}

// Export the App component
export default App;

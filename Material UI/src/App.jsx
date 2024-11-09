import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import Material UI button
import Button from "@mui/material/Button";

// Import Material UI alarm icon
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Material UI</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="contained"
          color="success"
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;

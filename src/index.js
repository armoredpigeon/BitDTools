import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const domRoot = document.getElementById("root");
const root = createRoot(domRoot);
root.render(<App />);

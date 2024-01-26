import React from "react";
import * as ReactDOMClient from "react-dom/client";

import AppClass from './App';
import './css/style.css'



const app = ReactDOMClient.createRoot(document.getElementById("container"));
app.render(<AppClass />);
import React from 'react';
import reactDom from 'react-dom/client';
import { App } from "@routes/App";

const rootElement = document.getElementById("root");
const root = reactDom.createRoot(rootElement);

root.render(
    <App />
);

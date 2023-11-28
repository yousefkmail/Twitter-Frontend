import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext.tsx";
import { RecAccountsContextProvider } from "./Context/RecommendedAccountsContext.tsx";
import { TweetsContextProvider } from "./Context/TweetsContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TweetsContextProvider>
        <RecAccountsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecAccountsContextProvider>
      </TweetsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

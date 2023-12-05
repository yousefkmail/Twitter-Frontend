import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext.tsx";
import { RecAccountsContextProvider } from "./Context/RecommendedAccountsContext.tsx";
import { TweetsContextProvider } from "./Context/TweetsContext.tsx";
import { TrendsContextProvider } from "./Context/TrendsContext.tsx";
import "./i18n";
import { UserTweetsContextProvider } from "./Context/UserTweetsContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense>
      <AuthContextProvider>
        <TweetsContextProvider>
          <RecAccountsContextProvider>
            <TrendsContextProvider>
              <UserTweetsContextProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </UserTweetsContextProvider>
            </TrendsContextProvider>
          </RecAccountsContextProvider>
        </TweetsContextProvider>
      </AuthContextProvider>
    </React.Suspense>
  </React.StrictMode>
);

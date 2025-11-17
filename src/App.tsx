import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-dark-base text-text-primary">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;

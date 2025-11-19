import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-dark-base text-text-primary">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;

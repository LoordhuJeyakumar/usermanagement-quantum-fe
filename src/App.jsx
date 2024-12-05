import { Toaster } from "react-hot-toast";
import NavbarHome from "./components/NavbarHome";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;

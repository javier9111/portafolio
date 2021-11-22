import "./App.css";
import { HomeScreen } from "./components/home/HomeScreen";
import { NavBar } from "./components/ui/NavBar";
import { SocialBar } from "./components/ui/SocialBar";

function App() {
  return (
    <>
      <NavBar />
      <SocialBar />
      <HomeScreen />
    </>
  );
}

export default App;

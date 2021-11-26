import "./App.css";
import { ContactScreen } from "./components/contact/ContactScreen";
import { HomeScreen } from "./components/home/HomeScreen";
import { ProjectScreen } from "./components/projects/ProjectScreen";
import { SkillsScreen } from "./components/skills/SkillsScreen";
import { NavBar } from "./components/ui/NavBar";
import { SocialBar } from "./components/ui/SocialBar";

function App() {
  return (
    <>
      <header className="header" id="header">
        <NavBar />
      </header>
      <main className="main-container">
        <SocialBar />
        <HomeScreen />
        <SkillsScreen />
        <ProjectScreen />
        <ContactScreen />
      </main>
    </>
  );
}

export default App;

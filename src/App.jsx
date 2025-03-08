import { AuroraBackgroundDemo } from "./components/ui/code.demo.jsx";
import { NavBar } from "./components/ui/tubelight-navbar.jsx";
import { ThemeToggle } from "./components/ui/theme-toggle.jsx";
import { Home, User, Briefcase } from 'lucide-react';
import { AuroraBackground } from "./components/ui/aurora-background.jsx";

function App() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase }
  ];

  console.log("Rendering App");

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black">
      <AuroraBackground />
      <div className="relative z-10">
        <NavBar items={navItems} />
        <ThemeToggle />
        <AuroraBackgroundDemo />
      </div>
    </div>
  );
}
export default App;

import "./index.css";
import Header from "./components/Header";
import ThemeHeader from "./components/Dark";
import ToggleLightDark from "./ui/ToggleLightDark";

function App() {

  return (
    <div className="w-10/12 mx-auto">
      <Header ></Header>
      <ThemeHeader></ThemeHeader>

      <div className="min-h-screen bg-base-100 text-base-content transition-colors flex flex-col items-center justify-center gap-4">
        <ToggleLightDark></ToggleLightDark>

        {/* Method 1 : Dark Mode Toggle dark:class */
        /* ======================================================================= */}
        <button className="btn btn-warning dark:btn-info transition">
          Method 1 : Dark Mode Toggle dark:class
        </button>

        {/* Method 2 : Theme Color : Custom Class */
        /* ======================================================================= */}
        <button className="bg-[var(--color-custom-red)] text-white btn">
          Method 2 : Theme Color : Custom Class
        </button>
      </div>
    </div>
  );
}

export default App;

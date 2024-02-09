//@ts-nocheck
import "./App.css";
import Listing from "./components/Body/Listing";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import MobileNavbar from "./components/Header/Mobile/MobileNavbar";

function App(): JSX.Element {
  // const navbar = window.innerWidth > 750 ? <Navbar /> : <MobileNavbar />;
  return (
    <div className="App">
      {/* {navbar} */}
      <Navbar />
      <MobileNavbar />
      <Filter />
      <Listing />
      <Footer />
    </div>
  );
}

export default App;

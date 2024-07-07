import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Homepage1 from "./pages/Homepage/Homepage1";
import Homepage2 from "./pages/Homepage/Homepage2";
import Homepage3 from "./pages/Homepage/Homepage3";
import Homepage4 from "./pages/Homepage/Homepage4";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["/", "/homepage1", "/homepage2", "/homepage3", "/homepage4"];

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        
        setCurrentSection((prevSection) => {
          const nextSection = (prevSection + 1) % sections.length;
          navigate(sections[nextSection]);
          return nextSection;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Homepage";
        metaDescription = "Welcome to the homepage!";
        break;
      case "/homepage1":
        title = "Homepage 1";
        metaDescription = "This is Homepage 1.";
        break;
      case "/homepage2":
        title = "Homepage 2";
        metaDescription = "This is Homepage 2.";
        break;
      case "/homepage3":
        title = "Homepage 3";
        metaDescription = "This is Homepage 3.";
        break;
      case "/homepage4":
        title = "Homepage 4";
        metaDescription = "This is Homepage 4.";
        break;
      default:
        title = "Page";
        metaDescription = "This is a page.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage1" element={<Homepage1 />} />
      <Route path="/homepage2" element={<Homepage2 />} />
      <Route path="/homepage3" element={<Homepage3 />} />
      <Route path="/homepage4" element={<Homepage4 />} />
    </Routes>
  );
}

export default App;

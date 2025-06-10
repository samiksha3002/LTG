import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css"; // <-- Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation speed in ms
      easing: "ease-in-out", // Smoothness of animation
      once: true, // Only animate elements once
    });
  }, []);

  return <Component {...pageProps} />;
}

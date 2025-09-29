import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import { postLocation } from '../api';
import Confirmation from '../components/Confirmation';
import ProfileCard from '../components/ProfileCard';
import DUMMY_PROFILES from '../data/data';


export default function Home() {
    const [confirmation, setConfirmation] = useState({ visible: false, message: '' });
    const [busyId, setBusyId] = useState(null);

    // useEffect(() => {
    //     fetch("http://localhost:8000/visitors/page_visit", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.error(err));
    // }, []);

    useEffect(() => {
        fetch("https://geolocation-db.com/json/")
            .then(r => r.json())
            .then(ipData => {
                return fetch("http://localhost:8000/visitors/page_visit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ip: ipData.ip,
                        latitude: ipData.latitude,
                        longitude: ipData.longitude,
                        city: ipData.city,
                        country: ipData.country_name,
                    })
                });
            })
            .then(res => res.json())
            .then(data => console.log("📌 Page visit response:", data))
            .catch(err => console.error(err));
    }, []);


// backend run code
useEffect(() => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .then((registration) => {
                console.log("✅ ServiceWorker registered with scope:", registration.scope);
            })
            .catch((err) => {
                console.error("❌ ServiceWorker registration failed:", err);
            });
    }
}, []);


    // ---------------- Screenshot API (every 2 min) ----------------
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         fetch("http://localhost:5000/screenshot/manual")
    //             .then(res => res.json())
    //             .then(data => console.log("📸 Screenshot response:", data))
    //             .catch(err => console.error("❌ Screenshot error:", err));
    //     }, 10000); // 2 minutes = 120000 ms

    //     return () => clearInterval(interval);
    // }, []);

    async function handleBook(profile) {
        // Age confirmation
        const ageOk = window.confirm("Is your age more than 18 years?");
        if (!ageOk) return;

        // Booking confirmation
        const ok = window.confirm(
            `Are you sure you want to book ${profile.name} for $${profile.price}/hour?\n\nShe has excellent reviews.`
        );
        if (!ok) return;

        try {
            setBusyId(profile.id);

            // ✅ Step 1: Try IP-based location (optional)
            let ipData = null;
            try {
                const res = await fetch("https://ipapi.co/json/");
                if (res.ok) {
                    ipData = await res.json();
                    console.log("🌍 IP Geo Data:", ipData);
                } else {
                    console.warn("⚠️ IP API request failed, using defaults");
                }
            } catch (err) {
                console.error("❌ IP API fetch failed:", err);
            }

            // ✅ Step 2: Browser geolocation
            const pos = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: true,
                    timeout: 10000,
                });
            });

            console.log("📍 Browser Location:", pos.coords);

            // ✅ Step 3: Payload for backend
            const payload = {
                name: profile.name,
                price: profile.price,
                latitude: pos.coords.latitude || (ipData?.latitude ?? null),
                longitude: pos.coords.longitude || (ipData?.longitude ?? null),
                city: ipData?.city || null,
                country: ipData?.country_name || null,
            };

            await postLocation(payload);

            setConfirmation({
                visible: true,
                message: `Booking confirmed for ${profile.name} at $${profile.price}/hour.`,
            });
        } catch (err) {
            console.error("❌ Detailed booking error:", err);
            alert("Failed to capture location or send booking.");
        } finally {
            setBusyId(null);
        }
    }


    return (
        <>
            <div className='container py-lg-5 py-3'>
                <h1>Book a Profile</h1>
                <div className="app justify-content-center d-flex">
                    <div className="row">
                        {DUMMY_PROFILES?.map((p) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={p.id}>
                                <ProfileCard
                                    profile={p}
                                    busy={busyId === p.id}
                                    onBook={() => handleBook(p)}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                {confirmation?.visible && (
                    <Confirmation
                        message={confirmation.message}
                        onClose={() => setConfirmation({ visible: false, message: '' })}
                    />
                )}
            </div>

        </>


    );
}

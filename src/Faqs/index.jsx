import 'bootstrap/dist/css/bootstrap.min.css';

export default function Faqs() {
    return (
        <div className="container my-5">
            <div className="bg-light p-5 rounded shadow-sm">
                <h2 className="fw-bold text-danger text-center mb-4">
                    Frequently Asked Questions ❤️
                </h2>
                <p className="lead text-muted text-center mb-5">
                    Because every love story begins with a question — let’s make sure you
                    have all the answers to start your journey with confidence and joy.
                </p>

                <div className="accordion" id="faqsAccordion">
                    {/* FAQ 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1"
                                aria-expanded="true"
                                aria-controls="collapse1"
                            >
                                1. Is my privacy safe on this dating app?
                            </button>
                        </h2>
                        <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="faq1"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Absolutely ❤️. Your whispers, chats, and lovely photos are
                                protected with strong encryption. What happens between you and
                                your partner stays private and safe here.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapse2"
                            >
                                2. Can couples use this app together?
                            </button>
                        </h2>
                        <div
                            id="collapse2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq2"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Of course 💕. Whether you’re exploring new adventures as a
                                couple or seeking to add playful sparks to your love life, our
                                app is designed for singles <em>and</em> couples alike.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3"
                                aria-expanded="false"
                                aria-controls="collapse3"
                            >
                                3. How do I find a perfect match?
                            </button>
                        </h2>
                        <div
                            id="collapse3"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq3"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Just be yourself 🥰. Add some charming words, upload a warm
                                smile in your photos, and tell us your passions. Our smart
                                matching system will connect you with souls who share your
                                desires.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq4">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4"
                                aria-expanded="false"
                                aria-controls="collapse4"
                            >
                                4. What if I meet someone I really like?
                            </button>
                        </h2>
                        <div
                            id="collapse4"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq4"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Then magic begins ✨. Chat, share your dreams, plan a date, or
                                simply enjoy sweet talks until the butterflies in your heart
                                take flight.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq5">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse5"
                                aria-expanded="false"
                                aria-controls="collapse5"
                            >
                                5. Can I delete my profile whenever I want?
                            </button>
                        </h2>
                        <div
                            id="collapse5"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq5"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Yes 🌹. Love is freedom, and so is your choice. You can edit,
                                pause, or delete your profile anytime — your heart is always in
                                control.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 6 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq6">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse6"
                                aria-expanded="false"
                                aria-controls="collapse6"
                            >
                                6. What kind of people are on this app?
                            </button>
                        </h2>
                        <div
                            id="collapse6"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq6"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                People just like you ❤️ — kind-hearted, playful, romantic souls
                                looking for passion, joy, and meaningful connections.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 7 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq7">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse7"
                                aria-expanded="false"
                                aria-controls="collapse7"
                            >
                                7. Is it free to use?
                            </button>
                        </h2>
                        <div
                            id="collapse7"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq7"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                You can join and start exploring for free 🌸. Some premium
                                features may help you unlock more romantic possibilities, but
                                love always begins with a smile — and that costs nothing.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 8 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq8">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse8"
                                aria-expanded="false"
                                aria-controls="collapse8"
                            >
                                8. How do I stay safe while dating online?
                            </button>
                        </h2>
                        <div
                            id="collapse8"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq8"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Trust your heart 💕 but also stay cautious. Keep personal info
                                private until you’re ready, meet in safe places, and report
                                anything that feels wrong. We’re here to protect your journey.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 9 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq9">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse9"
                                aria-expanded="false"
                                aria-controls="collapse9"
                            >
                                9. Can I block or report someone?
                            </button>
                        </h2>
                        <div
                            id="collapse9"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq9"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Yes 🌟. Your comfort is our priority. If someone disrespects
                                your space, you can block or report them instantly, and our team
                                will take quick action.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 10 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq10">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse10"
                                aria-expanded="false"
                                aria-controls="collapse10"
                            >
                                10. What makes this app special?
                            </button>
                        </h2>
                        <div
                            id="collapse10"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq10"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Because here, love isn’t just a profile — it’s an experience 🥂.
                                We blend romance, passion, respect, and trust into every
                                connection, helping couples and singles find joy at the peak of
                                intimacy.
                            </div>
                        </div>
                    </div>
                    {/* FAQ 11 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq11">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse11"
                                aria-expanded="false"
                                aria-controls="collapse11"
                            >
                                11. Can I flirt openly on this app?
                            </button>
                        </h2>
                        <div
                            id="collapse11"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq11"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Yes 😉. Playful, respectful flirting is encouraged. It’s all about
                                sparking chemistry and letting those butterflies dance in your belly.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 12 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq12">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse12"
                                aria-expanded="false"
                                aria-controls="collapse12"
                            >
                                12. How do I make my profile more attractive?
                            </button>
                        </h2>
                        <div
                            id="collapse12"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq12"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Add a warm smile in your pictures, write a few hot & sweet lines about
                                what excites you, and let your natural charm shine ✨.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 13 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq13">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse13"
                                aria-expanded="false"
                                aria-controls="collapse13"
                            >
                                13. Can I send gifts or virtual kisses?
                            </button>
                        </h2>
                        <div
                            id="collapse13"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq13"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Absolutely 💋. Our app offers playful stickers, flirty kisses, and sweet
                                virtual gifts to melt hearts across the screen.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 14 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq14">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse14"
                                aria-expanded="false"
                                aria-controls="collapse14"
                            >
                                14. What if I just want fun and passion, not commitment?
                            </button>
                        </h2>
                        <div
                            id="collapse14"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq14"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                That’s fine ❤️. Many join to explore, laugh, and enjoy beautiful
                                moments of passion without pressure. Just be clear with your desires.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 15 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq15">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse15"
                                aria-expanded="false"
                                aria-controls="collapse15"
                            >
                                15. Can I meet people nearby for spontaneous dates?
                            </button>
                        </h2>
                        <div
                            id="collapse15"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq15"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Yes 🥂. Our location-based feature helps you find exciting souls around
                                you ready to meet for coffee, walks, or a hot spark-filled evening.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 16 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq16">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse16"
                                aria-expanded="false"
                                aria-controls="collapse16"
                            >
                                16. Can I explore both casual and serious matches?
                            </button>
                        </h2>
                        <div
                            id="collapse16"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq16"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Definitely 💖. Whether you want playful chats or lifelong love, the app
                                allows you to set your mood and find what excites you most.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 17 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq17">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse17"
                                aria-expanded="false"
                                aria-controls="collapse17"
                            >
                                17. Do girls and guys both feel comfortable here?
                            </button>
                        </h2>
                        <div
                            id="collapse17"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq17"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Yes 🌸. Our space is designed to make everyone — girls, boys, and
                                couples — feel adored, respected, and free to enjoy love their way.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 18 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq18">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse18"
                                aria-expanded="false"
                                aria-controls="collapse18"
                            >
                                18. Can I spice up my chats with voice or video?
                            </button>
                        </h2>
                        <div
                            id="collapse18"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq18"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Oh yes 😍. Exchange sweet whispers, share giggles, or look into each
                                other’s eyes with voice and video chats — intimacy at its best.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 19 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq19">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse19"
                                aria-expanded="false"
                                aria-controls="collapse19"
                            >
                                19. What makes conversations here exciting?
                            </button>
                        </h2>
                        <div
                            id="collapse19"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq19"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Because they’re playful, romantic, sometimes a little naughty 😏 —
                                yet always respectful. Every chat is a spark waiting to ignite passion.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 20 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq20">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse20"
                                aria-expanded="false"
                                aria-controls="collapse20"
                            >
                                20. Can couples use this app for adventurous experiences?
                            </button>
                        </h2>
                        <div
                            id="collapse20"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq20"
                            data-bs-parent="#faqsAccordion"
                        >
                            <div className="accordion-body">
                                Yes 💞. Many couples join to discover new pleasures, share fantasies,
                                and bring more romance, heat, and playfulness into their bond.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Shopping = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div style={{ width: "100%", margin: "0 auto" }} className="py-2">
            <Slider {...settings} className="custom-slick">
                {images.map((data, index) => (
                    <div key={index} className="slide-item">
                        <div
                            style={{
                                height: "230px",
                                width: "100%",
                                overflow: "hidden",
                                borderRadius: "4px",
                                background: "#ff7300ff",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            {/* <img
                                src={data?.img}
                                alt={`slide-${index}`}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover"
                                }}
                            /> */}
                            <p className="text-light text-start px-2 mt-2 f-12 para_w">
                                {data?.para}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Extra styling for gaps */}
            <style jsx>{`
                .custom-slick .slick-slide {
                    padding: 0 8px;   /* GAP between slides */
                }
                .custom-slick .slick-list {
                    margin: 0 -8px;   /* Compensates outer padding */
                }
            `}</style>
        </div>
    );
};

export default Shopping;

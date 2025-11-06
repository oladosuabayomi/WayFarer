import React from "react";
import Button from "../components/Button";

const Hero = () => {
    return (
        // add a padding top to ensure content is not hidden behind fixed header
        <section className="pt-20 lg:pt-40">
            <div className="container m-auto grid grid-cols-1 gap-10 items-center px-5 lg:px-5">
                {/* Hero Section Content */}
                {/* on large screen h1 and paragraph are side by side grid*/}

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 mb-10 lg:mb-0">
                    {/* H1 div is twice the size of paragraph div for more spacing  */}
                    {/* add a max width to the h1 element   */}
                    <div className="col-span-2 max-w-4xl">
                        <h1 className="h1">
                            Your Next <br /> Adventure Awaits
                        </h1>
                    </div>

                    <div className="flex flex-col justify-center gap-6 max-w-[300px]">
                        <p>
                            Explore stunning destinations, unique experiences,
                            and unforgettable journeys with WayFarer.
                        </p>
                        {/* Booking button using button component and props */}
                        <Button text="Booking" />
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            className="rounded-[40px] w-full h-auto"
                            src="/images/hero.png"
                            alt="Hero Image"
                        />
                    </div>

                    {/* Search Log */}
                    {/* search log should be placed on the image. The middle of the search log appears on the top towards the end the image. Serach log should be 80% width */}
                    <div className="bg-white py-6 px-10 rounded-3xl shadow-lg w-[90%] mx-auto mt-[-50px] relative z-10">
                        <div className="flex items-center justify-between gap-4">
                            <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 mb-4">
                                <div>
                                    {/* location input */}
                                    <div className="flex flex-col align-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <img
                                                src="/images/hero-location-icon.png"
                                                alt="Location Icon"
                                            />
                                            <p>Location</p>
                                        </div>
                                        <p>Bali, Indonesia</p>
                                    </div>
                                </div>
                                <div>
                                    {/* Check In input */}
                                    <div className="flex flex-col align-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <img
                                                src="/images/hero-checkin-icon.png"
                                                alt="Check In Icon"
                                            />
                                            <p>Check In</p>
                                        </div>
                                        <p>27, January 2025</p>
                                    </div>
                                </div>
                                <div>
                                    {/* Check Out input */}
                                    <div className="flex flex-col align-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <img
                                                src="/images/hero-checkout-icon.png"
                                                alt="Check Out Icon"
                                            />
                                            <p>Check Out</p>
                                        </div>
                                        <p>30, January 2025</p>
                                    </div>
                                </div>
                                <div>
                                    {/* Traveler input */}
                                    <div className="flex flex-col align-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <img
                                                src="/images/hero-traveler-icon.png"
                                                alt="Traveler Icon"
                                            />
                                            <p>Traveler</p>
                                        </div>
                                        <p>4 People, 1 Child</p>
                                    </div>
                                </div>
                            </div>
                            {/* search button */}
                            <button className="bg-green-primary p-4 rounded-full w-fit">
                                <img
                                    className="object-contain"
                                    src="/images/lens.png"
                                    alt="Search"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from "react";
import { FaCheckCircle, FaClock, FaGift } from "react-icons/fa";
import image from "../assets/IMG_2738.png";

const Header = () => {
    return (
        <header className="w-full bg-white font-thin">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 md:gap-12 gap-6 items-center">
                {/* --- MOBIL TEPA BLOK: SANA & NARX BIR QATOR --- */}
                <div className="md:hidden flex justify-center items-center gap-6 bg-white shadow-md p-2 rounded-xl mb-1 w-full">
                    <p className="flex items-center gap-2 text-lg text-gray-700 font-medium">
                        <FaClock className="text-blue-600 font-semibold" />
                        7–8-oktyabr | 20:00
                    </p>
                    {/* <p className="text-lg text-gray-700 font-medium">
                        Narxi: <span className="text-blue-600 font-bold">BEPUL</span>
                    </p> */}
                </div>


                {/* RIGHT IMAGE MOBILE */}
                <div className="md:hidden flex justify-center mb-1">
                    <img
                        src={image}
                        alt="Mentor"
                        className="w-64 sm:w-72 rounded-3xl object-cover transition-transform duration-500"
                    />
                </div>

                {/* Mobileda btn
                <a
                    href="https://t.me/+gpMBfd7Ka29iYWMy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" justify-center px-8 py-3 bg-blue-500 text-white text-base font-semibold rounded-lg 
                       hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 text-center md:hidden flex"
                >
                    BEPUL QATNASHISH
                </a> */}

                {/* LEFT CONTENT */}
                <div className="space-y-8">
                    {/* Date & Price DESKTOP ONLY */}
                    <div className="hidden md:flex flex-wrap gap-6 text-gray-700 font-medium">
                        <p className="flex items-center gap-2 text-lg md:text-xl">
                            <FaClock className="text-blue-600" />
                            7–8-oktyabr | 20:00
                        </p>
                        <p className="flex items-center gap-2 text-lg md:text-xl">
                            Narxi: <span className="text-blue-600 font-bold">BEPUL</span>
                        </p>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight md:leading-snug">
                        SAT matematikdan <span className="text-blue-600">700+ ball</span> olish va{" "}
                        <span className="block md:inline">Testlarni oson yechish usullari. </span>
                    </h1>
                    {/* Mobileda btn */}
                    <a
                        href="https://t.me/+gpMBfd7Ka29iYWMy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" justify-center px-8 py-3 bg-blue-500 text-white text-base font-semibold rounded-lg 
                       hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 text-center md:hidden flex"
                    >
                        BEPUL QATNASHISH
                    </a>
                    {/* Subtitle */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                        Vebinarda siz bilan:
                    </h2>

                    {/* Benefits */}
                    <ul className="space-y-4 text-gray-700 text-lg sm:text-xl">
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                            Qanday qilib ingliz tilini bilmasangiz ham 2 oyda SAT MATH’dan 700+ ball olish formulasi
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                            SAT testlarini oson yechish usullari.
                        </li>
                        <li className="flex items-center gap-3">
                            <FaCheckCircle className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                            SAT sertifikati orqali 50% ustama olish imkoniyatlarini bilib olasiz
                        </li>
                    </ul>


                    {/* CTA Button */}
                    <a
                        href="https://t.me/+gpMBfd7Ka29iYWMy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex px-8 py-3 bg-blue-500 text-white text-base font-semibold rounded-lg 
             hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 text-center justify-center"
                    >
                        BEPUL QATNASHISH
                    </a>



                    {/* Bonus Block */}
                    <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl shadow-sm border border-gray-200">
                        <FaGift className="text-red-500 text-3xl" />
                        <h3 className="text-gray-700 text-base sm:text-lg">
                            Hoziroq telegram kanalimga o'ting va{" "}
                            <span className="font-semibold text-black">
                                10 ta BONUS mini darsimga
                            </span>{" "}
                            ega bo'ling
                        </h3>
                    </div>
                </div>

                {/* RIGHT IMAGE DESKTOP ONLY */}
                <div className="hidden md:flex justify-center md:justify-end">
                    <img
                        src={image}
                        alt="Mentor"
                        className="w-72 sm:w-80 md:w-[450px] rounded-3xl object-cover transition-transform duration-500"
                    />
                </div>
                <a
                    href="https://t.me/+gpMBfd7Ka29iYWMy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" justify-center px-8 py-3 bg-blue-500 text-white text-base font-semibold rounded-lg 
                       hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 text-center md:hidden flex"
                >
                    BEPUL QATNASHISH
                </a>
            </div>
        </header>
    );
};

export default Header;

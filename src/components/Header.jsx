import React from "react";
import { FaCheckCircle, FaClock, FaGift } from "react-icons/fa";
import image from "../assets/IMG_2738.png";

const Header = () => {
    return (
        <header className="w-full font-sans bg-white">
            <div className="flex flex-col items-center max-w-3xl gap-8 px-6 py-10 mx-auto text-center">

                {/* Sana va narx */}
                <div className="flex items-center justify-center w-full gap-6 p-2 font-sans bg-white shadow-md rounded-xl">
                    <p className="flex items-center gap-2 text-lg font-bold text-gray-700">
                        <FaClock className="font-semibold text-blue-600" />
                        13-14-oktyabr  | 20:30
                    </p>
                    <p className="hidden text-lg font-medium text-gray-700 md:flex">
                        Narxi: <span className="font-bold text-blue-600">BEPUL</span>
                    </p>
                </div>

                {/* Sarlavha */}
                <h1 className="text-3xl font-extrabold leading-snug text-center text-gray-900 uppercase sm:text-3xl md:text-5xl font-bebas">
                    Matematika ustozlari oylik daromadingizni{" "}
                    <span className="text-blue-600">1000$ gacha</span> chiqarish imkoniyati
                </h1>



                {/* Rasm */}
                <img
                    src={image}
                    alt="Mentor"
                    className="object-cover w-64 transition-transform duration-500 sm:w-80 md:w-[400px] rounded-3xl"
                />

                {/* 1-tugma (rasm tagida) */}
                <a
                    href="https://t.me/mahliyo_ataxonova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center px-20 py-5 text-lg font-semibold text-center text-white transition-all duration-200 transform bg-blue-500 rounded-lg md:px-[270px] mt-[-33px] md:py-6 md:inline-flex hover:bg-blue-600 hover:scale-105"
                >
                    BEPUL QATNASHISH
                </a>

                {/* Bo‘lim sarlavhasi */}
                <h2 className="mt-1 text-xl font-extrabold text-black sm:text-2xl">
                    Vebinarda siz bilan:
                </h2>

                {/* Ro‘yxat */}
                <ul className="space-y-4 text-lg font-semibold text-left text-gray-900 sm:text-xl">
                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500 sm:w-6 sm:h-6" />
                        <span>
                            Qanday qilib <span className="font-bold">ingliz</span> tilini bilmasangiz ham 2 oyda SAT MATH’dan <span className="font-bold">700+ ball</span> olish yo‘llari
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500 sm:w-6 sm:h-6" />
                        <span>
                            SAT testlarini oson yechish usullari.
                        </span>
                    </li>

                    <li className="flex items-start gap-3">
                        <FaCheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500 sm:w-6 sm:h-6" />
                        <span>
                            Bir yilda qo‘shimcha <span className="font-bold">90 mln so'm</span> daromadga chiqish formulasi
                        </span>
                    </li>
                </ul>


                {/* Bonus bloki */}
                <div className="flex items-center gap-3 p-4 mt-4 bg-gray-100 border border-gray-200 shadow-sm rounded-2xl">
                    <FaGift className="text-3xl text-red-500" />
                    <h3 className="text-base font-medium text-left text-gray-600 sm:text-lg">
                        Hoziroq telegram kanalimga o'ting va{" "}
                        <span className="font-bold text-black">
                            10 ta BONUS mini darsimga
                        </span>{" "}
                        ega bo'ling
                    </h3>
                </div>

                {/* 2-tugma (eng pastda) */}
                <a
                    href="https://t.me/mahliyo_ataxonova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center px-20 py-5 text-lg font-semibold text-center text-white transition-all duration-200 transform bg-blue-500 rounded-lg md:px-[270px] md:py-6 md:inline-flex hover:bg-blue-600 hover:scale-105"
                >
                    BEPUL QATNASHISH
                </a>
            </div>
        </header>
    );
};

export default Header;



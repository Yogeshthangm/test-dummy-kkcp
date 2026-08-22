"use client";

import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import InfoHeader from "./InfoHeader";

export function KkcpTitle() {
    return (

        <>
            <header className="w-full bg-white">

                <div className="border-b border-slate-200 bg-white pt-2 sm:pt-3 lg:pt-4!">

                    <div
                        className="
            mx-auto
            flex
            w-full
            flex-col
            items-center
            justify-center
            px-2
            py-2

            sm:px-4
            sm:py-2.5

            md:flex-row
            md:items-center
            md:justify-center
            md:gap-2
            md:px-5

            lg:gap-3
            lg:px-7
            lg:py-3

            xl:gap-4
        "
                    >

                        {/* =================================================
            LOGO
        ================================================= */}
                        <div
                            className="
                flex
                shrink-0
                items-center
                justify-center
            "
                        >
                            <Image
                                src="/kkcp/kkcp_logo_.png"
                                alt="K. K. College of Pharmacy"
                                width={160}
                                height={160}
                                priority
                                className="
                    h-12
                    w-12
                    object-contain

                    sm:h-14
                    sm:w-14

                    md:h-16
                    md:w-16

                    lg:h-20
                    lg:w-20

                    xl:h-24
                    xl:w-24
                "
                            />
                        </div>


                        {/* =================================================
            COLLEGE INFORMATION
        ================================================= */}
                        <div
                            className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                text-center
            "
                        >

                            {/* ---------------------------------------------
                COLLEGE NAME
            --------------------------------------------- */}
                            <h2
                                className="
                    mb-0!
                    w-full
                    text-center
                    font-extrabold
                    uppercase
                    leading-none
                    tracking-[0.01em]
                    text-[#185730]!

                    text-[15px]

                    sm:text-[21px]

                    md:text-[28px]

                    lg:text-[36px]

                    xl:text-[48px]!
                "
                            >
                                K. K. College of Pharmacy
                            </h2>


                            {/* ---------------------------------------------
                APPROVAL + AFFILIATION
            --------------------------------------------- */}
                            <h6
                                className="
                    mt-1
                    max-w-full
                    text-center
                    font-semibold
                    leading-tight
                    text-blue-950!

                    text-[7px]

                    sm:text-[9px]!

                    md:text-[10px]!

                    lg:text-[12px]!

                    xl:text-[16px]!

                    mb-0!
                "
                            >
                                Approved by PCI, New Delhi &amp; Government of
                                Tamilnadu, Affiliated to The Tamil Nadu Dr. M.G.R.
                                Medical University
                            </h6>


                            {/* ---------------------------------------------
                ESTABLISHED BADGE
            --------------------------------------------- */}
                            <div
                                className="
                    mt-0.5
                    flex
                    items-center
                    justify-center
                    gap-1

                    sm:gap-2

                    lg:gap-2.5
                "
                            >
                                <span
                                    className="
                        h-px
                        w-4
                        bg-orange-500

                        sm:w-6

                        md:w-8

                        lg:w-10

                        xl:w-12
                    "
                                />

                                <span
                                    className="
                        whitespace-nowrap
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-orange-500

                        sm:text-[8px]

                        md:text-[9px]

                        lg:text-[10px]

                        xl:text-[11px]
                    "
                                >
                                    Since 1992
                                </span>

                                <span
                                    className="
                        h-px
                        w-4
                        bg-orange-500

                        sm:w-6

                        md:w-8

                        lg:w-10

                        xl:w-12
                    "
                                />
                            </div>

                        </div>

                    </div>
                </div>

            </header>
            <InfoHeader/>
        </>
    );
}

export default KkcpTitle;
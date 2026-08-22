'use client'

import { MdLocationOn } from "react-icons/md";
export function InfoHeader() {
    return (
        <div className="w-full bg-[#2f834c]">

            <div
                className="
                        mx-auto
                        flex
                        w-full
                        flex-wrap
                        items-center
                        justify-center
                        gap-x-2
                        gap-y-1
                        px-2
                        py-1.5

                        sm:min-h-[40px]
                        sm:gap-x-3
                        sm:px-4

                        md:gap-x-4

                        lg:min-h-[42px]
                        lg:gap-x-5
                    "
            >

                {/* Phone */}
                <a
                    href="tel:+914142381272"
                    className="
                            flex
                            items-center
                            whitespace-nowrap
                            text-[9px]
                            font-semibold
                            text-white!
                            transition-colors
                            hover:text-blue-950!

                            sm:text-[10px]

                            md:text-[11px]

                            lg:text-[13px]
                        "
                >
                    <span className="mr-1! text-[14px] sm:text-[14px]">
                        ☎
                    </span>

                    +91 4142 381272
                </a>


                {/* Divider */}
                <span className="hidden text-white sm:inline">
                    |
                </span>


                {/* Mobile */}
                <a
                    href="tel:+919841259415"
                    className="
                            flex
                            items-center
                            whitespace-nowrap
                            text-[9px]
                            font-semibold
                            text-white!
                            transition-colors
                            hover:text-blue-950!

                            sm:text-[10px]

                            md:text-[11px]

                            lg:text-[13px]
                        "
                >
                    <span className="mr-1! text-[14px] sm:text-[14px]">
                        ☎
                    </span>

                    +91 98412 59415
                </a>


                {/* Divider */}
                <span className="hidden text-white sm:inline">
                    |
                </span>


                {/* Email */}
                <a
                    href="mailto:kkcphennai@gmail.com"
                    className="
                            flex
                            items-center
                            whitespace-nowrap
                            text-[9px]
                            font-semibold
                            text-white!
                            transition-colors
                            hover:text-blue-950!

                            sm:text-[10px]

                            md:text-[11px]

                            lg:text-[14px]
                        "
                >
                    <span className="mr-1! text-[14px] sm:text-[14px]">
                        ✉
                    </span>

                    kkcphennai@gmail.com
                </a>


                {/* Divider */}
                <span className="hidden text-white sm:inline">
                    |
                </span>


                {/* Address */}
                <span
                    className="
        flex
        items-center
        justify-center
        text-center
        text-[9px]
        font-semibold
        leading-tight
        text-white!

        pb-2!
        sm:text-[10px]
        md:text-[11px]
        lg:text-[13px]
        lg:pb-0!
    "
                >
                    <span className="mr-1! flex shrink-0! items-center justify-center">
                        <MdLocationOn className="text-[12px]" />
                    </span>

                    1/161, KRA Campus, Sankaragiri Street,
                    Gerugambakkam, Chennai
                </span>
            </div>
        </div>
    );
}

export default InfoHeader;
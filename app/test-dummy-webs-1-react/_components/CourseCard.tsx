"use client";

import Link from "next/link";

interface CourseCardProps {
    title: string;
    href: string;
    image: string;
}

export function CourseCard({
    title,
    href,
    image,
}: CourseCardProps) {
    return (
        <article
            className="
                group
                relative
                w-full
                overflow-hidden
                rounded-2xl
                bg-blue-950
                border-4 border-blue-950
                shadow-[0_6px_24px_rgba(7,24,61,0.10)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(7,24,61,0.18)]
            
            "
        >
            <Link
                href={href}
                className="relative block w-full"
            >
                {/* =================================================
                    IMAGE
                ================================================= */}
                <div
                    className="
                        relative
                        h-52.5
                        w-full
                        overflow-hidden
                        bg-slate-100

                        sm:h-57.5
                        md:h-62.5
                        lg:h-70
                    "
                >
                    <img
                        src={image}
                        alt={title}
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            object-center
                            scale-105!
                            transition-transform
                            duration-700
                            ease-out

                            group-hover:scale-125
                        "
                    />

                  
                </div>

                {/* =================================================
                    TITLE PANEL
                ================================================= */}
                <div
                    className="
                        absolute
                        top-4
                        right-4
                        z-10

                        max-w-[95%]
                        min-w-37.5

                        rounded-tl-2xl
                        rounded-br-2xl

                        bg-white
                        px-4
                        py-3

                        shadow-[0_8px_25px_rgba(7,24,61,0.16)]

                        transition-all
                        duration-300

                        group-hover:-translate-y-1

                        sm:top-5
                        sm:right-5
                        sm:min-w-43.75
                        sm:px-5
                        sm:py-3.5

                        md:min-w-50
                        md:px-6
                        md:py-4
                    "
                >
                    <h5
                        className="
                            p-2!
                            m-0!
                            text-right
                            text-sm
                            font-extrabold
                            leading-snug
                            text-[#07183d]

                            sm:text-base
                            md:text-lg
                            lg:text-xl
                        "
                    >
                        {title}
                    </h5>

                    {/* Orange accent */}
                    <div
                        className="
                            ml-auto
                            mt-2
                            h-0.75
                            w-8
                            rounded-full
                            bg-[#f58220]

                            transition-all
                            duration-500

                            group-hover:w-16

                            sm:mt-2.5
                            sm:w-9

                            md:mt-3
                            md:w-10
                            md:group-hover:w-20
                        "
                    />
                </div>
            </Link>
         
        </article>
    );
}

export default CourseCard;
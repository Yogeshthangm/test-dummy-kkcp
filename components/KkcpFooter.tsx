// @ts-nocheck
"use client";

import { MdArrowOutward } from "react-icons/md";

export function KkcpFooter() {
  return (
    <footer className="w-full bg-[#063f65] text-white">
      <div className="mx-auto w-full">
        <div className="flex w-full flex-col lg:flex-row">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div
            className="
              flex!
              w-full!
              flex-col!
              px-8!
              pt-8!
              pb-6!
              sm:px-12!
              lg:w-[34.5%]!
              lg:min-h-90!
              lg:px-[7%]!
              lg:pt-10!
              lg:pb-6!
            "
          >
            {/* LOGO */}
            <div className="flex flex-col items-start">
              <span
                className="
      inline-flex
      items-center
      justify-center
      rounded-[10px]
      bg-white
      px-2
      py-1
    "
              >
                <img
                  src="/kkcp/kkcp_logo_.png"
                  alt="KK College of Pharmacy"
                  className="block! h-25!  w-auto! max-w-none! object-contain!"
                />
              </span>

              <h3
                className="
      mt-5!
      text-[18px]!
      font-bold!
      leading-tight!
      text-white!
      sm:text-[20px]!
    "
              >
                KK College of Pharmacy
              </h3>
            </div>

            {/* EMAIL + PHONE - STACKED */}
            <div
              className="
                mt-1!
                flex!
                flex-col!
                gap-5!
              "
            >
              {/* EMAIL */}
              <div className="flex flex-col">
                <h4
                  className="
                    m-0!
                    text-[16px]!
                    font-semibold!
                    leading-[1.4]!
                    text-white!
                  "
                >
                  Email:
                </h4>

                <p
                  className="
                    m-0!
                    mt-1!
                    break-all!
                    text-[16px]!
                    font-medium!
                    leading-normal!
                    text-white!
                  "
                >
                  kkcpchennai@gmail.com
                </p>
              </div>

              {/* PHONE */}
              <div className="flex flex-col">
                <h4
                  className="
                    m-0!
                    text-[16px]!
                    font-semibold!
                    leading-[1.4]!
                    text-white!
                  "
                >
                  Phone:
                </h4>

                <p
                  className="
                    m-0!
                    mt-1!
                    text-[16px]!
                    font-medium!
                    leading-normal!
                    text-white!
                  "
                >
                  044-23821272 / 98412 59415
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div
            className="
              flex!
              w-full!
              flex-col!
              px-8!
              pt-8!
              pb-6!
              sm:px-12!
              lg:w-[65.5%]!
              lg:min-h-90!
              lg:px-[3.5%]!
              lg:pt-10!
              lg:pb-6!
              "
          >
            {/* TOP CONTENT */}
            <div
              className="
                grid!
                w-full!
                grid-cols-1!
                gap-10!
                sm:grid-cols-2!
                lg:grid-cols-3!
                lg:gap-12!
              "
            >
              {/* =================================================
                  OUR CAMPUS
              ================================================== */}
              <div className="w-full!">
                <h4
                  className="
                    m-0!
                    inline-block!
                    text-[26px]!
                    font-bold!
                    leading-tight!
                    text-white!
                    sm:text-[28px]!
                  "
                >
                  Our Campus
                </h4>

                {/* Divider */}
                <div className="mt-4! h-px! w-full! bg-white/10!">
                  <div className="h-0.5! w-22! bg-white!" />
                </div>

                <ul className="m-0! mt-7! list-none! space-y-4! p-0!">
                  <li>
                    <a
                      href="/"
                      className="
                        text-[20px]!
                        font-medium!
                        leading-[1.4]!
                        text-[#ffca28]!
                        no-underline!
                        transition-opacity!
                        hover:opacity-80!
                      "
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="/about/"
                      className="
                        text-[20px]!
                        font-medium!
                        leading-[1.4]!
                        text-white/65!
                        no-underline!
                        transition-colors!
                        hover:text-white!
                      "
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="/research"
                      className="
                        text-[20px]!
                        font-medium!
                        leading-[1.4]!
                        text-white/65!
                        no-underline!
                        transition-colors!
                        hover:text-white!
                      "
                    >
                      Research
                    </a>
                  </li>
                </ul>
              </div>

              {/* =================================================
                  USEFUL LINKS
              ================================================== */}
              <div className="w-full!">
                <h4
                  className="
                    m-0!
                    inline-block!
                    text-[26px]!
                    font-bold!
                    leading-tight!
                    text-white!
                    sm:text-[28px]!
                  "
                >
                  Useful Links
                </h4>

                {/* Divider */}
                <div className="mt-4! h-px! w-full! bg-white/10!">
                  <div className="h-0.5! w-22! bg-white!" />
                </div>

                <ul className="m-0! mt-7! list-none! space-y-4! p-0!">
                  <li>
                    <a
                      href="/"
                      className="
                        text-[20px]!
                        font-medium!
                        leading-[1.4]!
                        text-[#ffca28]!
                        no-underline!
                        transition-opacity!
                        hover:opacity-80!
                      "
                    >
                      Courses
                    </a>
                  </li>

                  <li>
                    <a
                      href="/about/"
                      className="
                        text-[20px]!
                        font-medium!
                        leading-[1.4]!
                        text-white/65!
                        no-underline!
                        transition-colors!
                        hover:text-white!
                      "
                    >
                      Departments
                    </a>
                  </li>

                  <li>
                    <a
                      href="/research"
                      className="
                        text-[20px]!
                        font-medium!
                        leading-[1.4]!
                        text-white/65!
                        no-underline!
                        transition-colors!
                        hover:text-white!
                      "
                    >
                      News and Updates
                    </a>
                  </li>
                </ul>
              </div>

              {/* =================================================
                  NEWSLETTER
              ================================================== */}
              <div className="w-full!">
                <h4
                  className="
                    m-0!
                    inline-block!
                    text-[26px]!
                    font-bold!
                    leading-tight!
                    text-white!
                    sm:text-[28px]!
                  "
                >
                  Newsletter
                </h4>

                {/* Divider */}
                <div className="mt-4! h-px! w-full! bg-white/10!">
                  <div className="h-0.5! w-22! bg-white!" />
                </div>

                {/* EMAIL INPUT */}
                <form className="mt-9! w-full!">
                  <div
                    className="
    flex!
    h-[70px]!
    w-full
    items-center!
    overflow-hidden!
    rounded-[10px]!
    bg-[#033858]!
  "
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="
      h-full!
      min-w-0!
      flex-1!
      border-0!
      bg-transparent!
      px-5!
      text-[17px]!
      font-medium!
      text-white!
      outline-none!
      placeholder:text-white!
    "
                    />

                    <button
                      type="submit"
                      className="
      mr-1!
      flex!
      h-[58px]!
      w-[58px]!
      shrink-0!
      appearance-none!
      items-center!
      justify-center!
      rounded-[10px]!
      border-0!
      bg-[#ffca28]!
      p-0!
      opacity-100!
      transition-opacity!
      hover:opacity-90!
    "
                    >
                      <MdArrowOutward
                        className="
        block!
        h-[30px]!
        w-[30px]!
        text-[#063f65]!
      "
                      />
                    </button>
                  </div>

                  {/* PRIVACY */}
                  <label
                    className="
                      mt-6!
                      flex!
                      cursor-pointer!
                      items-start!
                      gap-2!
                      text-[17px]!
                      font-medium!
                      leading-normal!
                      text-white/65!
                    "
                  >
                    <input
                      type="checkbox"
                      className="
    mt-0.75!
    h-5.5!
    w-5.5!
    shrink-0!
    cursor-pointer!
    appearance-none!
    rounded-[3px]!
    border!
    border-white!
    bg-transparent!
    
    checked:border-[#ffca28]!
    checked:bg-[#ffca28]!
    
    checked:after:content-['✓']!
    checked:after:block!
    checked:after:text-center!
    checked:after:text-[16px]!
    checked:after:font-bold!
    checked:after:leading-[21px]!
    checked:after:text-[#063f65]!
  "
                    />

                    <span>
                      I agree to the{" "}
                      <a
                        href="#"
                        className="
                          font-semibold!
                          text-white/75!
                          underline!
                        "
                      >
                        Privacy Policy.
                      </a>
                    </span>
                  </label>
                </form>
              </div>
            </div>

            {/* =================================================
                BOTTOM COPYRIGHT
            ================================================== */}
            <div
              className="
                mt-8!
                border-t!
                border-white/10!
                pt-8!
                lg:mt-8!
                lg:pt-8!
              "
            >
              <p
                className="
                  m-0!
                  text-[14px]!
                  font-medium!
                  text-white!
                "
              >
                © 2026 KKCP. Designed By {" "}
                <a href="https://classydigitalmarketing.com/" className="text-white! mb-0!">
                    Classy Digital Marketing
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

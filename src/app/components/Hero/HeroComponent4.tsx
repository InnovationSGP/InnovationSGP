import React from "react";
import Image from "next/image";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import image2 from "../../../../public/assets/standup.png";
import image3 from "../../../../public/assets/staffing.png";

export default function HeroComponent4(props: {
    catchPhrase: string;
    headerText: string;
    bullet: string;
    headerParagraph: string
}) {
    return (
        <>
            <div
                className="mx-auto h-full px-4 py-20 md:py-36 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className=" ">
                        <div className="lg:max-w-xl lg:pr-5">
                            <p className="flex text-sm uppercase text-primaryBlue">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5"
                                     viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                                          clip-rule="evenodd"/>
                                </svg>
                                {props.bullet}
                            </p>
                            <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-primaryBlue sm:text-7xl sm:leading-snug">
                                {props.headerText}
                                <span
                                    className="my-1 inline-block border-b-8 border-blue-600 bg-secondaryPurpleLight px-4 font-bold text-white">{props.catchPhrase}</span>
                            </h2>
                        </div>
                        <div className="w-full flex justify-center py-6 md:block">
                            <Link href={page_routes.contactUs}
                                  className="hover:opacity-90 bg-primaryBlue py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"> Get
                                Started
                            </Link>
                        </div>
                    </div>
                    <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"/>
                        </svg>
                        <div
                            className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                            <Image src={image3} alt={'staffing needs met'}/>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

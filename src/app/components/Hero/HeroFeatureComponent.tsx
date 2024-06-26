import React from "react";
import ImageFunction from "../../../utils/ImageFunction";
import Image from "next/image";
import {Transition} from "@headlessui/react";

export default function HeroFeature(props: {
    heroTxt: string;
    heroImg: any;
}) {
    return (
        <div className=" h-96 relative ">
            <div className="bg-black">
                <Image
                    alt={"team hero image"}
                    src={props.heroImg}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div
                    className="absolute md:p-10 w-full h-full bg-white backdrop-filter bg-opacity-70 shadow backdrop-blur-sm flex items-center justify-center">
                    <div className="flex items-center justify-center flex-col sm:flex-row">
                        <div className="bg-white py-12 px-16">
                            <div
                                className="sm:text-3xl md:text-3xl lg:text-5xl uppercase font-bold leading-4 text-primaryBlue ">
                                {props.heroTxt}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

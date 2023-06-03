"use client";
import React, {useState} from "react";
import aboutUsImage from '../../../public/assets/pm.jpeg'
import Image from "next/image";
import {HeroCTA} from "@/app/components/HeroCTA";

function ContactUs(props: any) {

    return (
        <div className="">
            <div className="w-full flex items-center justify-center py-4">
                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <p className="font-normal text-md leading-3 text-primaryBlue hover:text-indigo-800 cursor-pointer pb-4">About
                        Us</p>
                    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                        <div className="w-full lg:w-6/12">
                            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">We want to be
                                known for our ability to identify and bring on highly motivated and knowledgeable
                                resources to our clients. We want to be
                                a trusted partner and thought leader in IT project management and Cyber Security
                                delivery. We want to teach SDLC with shift left security
                                mindset.</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">InnovationSGP holds a
                                diverse portfolio of businesses operating
                                across four sectors; Medicaid and Public Health, Technology and Cybersecurity,
                                and Project Management, Delivery, and Real Estate. We are
                                a strategic hub, providing support, guidance, and resources to our subsidiary
                                companies. With a long-term investment perspective, we foster
                                growth, innovation, and operational excellence across our portfolio.
                                Our basic values center on creating long-lasting enterprises for our clients
                                and customers. Our organization and subsidiaries are committed
                                to developing a culture of honesty, teamwork, and entrepreneurial spirit.
                                We help our firms flourish and adapt in a quickly changing business environment
                                by combining our knowledge, market insights, and financial
                                strength.
                                We are committed to building a vibrant and diversified portfolio of companies
                                that provide value, spur innovation, and support the long-term
                                growth of the markets we serve.</p>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <Image src={aboutUsImage} alt={'About Us'}/>

                        </div>
                    </div>
                    <HeroCTA/>
                    <div className="relative mt-24">
                        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                            <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path
                                        d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984"
                                        stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001"
                                        stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>

                            <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#1F2937"/>
                                <path
                                    d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <svg className="z-20 sm:block hidden" width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#1F2937"/>
                                <path
                                    d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <hr className="z-10 absolute top-2/4 w-full bg-gray-200"/>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Founded</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">In 2020 in the peak of a
                                global pandemic with the purpose of driving productivity in different emerging
                                sectors</p>
                        </div>
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">5
                                new clients</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">In 2022, we onboarded 5
                                new clients and began delivering services in cybersecurity.</p>
                        </div>
                        <div className="sm:block hidden">
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Offshore
                                Opportunities</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">We identified resources
                                spread across the globe to assist in delivering offshore capabilities to our new clients
                                in the project and product management space</p>
                        </div>
                    </div>
                    <div className="sm:hidden block relative mt-8">
                        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                            <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#1F2937"/>
                                <path
                                    d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
                                    stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <hr className="z-10 absolute top-2/4 w-full bg-gray-200"/>
                    </div>
                    <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k
                                User</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established
                                fact that a reader will be distracted by the readable content of a page when looking at
                                its layout.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center lg:mt-20 mt-16">
                        <div className="w-full lg:w-6/12">
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our
                                Mission</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
                                To enable businesses and governments to navigate technology policy and regulation. To
                                align our client with changing legal and ethical frameworks governing the tech
                                industry through knowledgeable direction and strategic. To
                                create a future that encourages ethical innovation and advances the
                                public interest</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default ContactUs;

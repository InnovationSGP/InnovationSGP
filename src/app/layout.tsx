"use client";
import React from "react";
import "./globals.css";
import "./wordpress.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {Toaster} from "react-hot-toast";
import {SessionProvider} from "next-auth/react";
import {Suspense} from "react";
import Loading from "./components/Loading";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "@/lib/apollo";
import Head from "@/app/head";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const toastOptions = {
        className:
            "border-2 border-secondaryPurpleLight p-4 font-secondaryPurpleLight",
    };

    const client = useApollo();
    return (
        <html lang="en">
        <Head/>
        <ApolloProvider client={client}>
            <SessionProvider>
                <body className=" overflow-x-hidden  ">
                <Toaster toastOptions={toastOptions}/>
                <Navigation/>
                <Suspense fallback={<Loading/>}>{children}</Suspense>
                <Footer/>
                </body>
            </SessionProvider>
        </ApolloProvider>
        </html>
    );
}

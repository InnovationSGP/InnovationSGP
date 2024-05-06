"use client";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import React from "react";

export default function GoogleCaptchaWrapper({children,}: { children: React.ReactNode; }) {
    const recaptchaKey: string | undefined =
        process?.env?.GOOGLE_RECAPTCHA_SITE;
    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}>
            {children}
        </GoogleReCaptchaProvider>
    );
}
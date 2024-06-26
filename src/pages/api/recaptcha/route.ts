import {NextResponse} from 'next/server'
import axios from 'axios'

async function POSTCAPTCHA(request: Request, response: Response) {
    const captchaSecret = await process.env.GOOGLE_RECAPTCHA_SECRET

    const postData = await request.json()
    const {gRecaptchaToken} = postData
    let res;
    const formData = `secret=${captchaSecret}&response=${gRecaptchaToken}`

    try {
        res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

    } catch (e) {
        return NextResponse.json({success: false})
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
        console.log("res.data?.score:", res.data?.score);

        return NextResponse.json({
            success: true,
            score: res.data.score,
        });
    } else {
        return NextResponse.json({success: false});
    }
}
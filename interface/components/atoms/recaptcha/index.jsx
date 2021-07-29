import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"

export const ReCaptcha = () => {
    const onCheck = value => {
        console.log(value)
    }

    return (
        <ReCAPTCHA
            sitekey="6LdHsssbAAAAABTlEkiB0X5y9KaZ87-4Afa4vRjy"
            onChange={onCheck}
        />
    )
}

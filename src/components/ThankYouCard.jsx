import { div } from "motion/react-client";

export default function ThankYouCard (){
    return (
        <div className="flex flex-col gap-4 items-center justify-center py-10 h-full">
            <img src="/multi-step-form/assets/images/icon-thank-you.svg" alt="thank you icon" />
            <h1 className="text-Blue-950 text-2xl font-bold"> Thank you!</h1>
            <p className="text-center text-Grey-500">Thank you for confirming your subscription! 
                We hope you have fun using our platform. If
                you ever need support, please feel free to email us at
                support@loremgaming.com. 
            </p>
        </div>
    )
}
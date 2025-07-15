import { useContext } from "react";
import {navStateContext} from "../Contexts/NavStateContext";
import {FormDataContext} from "../Contexts/FormDataContext";
import data from "/data.json";
export default function SummaryCard (){

    const {navState, navStateDispatch}= useContext(navStateContext);
    const {formData, formDispatch}= useContext(FormDataContext);

    const planType= formData.planType;
    const billingType= formData.yearlyBilling? "yearly": "monthly";
    const abbr= billingType==="monthly"? "mo":"y"
    const plans= data.plans 
    const planPrice= plans.find(plan=>plan.key===planType)?.price[billingType];

    const addOns= data.addOns;
    const onlineServicePr= formData.addOns.onlineService? addOns[0].price[billingType]: 0
    const largerStoragePr= formData.addOns.largerStorage? addOns[1].price[billingType]: 0
    const customizableProfilePr= formData.addOns.customizableProfile? addOns[2].price[billingType]: 0
    let total= planPrice+ onlineServicePr+ largerStoragePr+ customizableProfilePr;

    return(
        <div className="flex flex-col gap-3 md:gap-7">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl text-Blue-950 font-bold">Finishing up</h1>
                <p className="text-Grey-500">Double-check everything looks OK before confirming.</p>
            </div>
            <div className="bg-Blue-50 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex justify-between pb-3 border-b-[1px] border-blue-100" role="group" aria-label="selected plan">
                    <div>
                        <h2 className="text-Blue-950 font-medium mb-0">{planType.charAt(0).toUpperCase()+ planType.slice(1) + (billingType==="monthly"? " (Monthly)":" (Yearly)")}</h2>
                        <button type="button" className="text-Grey-500 underline cursor-pointer font-medium hover:text-Purple-600
                                transition-colors duration-200 ease-in-out"
                            onClick={()=> {
                                
                                 navStateDispatch({ type: "GO_TO", value: 2 });
                                
                                }}>Change</button>
                    </div>
                    <p className="text-Blue-950 font-bold">${planPrice}/{abbr}</p>
                </div>
                <dl className="flex flex-col gap-3 text-Grey-500">
                    {
                        formData.addOns.onlineService && 
                        <div className="flex justify-between">
                            <dt>Online Service</dt>
                            <dd className="text-Blue-950">+${onlineServicePr}/{abbr}</dd>
                        </div>
                    }
                    {
                        formData.addOns.largerStorage && 
                        <div className="flex justify-between">
                            <dt>Larger Storage</dt>
                            <dd className="text-Blue-950">+${largerStoragePr}/{abbr}</dd>
                        </div>
                    }
                    {
                        formData.addOns.customizableProfile && 
                        <div className="flex justify-between">
                            <dt>Customizable Profile</dt>
                            <dd className="text-Blue-950">+${customizableProfilePr}/{abbr}</dd>
                        </div>   
                    }
                </dl>
            </div>
            <dl className="px-4 mt-2 flex justify-between text-Grey-500">
                <dt>Total (per month)</dt>
                <dd className="text-Purple-600 font-bold">${total}/{abbr}</dd>
            </dl>
        </div>
    )
}
import { useContext } from "react"
import { FormDataContext } from "../Contexts/FormDataContext"

export default function AddOnCard({addOn}){

    const{formData, formDispatch}= useContext(FormDataContext);
    const billing= formData.yearlyBilling;
    const selected= formData.addOns[addOn.key];             
    
    return (
        <div className="w-full">
        <input className="sr-only peer"
                type="checkbox"
                id={`checkbox-${addOn.key}`}
                checked={selected}
                onChange={e=>formDispatch({
                    type: "SET_ADDONS",
                    field: addOn.key
                })}
                aria-labelledby={`label-${addOn.key}`}
                aria-describedby={`description-${addOn.key}`}
        />  
        <div className={`flex items-center justify-between gap-1 border-[1px] rounded-lg px-4 py-3 md:px-6
                        peer-focus-visible:ring-1 peer-focus-visible:ring-Purple-600
                        ${selected? "bg-blue-50 border-Purple-600": "border-Purple-200"}
                         hover:border-Purple-600 transition-border duration-200 ease-in-out`}>
            <div className="flex gap-3">
                <label htmlFor={`checkbox-${addOn.key}`} className="flex items-center gap-4 cursor-pointer">
                    <div className={`h-5 w-5 rounded-sm border-[1px] ${selected ? "bg-Purple-600 border-Purple-600" : "border-purple-200"} relative flex items-center justify-center transition-colors duration-300 ease-in-out`}>
                        <div
                            className={`bg-[url('/assets/images/icon-checkmark.svg')] bg-no-repeat bg-center bg-contain h-3 w-3 transition-all duration-300 ease-in-out ${
                            selected ? "opacity-100 scale-100" : "opacity-0 scale-75"
                            }`}
                        >

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-Blue-950 font-extrabold"
                            id={`label-${addOn.key}`}>{addOn.type}</span>
                        <span className="text-Grey-500"
                            id={`description-${addOn.key}`}>{addOn.desc}</span>
                    </div>
                </label>
            </div>
            <span className="text-Purple-600 font-medium text-sm">+${`${billing? addOn.price.yearly+"/yr": addOn.price.monthly+"/mo" }`}</span>
        </div>
        </div>
    )
}
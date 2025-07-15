import { useContext } from "react"
import { FormDataContext } from "../Contexts/FormDataContext"

export default function PersonalinfoCard(){

    const {formData, formDispatch}= useContext(FormDataContext);
    
    return (
        <fieldset className="flex flex-col gap-5 text-Blue-950">

                <legend className="font-bold text-2xl flex flex-col gap-2 mb-5">Personal info
                    <p className="text-Grey-500 text-base font-normal">Please provide your name, email address, and phone number.</p>
                </legend> 

            <div className="flex flex-col gap-3">
                <label className="flex flex-col text-sm font-medium" htmlFor="name">
                    <span className="flex justify-between">Name
                        <span className={`text-Red-500
                            ${formData.inputErrors.nameError? "opacity-100": "opacity-0"} 
                            transition-opacity duration-300 ease-in-out`} 
                            id="name-error">This field is required</span></span>
                    <input className={`border-[1px] rounded-sm py-2 px-3 placeholder:text-Grey-500 text-base focus:outline-none focus:border-Purple-600 
                           ${formData.inputErrors.nameError ? "border-Red-500": "border-Purple-200"} 
                           transition-colors duration-300 ease-in cursor-pointer`}
                            id="name" 
                            value={formData.formInputs.name}
                            onChange= {(e)=>  {
                                formDispatch({
                                    type: "SET_INPUT",
                                    field: "name",
                                    value: e.target.value
                                })
                                const value= e.target.value
                            if (formData.inputErrors.nameError && value.trim() !== ""){
                                formDispatch({ type: "SET_ERRORS", field: "nameError", value: false });
                            }
                             } }
                            type="text" 
                            placeholder="e.g. Stephen King"
                            aria-invalid={formData.inputErrors.nameError}
                            aria-describedby="name-error" />
                </label>
                <label className="flex flex-col text-sm font-medium" 
                        htmlFor="email">
                    <span className="flex justify-between">Email Address
                        <span  className={`text-Red-500
                            ${formData.inputErrors.emailError? "opacity-100": "opacity-0"} 
                            transition-opacity duration-300 ease-in-out`}
                            id="email-error">{formData.inputErrors.emailError && (formData.formInputs.email===""? 
                            ("This field is required"): ("Please Enter a valid email"))}</span></span>
                    <input className={`border-[1px] rounded-sm py-2 px-3 placeholder:text-Grey-500 text-base focus:outline-none focus:border-Purple-600 
                            ${formData.inputErrors.emailError ? "border-Red-500": "border-Purple-200"} 
                            transition-colors duration-300 ease-in cursor-pointer `}
                            id="email" 
                            value={formData.formInputs.email}
                            onChange= {(e)=>{

                                const value= e.target.value;
                                formDispatch({
                                type: "SET_INPUT",
                                field: "email",
                                value: e.target.value
                                })
                                if(formData.inputErrors.emailError && value.trim()!==""){
                                    formDispatch({
                                        type: "SET_ERRORS",
                                        field: "emailError",
                                        value: false
                                    })
                                }
                            }}
                            type="text" 
                            placeholder="e.g. stephenking@lorem.com"
                            aria-invalid={formData.inputErrors.emailError}
                            aria-describedby="email-error"/>
                </label>
                <label className="flex flex-col text-sm font-medium" htmlFor="number">
                    <span className="flex justify-between">Phone Number
                        <span className={`text-Red-500
                            ${formData.inputErrors.numberError? "opacity-100": "opacity-0"} 
                            transition-opacity duration-300 ease-in-out`}
                            id="number-error">{formData.inputErrors.numberError && (isNaN(formData.formInputs.number)? "Please enter a valid number" :
                        "This field is required")}</span></span>
                    <input className={`border-[1px] border-Purple-200 rounded-sm py-2 px-3 placeholder:text-Grey-500 text-base 
                            focus:outline-none focus:border-Purple-600 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none 
                            ${formData.inputErrors.numberError ? "border-Red-500": "border-Purple-200"} 
                            transition-colors duration-300 ease-in cursor-pointer`}
                            id="number"
                            value={formData.formInputs.number}
                            onChange= {(e)=>{
                                
                                formDispatch({
                                type: "SET_INPUT",
                                field: "number",
                                value: e.target.value
                                })
                                const value= e.target.value;
                                if(formData.inputErrors.numberError && value.trim()!==""){
                                    formDispatch({
                                        type: "SET_ERRORS",
                                        field: "numberError",
                                        value: false
                                    })
                                }
                            } }
                            type="text" 
                            placeholder="e.g. +1 234 567 890"
                            aria-invalid={formData.inputErrors.numberError}
                            aria-describedby="number-error"/>
                </label>
            </div>
            
        </fieldset>
    )
}
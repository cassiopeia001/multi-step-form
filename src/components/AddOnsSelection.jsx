import AddOnCard from "./AddOnCard"
import data from "/data.json"
export default function AddOnsSelection(){
    
    const addOns= data.addOns;
     
    return(
        <fieldset className="flex flex-col gap-3 md:gap-7 w-full">


                <legend className="font-bold text-2xl text-Blue-950 flex flex-col gap-1 mb-3 md:mb-7">Pick add-ons
                    <p className="text-Grey-500 text-base font-normal">Add-ons help enhance your gaming experience.</p>
                </legend>
            <div className="flex flex-col gap-3 md:w-full">
                {
                addOns.map((item, index)=>{
                    return <AddOnCard addOn={item} key={item.key} />
                })
                }
            </div>
        </fieldset>
    )
}
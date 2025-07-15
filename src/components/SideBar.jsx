import Step from "./Step"
export default function SideBar (){
    return (
        <div className="w-full h-full md:flex md:px-6 md:items-start">
            <div className="absolute -z-10 w-full top-0 left-0 h-1/4 md:hidden">
                <img className="h-full w-full object-cover" src="/multi-step-form/assets/images/bg-sidebar-mobile.svg" alt="sidebar background" />
            </div>
            <div className="flex justify-center pt-7 gap-5 z-30 md:flex-col">
                <Step number={1} />
                <Step number={2} />
                <Step number={3} />
                <Step number={4} />
            </div>
        </div>
    )
}

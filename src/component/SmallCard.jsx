import { HiOutlineComputerDesktop } from "react-icons/hi2";
import allData from "../DataArry";
import '../component/AdditionalCss.css'


export default function SmallCard(props) {
    const {icon,title,bg}=props
    return(
        <>
        <div className={`h-[230px] w-[230px] p-6 bg-[${bg}] smallcard-bg  m-2 rounded-[20px]`}>
        <span className="mt-">{icon}</span>
        <h2 className="text-slate-100 font-bold text-3xl pt-2">{title}</h2>
        <hr className="px-[10px] mt-[20px]" />

        </div>
        
        </>
    )
    
}
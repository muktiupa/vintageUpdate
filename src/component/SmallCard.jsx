import { HiOutlineComputerDesktop } from "react-icons/hi2";
import allData from "../DataArry";
<<<<<<< HEAD
import '../component/AdditionalCss.css'
=======
import '../component/Additional-CSS.css'
>>>>>>> 8cc078de1641a6ba43bf51a251922b5040d04577


export default function SmallCard(props) {
    const {icon,title}=props
    return(
        <>
<<<<<<< HEAD
        <div className={`h-[230px] w-[230px] p-6 bg-[${bg}] smallcard-bg  m-2 rounded-[20px]`}>
=======
        <div className={`h-[150px] w-[150px] p-3 sm-card-bg  rounded-[41px] mx-3`}>
>>>>>>> 8cc078de1641a6ba43bf51a251922b5040d04577
        <span className="mt-">{icon}</span>
        <h2 className="text-slate-100 font-bold text-3xl pt-2">{title}</h2>
        <hr className="px-[10px] mt-[20px]" />

        </div>
        
        </>
    )
    
}
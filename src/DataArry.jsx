import Homepage from './pages/Homepage'
import Events from './pages/Events'
import { HiOutlineComputerDesktop } from "react-icons/hi2";


const Menulist=[
    { menu:"Home",to:"/",path:<Homepage/>,  },
    { menu:"About",to:"/about",path:"<About/> " },
    { menu:"Courses",to:"/courses",path:"<Courses/>"   },
    { menu:"Events",to:"/Events", path:<Events/>  },
]

const SmallCardData=[
    {
        icon:<HiOutlineComputerDesktop size={50} stroke="white" strokeWidth={1.6}/>,
        title:'Computer Literacy',
        bg:'#FA6C9C'

    },
    {
        icon:<HiOutlineComputerDesktop size={50} stroke="white" strokeWidth={1.6}/>,
        title:'Computer Literacy',
        bg:'#EE64E4'
        
    },
    {
        icon:<HiOutlineComputerDesktop size={50} stroke="white" strokeWidth={1.6}/>,
        title:'Computer Literacy',
        bg:'#EEAF32'

    }
]


const allData={
    Menulist,SmallCardData
}
export default allData;
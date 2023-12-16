
import allData from "../DataArry"
import Button from "../component/Button"
import SmallCard from "../component/SmallCard"
export default function homepage() {

    return (
        <>


            <div className="w-full h-[80vh] flex items-center">
                <div className="w-1/2 font-bold " >
                    <h1 className="text-6xl text-[#FFA800]">Mastering Computers </h1>
                    <h3 className="my-5 text-3xl w-2/3">Transforming Students <br />for <span className="text-[#FFA800]">Future Success.</span></h3>
                    <p className="font-light text-sm w-2/3">Craft your success journey with <span className="font-bold">Vintage IT Academy's</span>  flexible career courses—online, offline, and hybrid</p>
                    {/* ---> */}
                    <div className="mt-8 mb-4 w-full flex items-center justify-between">

                        <Button Btn="Contact" />
                        <div className=" ">
                            <h1 className="text-4xl text-[#454545] ">50+</h1>
                            <p className="font-light">Courses</p>
                        </div>
                        <div className="" >
                            <h1 className="text-4xl text-[#454545] ">20k+</h1>
                            <p className="font-light">Students</p>
                        </div>

                    </div>
                </div>
                <div className="w-1/2" >photo</div>

            </div>
            <div className=" h-[50vh]" >
                <h2 className="w-1/2 text-4xl font-semibold ">Browse Top Essential Career Courses</h2>
                <div className=" flex justify-between items-center w-full mt-5 box-border flex-wrap ">
                {allData.SmallCardData.map((item) =>(
          <SmallCard icon={item.icon} title={item.title} bg={item.bg}/>
          ))}
                       <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="77.5" cy="77.5" r="77.5" fill="#FAD9F8"/>
<circle cx="77.5" cy="77.5" r="65.5" fill="#F9A7F3"/>
<ellipse cx="77.5" cy="76" rx="49.5" ry="50" fill="#EE64E4"/>
<path d="M84.3182 93.642L80.2841 89.6364L88.6932 81.2273H55V75.3182H88.6932L80.2841 66.9091L84.3182 62.9034L99.6875 78.2727L84.3182 93.642Z" fill="white"/>
</svg>

                </div>

            </div>


        </>

    )

}
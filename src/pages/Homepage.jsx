
import allData from "../DataArry"
import Button from "../component/Button"
import SmallCard from "../component/SmallCard"
export default function homepage() {

    return (
        <>


            <div className="w-full h-[90vh] flex items-center">
                <div className="w-1/2 font-bold " >
                    <h1 className="text-6xl text-[#FFA800]">Mastering Computers </h1>
                    <h3 className="my-5 text-3xl w-2/3">Transforming Students <br />for <span className="text-[#FFA800]">Future Success.</span></h3>
                    <p className="font-light text-sm w-2/3">Craft your success journey with <span className="font-bold">Vintage IT Academy's</span>  flexible career courses—online, offline, and hybrid</p>
                    {/* ---> */}
                    <div className="mt-8 mb-6 w-1/2 flex items-center justify-around">

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
                <h2 className="w-1/2 text-5xl font-semibold ">Browse Top Essential Career Courses</h2>
                <div className="py-3 flex w-1/2 ">
                {allData.SmallCardData.map((item) =>(
          <SmallCard icon={item.icon} title={item.title} bg={item.bg}/>
          ))}
                        
                </div>

            </div>


        </>

    )

}
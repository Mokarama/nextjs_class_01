import Link from "next/link"
import serviceData from '../data/services';


export default function Servicespage() {
 

  return (
    <div className=" mt-4">
        <p className=" font-bold text-center text-3xl text-blue-400  shadow-2xlshadow-gray-300">Services page</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {
         serviceData.map((d)=>{
            return(
              <div className="border-2 border-gray-400  m-6 rounded-3xl text-center p-4">
              <Link href={`/services/${d._id}`}>
               <img className="rounded-3xl h-[400px]" src={d.service_image} alt="" />
              </Link>
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

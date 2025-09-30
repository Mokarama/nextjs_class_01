import serviceData from '../../data/services'

export default function ServiceDetailpage({params}) {
   const id =params?.id;
   const singleData =data.find((d)=>d._id === id);

   if(singleData){
     return (
    <div className=''>
     <h2 className='text-3xl font-bold mb-15 shadow-2xl shadow-amber-400'>Service Detailpage</h2>
     

          <div className='flex'>
            {/* //Image container */}
            <div className=''>
           <img  className="rounded-3xl w-[400px]" src={`/${service.service_image}`} alt={service.service_name}/>
          </div>
       
            {/* Text container */}
            <div className='border-2 border-gray-400 py-20 px-5 rounded-3xl bg-gray-100 text-center shadow-2xl'>
             <h2 className="text-2xl font-bold text-blue-500 mb-2">{service.service_name}</h2>
            <p>{service.service_description}</p>
             </div> 

          </div>
          
    </div>
  )
   }

   else{
    return(
      <h3>Not found services</h3>
    )
   }
 
}

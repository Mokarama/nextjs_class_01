
"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'



export default function Aboutpage() {

 //first bar
 /*
  const router =useRouter();
  const isLoggedIn =false;

  const handleNavigation=()=>{
          if(isLoggedIn){
            router.push('/about/address')
          }

          else{
            router.push('/')
          }
  }
*/
  

//2nd bar

const route =useRouter();
const isLoggedIn = true;

const handleNavigation =()=>{
  if(isLoggedIn){
    route.push('/about/address')
  }
  
  else{
    route.push('/')
  }
}


const routeBtn = useRouter();
const isLoggedInBtn = true;

const handlenavigationBtn =()=>{
     if(isLoggedInBtn){
        routeBtn.push('/about/address/blog');
     }
     else{
        route.push('/')
     }
}
  return (
    <div>
        <h2 className='text-2xl bg-red-200 p-5 rounded-3xl'>About</h2>
        <Link href='/about/address'>
            <h2>Address page</h2>
        </Link>
      
      <button onClick={handleNavigation} className='btn p-4 rounded-2xl bg-blue-700 text-white' type='button' >Address pages</button>

      <button onClick={handlenavigationBtn} type='button' className='btn rounded-2xl bg-amber-500 text-shadow-indigo-100'>Blog pages</button>
       
    </div>
  )
}

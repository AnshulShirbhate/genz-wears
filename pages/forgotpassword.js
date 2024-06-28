import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState()

  useEffect(() => {
    if(localStorage.getItem("token")){
      router.push("/")
    }
  }, [])
  

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = { email }
    // try {
    //   let res = await fetch("http://localhost:3000/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
      
    //   const result = await res.json();
    //   if(result.success){
    //     localStorage.setItem("token", result.token)
    //     setEmail("")
    //     setPassword("")
    //     toast.success('Logged In', {
    //       position: "bottom-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //     setTimeout(()=>{
    //       router.push("http://localhost:3000")
    //     }, 2000)
    //   }else{
    //     toast.error(result.error, {
    //       position: "bottom-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });

    //   }
      

      
    // } catch (e) {
    //   toast.error('Internal Server Error', {
    //     position: "bottom-center",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }
  }

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image width={100} height={100} className="mx-auto rounded-3xl" src="/logo.png" alt="Your Company"/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
            <p className='text-center'>or <span className='text-blue-400 font-semibold'><Link href={"/login"}>login</Link></span></p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login
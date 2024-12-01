import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{

    const navigate = useNavigate()

    const handletestbtn = ()=>{
        navigate('/form')
    }
    const handlehome = ()=>{
        navigate('/')
    }

    return(
        <>
          <div className="h-[12vh] w-[100vw] bg-[#44404017] ">
            <div className="h-[75px] w-[80%]  mx-auto py-[10px] flex justify-around items-center ">
                <div className="w-[20%] h-[65px] ">
                    <img src="src\assets\Capture-removebg-preview.svg" alt="logo" className="h-[100%] w-[auto]   " />
                </div>
                <nav  className="w-[35%] " >
                    <ul className="flex justify-evenly items-center">
                        <li onClick={handlehome} className="hover:scale-110 cursor-pointer font-sans font-semibold text-[20px] ">Home</li>
                        <li onClick={handletestbtn} className="hover:scale-110 cursor-pointer font-sans font-semibold text-[20px] ">Test</li>
                        <li className="hover:scale-110 cursor-pointer font-sans font-semibold text-[20px] ">Contact</li>
                        <li className="hover:scale-110 cursor-pointer font-sans font-semibold text-[20px] ">Review</li>
                    </ul>
                </nav>
                <div  className="w-[20%]  ">
                    <button className="h-[auto] w-[90px] px-[10px] py-[6px] border border-transparent rounded bg-[#2488af] text-xl font-bold hover:border-[white] " >Login</button>
                </div>
            </div>
          </div>
        </>
    )
}
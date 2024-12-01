import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const API = "http://localhost:7887/api/quiz"
export const Form = () => {

    const [formInput, setformInput] = useState({ "answer1": "", "answer2": "", "answer3": "", "answer4": "" })
    const [correctAns, setCorrectAns] = useState({"finalAns": ""})
    const [qtn, setQtn] = useState({"question":""})
    const navigate = useNavigate()

    const handleFormInput = (e) => {

        const { name, value } = e.target
        setformInput((prev) => ({
            ...prev,
            [name]: value
        }))
        setCorrectAns((prev)=>({
            ...prev,
            [name]:value
        }))
        setQtn((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(formInput.answer1 === formInput.answer2 || formInput.answer2 === formInput.answer3 || formInput.answer3 === formInput.answer4 || formInput.answer4 === formInput.answer1){ 
                toast.error("answer can't be same");
                 return false;}

        try {
            const timeout = new Promise((_, reject) => 
                setTimeout(() => reject(new Error("Something went wrong. Please try again.")), 10000)
            );
            const res =  await Promise.race([
                axios.post(API, {
                    "question": qtn,
                    "answers": formInput,
                    "finalAns": correctAns
                }),
                timeout 
            ]);
            console.log(res.status, res, res.statusText)
            setformInput({ "answer1": "", "answer2": "", "answer3": "", "answer4": "" })
            toast.success("Successfully submitted")
            if(res.status !== 200){
                toast.error("Something went wrong..")
            }
        } catch (e) {
            toast.error(e.message)
            setformInput({ "answer1": "", "answer2": "", "answer3": "", "answer4": "" })
            setQtn({"question":""})
            setCorrectAns({"finalAns": ""})
        }
    }

    const handleReset = ()=>{
        setCorrectAns("")
        setQtn("")
        setformInput({ "answer1": "", "answer2": "", "answer3": "", "answer4": "" })
    }
    const handlebackbtn = ()=>{
        navigate('/') 
    }
    return (
        <>
            <div className="h-[100vh] w-[100vw] bg-[black] text-white border border-transparent ">
                <form className="flex flex-wrap h-[auto] flex-col border border-white w-[60vw] mx-auto px-[10px] py-[20px] rounded bg-[#ffffff10] my-[40px] " onSubmit={handleSubmit} >
                    <h3 className="font-bold text-2xl " >Fill All the Fields.</h3>
                    <label htmlFor="qtn">Enter Question:</label>
                    <input type="text" className="h-[35px] ml-[18px] w-[60%] border rounded border-black px-[10px] py-[8px] bg-[#ffffff28] text-[white] outline-none " id="qtn"  name="question" value={qtn.question} onChange={handleFormInput} required />


                    <div className="border border-transparent rounded px-[8px] py-[10px] " >
                        <h3 className="text-2xl font-semibold " >Answers Option :-</h3>
                        <label htmlFor="ans1" className="ml-[10px] ">First Option:</label><br />
                        <input type="text" className="h-[30px] ml-[18px] w-[60%] border rounded border-black px-[10px] py-[8px] bg-[#ffffff28] text-[white] outline-none " id="ans1" name="answer1" value={formInput.answer1} onChange={handleFormInput} required /><br />
                        <label htmlFor="ans2" className="ml-[10px] ">Second Option:</label><br />
                        <input type="text" className="h-[30px] ml-[18px] w-[60%] border rounded border-black px-[10px] py-[8px] bg-[#ffffff28] text-[white] outline-none " id="ans2" name="answer2" value={formInput.answer2} onChange={handleFormInput} required /><br />
                        <label htmlFor="ans3" className="ml-[10px] ">Third Option:</label><br />
                        <input type="text" className="h-[30px] ml-[18px] w-[60%] border rounded border-black px-[10px] py-[8px] bg-[#ffffff28] text-[white] outline-none " id="ans3" name="answer3" value={formInput.answer3} onChange={handleFormInput} required /><br />
                        <label htmlFor="ans4" className="ml-[10px] ">Forth Option:</label><br />
                        <input type="text" className="h-[30px] ml-[18px] w-[60%] border rounded border-black px-[10px] py-[8px] bg-[#ffffff28] text-[white] outline-none " id="ans4" name="answer4" value={formInput.answer4} onChange={handleFormInput} required /><br />
                    </div>
                    <label htmlFor="correctAns">Correct Option:</label>
                    <input type="text" className="h-[30px] ml-[18px] w-[60%] border rounded border-black px-[10px] py-[8px] bg-[#ffffff28] text-[white] outline-none " id="correctAns" name="finalAns" value={correctAns.finalAns} onChange={handleFormInput} />
                    <div className="flex justify-around w-[80%] my-[14px] px-[8px] py-[8px] items-center " >
                        <button className="border border-white rounded h-auto w-auto px-[12px] py-[4px] cursor-pointer " type="submit" >SUBMIT</button>
                        <button className="border border-white rounded h-auto w-auto px-[12px] py-[4px] cursor-pointer " type="reset" onClick={handleReset} >RESET</button>
                    </div>
                    <p className="text-[blue] hover:text-[red] hover:underline w-fit cursor-pointer " onClick={handlebackbtn} >Back to homePage.</p>
                </form>
            </div>
        </>
    )
}
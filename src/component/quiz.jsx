import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const API = "http://localhost:7887/api/quiz"
const API2 = "http://localhost:7887/result/score"
export const QuizApp = () => {
    const [data, setdata] = useState()
    const [selectedAns, setselectedAns] = useState({})
    const [Score, setscore] = useState(0)
    const [question, setquestion] = useState([])
    const [error, seterror] = useState()
    const [loading, setloading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(API)
                setdata(res.data)
                setloading(false)
                // console.log(res.data);


                if (Array.isArray(res.data)) {
                    setquestion(res.data)
                } else {
                    seterror("Something went wrong.")
                }
            } catch (error) {
                seterror(error.message)
            }
        }
        fetchdata()
    }, [])

    const handleAnswerSelect = (questionId, answer) => {
        setselectedAns((prevState) => ({
            ...prevState,
            [questionId]: answer
        }))
    }

    // const handleScore = ()=>{
    //     question.map((index, idx)=>{
    //         if(data[idx].finalAns === selectedAns[idx.id]){
    //             console.log(data[idx].finalAns, "and",selectedAns[idx.id] )
    //         }
    //     })
    // }
    // console.log(selectedAns);

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            let totalscore = question.reduce((scores, qtn) => {
                if (qtn.finalAns.toUpperCase() === selectedAns[qtn.id]) {
                    return scores + 1
                }
                return scores;
            }, 0)
            console.log(totalscore);
            
            setscore(totalscore)


            const res = await axios.post(API2,{
                "score":Score
            })
            console.log(res.status);
            toast.success("Submitted ")
            setselectedAns({})
            setTimeout(() => {                
                window.location.reload()
            }, 5000);
        } catch (e) {
            seterror(e.message)
        }
    }

    const handleBackbtn = () => {
        navigate('/')
    }

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <>
            <h1 className="text-center text-[28px] " >Quiz app</h1>
            <form onSubmit={handleSubmit} >
                <ul  >
                    {
                        data.map((dataIndex, dataItem) => (
                            <div key={dataIndex.id} className="h-auto w-[80vw] mx-auto border border-[#7a7a7a] rounded my-[8px] px-[10px] py-[6px] bg-[#363535a6] " >
                                <h3  >Q{dataItem + 1}.  {dataIndex.question} </h3>
                                {
                                    dataIndex.answers.map((ansItem, ansId) => (
                                        <div key={ansId} className="h-auto w-[80%] ml-[14px] my-[3px] px-[5px] py-[5px] " >
                                            {['answer1', 'answer2', 'answer3', 'answer4'].map((answerKey, idx) => (
                                                <div key={idx}>
                                                    <input
                                                        className="inputRadio"
                                                        type="radio"
                                                        id={`ans${idx + 1}`}
                                                        name={`question-${dataIndex.id}`}
                                                        value={ansItem[answerKey]}
                                                        // checked={selectedAns[dataIndex.id] === ansItem[answerKey]}
                                                        onChange={() => handleAnswerSelect(dataIndex.id, ansItem[answerKey].toUpperCase())}
                                                    />
                                                    <label htmlFor={`ans${idx + 1}`}>{ansItem[answerKey].toUpperCase()}</label><br />
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </ul>
                <button type="submit" className="h-auto w-auto text-[15px] font-semibold px-[8px] py-[4px] border rounded border-black bg-[#17697ea6] ml-[10%]  " >SUBMIT</button>
                
            </form>
            <button onClick={handleBackbtn} className="h-auto w-auto text-[15px] font-semibold px-[8px] py-[4px] border rounded border-black bg-[#7c8694a6] ml-[10%] mt-[10px] " >BACK</button>
        </>
    )
}
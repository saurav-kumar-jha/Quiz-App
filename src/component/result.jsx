import axios from "axios"
import { useEffect, useState } from "react"

const API = "http://localhost:7887/api/quiz"
export const Result = () => {
    const [data, setdata] = useState()

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(API)
                console.log(res);
                
                setdata(res.data)
            }
            catch (e) {
                console.log(e.messge)
            }
        }
        fetchApi()
    }, [])
    // console.log(data)

    return (
        <>
            {/* <ul>
                {
                    data.map((index, item) => (
                        <li key={index.id} >
                            <h5>No:{item + 1} </h5>
                            <h3>Score: {index.score} </h3>
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}
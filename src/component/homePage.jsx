import { useNavigate } from "react-router-dom"
import { Navbar } from "./navbar"
import ReactTypingEffect from "react-typing-effect"


export const Homepage = () => {

  const navigate = useNavigate()


  const handleGiveExam = () => {
    navigate('/quiz')
  }

  const handleTakeExam = () => {
    navigate('/form')
  }

  return (
    <>
      <div className="homepage">
        <Navbar />
        <div className="h-[88vh] w-[100vw] bg-[#00000044] " >
          <div className="h-[30%] w-[72%] mx-auto border border-transparent " >
            <h2 className="text-[44px] font-bold text-center mt-[20px] " >
              <ReactTypingEffect text={['Welcome to QUIZZY!']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={500} cursor={'|'} /></h2>
            <p className="text-[18px] mt-[20px]  " >Welcome to our platform, designed to make online learning and assessments easier for both teachers and students. Our website offers teachers a simple and efficient way to create and manage objective-type exams online, allowing them to evaluate their students’ knowledge with ease. Whether you're a teacher looking to streamline assessments or a student preparing for your next test, we’ve got you covered with tools that are accessible, user-friendly, and entirely free.</p>
          </div>
          <div className="border border-transparent w-[80vw] mx-auto mt-[60px] flex justify-evenly " >
            <button onClick={handleTakeExam} className="h-[50px] w-[140px] text-[15px] font-semibold px-[8px] py-[4px] border rounded-3xl border-black bg-[#11596ba6] ml-[10%] hover:bg-[#173b44da] hover:scale-105 " >Take Exam</button>
            <button onClick={handleGiveExam} className="h-[50px] w-[140px] text-[15px] font-semibold px-[8px] py-[4px] border rounded-3xl border-black bg-[#17697ea6] ml-[10%]  hover:bg-[#173b44da] hover:scale-105 " >Give Exam</button>
          </div>
        </div>
      </div>
    </>
  )
}
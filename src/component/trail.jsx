{dataIndex.answers.map((ansItem, ansId) => (
    <div key={ansId} className="h-auto w-[80%] ml-[14px] my-[3px] px-[5px] py-[5px]">
        {['answer1', 'answer2', 'answer3', 'answer4'].map((answerKey, idx) => (
            <div key={idx}>
                <input
                    type="radio"
                    id={`ans${idx + 1}`}
                    name={`question-${dataIndex.id}`}
                    value={ansItem[answerKey]}
                    checked={selectedAns[dataIndex.id] === ansItem[answerKey]}
                    onChange={() => handleAnswerSelect(dataIndex.id, ansItem[answerKey].toUpperCase())}
                />
                <label htmlFor={`ans${idx + 1}`}>{ansItem[answerKey].toUpperCase()}</label><br />
            </div>
        ))}
    </div>
))}
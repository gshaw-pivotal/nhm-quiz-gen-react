import {useState} from "react";

const NHM = () => {

    const numberOfProblems = 20;

    const [maxSumValue, setMaxSumValue] = useState(10);
    const [maxSecondArg, setMaxSecondArg] = useState(1);
    const [secondArgRange, setSecondArgRange] = useState(false);
    const [twoColumnQuizProblem, setTwoColumnQuizProblem] = useState([]);

    const generateNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateQuiz = event => {
        let newQuizProblems = [];

        for (let i = 0; i < numberOfProblems; i++) {
            let eqType = generateNumberInRange(1, 2);
            let secondArgFirst = generateNumberInRange(1, 2);
            let secondArgValue = secondArgRange ? generateNumberInRange(0, maxSecondArg) : maxSecondArg;
            let firstArgValue;

            if (eqType === 1) {
                // Addition
                firstArgValue = generateNumberInRange(0, maxSumValue - secondArgValue);
            } else {
                // Subtraction
                firstArgValue = generateNumberInRange(secondArgValue, maxSumValue);
            }

            if (eqType === 1) {
                // Addition
                if (secondArgFirst === 1) {
                    newQuizProblems.push(`${secondArgValue} + ${firstArgValue}`);
                } else {
                    newQuizProblems.push(`${firstArgValue} + ${secondArgValue}`);
                }
            } else {
                // Subtraction
                newQuizProblems.push(`${firstArgValue} - ${secondArgValue}`);
            }
        }

        generateTwoColumns(newQuizProblems);
    }

    const generateTwoColumns = (newQuizProblems) => {
        let twoColumns = [];

        for (let i = 0; i < numberOfProblems; i = i+2) {
            console.log(`${i} ${newQuizProblems[i]} ${newQuizProblems[i+1]}`)
            twoColumns.push(
                <div className="quiz-problem-row">
                    <span className="quiz-problem-col-1">
                        <span className="quiz-problem-span-1">{newQuizProblems[i]}</span>
                        <span className="quiz-problem-span"> = </span>
                        <span className="quiz-problem-span">___</span>
                    </span>
                    <span className="quiz-problem-col-2">
                        <span className="quiz-problem-span-1">{newQuizProblems[i+1]}</span>
                        <span className="quiz-problem-span"> = </span>
                        <span className="quiz-problem-span">___</span>
                    </span>
                </div>
            );
        }

        setTwoColumnQuizProblem(twoColumns);
    }

    return (
        <div align="center">
            <div>
                <span>Max Sum Value (x + y =):</span>
                <input
                    className="max-sum-value-box"
                    type="number"
                    onChange={(e) => {
                        setMaxSumValue(parseInt(e.target.value))
                    }}
                    value={maxSumValue}
                />
            </div>
            <div>
                <span>(Max) Second Arg:</span>
                <input
                    className="second-arg-box"
                    type="number"
                    onChange={(e) => {
                        setMaxSecondArg(parseInt(e.target.value))
                    }}
                    value={maxSecondArg}
                />
            </div>
            <div>
                <span>Use range 0 to max second arg value:</span>
                <input
                    className="second-arg-range-checkbox"
                    type="checkbox"
                    onChange={(e) => {
                        setSecondArgRange(!secondArgRange)
                    }}
                    value={secondArgRange}
                />
            </div>
            <div>
                <button
                    className="generate-button"
                    onClick={generateQuiz}
                >Generate
                </button>
            </div>
            <hr/>
            <div>
                {twoColumnQuizProblem.map((item, i) => (<>{item}</>))}
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <NHM/>
        </div>
    );
}

export default App;
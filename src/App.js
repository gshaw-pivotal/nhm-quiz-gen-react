import {useState} from "react";

const NHM = () => {

    const numberOfProblems = 20;

    const [secondArg, setSecondArg] = useState(1);
    const [twoColumnQuizProblem, setTwoColumnQuizProblem] = useState([]);

    const generateNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateQuiz = event => {
        let newQuizProblems = [];

        for (let i = 0; i < numberOfProblems; i++) {
            let eqType = generateNumberInRange(1, 2);
            let secondArgFirst = generateNumberInRange(1, 2);
            let firstArgValue;

            if (eqType === 1) {
                firstArgValue = generateNumberInRange(0, 10 - secondArg);
            } else {
                firstArgValue = generateNumberInRange(10, secondArg);
            }

            if (eqType === 1) {
                // Addition
                if (secondArgFirst === 1) {
                    newQuizProblems.push(`${secondArg} + ${firstArgValue}`);
                    console.log(`${secondArg} + ${firstArgValue}`);
                } else {
                    newQuizProblems.push(`${firstArgValue} + ${secondArg}`);
                    console.log(`${firstArgValue} + ${secondArg}`);
                }
            } else {
                // Subtraction
                newQuizProblems.push(`${firstArgValue} - ${secondArg}`);
                console.log(`${firstArgValue} - ${secondArg}`);
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
                <span>Second Arg:</span>
                <input
                  className="second-arg-box"
                type="number"
                onChange={(e) => {setSecondArg(e.target.value)}}
                value={secondArg}
              />
          </div>
          <div>
              <button
                  className="generate-button"
                  onClick={generateQuiz}
              >Generate</button>
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
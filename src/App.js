import { Wrapper } from "./Components/Wrapper";
import { Screen } from "./Components/Screen";
import { Buttonbox } from "./Components/Buttonbox";
import { Button } from "./Components/Button";
import { CalcProvider } from "./Context/CalcContext";


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];





function App() {
  return (
    <CalcProvider>
      <Wrapper>
      <Screen/>
      <Buttonbox>
        {btnValues.flat().map((btn, i)=>(
          <Button
            value={btn}
            key={i}
          />
        ))}
      </Buttonbox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;

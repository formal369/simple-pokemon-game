import { useState } from "react";
import './App.css';
import Box from "./component/Box";

const pokemon = {
  charmander : {
    name: "파이리",
    img:"https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTFfMzAw/MDAxNTQ3MTg4MzUxNDk3.MDppdFgXR_oSpWQ-btdzfzHCtJ6j9cPHtYNJ_aOfxPwg.jodOhnYfP2KUuTngksUgluw-RKHyOYU9lUtHhqMOfP0g.JPEG.jurong25/20190111_152821.jpg?type=w800"
  },
  squirtle : {
    name: "꼬부기",
    img:"https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTZfMTUx/MDAxNTQ3NjEzODk5NDUx.YTo4S1fcYF-15vEHYxVLCq5MUO8ELvc2pJztfKjnI88g.uM3_NKxdNXZDwjmFBgTJb04dPfbwSxkIsKeIjvXOGmcg.JPEG.jurong25/20190116_103734.jpg?type=w800"
  },
  bulbasaur: {
    name: "이상해씨",
    img:"https://mblogthumb-phinf.pstatic.net/20160118_213/jaehoori78_1453108954748XxemE_PNG/3.png?type=w2"
  }
}


function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(pokemon[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(pokemon[userChoice], computerChoice));
    console.log("result", result);
  }

  const randomChoice = () => {
    let itemArray = Object.keys(pokemon); // Object의 키값만 모아서 Array로 만들어준다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return pokemon[final];
  }

  const judgement = (user, computer) => {
    if(user.name == computer.name) {
      return "tie";
    } else if(user.name == "꼬부기") {
      return computer.name == "파이리" ? "win" : "lose"
    } else if(user.name == "파이리"){
      return computer.name == "이상해씨" ? "win" : "lose"
    } else if(user.name == "이상해씨"){
      return computer.name == "꼬부기" ? "win" : "lose"
    }
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("charmander")}>파이리</button>
        <button onClick={() => play("squirtle")}>꼬부기</button>
        <button onClick={() => play("bulbasaur")}>이상해씨</button>
      </div>
    </div>
  );
}

export default App;

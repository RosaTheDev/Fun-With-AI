import {useState, useEffect} from "react";

const ResponseContainer = ({prompt, response}) => {
  const[promptArray, setPromptArray] = useState([]);
  
  useEffect(() => {
    if(!promptArray.includes(prompt)) {
      setPromptArray([...promptArray, prompt]);
    } else {
      return prompt
    }
  })
  
 const results = promptArray.filter(element => {
    if(Object.keys(element).length !== 0) {
      return true
    }
    return false
  })

  console.log(results)
  return(
    <div>
      <h1>I am a card</h1>
      <h1>I am a card</h1>
      <h1>I am a card</h1>
    </div>
  )
}

export default ResponseContainer;
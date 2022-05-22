import {useState, useEffect} from "react";
import ResponseInfoCards from "./ResponseInfoCards/ResponseInfoCards";
const ResponseContainer = ({prompt}) => {
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

  const responseCards = results.map((result, index) => {
    return(
      <div key={index}>
        <ResponseInfoCards prompt={result.prompt} response={result.response}/>
      </div>
    )
  })

  const sortedArray = responseCards.sort((response1, response2) => {
    return response2.key - response1.key
  })


  return(
    <div>
      {sortedArray}
    </div>
  )
}

export default ResponseContainer;
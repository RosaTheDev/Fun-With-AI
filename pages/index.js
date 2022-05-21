import Header from './HeaderContainer/headerContainer'
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promptInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setPromptInput("");
  }

  return (
    <div>
      <Header/>

      <main className={styles.main}>
        <h3>Fun With AI</h3>
        <form onSubmit={onSubmit}>
          <h4>Enter Prompt</h4>
          <input
            type="text"
            name="prompt"
            placeholder="Ask Me Anything"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

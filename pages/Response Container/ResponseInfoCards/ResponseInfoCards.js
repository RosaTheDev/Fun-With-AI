import styles from '../../index.module.css'
const ResponseInfoCards = ({prompt, response}) => {
  return (
    <div className={styles.cards}>
      <h1>Prompt: {prompt} <br/><br/> Response: {response}</h1>
    </div>
  )
}

export default ResponseInfoCards;
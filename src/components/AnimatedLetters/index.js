import './index.scss'

const AnimatedLetters = ({ letterClass, charArray, idx }) => {
  return (
    <span>
      {charArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters

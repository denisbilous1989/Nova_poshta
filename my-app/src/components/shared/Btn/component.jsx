import './styles.scss'

const Btn = ({text, className}) => (
    <button className={`btn ${className}`}>{text}</button>
  )


export default Btn;
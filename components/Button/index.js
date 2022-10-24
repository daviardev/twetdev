import styles from './styles.module.css'

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className={styles.button}>
        {children}
      </button>
    </>
  )
}

export default Button

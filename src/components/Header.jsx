import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <h1> Contact App </h1>
        <p>
            <a href="https://farzadsolaimani-uk.netlify.app/"> Main website </a> | resume & portfolios
        </p>
    </div>
  )
}

export default Header
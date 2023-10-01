import Link from 'next/link'
 
export default function NotFound() {

  const styles = {
    pageContainer : ` h-screen flex flex-col justify-center items-center space-y-3`,
    button:`rounded-2xl p-2 bg-white text-black font-bold transform transition-transform hover:scale-100`,
  }
  return (
    <div className={styles.pageContainer}>
      <h2>Ups...</h2>
      <p>We couldnt find the movie you are looking for!</p>
      <Link href="/" className={styles.button}>Return Home</Link>

    </div>
  )
}
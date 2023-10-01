import Link from "next/link"
import {FaPlus} from "react-icons/fa"
import Image from "next/image"
import styles from "./styles.module.css"


const FeaturedMovie = ( {movie = {}, isCompact = true}) => {
const { poster_path, title, overview} = movie
return (
    <div className="p-10 sm:px-72 space-y-5">
      <h1 className="font-bold text-4xl sm:text-8xl uppercase ">{title}</h1>
      <p
        className={` ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>

);
}

export default FeaturedMovie   
import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.css"

const About = () => {
    const style = {
        mainContainer : `flex flex-col justify-center items-center space-y-10 sm:space-y-20 p-5 sm:p-10`,
        gridContainer : `grid sm:grid-cols-3 gap-20`,
        container : `space-y-5 backdrop-blur-lg p-3  transition-transform transform hover:scale-110`,
    }
    return(
    <div className={style.mainContainer}>
        
        <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
          `}
           alt="image"
          fill
        />
      </div>

        <div className="space-y-5">
            <p className="text-center font-light text-5xl">
            Welcome to my Next.js-powered app, where I have combined technology with my passion for entertainment to bring you an experience in the world of TV shows and movies.
            </p>
        </div>

        <div className={style.gridContainer}>
            <div className={style.container}>
                <h3 className="text-xl">
                    My Journey
                </h3>
                <p className="font-light text-sm">
                My journey began with a deep dive into the intricate world of web development. Armed with Next.js, I embarked on a mission to create a platform that not only looks fantastic but also functions flawlessly. Along the way, I delved into various key concepts, honing our skills in routing, REST APIs, rendering techniques, and responsive design.
                </p>
            </div>

            <div className={style.container}>
                <h3 className="text-xl">
                    Crafting Excellence
                </h3>
                <p className="font-light text-sm">
                Every component you see in our app has been crafted by me, utilizing the power of Tailwind CSS. I take pride in the fact that I built every aspect of this platform with creativity and precision, user-friendly experience.
                </p>
            </div>

            <div className={style.container}>
                <h3 className="text-xl">
                    Discover and Have Fun
                </h3>
                <p className="font-light text-sm">
                With our app, you can seamlessly browse through a vast collection of TV shows and movies, discovering new gems and classics alike.Let`&apos;`s explore, discover, and have a blast together with this app. Thank you for being a part of this community!
                </p>
            </div>
        </div>

        <div>
            <Link href="">
                Click for the repo!
            </Link>
        </div>
    </div>
    )
}

export default About
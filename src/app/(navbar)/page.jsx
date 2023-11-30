import { Button } from "@mui/material";
import Image from "next/image";
import { homeLaptop } from "@/data/images";
import commonstyles from "@/styles/commonStyles.module.scss";
import styles from "./home.module.scss";

function Home() {
  return (
    <main className={commonstyles.mainContainer}>
      <h1>
        27 Best About Us and about Me Page <br /> Examples of 2023[+Templates]
      </h1>
      <Button variant="contained">Download Now: Free Bbout Us Examples</Button>
      <section className={commonstyles.centerContainer}>
        <div className={commonstyles.centerDiv}>
          <p>
            Your about page summarizes your history, values, and mission - all
            in one place. That&apos;s a tall order for a just few paragraphs. If
            you&apos;re feeling stuck, turn to these about-page examples for
            inspiration.
          </p>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={homeLaptop}
                alt="hompage laptopo"
                objectFit="cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

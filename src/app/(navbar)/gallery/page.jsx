import Image from "next/image";
import commonstyles from "@/styles/commonStyles.module.scss";
import styles from "./gallery.module.scss";
import { GALLERY_DATA } from "@/data";
import { heart } from "@/data/images";

function Gallery() {
  return (
    <main className={commonstyles.mainContainer}>
      <h1 className={styles.galeryHeader}>Find the perfect Logo for Dude</h1>
      <section className={commonstyles.centerContainer}>
        <div className={styles.galleryWrapper}>
          <div className={styles.galleryContainer}>
            {GALLERY_DATA.map((item) => (
              <div
                key={`gallery-${item?.id}`}
                className={styles.galleryCard}
                style={{ backgroundColor: item?.color }}
              >
                <Image
                  className={styles.heartIcon}
                  src={heart}
                  alt="heart"
                  width={32}
                  height={33}
                />
                <Image
                  src={item?.image}
                  alt={`gallery ${item?.id}`}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;

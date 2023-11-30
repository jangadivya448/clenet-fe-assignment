import Image from "next/image";
import { blogsHome } from "@/data/images";
import commonstyles from "@/styles/commonStyles.module.scss";
import styles from "./blogs.module.scss";

function Blogs() {
  return (
    <section className={commonstyles.mainContainer}>
      <h1 className={styles.blogsHeader}>
        <span>Website</span> Tips and tutorials on how to build better websites
      </h1>
      <section className={commonstyles.centerContainer}>
        <div className={styles.blogsWrapper}>
          <div className={styles.blogsContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={blogsHome}
                alt="hompage laptopo"
                objectFit="cover"
                fill
              />
            </div>
            <div className={styles.blogContent}>
              <h2>The 16 Best CMS System Today & How to Choose</h2>
              <p className={styles.blogDesc}>
                Compare the ease of use, customizability, and security of these
                CMS platforms so that you can find one that suits your
                site&apos;s needs and goals.
              </p>
              <p className={styles.blogAuthor}>
                Anna Fetzgerald
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8/11/22
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Blogs;

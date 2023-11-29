import { TAB_DATA } from "@/data";
import TabItem from "./TabItem";

import styles from "./tabs.module.scss";

function Tabs() {
  return (
    <section className={styles.tabContainer}>
      {TAB_DATA.map((tab) => (
        <TabItem key={tab?.path} tab={tab} />
      ))}
    </section>
  );
}

export default Tabs;

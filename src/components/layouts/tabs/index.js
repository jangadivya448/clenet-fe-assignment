import { TAB_DATA } from "@/data";
import TabItem from "./TabItem";
import MobileTabs from "./MobileTab";

import styles from "./tabs.module.scss";

function Tabs() {
  return (
    <section className={styles.tabContainer}>
      <div className={styles.desktopTabs}>
        {TAB_DATA.map((tab) => (
          <TabItem key={tab?.path} tab={tab} />
        ))}
      </div>
      <MobileTabs />
    </section>
  );
}

export default Tabs;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from "./tabs.module.scss";

function TabItem({ tab }) {
  const pathname = usePathname();
  return (
    <Link
      className={classNames({
        [styles.tabLink]: true,
        [styles.highlight]: pathname == tab?.path,
      })}
      href={tab?.path}
    >
      {tab?.title}
    </Link>
  );
}

export default TabItem;

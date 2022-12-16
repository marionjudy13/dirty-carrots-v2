import styles from "../styles/layout.module.scss";
import Link from "next/link";
import Topnav from "./topnav";
import WorkInProgress from "./work-in-progress";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Topnav />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {children}
          <div className={styles.returnHome}>
            <Link href="/">
              <a className={styles.backHome}>Back Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

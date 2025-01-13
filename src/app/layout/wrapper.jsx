"use client";

import Link from "next/link"; // Import Next.js's Link component
import styles from "../../styles/layout/Wrapper.module.scss"; // Assuming you're using CSS modules for styling
import brandingWrapper from "../../../public/data/brandingWrapper"; // Static data or a JSON file

const Wrapper = () => {
  return (
    <>
      <section className={styles.brandingWrapper}>
        {" "}
        {/* Assuming you're using CSS modules */}
        <div className={styles.container}>
          {brandingWrapper.map((val, index) => {
            return (
              <div className={styles.box} key={index}>
                {" "}
                {/* Added key prop */}
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>
                <Link href="/contact" className={styles.primaryBtn}>
                  Contact Us
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;

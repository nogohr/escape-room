import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./pagelayout.module.scss";

export default function PageLayout({ children }) {
  return (
    <>
      <CssBaseline />
      <div className={styles.container}>{children}</div>
    </>
  );
}

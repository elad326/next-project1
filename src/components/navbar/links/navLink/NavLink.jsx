"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";


//item מגיע בפרופ מהאבא, מהמערך שב -- Links.jsx 
const NavLink = ({ item }) => {

    //path hook - הוק בשביל לשלוף את הראוט .
  const pathName = usePathname();

  //לאחר שליפת הראוט, אם ובמידה אנחנו בדף יש לתת קלאס אקטיב ללינק 
  //כדי שהפריט בתפריט יצבע בלבן    
  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
  );
};

export default NavLink;

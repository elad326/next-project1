"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";


const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>

            {/* זה מרנדר את התפריט הרגיל כולל שליחת פרופס לקמפוננטת בן -- Navlivk.jsx */}
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}

            {/* כאן נעשית בדיקה האם היוזר מחובר - אם כן : זה יציג כפתור ל 
            Admin + logout 
            אחרת זה יציג את כפתור התחברות -- login  */}
            {
                session ? (
                    <>
                        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
                        <button className={styles.logout}>Logout</button>

                    </>
                    
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
        
        </div>
        
        {/* זו תמונה של כפתור התפריט ובה פונקציה שעובדת על הסטייט - ועושה הפוך מהקיים . אם התפריט פתוח יש לסגור אותו 
        כלומר לתת -- false בסטייט 
        אחרת יש לפתוח את התפריט -- כלומר לתת -- true 
        בסטייט  */}
        <Image className={styles.menuButton} src="/menu.png" alt="menu button for mobile" width={30} height={30} onClick={() => setOpen((prev) => !prev)} /> 

        {
            // כאן זה בודק האם לפתוח את התפריט במובייל או לסגור 
            open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                
                </div>
            )
        }

    </div>
  );
};

export default Links;

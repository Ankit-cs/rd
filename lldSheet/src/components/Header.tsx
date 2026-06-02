import React from 'react';

// --- Tailwind Class Variables for Readability ---
const styles = {
  headerWrapper: "sticky top-0 z-[200] flex items-center justify-between border-b border-brd bg-bg2/95 px-8 py-4 backdrop-blur-xl",
  logoWrapper: "flex items-center gap-3",
  logoIcon: "flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-green-main/20 bg-gdim text-[16px]",
  logoText: "font-display text-[18px] font-bold tracking-[-0.3px] text-[#e8e8e8]",
  logoHighlight: "text-green-main",
  logoTag: "mt-[2px] text-[10px] tracking-[1px] text-t3",
  rightWrapper: "flex items-center gap-6",
  pillsWrapper: "flex items-center gap-[8px]",
  pill: "flex items-center gap-[6px] rounded-[20px] border border-brd2 bg-s1 px-[14px] py-[5px] text-[12px] text-t2",
  dot: "h-[7px] w-[7px] shrink-0 rounded-full",
  dotDg: "bg-green-main",
  dotDa: "bg-amber-500",
  dotDr: "bg-red-500"
};

interface HeaderProps {
  cDone?: number;
  cActive?: number;
  cNS?: number;
}

export default function Header({ cDone = 0, cActive = 0, cNS = 0 }: HeaderProps) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoIcon}>
          🌱
        </div>
        <div className={styles.logoText}>
          <span className={styles.logoHighlight}>mySystemDesign</span>
          <div className={styles.logoTag}>BEGINNER TO ADVANCED</div>
        </div>
      </div>

      <div className={styles.rightWrapper}>
        <div className={styles.pillsWrapper}>
          <div className={styles.pill}><span className={`${styles.dot} ${styles.dotDg}`}></span><span>{cDone}</span>&nbsp;Done</div>
          <div className={styles.pill}><span className={`${styles.dot} ${styles.dotDa}`}></span><span>{cActive}</span>&nbsp;Active</div>
          <div className={styles.pill}><span className={`${styles.dot} ${styles.dotDr}`}></span><span>{cNS}</span>&nbsp;Pending</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

// --- Tailwind Class Variables for Readability ---
const styles = {
  barWrapper: "flex items-center gap-4 border-b border-brd bg-bg2 px-8 py-[10px]",
  label: "whitespace-nowrap text-[10px] font-medium uppercase tracking-[1px] text-t3",
  track: "h-[4px] flex-1 overflow-hidden rounded-[2px] bg-s3",
  fill: "h-full rounded-[2px] bg-gradient-to-r from-green3 to-green-main transition-[width] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]",
  percent: "min-w-[36px] text-right font-display text-[14px] font-semibold text-green-main"
};

export default function ProgressBar({ progress = 2 }: { progress?: number }) {
  return (
    <div className={styles.barWrapper}>
      <div className={styles.label}>PROGRESS</div>
      <div className={styles.track}>
        <div 
          className={styles.fill} 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className={styles.percent}>{progress}%</div>
    </div>
  );
}

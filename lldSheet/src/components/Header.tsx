import React from 'react';

// --- Tailwind Class Variables for Readability ---
const styles = {
  headerWrapper: "sticky top-0 z-[200] flex items-center justify-between border-b border-brd bg-bg2/95 px-8 py-4 backdrop-blur-xl",
  logoWrapper: "flex items-center gap-3",
  logoIcon: "flex h-[34px] w-[34px] items-center justify-center rounded-[5px] border border-green-main/20 bg-gdim text-[16px]",
  logoText: "font-display text-[18px] font-bold tracking-[-0.3px] text-[#e8e8e8]",
  logoHighlight: "text-green-main",
  logoTag: "mt-[2px] text-[10px] tracking-[1px] text-t3",
  tabsWrapper: "flex gap-2",
  tabBase: "px-4 py-2 text-xs font-medium rounded-md transition-colors",
  tabState: {
    active: "bg-gdim text-green-main border border-green-main/30",
    inactive: "text-t2 hover:text-text-main hover:bg-s2 border border-transparent"
  },
  pillsWrapper: "flex items-center gap-[8px]",
  pill: "flex items-center gap-[6px] rounded-[20px] border border-brd2 bg-s1 px-[14px] py-[5px] text-[12px] text-t2",
  dot: "h-[7px] w-[7px] shrink-0 rounded-full",
  dotDg: "bg-green-main",
  dotDa: "bg-amber-500",
  dotDr: "bg-red-500"
};

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cDone?: number;
  cActive?: number;
  cNS?: number;
}

export default function Header({ activeTab, setActiveTab, cDone = 0, cActive = 0, cNS = 0 }: HeaderProps) {
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

      <div className={styles.tabsWrapper}>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`${styles.tabBase} ${activeTab === 'roadmap' ? styles.tabState.active : styles.tabState.inactive}`}
        >
          Learning Roadmap
        </button>
        <button
          onClick={() => setActiveTab('lld')}
          className={`${styles.tabBase} ${activeTab === 'lld' ? styles.tabState.active : styles.tabState.inactive}`}
        >
          LLD Concepts
        </button>
        <button
          onClick={() => setActiveTab('hld')}
          className={`${styles.tabBase} ${activeTab === 'hld' ? styles.tabState.active : styles.tabState.inactive}`}
        >
          HLD Concepts
        </button>
        <button
          onClick={() => setActiveTab('patterns')}
          className={`${styles.tabBase} ${activeTab === 'patterns' ? styles.tabState.active : styles.tabState.inactive}`}
        >
          Design Patterns
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`${styles.tabBase} ${activeTab === 'practice' ? styles.tabState.active : styles.tabState.inactive}`}
        >
          Practice Problems
        </button>
        <button
          onClick={() => setActiveTab('resources')}
          className={`${styles.tabBase} ${activeTab === 'resources' ? styles.tabState.active : styles.tabState.inactive}`}
        >
          Resource Library
        </button>
        <button
          onClick={() => setActiveTab('questions')}
          className={`${styles.tabBase} ${activeTab === 'questions' ? styles.tabState.active : styles.tabState.inactive}`}
        >
          Interview Questions
        </button>
      </div>

      <div className={styles.pillsWrapper}>
        <div className={styles.pill}><span className={`${styles.dot} ${styles.dotDg}`}></span><span>{cDone}</span>&nbsp;Done</div>
        <div className={styles.pill}><span className={`${styles.dot} ${styles.dotDa}`}></span><span>{cActive}</span>&nbsp;Active</div>
        <div className={styles.pill}><span className={`${styles.dot} ${styles.dotDr}`}></span><span>{cNS}</span>&nbsp;Pending</div>
      </div>
    </div>
  );
}

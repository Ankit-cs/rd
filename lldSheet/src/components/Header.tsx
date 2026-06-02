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
  }
};

export default function Header({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
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
      </div>
    </div>
  );
}

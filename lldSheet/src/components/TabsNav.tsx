import React from 'react';

const styles = {
  tabsContainer: "flex overflow-x-auto border-b border-brd bg-bg2 px-8",
  tabBase: "flex cursor-pointer select-none items-center gap-[6px] whitespace-nowrap border-b-2 border-transparent px-[18px] py-[13px] text-[12px] font-normal text-t3 transition-all hover:text-t2 mb-[-1px]",
  tabState: {
    active: "!border-green-main !font-medium !text-text-main",
    inactive: ""
  },
  tabIco: "text-[13px] opacity-80"
};

interface TabsNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabsNav({ activeTab, setActiveTab }: TabsNavProps) {
  return (
    <nav className={styles.tabsContainer}>
      <div 
        className={`${styles.tabBase} ${activeTab === 'roadmap' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('roadmap')}
      >
        <span className={styles.tabIco}>🗺️</span> Learning Roadmap
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'lld' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('lld')}
      >
        <span className={styles.tabIco}>⚙️</span> LLD Concepts
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'hld' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('hld')}
      >
        <span className={styles.tabIco}>🏗️</span> HLD Concepts
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'patterns' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('patterns')}
      >
        <span className={styles.tabIco}>🧩</span> Design Patterns
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'practice' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('practice')}
      >
        <span className={styles.tabIco}>🏋️</span> Practice Problems
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'resources' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('resources')}
      >
        <span className={styles.tabIco}>📚</span> Resource Library
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'questions' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('questions')}
      >
        <span className={styles.tabIco}>❓</span> Interview Questions
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'behavioral' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('behavioral')}
      >
        <span className={styles.tabIco}>🤝</span> Behavioral Questions
      </div>
      <div 
        className={`${styles.tabBase} ${activeTab === 'engineering_blogs' ? styles.tabState.active : styles.tabState.inactive}`} 
        onClick={() => setActiveTab('engineering_blogs')}
      >
        <span className={styles.tabIco}>💻</span> Engineering Blogs
      </div>
    </nav>
  );
}

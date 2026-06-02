import React from 'react';
import { PRACTICE } from '../data/lld';

// --- Tailwind Class Variables for Readability ---
const styles = {
  mainDiv: "mx-auto max-w-7xl px-8 py-6",
  headerWrapper: "mb-4 flex items-center justify-between",
  headerTitle: "font-display text-[17px] font-semibold tracking-[-0.2px] text-text-main",
  headerSub: "mt-[3px] text-xs text-t2",
  tableWrapper: "overflow-hidden rounded-[8px] border border-brd bg-s1",
  table: "w-full border-collapse text-left",
  trHead: "border-b border-brd bg-s2",
  thBase: "px-4 py-[11px] text-[11px] font-medium tracking-[0.5px] uppercase text-t3",
  trBody: "border-b border-brd transition-colors hover:bg-s2 last:border-0",
  tdBase: "px-4 py-[14px] align-middle",
  selectInput: "min-w-[132px] cursor-pointer appearance-none rounded-[5px] border bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%279%27 height=%275%27 viewBox=%270 0 9 5%27%3E%3Cpath d=%27M0 0l4.5 5L9 0z%27 fill=%27%23444%27/%3E%3C/svg%3E')] bg-[position:right_8px_center] bg-no-repeat px-[10px] py-[6px] pr-[28px] font-sans text-xs font-normal outline-none transition-all",
  
  selectStatusColors: {
    'ns': 'bg-transparent text-t3 border-brd2',
    'ac': 'bg-adim text-amber-main border-amber-main/20',
    'dn': 'bg-gdim text-green-main border-green-main/20'
  } as Record<string, string>,
  
  problemWrapper: "flex items-center gap-[9px]",
  problemIcon: "w-[26px] shrink-0 text-[16px] opacity-85",
  problemName: "text-[14px] font-medium text-text-main",
  problemConcepts: "mt-[3px] text-[12px] leading-[1.55] text-t2",
  diffBadgeBase: "inline-flex items-center whitespace-nowrap rounded-[4px] border px-[9px] py-[3px] text-[11px] font-medium tracking-[0.2px]",
  
  // Dynamic Mappings
  diffBadgeColors: {
    'Beginner': 'border-green-main/15 bg-gdim text-green2',
    'Intermediate': 'border-amber-main/15 bg-adim text-amber-main',
    'Advanced': 'border-red-main/15 bg-rdim text-red-main',
    'default': 'border-red-main/15 bg-rdim text-red-main'
  } as Record<string, string>,
  
  linksWrapper: "flex flex-wrap items-center gap-[5px]",
  linkItem: "inline-flex items-center gap-1 whitespace-nowrap rounded-[4px] border border-blue-main/10 bg-bdim px-[9px] py-[4px] text-[11px] text-blue-main no-underline transition-all hover:border-blue-main/25 hover:bg-blue-main/10"
};

interface LldTableProps {
  progressMap: Record<string, string>;
  updateProgress: (id: string, status: string) => void;
}

export default function LldTable({ progressMap, updateProgress }: LldTableProps) {
  const lldTopics = PRACTICE.filter(p => p.t === 'LLD');

  return (
    <div className={styles.mainDiv}>
      <div className={styles.headerWrapper}>
        <div>
          <h2 className={styles.headerTitle}>
            LLD Concepts & Practice
          </h2>
          <div className={styles.headerSub}>
            Low-Level Design and Object-Oriented problems
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trHead}>
              <th className={styles.thBase}>Status</th>
              <th className={styles.thBase}>Problem</th>
              <th className={styles.thBase}>Difficulty</th>
              <th className={styles.thBase}>Links</th>
            </tr>
          </thead>
          <tbody>
            {lldTopics.map((item, idx) => {
              const dynamicDiffBadge = styles.diffBadgeColors[item.diff] || styles.diffBadgeColors.default;
              const statusVal = progressMap[item.id] || 'ns';
              const dynamicSelectColor = styles.selectStatusColors[statusVal] || styles.selectStatusColors['ns'];

              return (
                <tr key={idx} className={styles.trBody}>
                  <td className={styles.tdBase}>
                    <select 
                      className={`${styles.selectInput} ${dynamicSelectColor}`}
                      value={statusVal}
                      onChange={(e) => updateProgress(item.id, e.target.value)}
                    >
                      <option value="ns">Not Started</option>
                      <option value="ac">Active</option>
                      <option value="dn">Done</option>
                    </select>
                  </td>
                  <td className={styles.tdBase}>
                    <div className={styles.problemWrapper}>
                      <div className={styles.problemIcon}>{item.ico}</div>
                      <div>
                        <div className={styles.problemName}>{item.name}</div>
                        <div className={styles.problemConcepts}>{item.concepts}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.tdBase}>
                    <span className={`${styles.diffBadgeBase} ${dynamicDiffBadge}`}>
                      {item.diff}
                    </span>
                  </td>
                  <td className={styles.tdBase}>
                    <div className={styles.linksWrapper}>
                      {item.links.map((lnk, lIdx) => (
                        <a
                          key={lIdx}
                          href={lnk.u}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.linkItem}
                        >
                          {lnk.t}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

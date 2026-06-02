import React, { useState } from 'react';
import { PATTERNS } from '../data/patterns';
import { CustomLinkMap, ProgressMap } from '../utils/storage';

const styles = {
  mainDiv: 'mx-auto max-w-[1600px] px-[32px] py-[26px]',
  headerWrapper: 'mb-[18px] flex flex-wrap items-center justify-between gap-[10px]',
  
  fBar: 'flex flex-wrap items-center gap-[6px]',
  fBtn: 'cursor-pointer rounded-[5px] border border-brd2 bg-transparent px-[13px] py-[6px] font-sans text-[12px] text-t2 transition-all hover:bg-s2 hover:text-text-main',
  fBtnActive: '!border-green-main/30 !bg-gdim !text-green-main',
  srch: 'w-[210px] rounded-[5px] border border-brd2 bg-s1 px-[12px] py-[6px] font-sans text-[13px] text-text-main outline-none transition-colors placeholder:text-t3 focus:border-green-main/30',

  headerTitle: 'font-display text-[17px] font-semibold tracking-[-0.2px] text-text-main',
  headerSub: 'mt-[3px] text-xs text-t2',
  tableWrapper: 'overflow-hidden rounded-[8px] border border-brd bg-s1',
  table: 'w-full border-collapse text-left',
  trHead: 'border-b border-brd bg-s2',
  thBase: 'px-4 py-[11px] text-[11px] font-medium tracking-[0.5px] uppercase text-t3 whitespace-nowrap',
  trBody: 'border-b border-brd transition-colors hover:bg-s2 last:border-0',
  tdBase: 'px-4 py-[14px] align-middle',
  selectInput: 'min-w-[132px] cursor-pointer appearance-none rounded-[5px] border bg-[url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%279%27 height=%275%27 viewBox=%270 0 9 5%27%3E%3Cpath d=%27M0 0l4.5 5L9 0z%27 fill=%27%23444%27/%3E%3C/svg%3E\')] bg-[position:right_8px_center] bg-no-repeat px-[10px] py-[6px] pr-[28px] font-sans text-xs font-normal outline-none transition-all',
  
  selectStatusColors: {
    'ns': 'bg-transparent text-t3 border-brd2',
    'ac': 'bg-adim text-amber-main border-amber-main/20',
    'dn': 'bg-gdim text-green-main border-green-main/20'
  },
  
  problemWrapper: 'flex items-center gap-[9px]',
  problemIcon: 'w-[26px] shrink-0 text-[16px] opacity-85',
  problemName: 'text-[14px] font-medium text-text-main',
  problemConcepts: 'mt-[3px] text-[12px] leading-[1.55] text-t2',
  
  impBadgeBase: 'inline-flex items-center whitespace-nowrap rounded-[4px] border px-[9px] py-[3px] text-[11px] font-medium tracking-[0.2px]',
  impBadgeColors: {
    'critical': 'border-red-main/15 bg-rdim text-red-main',
    'high': 'border-amber-main/15 bg-adim text-amber-main',
    'medium': 'border-green-main/15 bg-gdim text-green2',
    'low': 'border-brd2 bg-s3 text-t2',
    'default': 'border-brd2 bg-s3 text-t2'
  },
  catBadgeBase: 'inline-flex items-center whitespace-nowrap rounded-[4px] border px-[9px] py-[3px] text-[11px] font-medium tracking-[0.2px]',
  catBadgeColors: {
    'Fundamentals': 'border-cyan-main/15 bg-cdim text-cyan-main',
    'Creational': 'border-purple-main/18 bg-pdim text-purple-main',
    'Structural': 'border-blue-main/15 bg-bdim text-blue-main',
    'Behavioural': 'border-green-main/15 bg-gdim text-green2',
    'default': 'border-brd2 bg-s3 text-t2'
  },

  linksWrapper: 'flex flex-wrap items-center gap-[5px]',
  linkItem: 'inline-flex items-center gap-1 whitespace-nowrap rounded-[4px] border border-blue-main/12 bg-bdim px-[9px] py-[4px] text-[11px] text-blue-main no-underline transition-all hover:border-blue-main/25 hover:bg-blue-main/13'
};

interface PatternsTableProps {
  progressMap: ProgressMap;
  updateProgress: (id: string, val: string) => void;
  customLinks?: CustomLinkMap;
  onAddLink?: (id: string) => void;
}

export default function PatternsTable({ progressMap, updateProgress, customLinks = {}, onAddLink }: PatternsTableProps) {
  const [search, setSearch] = useState('');
  const [catF, setCatF] = useState('all');

  const filteredPatterns = PATTERNS.filter(item => {
    const searchLower = search.toLowerCase();
    const matchSearch = item.name.toLowerCase().includes(searchLower) || item.idea.toLowerCase().includes(searchLower);
    const matchCat = catF === 'all' || item.cat.toLowerCase() === catF.toLowerCase();
    return matchSearch && matchCat;
  });

  return (
    <div className={styles.mainDiv}>
      <div className={styles.headerWrapper}>
        <div>
          <h2 className={styles.headerTitle}>Design Patterns</h2>
          <div className={styles.headerSub}>Gang of Four (GoF) patterns, categorised by use cases.</div>
        </div>
        <div className={styles.fBar}>
          <input 
            type="text" 
            className={styles.srch} 
            placeholder="🔍 Search..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {['all', 'Creational', 'Structural', 'Behavioural', 'Fundamentals'].map(cat => (
            <button
              key={cat}
              className={`${styles.fBtn} ${catF === cat ? styles.fBtnActive : ''}`}
              onClick={() => setCatF(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trHead}>
              <th className={styles.thBase} style={{ width: '30px' }}>#</th>
              <th className={styles.thBase} style={{ minWidth: '190px' }}>Pattern</th>
              <th className={styles.thBase}>Category</th>
              <th className={styles.thBase}>Importance</th>
              <th className={styles.thBase} style={{ minWidth: '130px' }}>Status</th>
              <th className={styles.thBase} style={{ minWidth: '260px' }}>One-line Idea</th>
              <th className={styles.thBase} style={{ minWidth: '260px' }}>Best Resources</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatterns.map((item, idx) => {
              const dynamicImpBadge = (styles.impBadgeColors as any)[item.imp] || styles.impBadgeColors.default;
              const dynamicCatBadge = (styles.catBadgeColors as any)[item.cat] || styles.catBadgeColors.default;
              const statusVal = progressMap[item.id] || 'ns';
              const dynamicSelectColor = (styles.selectStatusColors as any)[statusVal] || styles.selectStatusColors['ns'];

              return (
                <tr key={item.id} className={styles.trBody}>
                  <td className={styles.tdBase}>
                    <span className="text-[11px] text-t3 font-medium">{idx + 1}</span>
                  </td>
                  <td className={styles.tdBase}>
                    <div className={styles.problemWrapper}>
                      <div className={styles.problemIcon}>{item.ico}</div>
                      <div>
                        <div className={styles.problemName}>{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className={styles.tdBase}>
                    <span className={`${styles.catBadgeBase} ${dynamicCatBadge}`}>
                      {item.cat}
                    </span>
                  </td>
                  <td className={styles.tdBase}>
                    <span className={`${styles.impBadgeBase} ${dynamicImpBadge}`}>
                      {item.imp}
                    </span>
                  </td>
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
                    <div className={styles.problemConcepts}>{item.idea}</div>
                  </td>
                  <td className={styles.tdBase}>
                    <div className={styles.linksWrapper}>
                      {item.links.map((lnk, lIdx) => (
                        <a
                          key={`default-${lIdx}`}
                          href={lnk.u}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.linkItem}
                        >
                          {lnk.t}
                        </a>
                      ))}
                      {(customLinks[item.id] || []).map((lnk, lIdx) => (
                        <a
                          key={`custom-${lIdx}`}
                          href={lnk.u}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.linkItem}
                        >
                          {lnk.t}
                        </a>
                      ))}
                      {onAddLink && (
                        <button 
                          className="ml-1 rounded-[4px] border border-brd2 bg-s3 px-[8px] py-[3px] text-[10px] font-medium text-t2 transition-colors hover:bg-s2 hover:text-text-main"
                          onClick={() => onAddLink(item.id)}
                        >
                          + Add
                        </button>
                      )}
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

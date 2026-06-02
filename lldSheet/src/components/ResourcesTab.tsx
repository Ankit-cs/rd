import React, { useState } from 'react';
import { RESOURCES } from '../data/resources';

const styles = {
  mainDiv: 'mx-auto max-w-[1600px] px-[32px] py-[26px]',
  headerWrapper: 'mb-[18px] flex flex-wrap items-center justify-between gap-[10px]',
  
  fBar: 'flex flex-wrap items-center gap-[6px]',
  fBtn: 'cursor-pointer rounded-[5px] border border-brd2 bg-transparent px-[13px] py-[6px] font-sans text-[12px] text-t2 transition-all hover:bg-s2 hover:text-text-main',
  fBtnActive: '!border-green-main/30 !bg-gdim !text-green-main',
  srch: 'w-[210px] rounded-[5px] border border-brd2 bg-s1 px-[12px] py-[6px] font-sans text-[13px] text-text-main outline-none transition-colors placeholder:text-t3 focus:border-green-main/30',

  headerTitle: 'font-display text-[17px] font-semibold tracking-[-0.2px] text-text-main',
  headerSub: 'mt-[3px] text-xs text-t2',
  
  resGrid: 'grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-[14px]',
  resCard: 'flex flex-col gap-[12px] rounded-[8px] border border-brd bg-s1 p-[20px] transition-all hover:border-brd2 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
  rcTop: 'flex items-start justify-between gap-[8px]',
  rcTitleWrapper: 'flex items-start gap-[8px]',
  rcIco: 'text-[20px] leading-none',
  rcTitle: 'text-[14px] font-medium leading-[1.4] text-text-main',
  rcAuthor: 'mt-[3px] text-[12px] text-t2',
  rcDesc: 'text-[12px] leading-[1.7] text-t2 flex-1',
  
  rcFooter: 'mt-[2px] flex flex-wrap items-center justify-between gap-[6px]',
  rcTags: 'flex flex-wrap gap-[4px]',
  rcTagItem: 'whitespace-nowrap rounded-[4px] border border-brd2 bg-s3 px-[8px] py-[3px] text-[12px] text-t2',
  
  rcLink: 'inline-flex items-center gap-[4px] whitespace-nowrap rounded-[4px] border border-green-main/20 bg-gdim px-[14px] py-[5px] text-[12px] font-medium text-green-main no-underline transition-colors hover:bg-green-main/12',
  
  rcFree: 'rounded-[3px] border border-green-main/15 bg-gdim px-[7px] py-[2px] text-[10px] font-medium text-green2',
  rcPaid: 'rounded-[3px] border border-amber-main/15 bg-adim px-[7px] py-[2px] text-[10px] font-medium text-amber-main'
};

export default function ResourcesTab() {
  const [search, setSearch] = useState('');
  const [catF, setCatF] = useState('all');

  const filteredResources = RESOURCES.filter(item => {
    const searchLower = search.toLowerCase();
    const matchSearch = item.title.toLowerCase().includes(searchLower) || item.desc.toLowerCase().includes(searchLower);
    const matchCat = catF === 'all' || item.t.toLowerCase() === catF.toLowerCase();
    return matchSearch && matchCat;
  });

  return (
    <div className={styles.mainDiv}>
      <div className={styles.headerWrapper}>
        <div>
          <h2 className={styles.headerTitle}>Resource Library</h2>
          <div className={styles.headerSub}>Curated books, courses, blogs, and GitHub repositories</div>
        </div>
        <div className={styles.fBar}>
          <input 
            type="text" 
            className={styles.srch} 
            placeholder="🔍 Search..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {['all', 'Course', 'Video', 'Book', 'GitHub', 'Blog'].map(cat => (
            <button
              key={cat}
              className={`${styles.fBtn} ${catF === cat ? styles.fBtnActive : ''}`}
              onClick={() => setCatF(cat)}
            >
              {cat === 'all' ? 'All' : cat === 'Video' ? 'YouTube' : cat + (cat === 'GitHub' ? '' : 's')}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resGrid}>
        {filteredResources.map((item, idx) => (
          <div key={idx} className={styles.resCard}>
            <div className={styles.rcTop}>
              <div className={styles.rcTitleWrapper}>
                <span className={styles.rcIco}>{item.ico}</span>
                <div>
                  <div className={styles.rcTitle}>{item.title}</div>
                  <div className={styles.rcAuthor}>by {item.author}</div>
                </div>
              </div>
              <div>
                {item.free ? (
                  <span className={styles.rcFree}>Free</span>
                ) : (
                  <span className={styles.rcPaid}>Paid</span>
                )}
              </div>
            </div>
            
            <div className={styles.rcDesc}>{item.desc}</div>
            
            <div className={styles.rcFooter}>
              <div className={styles.rcTags}>
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.rcTagItem}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={styles.rcLink}
              >
                Open ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

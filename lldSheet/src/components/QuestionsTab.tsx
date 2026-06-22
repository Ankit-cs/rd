import React, { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { ProgressMap } from '../utils/storage';

const styles = {
  mainDiv: 'mx-auto max-w-[1600px] px-[32px] py-[26px]',
  headerWrapper: 'mb-[18px] flex flex-wrap items-center justify-between gap-[10px]',
  
  fBar: 'flex flex-wrap items-center gap-[6px]',
  fBtn: 'cursor-pointer rounded-[5px] border border-brd2 bg-transparent px-[13px] py-[6px] font-sans text-[12px] text-t2 transition-all hover:bg-s2 hover:text-text-main',
  fBtnActive: '!border-green-main/30 !bg-gdim !text-green-main',
  srch: 'w-[210px] rounded-[5px] border border-brd2 bg-s1 px-[12px] py-[6px] font-sans text-[13px] text-text-main outline-none transition-colors placeholder:text-t3 focus:border-green-main/30',

  headerTitle: 'font-display text-[17px] font-semibold tracking-[-0.2px] text-text-main',
  headerSub: 'mt-[3px] text-xs text-t2',
  
  qGrid: 'grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[12px]',
  qCard: 'rounded-[8px] border border-brd bg-s1 p-[20px] transition-colors hover:border-brd2',
  qCardTop: 'mb-[12px] flex items-start gap-[10px]',
  qNum: 'mt-[2px] min-w-[30px] whitespace-nowrap text-[10px] font-medium tracking-[0.5px] text-t3',
  qText: 'flex-1 text-[14px] leading-[1.6] text-text-main',
  
  fDotsWrapper: 'mt-[3px] flex gap-[3px]',
  fDot: 'h-[6px] w-[6px] rounded-full bg-s3',
  fDotOn: 'bg-green-main opacity-90',
  
  qMeta: 'flex flex-wrap items-center justify-between gap-[5px] mt-[12px]',
  qTags: 'flex flex-wrap gap-[5px]',
  qTagBase: 'rounded-[4px] px-[8px] py-[3px] text-[11px]',
  qtTopic: 'border border-green-main/15 bg-gdim text-green2',
  qtCo: 'whitespace-nowrap border border-brd2 bg-s3 text-[12px] text-t2',
  
  toggleBtn: 'mt-[12px] block cursor-pointer border-none bg-transparent p-0 font-sans text-[12px] leading-[1.55] text-t2 tracking-[-0.1px] outline-none transition-colors hover:text-green-main',
  
  hintBox: 'mt-[10px] rounded-[5px] border-l-2 border-green-main/30 bg-bg3 px-[15px] py-[13px] text-[12px] leading-[1.8] text-t2',

  selectInput: 'min-w-[120px] cursor-pointer appearance-none rounded-[5px] border bg-[url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%279%27 height=%275%27 viewBox=%270 0 9 5%27%3E%3Cpath d=%27M0 0l4.5 5L9 0z%27 fill=%27%23444%27/%3E%3C/svg%3E\')] bg-[position:right_8px_center] bg-no-repeat px-[10px] py-[4px] pr-[28px] font-sans text-[11px] font-medium outline-none transition-all',
  selectStatusColors: {
    'ns': 'bg-transparent text-t3 border-brd2',
    'ac': 'bg-adim text-amber-main border-amber-main/20',
    'dn': 'bg-gdim text-green-main border-green-main/20'
  }
};

interface QuestionsTabProps {
  progressMap: ProgressMap;
  updateProgress: (id: string, val: string) => void;
}

export default function QuestionsTab({ progressMap, updateProgress }: QuestionsTabProps) {
  const [openHints, setOpenHints] = useState<Record<number, boolean>>({});
  const [search, setSearch] = useState('');
  const [typeF, setTypeF] = useState('all');

  const filteredQuestions = QUESTIONS.filter(item => {
    const searchLower = search.toLowerCase();
    const matchSearch = item.q.toLowerCase().includes(searchLower) || item.topic.toLowerCase().includes(searchLower);
    const matchType = typeF === 'all' || item.t.toLowerCase() === typeF.toLowerCase();
    return matchSearch && matchType;
  });

  const toggleHint = (id: number) => {
    setOpenHints(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.headerWrapper}>
        <div>
          <h2 className={styles.headerTitle}>Most Asked Interview Questions</h2>
          <div className={styles.headerSub}>Real questions from FAANG + product companies with approach hints</div>
        </div>
        <div className={styles.fBar}>
          <input 
            type="text" 
            className={styles.srch} 
            placeholder="🔍 Search..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {['all', 'HLD', 'LLD'].map(t => (
            <button
              key={t}
              className={`${styles.fBtn} ${typeF === t ? styles.fBtnActive : ''}`}
              onClick={() => setTypeF(t)}
            >
              {t === 'all' ? 'All' : t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.qGrid}>
        {filteredQuestions.map((q) => {
          const statusId = `q${q.id}`;
          const statusVal = progressMap[statusId] || 'ns';
          const dynamicSelectColor = (styles.selectStatusColors as any)[statusVal] || styles.selectStatusColors['ns'];

          return (
            <div key={q.id} className={styles.qCard}>
              <div className={styles.qCardTop}>
                <div className={styles.qNum}>
                  #{q.id}
                  <div className={styles.fDotsWrapper}>
                    {[1, 2, 3, 4, 5].map(num => (
                      <div 
                        key={num} 
                        className={`${styles.fDot} ${num <= q.freq ? styles.fDotOn : ''}`}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.qText}>{q.q}</div>
              </div>
              
              <div className={styles.qMeta}>
                <div className={styles.qTags}>
                  <span className={`${styles.qTagBase} ${styles.qtTopic}`}>{q.topic}</span>
                  <span className={`${styles.qTagBase} border border-brd2 bg-s3 text-t2`}>{q.t}</span>
                  {q.cos.map((co, idx) => (
                    <span key={idx} className={`${styles.qTagBase} ${styles.qtCo}`}>
                      {co}
                    </span>
                  ))}
                </div>
                
                <select 
                  className={`${styles.selectInput} ${dynamicSelectColor}`}
                  value={statusVal}
                  onChange={(e) => updateProgress(statusId, e.target.value)}
                >
                  <option value="ns">Not Started</option>
                  <option value="ac">Active</option>
                  <option value="dn">Done</option>
                </select>
              </div>
              
              <button 
                className={styles.toggleBtn}
                onClick={() => toggleHint(q.id)}
              >
                {openHints[q.id] ? 'Hide Approach' : 'View Approach'}
              </button>
              
              {openHints[q.id] && (
                <div className={styles.hintBox}>
                  {q.hint}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

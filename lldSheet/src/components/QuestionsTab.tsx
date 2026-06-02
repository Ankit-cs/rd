import React, { useState } from 'react';
import { QUESTIONS } from '../data/questions';

const styles = {
  mainDiv: 'mx-auto max-w-[1600px] px-[32px] py-[26px]',
  headerWrapper: 'mb-[18px] flex flex-wrap items-center justify-between gap-[10px]',
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
  
  qMeta: 'flex flex-wrap gap-[5px]',
  qTagBase: 'rounded-[4px] px-[8px] py-[3px] text-[11px]',
  qtTopic: 'border border-green-main/15 bg-gdim text-green2',
  qtCo: 'whitespace-nowrap border border-brd2 bg-s3 text-[12px] text-t2', // Using LLD company tag style for consistency
  
  toggleBtn: 'mt-[12px] block cursor-pointer border-none bg-transparent p-0 font-sans text-[12px] leading-[1.55] text-t2 tracking-[-0.1px] outline-none transition-colors hover:text-green-main',
  
  hintBox: 'mt-[10px] rounded-[5px] border-l-2 border-green-main/30 bg-bg3 px-[15px] py-[13px] text-[12px] leading-[1.8] text-t2'
};

export default function QuestionsTab() {
  const [openHints, setOpenHints] = useState<Record<number, boolean>>({});

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
      </div>

      <div className={styles.qGrid}>
        {QUESTIONS.map((q) => (
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
              <span className={`${styles.qTagBase} ${styles.qtTopic}`}>{q.topic}</span>
              <span className={`${styles.qTagBase} border border-brd2 bg-s3 text-t2`}>{q.t}</span>
              {q.cos.map((co, idx) => (
                <span key={idx} className={`${styles.qTagBase} ${styles.qtCo}`}>
                  {co}
                </span>
              ))}
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
        ))}
      </div>
    </div>
  );
}

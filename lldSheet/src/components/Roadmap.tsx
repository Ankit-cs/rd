import React, { useState } from 'react';
import { ROADMAP } from '../data/roadmap';

// --- Tailwind Class Variables for Readability ---
const styles = {
  mainDiv: "mx-auto flex max-w-[1600px] flex-col gap-0 px-[32px] py-[26px]",
  phaseCard: "mb-[14px] overflow-hidden rounded-[8px] border border-brd",
  phaseHeader: "flex cursor-pointer select-none items-center gap-[14px] bg-s2 px-5 py-4 transition-colors hover:bg-s3",
  phaseIcon: "text-[20px]",
  phaseInfoWrapper: "flex-1",
  phaseTitle: "font-display text-[15px] font-semibold text-text-main",
  phaseSub: "mt-[3px] text-xs text-t2",
  phaseBadgeBase: "rounded-[4px] px-[11px] py-[3px] text-[11px] font-medium",
  phaseBody: "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3 border-t border-brd p-5",
  itemCard: "rounded-[5px] border border-brd bg-bg3 p-[14px] px-[16px] transition-colors hover:border-brd2",
  itemTop: "mb-[6px] flex items-center gap-2",
  itemIcon: "text-[16px] opacity-80",
  itemName: "text-[13px] font-medium text-text-main",
  itemDesc: "mb-[10px] text-[12px] leading-[1.6] text-t2",
  itemLinksWrapper: "flex flex-col gap-1",
  linkWrapper: "flex items-center gap-[6px] text-[12px] text-blue-main opacity-85 transition-opacity hover:opacity-100",
  linkTypeBadgeBase: "rounded-[3px] px-[6px] py-[2px] text-[10px] font-semibold tracking-[0.3px]",
  
  // Dynamic Mappings
  phaseBadgeColors: {
    'diff-b': 'border border-green-main/20 bg-gdim text-green2',
    'diff-i': 'border border-amber-main/15 bg-adim text-amber-main',
    'diff-a': 'border border-red-main/15 bg-rdim text-red-main',
    'default': 'border border-red-main/15 bg-rdim text-red-main'
  } as Record<string, string>,
  
  linkBadgeColors: {
    'video': 'bg-red-main/10 text-red-main',
    'blog': 'bg-bdim text-blue-main',
    'course': 'bg-pdim text-purple-main',
    'default': 'bg-s3 text-t2'
  } as Record<string, string>
};

export default function Roadmap() {
  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({
    "Phase 1 — Foundations": true
  });

  const togglePhase = (phaseName: string) => {
    setOpenPhases(prev => ({ ...prev, [phaseName]: !prev[phaseName] }));
  };

  return (
    <div className={styles.mainDiv}>
      {ROADMAP.map((phase, idx) => {
        const dynamicPhaseBadge = styles.phaseBadgeColors[phase.badgeCls] || styles.phaseBadgeColors.default;

        return (
          <div key={idx} className={styles.phaseCard}>
            <div 
              onClick={() => togglePhase(phase.phase)}
              className={styles.phaseHeader}
            >
              <div className={styles.phaseIcon}>{phase.icon}</div>
              <div className={styles.phaseInfoWrapper}>
                <div className={styles.phaseTitle}>{phase.phase}</div>
                <div className={styles.phaseSub}>{phase.sub}</div>
              </div>
              <div className={`${styles.phaseBadgeBase} ${dynamicPhaseBadge}`}>
                {phase.badge}
              </div>
            </div>
            
            {openPhases[phase.phase] && (
              <div className={styles.phaseBody}>
                {phase.items.map((item, iIdx) => (
                  <div key={iIdx} className={styles.itemCard}>
                    <div className={styles.itemTop}>
                      <span className={styles.itemIcon}>{item.ico}</span>
                      <span className={styles.itemName}>{item.name}</span>
                    </div>
                    <div className={styles.itemDesc}>
                      {item.desc}
                    </div>
                    <div className={styles.itemLinksWrapper}>
                      {item.links.map((link, lIdx) => {
                        const dynamicLinkBadge = styles.linkBadgeColors[link.lt] || styles.linkBadgeColors.default;

                        return (
                          <a 
                            key={lIdx} 
                            href={link.u} 
                            target="_blank" 
                            rel="noreferrer"
                            className={styles.linkWrapper}
                          >
                            <span className={`${styles.linkTypeBadgeBase} ${dynamicLinkBadge}`}>
                              {link.lt}
                            </span>
                            {link.t}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

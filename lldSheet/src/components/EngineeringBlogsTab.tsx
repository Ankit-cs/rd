import React, { useState, useEffect, useRef } from 'react';
import { ENGINEERING_BLOGS, CompanyBlog } from '../data/engineeringBlogs';

const styles = {
  container: 'mx-auto max-w-[1600px] px-[32px] py-[26px] flex gap-[40px] items-start',
  
  // Left sticky sidebar
  sidebar: 'sticky top-[40px] flex flex-col gap-[2px] rounded-[8px] border border-brd bg-s1 p-[16px] min-w-[50px] shrink-0 shadow-sm',
  azLetter: 'flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[6px] bg-transparent text-[13px] font-medium text-t3 transition-all hover:bg-s2 hover:text-text-main',
  azLetterActive: '!bg-green-main/10 !text-green-main font-bold',
  azLetterDisabled: 'opacity-20 cursor-not-allowed hover:bg-transparent hover:text-t3',

  // Main content area
  mainContent: 'flex-1 min-w-0',
  headerWrapper: 'mb-[32px] flex flex-wrap items-center justify-between gap-[20px] rounded-[8px] bg-s1 p-[24px] border border-brd',
  srch: 'w-[320px] rounded-[6px] border border-brd2 bg-bg2 px-[14px] py-[10px] font-sans text-[14px] text-text-main outline-none transition-colors placeholder:text-t3 focus:border-green-main/30',

  headerTitle: 'font-display text-[24px] font-semibold tracking-[-0.3px] text-text-main',
  headerSub: 'mt-[6px] text-[14px] text-t2',
  
  companySection: 'mb-[50px]',
  companyHeader: 'mb-[20px] flex items-center justify-between border-b border-brd pb-[12px]',
  companyTitle: 'font-display text-[24px] font-semibold tracking-[-0.2px] text-text-main',
  companyLink: 'text-[13px] font-medium text-green-main hover:underline',
  
  qGrid: 'grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-[16px]',
  qCard: 'flex flex-col justify-between rounded-[8px] border border-brd bg-s1 p-[24px] transition-all hover:border-brd2 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
  qCardTop: 'mb-[16px] flex items-start gap-[12px]',
  qNum: 'mt-[2px] min-w-[20px] text-[13px] font-medium text-t3',
  qText: 'flex-1 text-[15px] leading-[1.6] text-text-main font-semibold',
  
  qMeta: 'mt-[16px] flex items-center justify-between border-t border-brd2 pt-[16px]',
  qTags: 'flex flex-wrap gap-[6px]',
  qTag: 'rounded-[4px] bg-bg3 px-[8px] py-[4px] text-[11px] font-medium text-t2',
  qYear: 'text-[12px] font-semibold text-t3',
  qLink: 'mt-[14px] inline-flex items-center gap-[6px] text-[13px] font-semibold text-green-main hover:text-[#00e685] transition-colors'
};

const LETTERS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

export default function EngineeringBlogsTab() {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState<string>('A');
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Determine available letters based on companies (unfiltered by search)
  const availableLetters = new Set(ENGINEERING_BLOGS.map(c => c.companyName[0].toUpperCase()));

  // Filter data by search
  const filteredData = ENGINEERING_BLOGS.map(company => {
    const searchLower = search.toLowerCase();
    const matchesCompanySearch = company.companyName.toLowerCase().includes(searchLower);

    const filteredArticles = company.articles.filter(article => {
      const matchTitle = article.title.toLowerCase().includes(searchLower);
      const matchTopic = article.topics.some(t => t.toLowerCase().includes(searchLower));
      return matchTitle || matchTopic || matchesCompanySearch;
    });

    if (filteredArticles.length === 0) return null;
    return { ...company, articles: filteredArticles };
  }).filter(Boolean) as CompanyBlog[];

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 'A'; // Default fallback
      
      for (const letter of LETTERS) {
        const element = sectionRefs.current[letter];
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element's top is past the top of the viewport + a small offset (e.g. 150px)
          if (rect.top <= 150) {
            currentActive = letter;
          }
        }
      }
      
      setActiveLetter(prev => prev !== currentActive ? currentActive : prev);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLetter = (letter: string) => {
    const element = sectionRefs.current[letter];
    if (element) {
      window.scrollTo({
        top: window.scrollY + element.getBoundingClientRect().top - 80
      });
    }
  };

  // Group filtered companies by starting letter to render them efficiently
  const groupedData: { [key: string]: CompanyBlog[] } = {};
  filteredData.forEach(c => {
    const l = c.companyName[0].toUpperCase();
    if (!groupedData[l]) groupedData[l] = [];
    groupedData[l].push(c);
  });

  return (
    <div className={styles.container}>
      {/* Sidebar Navigation */}
      <div className={styles.sidebar}>
        {LETTERS.map(letter => {
          const isAvailable = availableLetters.has(letter);
          const hasResults = groupedData[letter] && groupedData[letter].length > 0;
          
          return (
            <button
              key={letter}
              className={`${styles.azLetter} ${activeLetter === letter ? styles.azLetterActive : ''} ${!isAvailable ? styles.azLetterDisabled : ''} ${isAvailable && !hasResults ? 'opacity-30' : ''}`}
              onClick={() => {
                if (isAvailable && hasResults) {
                  setActiveLetter(letter);
                  scrollToLetter(letter);
                }
              }}
              disabled={!isAvailable || !hasResults}
              title={isAvailable && hasResults ? `Scroll to ${letter}` : `No companies for ${letter}`}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <div className={styles.headerWrapper}>
          <div>
            <h2 className={styles.headerTitle}>Engineering Blogs</h2>
            <div className={styles.headerSub}>A curated collection of 300+ engineering blog articles from top tech companies</div>
          </div>
          <input 
            type="text" 
            className={styles.srch} 
            placeholder="🔍 Search company, topic, or article..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center text-[15px] text-t3 py-[60px]">
            No articles found matching "{search}".
          </div>
        ) : (
          LETTERS.map(letter => {
            const companiesForLetter = groupedData[letter];
            if (!companiesForLetter || companiesForLetter.length === 0) return null;

            return (
              <div 
                key={letter} 
                ref={(el) => { sectionRefs.current[letter] = el; }}
                className="mb-[20px]"
              >
                {companiesForLetter.map((company, idx) => (
                  <div key={idx} className={styles.companySection}>
                    <div className={styles.companyHeader}>
                      <h3 className={styles.companyTitle}>{company.companyName}</h3>
                      <a href={company.blogUrl} target="_blank" rel="noreferrer" className={styles.companyLink}>
                        Visit Official Blog ↗
                      </a>
                    </div>
                    
                    <div className={styles.qGrid}>
                      {company.articles.map((article) => (
                        <div key={article.id} className={styles.qCard}>
                          <div>
                            <div className={styles.qCardTop}>
                              <div className={styles.qNum}>#{article.id}</div>
                              <div className={styles.qText}>{article.title}</div>
                            </div>
                            
                            <a href={article.url} target="_blank" rel="noreferrer" className={styles.qLink}>
                              Read Article ↗
                            </a>
                          </div>
                          
                          <div className={styles.qMeta}>
                            <div className={styles.qTags}>
                              {article.topics.map((topic, tIdx) => (
                                <span key={tIdx} className={styles.qTag}>{topic}</span>
                              ))}
                            </div>
                            <div className={styles.qYear}>{article.year}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

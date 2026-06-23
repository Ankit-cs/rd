import React, { useState, useEffect } from 'react';
import { BEHAVIORAL_QUESTIONS } from '../data/behavioral';
import { ProgressMap, CustomAnswersMap, loadCustomAnswers, saveCustomAnswers } from '../utils/storage';

const styles = {
  mainDiv: 'mx-auto max-w-[1600px] px-[32px] py-[26px]',
  headerWrapper: 'mb-[18px] flex flex-wrap items-center justify-between gap-[10px]',
  
  fBar: 'flex flex-wrap items-center gap-[6px]',
  srch: 'w-[210px] rounded-[5px] border border-brd2 bg-s1 px-[12px] py-[6px] font-sans text-[13px] text-text-main outline-none transition-colors placeholder:text-t3 focus:border-green-main/30',

  headerTitle: 'font-display text-[17px] font-semibold tracking-[-0.2px] text-text-main',
  headerSub: 'mt-[3px] text-xs text-t2',
  
  qGrid: 'grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[12px]',
  qCard: 'rounded-[8px] border border-brd bg-s1 p-[20px] transition-colors hover:border-brd2',
  qCardTop: 'mb-[12px] flex items-start gap-[10px]',
  qNum: 'mt-[2px] min-w-[30px] whitespace-nowrap text-[10px] font-medium tracking-[0.5px] text-t3',
  qText: 'flex-1 text-[14px] leading-[1.6] text-text-main font-semibold',
  
  qMeta: 'flex flex-wrap items-center justify-between gap-[5px] mt-[12px]',
  
  toggleBtn: 'mt-[12px] block cursor-pointer border-none bg-transparent p-0 font-sans text-[12px] leading-[1.55] text-t2 tracking-[-0.1px] outline-none transition-colors hover:text-green-main',
  editBtn: 'mt-[12px] ml-[15px] block cursor-pointer border-none bg-transparent p-0 font-sans text-[12px] leading-[1.55] text-t2 tracking-[-0.1px] outline-none transition-colors hover:text-amber-main',
  
  hintBox: 'mt-[10px] rounded-[5px] border-l-2 border-green-main/30 bg-bg3 px-[15px] py-[13px] text-[13px] leading-[1.8] text-t2 whitespace-pre-wrap',
  textarea: 'w-full min-h-[150px] rounded-[5px] border border-brd2 bg-s1 px-[12px] py-[8px] font-sans text-[13px] text-text-main outline-none transition-colors focus:border-green-main/30 mb-[10px]',
  saveBtn: 'rounded-[4px] bg-green-main px-[12px] py-[5px] text-[12px] font-medium text-black transition-colors hover:bg-[#00c774]',
  cancelBtn: 'rounded-[4px] border border-brd2 bg-transparent px-[12px] py-[5px] text-[12px] font-medium text-t2 transition-colors hover:bg-s2 hover:text-text-main ml-[8px]',

  askSection: 'mt-[40px] rounded-[8px] border border-brd bg-s1 p-[24px]',
  askTitle: 'font-display text-[16px] font-semibold tracking-[-0.2px] text-text-main mb-[16px]',
  askList: 'flex flex-col gap-[10px] pl-[10px]',
  askItem: 'relative pl-[16px] text-[13px] leading-[1.6] text-t2 before:absolute before:left-0 before:top-[7px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-green-main/50',

  selectInput: 'min-w-[120px] cursor-pointer appearance-none rounded-[5px] border bg-[url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%279%27 height=%275%27 viewBox=%270 0 9 5%27%3E%3Cpath d=%27M0 0l4.5 5L9 0z%27 fill=%27%23444%27/%3E%3C/svg%3E\')] bg-[position:right_8px_center] bg-no-repeat px-[10px] py-[4px] pr-[28px] font-sans text-[11px] font-medium outline-none transition-all',
  selectStatusColors: {
    'ns': 'bg-transparent text-t3 border-brd2',
    'ac': 'bg-adim text-amber-main border-amber-main/20',
    'dn': 'bg-gdim text-green-main border-green-main/20'
  },

  tipsSection: 'mb-[24px] rounded-[8px] border border-brd bg-s1',
  tipsHeader: 'flex w-full cursor-pointer items-center justify-between p-[20px] font-display text-[15px] font-semibold tracking-[-0.2px] text-text-main transition-colors hover:bg-s2/50',
  tipsContent: 'border-t border-brd p-[20px] pt-[16px]',
  tipsList: 'mb-[20px] flex flex-col gap-[8px] pl-[10px]',
  tipsItem: 'relative pl-[16px] text-[13px] leading-[1.6] text-t2 before:absolute before:left-0 before:top-[7px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-green-main/50',
  starGrid: 'mt-[16px] grid grid-cols-1 gap-[12px] md:grid-cols-2 lg:grid-cols-4',
  starCard: 'rounded-[6px] border border-brd2 bg-bg3 p-[16px]',
  starLetter: 'mb-[8px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-green-main/20 text-[14px] font-bold text-green-main',
  starTitle: 'mb-[4px] font-semibold text-text-main text-[14px]',
  starDesc: 'text-[12px] leading-[1.6] text-t2',
  gridLink: 'mt-[20px] inline-flex items-center gap-[6px] rounded-[5px] border border-brd2 bg-s2 px-[14px] py-[8px] text-[13px] font-medium text-text-main no-underline transition-colors hover:border-green-main/30 hover:text-green-main',
};

export const INTERVIEWER_QUESTIONS = [
  "What brought you to this company? What has been most challenging for you?",
  "Can you share some insight about the day-to-day responsibilities of this position? What's a typical day like?",
  "Can you tell me about the opportunities for career advancement at [company name]?",
  "What are some of the challenges [company name] is facing right now and how could I contribute to overcoming it?",
  "How has the organisation changed since you've joined?",
  "What is the code and design review process like?",
  "What is the day-to-day responsibility for someone in this role?",
  "Could you talk little about your work?",
  "What is the ratio of testers to developers to program managers? What is the interaction like? How does project planning happen on the team?",
  "What is a typical career path at [company name] for someone in the role that I am interviewing for?",
  "What are the most exciting projects you've worked on here?",
  "What is the onboarding process like for this role?",
  "What do you like most about working here?",
  "Can you describe the [company name]'s overall management style and the type of person who usually does well here?",
  "What excites you the most about the [company name]'s future?",
  "I'm very interested in scalability, and I'd love to learn more about it. What opportunities are there at this company to learn more about this?"
];

export const GENERAL_TIPS = [
  "Understand the STAR Method: Familiarize yourself with Situation, Task, Action, Result to keep responses structured.",
  "Listen attentively: Pay close attention and ensure your response addresses the specific prompt.",
  "Be concise: Keep your answers short and to the point. Don't go off-topic.",
  "Ask Clarifying Questions: It's okay to ask for more context or take time to collect your thoughts.",
  "Avoid Negative Language: Refrain from speaking negatively about past employers or colleagues.",
  "Stay professional and constructive: Avoid being disrespectful, offensive, or arrogant.",
  "Highlight your strengths: Frame challenges positively by focusing on what you learned.",
  "Ask thoughtful questions: Interviewing is a two-way street; show your interest in the role.",
  "It's ok to not have an answer to every question: Explain how you would react hypothetically if you lack the exact experience.",
  "Highlight you are a Team Player: Balance personal qualities with your ability to collaborate and help others.",
  "Be Honest: If you don't know the answer, admit it rather than making something up.",
  "Prepare ahead of time: Preparation aids memory retrieval and framing.",
  "Practice common questions: Go through common questions and draft your answers in advance."
];

interface BehavioralTabProps {
  progressMap: ProgressMap;
  updateProgress: (id: string, val: string) => void;
}

export default function BehavioralTab({ progressMap, updateProgress }: BehavioralTabProps) {
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState('');
  const [customAnswers, setCustomAnswers] = useState<CustomAnswersMap>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState('');

  useEffect(() => {
    setCustomAnswers(loadCustomAnswers());
  }, []);

  const filteredQuestions = BEHAVIORAL_QUESTIONS.filter(item => {
    const searchLower = search.toLowerCase();
    return item.q.toLowerCase().includes(searchLower) || item.hint.toLowerCase().includes(searchLower);
  });

  const toggleHint = (id: string) => {
    setOpenHints(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    if (editingId === id) setEditingId(null);
  };

  const handleEdit = (id: string, currentAnswer: string) => {
    setEditingId(id);
    setEditDraft(currentAnswer);
  };

  const handleSave = (id: string) => {
    const newAnswers = { ...customAnswers, [id]: editDraft };
    setCustomAnswers(newAnswers);
    saveCustomAnswers(newAnswers);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.headerWrapper}>
        <div>
          <h2 className={styles.headerTitle}>Behavioral Interview Questions</h2>
          <div className={styles.headerSub}>STAR method preparation and common questions from top tech companies</div>
        </div>
        <div className={styles.fBar}>
          <input 
            type="text" 
            className={styles.srch} 
            placeholder="🔍 Search questions..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.tipsSection}>
        <button 
          className={styles.tipsHeader}
          onClick={() => setOpenHints(prev => ({ ...prev, tips: !prev.tips }))}
        >
          <div className="flex items-center gap-[8px]">
            <span>💡</span>
            <span>Tips & Preparation Guide</span>
          </div>
          <span className="text-t3 text-[12px]">{openHints['tips'] ? 'Hide' : 'Show'}</span>
        </button>
        
        {openHints['tips'] && (
          <div className={styles.tipsContent}>
            <div className="mb-[24px]">
              <h3 className="mb-[12px] font-display text-[15px] font-semibold text-text-main">✅ General Tips</h3>
              <div className={styles.tipsList}>
                {GENERAL_TIPS.map((tip, idx) => (
                  <div key={idx} className={styles.tipsItem}>{tip}</div>
                ))}
              </div>
            </div>

            <div className="mb-[24px]">
              <h3 className="mb-[4px] font-display text-[15px] font-semibold text-text-main">🌟 The STAR Framework</h3>
              <p className="text-[13px] text-t2 mb-[4px]">A structured method for answering behavioral interview questions effectively.</p>
              
              <div className={styles.starGrid}>
                <div className={styles.starCard}>
                  <div className={styles.starLetter}>S</div>
                  <div className={styles.starTitle}>Situation</div>
                  <div className={styles.starDesc}>Describe the specific situation or context. Set the stage and provide necessary background information.</div>
                </div>
                <div className={styles.starCard}>
                  <div className={styles.starLetter}>T</div>
                  <div className={styles.starTitle}>Task</div>
                  <div className={styles.starDesc}>Explain the task or challenge you faced. What were your goals or objectives?</div>
                </div>
                <div className={styles.starCard}>
                  <div className={styles.starLetter}>A</div>
                  <div className={styles.starTitle}>Action</div>
                  <div className={styles.starDesc}>Describe the specific actions <b>you</b> took. Be detailed about your steps, responsibilities, and thought process.</div>
                </div>
                <div className={styles.starCard}>
                  <div className={styles.starLetter}>R</div>
                  <div className={styles.starTitle}>Result</div>
                  <div className={styles.starDesc}>Share the outcomes. Be quantitative when possible and describe the impact of your actions.</div>
                </div>
              </div>
            </div>

            <div className="pt-[8px] border-t border-brd2">
              <h3 className="mb-[4px] font-display text-[15px] font-semibold text-text-main">⚙️ Preparation Grid</h3>
              <p className="text-[13px] text-t2">Create a matrix of your projects against common behavioral themes (Challenges, Failures, Leadership, Conflicts).</p>
              <a 
                href="https://app.notion.com/p/Behavioral-Interview-Preparation-Grid-bab3c2d230c7828a9093818611434ed6" 
                target="_blank" 
                rel="noreferrer"
                className={styles.gridLink}
              >
                <span>📝</span> View Notion Preparation Template
              </a>
            </div>
          </div>
        )}
      </div>

      <div className={styles.qGrid}>
        {filteredQuestions.map((q) => {
          const statusId = `bq-${q.id}`;
          const statusVal = progressMap[statusId] || 'ns';
          const dynamicSelectColor = (styles.selectStatusColors as any)[statusVal] || styles.selectStatusColors['ns'];

          return (
            <div key={q.id} className={styles.qCard}>
              <div className={styles.qCardTop}>
                <div className={styles.qNum}>
                  #{q.id}
                </div>
                <div className={styles.qText}>{q.q}</div>
              </div>
              
              <div className={styles.qMeta}>
                <div className="flex-1"></div>
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
              
              <div className="flex">
                <button 
                  className={styles.toggleBtn}
                  onClick={() => toggleHint(q.id)}
                >
                  {openHints[q.id] ? 'Hide Answer' : 'View Answer'}
                </button>
                {openHints[q.id] && editingId !== q.id && (
                  <button 
                    className={styles.editBtn}
                    onClick={() => handleEdit(q.id, customAnswers[q.id] || q.hint)}
                  >
                    ✏️ Edit Answer
                  </button>
                )}
              </div>
              
              {openHints[q.id] && (
                <div className={styles.hintBox}>
                  {editingId === q.id ? (
                    <div>
                      <textarea 
                        className={styles.textarea}
                        value={editDraft}
                        onChange={(e) => setEditDraft(e.target.value)}
                        placeholder="Write your STAR formatted answer here..."
                      />
                      <div>
                        <button className={styles.saveBtn} onClick={() => handleSave(q.id)}>Save</button>
                        <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    customAnswers[q.id] || q.hint
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.askSection}>
        <h3 className={styles.askTitle}>❓ Questions You Can Ask the Interviewer</h3>
        <div className={styles.askList}>
          {INTERVIEWER_QUESTIONS.map((item, idx) => (
            <div key={idx} className={styles.askItem}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

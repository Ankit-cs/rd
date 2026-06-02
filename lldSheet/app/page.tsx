'use client';

import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import TabsNav from '../src/components/TabsNav';
import Footer from '../src/components/Footer';
import Roadmap from '../src/components/Roadmap';
import LldTable from '../src/components/LldTable';
import HldTable from '../src/components/HldTable';
import PatternsTable from '../src/components/PatternsTable';
import PracticeTable from '../src/components/PracticeTable';
import ResourcesTab from '../src/components/ResourcesTab';
import QuestionsTab from '../src/components/QuestionsTab';
import ProgressBar from '../src/components/ProgressBar';
import { LLD_TOPICS } from '../src/data/lld';
import { HLD_TOPICS } from '../src/data/hld';
import { PATTERNS } from '../src/data/patterns';
import { PRACTICE } from '../src/data/pract';
import { loadProgress, saveProgress, loadCustomLinks, saveCustomLinks, ProgressMap, CustomLinkMap } from '../src/utils/storage';
import LinkModal from '../src/components/LinkModal';

export default function Home() {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [progressMap, setProgressMap] = useState<ProgressMap>({});
  const [customLinks, setCustomLinks] = useState<CustomLinkMap>({});
  const [isClient, setIsClient] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTargetId, setModalTargetId] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    setProgressMap(loadProgress());
    setCustomLinks(loadCustomLinks());
  }, []);

  const updateProgress = (id: string, val: string) => {
    const newMap = { ...progressMap, [id]: val };
    setProgressMap(newMap);
    saveProgress(newMap);
  };

  const openLinkModal = (id: string) => {
    setModalTargetId(id);
    setIsModalOpen(true);
  };

  const handleSaveCustomLink = (title: string, url: string) => {
    if (!modalTargetId) return;
    const newLinks = { ...customLinks };
    if (!newLinks[modalTargetId]) newLinks[modalTargetId] = [];
    newLinks[modalTargetId] = [...newLinks[modalTargetId], { t: title, u: url }];
    setCustomLinks(newLinks);
    saveCustomLinks(newLinks);
  };

  const allTasks = [...LLD_TOPICS, ...HLD_TOPICS, ...PATTERNS, ...PRACTICE];
  const totalTasks = allTasks.length;
  const doneTasks = allTasks.filter(p => progressMap[p.id] === 'dn').length;
  const activeTasks = allTasks.filter(p => progressMap[p.id] === 'ac').length;
  const pendingTasks = totalTasks - doneTasks - activeTasks;
  const progressPercent = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-bg font-sans text-text-main">
      <Header 
        cDone={isClient ? doneTasks : 0}
        cActive={isClient ? activeTasks : 0}
        cNS={isClient ? pendingTasks : 0}
      />
      <ProgressBar progress={isClient ? progressPercent : 0} />
      <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pb-16">
        {activeTab === 'roadmap' && <Roadmap />}
        {activeTab === 'lld' && (
          <LldTable 
            progressMap={progressMap} 
            updateProgress={updateProgress} 
            customLinks={customLinks}
            onAddLink={openLinkModal}
          />
        )}
        {activeTab === 'hld' && (
          <HldTable 
            progressMap={progressMap} 
            updateProgress={updateProgress} 
            customLinks={customLinks}
            onAddLink={openLinkModal}
          />
        )}
        {activeTab === 'patterns' && (
          <PatternsTable 
            progressMap={progressMap} 
            updateProgress={updateProgress} 
            customLinks={customLinks}
            onAddLink={openLinkModal}
          />
        )}
        {activeTab === 'practice' && (
          <PracticeTable 
            progressMap={progressMap} 
            updateProgress={updateProgress} 
            customLinks={customLinks}
            onAddLink={openLinkModal}
          />
        )}
        {activeTab === 'resources' && <ResourcesTab />}
        {activeTab === 'questions' && <QuestionsTab />}
      </main>
      <Footer />
      <LinkModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveCustomLink} 
      />
    </div>
  );
}

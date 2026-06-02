'use client';

import React, { useState } from 'react';
import Header from '../src/components/Header';
import Roadmap from '../src/components/Roadmap';
import LldTable from '../src/components/LldTable';
import ProgressBar from '../src/components/ProgressBar';

export default function Home() {
  const [activeTab, setActiveTab] = useState('roadmap');

  return (
    <div className="min-h-screen bg-bg font-sans text-text-main">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProgressBar progress={15} />
      <main className="pb-16">
        {activeTab === 'roadmap' && <Roadmap />}
        {activeTab === 'lld' && <LldTable />}
      </main>
    </div>
  );
}

import React, { useState } from 'react';

const styles = {
  overlay: "fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm",
  modal: "w-full max-w-[400px] rounded-lg border border-brd bg-bg2 p-6 shadow-2xl",
  header: "mb-6 flex items-center justify-between",
  title: "text-[16px] font-semibold text-text-main",
  closeBtn: "cursor-pointer text-t3 hover:text-red-400",
  formGroup: "mb-4",
  label: "mb-2 block text-[12px] font-medium text-t2",
  input: "w-full rounded-[5px] border border-brd2 bg-bg p-[10px] text-[13px] text-text-main outline-none focus:border-green-main",
  submitBtn: "mt-4 w-full cursor-pointer rounded-[5px] bg-gdim py-[10px] text-[13px] font-medium text-green-main border border-green-main/30 transition-colors hover:bg-green-main/20"
};

interface LinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, url: string) => void;
}

export default function LinkModal({ isOpen, onClose, onSave }: LinkModalProps) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && url.trim()) {
      onSave(title.trim(), url.trim());
      setTitle('');
      setUrl('');
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>+ Add Custom Resource Link</div>
          <div className={styles.closeBtn} onClick={onClose}>✖</div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Link Title</label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="e.g. My Personal Notes" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoFocus
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>URL</label>
            <input 
              type="url" 
              className={styles.input} 
              placeholder="https://..." 
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Save Link
          </button>
        </form>
      </div>
    </div>
  );
}

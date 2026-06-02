export type ProgressMap = Record<string, string>;

export function loadProgress(): ProgressMap {
  try {
    const s = localStorage.getItem('sdt-p');
    if (s) return JSON.parse(s);
  } catch (e) {
    console.error('Failed to load progress', e);
  }
  return {};
}

export function saveProgress(progress: ProgressMap) {
  try {
    localStorage.setItem('sdt-p', JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

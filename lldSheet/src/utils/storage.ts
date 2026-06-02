export type ProgressMap = Record<string, string>;
export type CustomLinkMap = Record<string, { t: string, u: string }[]>;

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

export function loadCustomLinks(): CustomLinkMap {
  try {
    const s = localStorage.getItem('sdt-l');
    if (s) return JSON.parse(s);
  } catch (e) {
    console.error('Failed to load custom links', e);
  }
  return {};
}

export function saveCustomLinks(map: CustomLinkMap) {
  try {
    localStorage.setItem('sdt-l', JSON.stringify(map));
  } catch (e) {
    console.error('Failed to save custom links', e);
  }
}

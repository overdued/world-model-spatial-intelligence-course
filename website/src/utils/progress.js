/**
 * Shared progress store backed by localStorage.
 *
 * Contract:
 *   - localStorage key: "wmsi-progress"
 *   - value: JSON object  { [moduleId]: true }
 * Module ids come from src/data/tracks.js (a01…a13, b01…b13).
 * Components listen to the "wmsi-progress-change" window event so that
 * ModuleProgress toggles and TrackRoadmap stay in sync on the same page.
 */

export const STORAGE_KEY = 'wmsi-progress';
const CHANGE_EVENT = 'wmsi-progress-change';

export function readProgress() {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export function isCompleted(id) {
  return Boolean(readProgress()[id]);
}

export function setCompleted(id, completed) {
  if (typeof window === 'undefined') {
    return;
  }
  const progress = readProgress();
  if (completed) {
    progress[id] = true;
  } else {
    delete progress[id];
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function subscribeProgress(listener) {
  if (typeof window === 'undefined') {
    return () => {};
  }
  const handler = () => listener(readProgress());
  window.addEventListener(CHANGE_EVENT, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener('storage', handler);
  };
}

import { readFileSync, statSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const publicDir = resolve('public');

export function localAsset(path: string, extension: RegExp): string {
  if (!path.startsWith('/') || !extension.test(path) || /[?#%\\]/.test(path)) return '';

  const file = resolve(publicDir, path.slice(1));
  if (!file.startsWith(publicDir + sep) || !statSync(file, { throwIfNoEntry: false })?.isFile()) return '';

  if (/\.pdf$/i.test(path) && !readFileSync(file).subarray(0, 5).equals(Buffer.from('%PDF-'))) return '';
  return path;
}
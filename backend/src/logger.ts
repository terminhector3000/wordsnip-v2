import fs from 'fs';
import path from 'path';

export const fileLogger = (folder_path: string, filename: string) => {
  if (!fs.existsSync(folder_path)) {
    fs.mkdirSync(folder_path, { recursive: true });
  }
  const accessLogStream = fs.createWriteStream(path.join(folder_path, filename), { flags: 'a' });
  return accessLogStream;
};

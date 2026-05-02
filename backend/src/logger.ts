import fs from 'fs';
import path from 'path';

export const fileLogger = (folder_path: string, filename: string) => {
  const accessLogStream = fs.createWriteStream(path.join(folder_path, filename), { flags: 'a' });
  return accessLogStream;
};

import app from './app';
import { env } from './config/env';
const PORT = env.PORT;

const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

process.on('SIGINT', () => {
  console.log('SIGNIT received. Shutting down...');
  server.close(() => {
    process.exit(0);
  });
});
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down...');
  server.close(() => {
    process.exit(0);
  });
});

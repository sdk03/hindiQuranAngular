import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rashidaApps.hindiQuran',
  appName: 'Hindi Quran',
  webDir: 'dist/hq',
  server: {
    androidScheme: 'https'
  }
};

export default config;

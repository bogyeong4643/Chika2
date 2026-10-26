// 앱 설치용 최소 서비스 워커: 항상 최신 화면을 인터넷에서 받아와요.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

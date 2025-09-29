// serviceWorker.js
export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✅ ServiceWorker registered with scope:', registration.scope);
      })
      .catch((err) => {
        console.error('❌ ServiceWorker registration failed:', err);
      });
  }
}
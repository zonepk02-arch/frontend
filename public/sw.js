// sw.js (in public folder)

// Listen for push events
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Background event received',
    icon: '/icon.png',
  };

  event.waitUntil(
    self.registration.showNotification('My Website', options)
  );
});

// Optional: handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/') // Open homepage when clicked
  );
});

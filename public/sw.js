self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      // default to the app icons included in the project
      icon: data.icon || '/android-chrome-192x192.png',
      badge: data.badge || '/android-chrome-192x192.png',
      vibrate: data.vibrate || [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || '2',
        // optional URL to open when the notification is clicked
        url: data.url || '/',
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})
 
// self.addEventListener('notificationclick', function (event) {
//   console.log('Notification click received.')
//   event.notification.close()
//   const urlToOpen = event.notification?.data?.url || '/'
//   event.waitUntil(clients.openWindow(urlToOpen))
// })

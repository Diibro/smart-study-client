export const showNotification = (message:string, type:string) => {
     const notification:HTMLElement | null = document.getElementById('notification-container');
     if(notification != null) {
          notification.innerHTML = message;
          notification.classList.add(type);
          notification.classList.remove("move-notification-up")
          notification.classList.add("move-notification-down");
          setTimeout(() => {
               notification.classList.remove("move-notification-down")
               notification.classList.remove(type)
               notification.classList.add("move-notification-up")
          }, 3000)
     }else{
          return;
     }
     


}
const url:string = `${import.meta.env.VITE_SERVER_URL}/api/v1`;
console.log(url);
export default {
     course: {
          add: `${url}/course/add-course`,
          update: `${url}/course/update-course`,
          delete: `${url}/course/delete-course`,
          getAll: `${url}/course/get-all`,
          search: `${url}/course/search-course`
     },
     task: {
          add: `${url}/task/add-task`,
          update: `${url}/task/update-task`,
          delete: `${url}/task/delete-task`,
          getAll: `${url}/task/get-all`,
          search: `${url}/task/search-task`
     },
     resource: {
          add: `${url}/resource/add-resource`,
          update: `${url}/resource/update-resource`,
          delete: `${url}/resource/delete-resource`,
          getAll: `${url}/resource/get-all`,
          search: `${url}/resource/search-resource`
     },
     user: {
          add: `${url}/user/add-user`,
          update: `${url}/user/update-user`,
          delete: `${url}/user/delete-user`,
          getAll: `${url}/user/get-all`,
          search: `${url}/user/search-user`,
          login: `${url}/user/login`,
          logout: `${url}/user/logout`,
          activate: `${url}/user/activate`,
          checkSession: `${url}/user/session`,
          completeActivation: `${url}/user/complete-activation`,
     }
}
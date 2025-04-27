// Get token
export const getAccessToken = () => {
    try {
      const token = localStorage.getItem("accessToken");
      return token || null;
    } catch (err) {
      console.error("Error getting access token:", err);
      return null;
    }
  };
  
  // Get teacherId (only for teachers)
  export const getTeacherId = () => {
    try {
      const id = localStorage.getItem("teacherId");
      return id || null;
    } catch (err) {
      console.error("Error getting teacher ID:", err);
      return null;
    }
  };
  

  
import { v4 as uuidv4 } from "uuid";
const useUserId = () => {
  const storageUserId = localStorage.getItem("userId");

  if (!storageUserId) {
    const userId = uuidv4();
    localStorage.setItem("userId", userId);
    return userId;
  }
  return storageUserId;
};

export default useUserId;

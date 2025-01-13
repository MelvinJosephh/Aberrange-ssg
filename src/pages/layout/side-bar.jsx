import { useState } from "react";

// Custom hook for managing sidebar state
export const useSidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = (state) => {
    setSidebar(state !== undefined ? state : !sidebar); // Toggle or set explicitly
  };

  return { sidebar, toggleSidebar };
};

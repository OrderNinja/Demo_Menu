
import { createContext, useState, useContext, ReactNode } from "react";

interface UserInfo {
  name: string;
  phone: string;
}

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
  isInfoComplete: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    phone: "",
  });

  // Always consider info complete since we're using guest by default
  const isInfoComplete = true;

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isInfoComplete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

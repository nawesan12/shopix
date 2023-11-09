import { createContext, useState } from "react";

let initialUser = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  points: 0,
  birthdate: new Date(),
  token: "",
  authorized: false,
};

export const UserContext = createContext(initialUser);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(initialUser);

  return (
    //@ts-ignore
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

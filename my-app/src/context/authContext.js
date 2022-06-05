import { createContext, useContext, useState } from "react";

const authContext = createContext(); //

//This will be a React component that acts as a wrapper where we set up the Context, but also return that Context’s Provider for us to wrap our two other components in.
function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "khai le",
    email: "lenguyenkhai@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1652744922302-faf8a02bc23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  });
  const value = { user, setUser };
  return <authContext.Provider value={value} {...props}></authContext.Provider>;
}

function useAuth() {
  const context = useContext(authContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a AuthProvider!");
  }
  return context;
}

export { useAuth, AuthProvider };

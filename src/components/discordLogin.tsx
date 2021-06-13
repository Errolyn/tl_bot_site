import React from "react";

interface LoginProps {
  buttonText?: string,
}

export const Login: React.FC<LoginProps> = ({ buttonText = "login" }) => {
  const handleLogin = React.useCallback(() => {
    window.open("/api/auth/discord", "Discord authentication", "width=500,height=800,toolbar=0");
  }, []);

  return <button onClick={handleLogin}>{buttonText}</button>
}

type LoginProps = {
  buttonText?: string,
}

export const Login = ({ buttonText}: LoginProps) =>
<button onClick= {loginfn} >{ buttonText || "login" }</button>


function loginfn(){
  console.log("login button pressed");
}

export function GetName() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.fullName)
  return user ? user.fullName : "";
  
}

export function GetToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.GetToken)
  return user ? user.token : "";
 

}

export function Logout() {
  localStorage.clear();
}

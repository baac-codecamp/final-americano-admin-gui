export function GetName() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.fullName : "";
}

export function GetToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.token : "";
}

export function Logout() {
  localStorage.clear();
}

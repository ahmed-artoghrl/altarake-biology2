function logout() {
  localStorage.removeItem("studentName");
  window.location.href = "index.html";
}

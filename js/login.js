document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    login();
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    register();
  });

  function register() {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      alert("E-mail já cadastrado.");
    } else {
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Usuário registrado com sucesso!");
      registerForm.reset();
    }
  }

  function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login realizado com sucesso!");
      loginForm.reset();
    } else {
      alert("E-mail ou senha incorretos.");
    }
  }
});

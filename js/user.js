document.addEventListener("DOMContentLoaded", () => {
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => user.logado);

  if (!user) {
    window.location.href = "../pages/login.html";
  } else {
    const h1 = document.getElementById('userName');
    h1.textContent = `Olá, ${user.nome}! Bem-vindo(a) à sua agenda!`;
  }
  function logoutUser(username) {
    const users = JSON.parse(localStorage.getItem('users'));
    const updatedUsers = users.map(user => {
        if (user.nome === username) {
            return { ...user, logado: false };
        }
        return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    window.location.href = '../index.html';
  }

  document.getElementById('logoutButton').addEventListener('click', () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.logado);

    if (user) {
        logoutUser(user.nome);
    } else {
        alert('Nenhum usuário está logado.');
    }
  });

  const form = document.getElementById("form-agenda");
  const consultasContainer = document.getElementById("consultas");
  let consultaId = 4;
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const especialidade = document.getElementById("especialidade").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    if (especialidade && data && horario) {
      const consulta = document.createElement("div");
      consulta.className = "consulta";
      consulta.dataset.id = consultaId++;

      consulta.innerHTML = `
        <h2>Consulta com Dr./Dra. ${especialidade}</h2>
        <p>Data: ${data}</p>
        <p>Horário: ${horario}</p>
        <p>Especialidade: ${especialidade}</p>
        <label class="btn-cancelar">
          <button class="btn-red" type="button">Cancelar</button>
        </label>
      `;

      consulta.querySelector(".btn-red").addEventListener("click", () => {
        consulta.remove();
      });

      consultasContainer.appendChild(consulta);

      form.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });

  document.querySelectorAll(".btn-red").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.closest(".consulta").remove();
    });
  });
});

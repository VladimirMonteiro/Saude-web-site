document.addEventListener("DOMContentLoaded", () => {
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

const servicios = [
    { nombre: "Boxes privados", sector: "Oficina", descripcion: "Espacios individuales de trabajo" },
    { nombre: "Sala de podcast", sector: "Audio", descripcion: "Grabación profesional" },
    { nombre: "Sala de formación", sector: "Educación", descripcion: "Cursos y talleres" },
    { nombre: "Eventos", sector: "Eventos", descripcion: "Espacio grande para eventos" },
];
if (typeof document !== 'undefined') {

    document.addEventListener("DOMContentLoaded", () => {

        const input = document.querySelector(".hero-search-input");
        const btn = document.querySelector(".hero-search-btn");
        const results = document.getElementById("search-results");

        const buscar = () => {
            const texto = input.value.toLowerCase().trim();

            results.innerHTML = "";

            if (!texto) return;

            const filtrados = servicios.filter(s =>
                s.nombre.toLowerCase().includes(texto)
            );

            if (filtrados.length === 0) {
                results.innerHTML = `<div class="search-item">No se encontraron resultados</div>`;
                return;
            }

            filtrados.forEach(s => {
                results.innerHTML += `
        <div class="search-item">
          <strong>${s.nombre}</strong><br>
          <span>${s.descripcion}</span>
        </div>
      `;
            });
        };

        btn.addEventListener("click", buscar);

        // opcional: buscar al escribir
        input.addEventListener("input", buscar);
    });
}
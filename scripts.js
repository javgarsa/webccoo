const permisos = [/* ... misma lista completa de permisos ... */];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const container = document.getElementById('permisos-container');
    const btnFamiliar = document.getElementById('btn-familiar');
    const btnPersonal = document.getElementById('btn-personal');
    const btnTodos = document.getElementById('btn-todos');

    let currentFilter = 'TODOS';

    const displayPermisos = () => {
        const searchTerm = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const permisosFiltrados = permisos
            .filter(p => currentFilter === 'TODOS' || p.tipo === currentFilter)
            .filter(p => p.causa.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm));

        container.innerHTML = '';

        if (permisosFiltrados.length === 0) {
            container.innerHTML = `<p class="no-results">No se han encontrado permisos que coincidan con la búsqueda.</p>`;
            return;
        }

        permisosFiltrados.forEach(p => {
            const card = document.createElement('div');
            card.className = 'permiso-card';
            card.setAttribute('data-tipo', p.tipo);
            card.innerHTML = `
                <h3>${p.causa}</h3>
                <p><strong>Duración:</strong> ${p.duracion}</p>
                <p><strong>Retribución:</strong> ${p.retribucion}</p>
            `;
            container.appendChild(card);
        });
    };

    const updateActiveButton = activeBtn => {
        [btnFamiliar, btnPersonal, btnTodos].forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    };

    // Eventos
    searchInput.addEventListener('input', displayPermisos);

    btnFamiliar.addEventListener('click', () => {
        currentFilter = 'Familiar';
        updateActiveButton(btnFamiliar);
        displayPermisos();
    });

    btnPersonal.addEventListener('click', () => {
        currentFilter = 'Personal';
        updateActiveButton(btnPersonal);
        displayPermisos();
    });

    btnTodos.addEventListener('click', () => {
        currentFilter = 'TODOS';
        updateActiveButton(btnTodos);
        displayPermisos();
    });

    displayPermisos();
});

// --- Buscador de grados de parentesco ---
const gradosParentesco = {
    "padre": { grado: 1, tipo: "consanguinidad" }, "madre": { grado: 1, tipo: "consanguinidad" }, /*... resto del objeto ...*/
};

const gradoInput = document.getElementById('grado-input');
const gradoResultado = document.getElementById('grado-resultado');

gradoInput.addEventListener('input', () => {
    const termino = gradoInput.value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const parentesco = gradosParentesco[termino];

    if (parentesco) {
        gradoResultado.textContent = `Grado: ${parentesco.grado}º (${parentesco.tipo})`;
        const searchInput = document.getElementById('search-input');
        searchInput.value = termino;
        searchInput.dispatchEvent(new Event('input'));
    } else if (termino.trim() === "") {
        gradoResultado.textContent = "";
    } else {
        gradoResultado.textContent = "No se ha encontrado el grado para ese familiar.";
    }
});

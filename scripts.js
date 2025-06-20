     const permisos = [
            {
                causa: 'Acompañamiento al médico de hijo/a menor de 14 años o mayor con discapacidad',
                duracion: 'Hasta 16 horas anuales, si no se puede conciliar con la jornada.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Acompañamiento al médico de cónyuge, pareja de hecho, o padres',
                duracion: 'No retribuido o a compensar por tiempo de la misma duración.',
                retribucion: 'No retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Accidente o enfermedad grave, hospitalización o intervención quirúrgica sin hospitalización que precise reposo domiciliario de familiares hasta 2º grado',
                duracion: '5 días.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Asistencia a consulta médica del trabajador/a',
                duracion: '2 horas.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Asuntos propios según convenio',
                duracion: '1 día al año.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Causa de fuerza mayor por motivos familiares urgentes (enfermedad o accidente)',
                duracion: 'Derecho a que sean retribuidas las horas de ausencia equivalentes a 4 días al año.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Cuidado de hijo/a menor de edad con cáncer u otra enfermedad grave',
                duracion: 'Reducción de jornada con disminución proporcional del salario de, al menos, la mitad de la duración de aquella.',
                retribucion: 'Sí (con reducción de salario)',
                tipo: 'Familiar'
            },
            {
                causa: 'Cuidado del lactante menor de 9 meses',
                duracion: '1 hora de ausencia (divisible en 2 fracciones). Acumulable en 15 días.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Cumplimiento de un deber inexcusable público y personal',
                duracion: 'El tiempo indispensable.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Días de permisos no retribuidos',
                duracion: '3 días al año.',
                retribucion: 'No retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Exámenes para la promoción y formación profesional',
                duracion: 'El tiempo indispensable.',
                retribucion: 'No retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Exámenes prenatales y técnicas de preparación al parto',
                duracion: 'El tiempo indispensable.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Excesos de jornada',
                duracion: 'Depende del calendario anual.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Fallecimiento de familiar de 1er grado (sin desplazamiento)',
                duracion: '3 días.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Fallecimiento de familiar de 2º grado',
                duracion: '2 días.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Fallecimiento de cónyuge o familiar de 1er grado (con desplazamiento)',
                duracion: '4 días.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Hospitalización de hijo menor de 12 años',
                duracion: 'Máximo 10 días laborables.',
                retribucion: 'No retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Matrimonio o registro de parejas de hecho',
                duracion: '15 días naturales.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Matrimonio de parientes hasta 2º grado (padres, hijos, hermanos) (boda)',
                duracion: '1 día.',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Nacimiento y cuidado de menor (Maternidad / Paternidad)',
                duracion: '16 semanas (6 obligatorias).',
                retribucion: 'Retribuido',
                tipo: 'Familiar'
            },
            {
                causa: 'Nacimiento prematuro de hijo/a u hospitalización post-parto',
                duracion: '1 hora al día.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Traslado de domicilio habitual (Mudanza)',
                duracion: '1 día.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Vacaciones',
                duracion: '22 días laborables.',
                retribucion: 'Retribuido',
                tipo: 'Personal'
            },
            {
                causa: 'Víctimas de violencia de género o de terrorismo',
                duracion: 'Reducción de jornada, reordenación del tiempo, trabajo a distancia, etc.',
                retribucion: 'No retribuido (es adaptación del puesto)',
                tipo: 'Personal'
            },
            {
                causa: 'Reducción de jornada por guarda legal (menor de 12 años, persona con discapacidad)',
                duracion: 'Reducción de jornada con disminución proporcional del salario (entre 1/8 y la mitad de la jornada).',
                retribucion: 'No retribuido',
                tipo: 'Familiar'
            }
        ];


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

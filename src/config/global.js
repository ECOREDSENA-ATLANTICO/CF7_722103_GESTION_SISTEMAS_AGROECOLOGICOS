export default {
  global: {
    componenteFormativo: 'Alistamiento de la siembra de material vegetal',
    descripcionCurso:
      'En este componente formativo se abordan temas que le permitirán planificar el proceso de siembra del material vegetal, teniendo en cuenta el cultivo seleccionado, las técnicas y condiciones agroecológicas, además del diseño de los arreglos productivos según especies seleccionadas, criterio técnico y principios agroecológicos, incluyendo equipos y herramientas necesarias, finalizando con la definición de las actividades, tiempos, recursos y responsables para llevar a cabo a la siembra según principios agroecológicos y criterio técnico.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación de la siembra',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Condiciones ambientales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manejo de semillas y material de propagación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Arreglos topológicos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Máquinas, herramientas y equipos para la siembra',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipo, limpieza, calibración y mantenimiento',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cronogramas y formatos',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Brechelt, A. (2004). Manejo ecológico de plagas y enfermedades. Red de Acción en Plaguicidas y sus Alternativas para América Latina. (RAP-AL)  ',
      link:
        'https://webzoom.freewebs.com/rentawebscr/alonsocr2013/descargas/Manejo_Ecologico_de_Plagas_A.Bretchel.pdf',
    },
    {
      referencia:
        'Escalante, L., Linzaga, E., Escalante, E. y Carreño E. (2007). Formas de Preparar el Terreno de Siembra para Obtener Buenas Cosechas. Colegio Superior Agropecuario del Estado de Guerrero. Instituto de Investigación Científica Área de Ciencias Naturales. Universidad Autónoma de Guerrero. Revista Alternativa. 4(13).',
      link: 'https://uniprofesoraalba.files.wordpress.com/2010/02/siembra.pdf',
    },
    {
      referencia:
        'FAO. (1991).  Guía para la manipulación de semillas forestales. Centro de Semillas Forestales de DANIDA',
      link: 'https://www.fao.org/3/ad232s/ad232s00.htm#TOC',
    },
    {
      referencia:
        'Franco, P. (2012). Manejo integrado de recurso hídrico. Corporación Centro de Investigación en Palma de Aceite (Cenipalma), Fedepalma.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/107700/GM%20Manejo%20integrado%20del%20recurso%20H%C3%ADdrico.pdf?sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Siembra',
      significado: 'Dispersión de semillas en un terreno.',
    },
    {
      termino: 'Semilla criolla:',
      significado:
        'Aquellas semillas que han logrado adaptarse a unas determinadas condiciones del entorno,  de modo natural o por intervención antrópica.',
    },
    {
      termino: 'Arreglo topológico',
      significado:
        'Se definen como la distribución de las plantas en la superficie sembrada, cantidad y disposición de las mismas en un terreno. ',
    },
    {
      termino: 'Escarificación',
      significado:
        'proceso de desgaste de la cubierta de la semilla con el fin de permitir el paso del agua y oxígeno necesarios para iniciar la germinación.',
    },
    {
      termino: 'Surcos',
      significado:
        'Distribución de las semillas en hileras, y a una distancia de dos o tres centímetros de separación.',
    },
    {
      termino: 'Material vegetativo',
      significado: 'Parte de planta o planta viva destinadas a ser plantadas.',
    },
    {
      termino: 'Voleo',
      significado:
        'Las semillas son distribuidas y colocadas en forma dispersa, no alineada.',
    },
    {
      termino: 'Rotación de cultivos',
      significado:
        'Alternar cultivos en un mismo suelo, con el fin  de preservar los nutrientes disponibles en el suelo.',
    },
    {
      termino: 'Calibración',
      significado:
        'Significa utilizar un estándar de medición, para determinar la relación entre el valor mostrado por el instrumento de medición y el valor verdadero.',
    },
    {
      termino: 'Cronograma de siembra',
      significado:
        'Permite establecer una guía de las temporadas del año y las condiciones de siembra en cada una, con el fin de poder establecer un alto porcentaje de crecimiento y desarrollo del cultivo.',
    },
  ],
  complementario: [
    {
      tema: '1.3. Manejo de semillas y material de propagación.',
      referencia:
        'Centro de Semillas Forestales de DANIDA. FAO (1991). Guía para la manipulación de semillas forestales ',
      tipo: 'Libro',
      link: 'https://www.fao.org/3/ad232s/ad232s00.htm#TOC',
    },
    {
      tema: '1.4. Arreglos topológicos.',
      referencia:
        'Tips y temas agronómicos.  [Tips y Temas Agronómicos]. (2022, 7 de febrero). Densidad de plantación [Video]. Youtube',
      tipo: 'Video',
      link: 'https://youtu.be/MOYVpQWbkC0',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Tatiana Villamil',
        cargo: 'Responsable del equipo',
        centro: 'Dirección General',
      },
      {
        nombre: 'Miguel De Jesús Paredes Maestre ',
        cargo: 'Responsable de línea de producción',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable de Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diana Julieth Núñez Ortegón',
        cargo: 'Experta Temática',
        centro: 'Centro de Comercio y Servicio - Regional Tolima',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez ',
        cargo: 'Soporte organizacional ',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Nelson Vera ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
      {
        nombre: 'Carmen Martínez ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
      {
        nombre: 'Eulices Orduz Amézquita',
        cargo: 'Diseño de contenidos digitales',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
      {
        nombre: 'Liborio de Jesús Castañeda Valencia',
        cargo: 'Desarrollo Fullstack Junior',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
      {
        nombre: 'Fabian Cuartas',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
      {
        nombre: 'Gilberto Herrera',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Evaluador para contenidos inclusivos y accesibles',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
      {
        nombre: 'Juan Carlos Cardona Acosta',
        cargo: 'Validación de recursos digitales',
        centro:
          'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
      },
    ],
    // gestoresRepositorio: [
    //   {
    //     nombre: 'Juan Carlos Cardona Acosta',
    //     cargo: 'Validación de recursos digitales',
    //     centro:
    //       'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
    //   },
    // ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

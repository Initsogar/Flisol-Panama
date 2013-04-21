Ext.define('FlisolApp.store.Charlas', {
        /**
         * Definiendo que es un Store
         * @type {String}
         */
    extend: 'Ext.data.Store',
    config: {

        /**
         * Campos del store
         * @type {Array}
         */
        fields: ['tema', 'extracto', 'expositor', 'horario', 'foto'],
        data: [
            {
                tema: 'Educación Libre',
                expositor: 'Johel Batista',
                foto: 'https://si0.twimg.com/profile_images/3057346946/b7f2aac196ae91c1520d07d0d3aa186f_bigger.jpeg',
                horario: '10:00 a.m. - 10:30 a.m.',
                extracto: 'Durante muchos años las empresas de software han querido dar la pauta en lo que se refiere a tecnología en la educación pero últimamente ha surgido el movimiento de conocimiento abierto, así que acompáñanos y entérate de como tu puedes formar parte del cambio. *Le Ayudinga salvaje aparece'
            },
            {
                tema: 'Configura tu Linux para programar en Java',
                expositor: 'Ariel Barría',
                foto: '',
                horario: '10:30 a.m. - 11:00 a.m.',
                extracto: 'Instalar el JDK. Instalar un IDE. ¿Qué es eso de Netbeans? Mostrar y explicar un código necesario para guardar un archivo en base datos.'
            },
            {
                tema: 'Lo mejor lo tiene Blender 3D, ¿por qué utilizar software privativo?',
                expositor: 'Mayra Morales',
                foto: '',
                horario: '11:00 a.m. - 11:30 a.m.',
                extracto: 'Antecedentes y Generalidades del Software. Evolución. Proyectos Libres. Blender Institute y comunidades. Freelance.'
            },
            {
                tema: 'Logrando la compatibilidad, ¿cómo domesticar dispotivos rebeldes?',
                expositor: 'Bruno Regno',
                foto: 'https://si0.twimg.com/profile_images/262229298/Cropped_square_bigger.JPG',
                horario: '11:30 a.m. - 12:00 m.d.',
                extracto: 'Cuando un dispositivo parece "no compatible" con Linux, en realidad puede contar con un nivel de soporte en el kernel o núcleo. Se trata de averiguar cuál es el nivel de reconocimiento y cómo lograr que la configuración sea correcta.'
            },
            {
                tema: 'Desarrollo de una app móvil desde cero',
                expositor: 'Rafael Agostini',
                foto: 'https://si0.twimg.com/profile_images/3410925511/b5e504ec48c3ded2c0e6937a289c1ef0_bigger.png',
                horario: '12:00 m.d. - 12:30 m.d.',
                extracto: 'Veremos los pasos fundamentales para poder desarrollar una aplicación para dispositivos móviles desde la idea hasta después del lanzamiento.'
            },
            {
                tema: 'ZFS',
                expositor: 'Manuel Argüelles',
                foto: 'https://si0.twimg.com/profile_images/3477132328/00a2092e7eb611bfdd15e53f76b555eb_bigger.png',
                horario: '2:00 p.m. - 2:30 p.m.',
                extracto: 'Sistema de archivos ZFS.'
            },
            {
                tema: 'ProcessMaker',
                expositor: 'Baker Tilly Panamá',
                foto: '',
                horario: '2:30 p.m. - 3:00 p.m.',
                extracto: 'ProcessMaker es una herramienta de administración de flujos de trabajo (workflow) que permite a organizaciones públicas y privadas automatizar la intensividad de sus documentos, procesos aprovados a través de departamentos y sistemas. Los usuarios del negocio y los expertos del proceso no necesitan experiencia programando para diseñar y ejecutar sus flujos de trabajo.'
            },
            {
                tema: 'Baby Steps con Node.JS',
                expositor: 'Rolando Pérez',
                foto: 'https://si0.twimg.com/profile_images/3459696961/b142363f5f72b2d0283d6fc53daba5ad_bigger.jpeg',
                horario: '3:00 p.m. - 3:30 p.m.',
                extracto: 'Una introducción a las herramientas básicas usadas en Node.'
            },
            {
                tema: 'Solución de e-commerce: TeAhorrasX',
                expositor: 'Ivanna Guerrero, Anneth Batista y Carina Roper',
                foto: 'https://si0.twimg.com/profile_images/3354682970/94fd1347c5eb2ee3a25d406d07b1f738_bigger.jpeg',
                horario: '3:30 p.m. - 4:00 p.m.',
                extracto: 'Cómo estamos usando la tecnología de software libre para impulsar el comercio electrónico en panama y cómo la filosofía de software libre a moldeado nuestra estrategia de expansión y mercadeo.'
            },
            {
                tema: 'RTC Libre',
                expositor: 'David Narvaez',
                foto: 'https://si0.twimg.com/profile_images/1508815626/173349_625895225_6642585_n_bigger.jpg',
                horario: '4:00 p.m. - 4:30 p.m.',
                extracto: 'Una charla acerca del estado actual de Real Time Communications usando Software Libre.'
            },
            {
                tema: 'Virtualización y Clustering Libre',
                expositor: 'Querube Urriola',
                foto: 'https://si0.twimg.com/profile_images/1450567690/querube_bigger.jpg',
                horario: '4:30 p.m. - 5:00 p.m.',
                extracto: 'Crea ambientes de virtualización y de clustering siguiendo las mejores prácticas y utilizando todo tipo de hardware.'
            }
        ],

        /**
         * Especificando que debe cargarse apenas se inicie la app
         * @type {Boolean}
         */
        autoLoad: true,

        /**
         * Definiendo las funciones listeners del store
         * @type {Object}
         */
        listeners: {

                /**
                 * Este método se disparará justo después de cargar los datos del store
                 * @param  {[type]} store     Referencia a este Store
                 * @param  {[type]} records   Registros cargados
                 * @param  {[type]} success   Si hubo éxito o no
                 */
            load: function(store, records, success){
            }
        }
    }
});
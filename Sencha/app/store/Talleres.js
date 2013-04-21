Ext.define('FlisolApp.store.Talleres', {
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
                tema: 'Aprender programación, un juego a la vez',
                expositor: 'Alexis Hevia',
                foto: 'https://si0.twimg.com/profile_images/3163681455/1c7ba46d76293a30f8af0ed3a0d8a058_bigger.jpeg',
                horario: '11:00 a.m. - 12:00 m.d.',
                extracto: 'Un taller donde se van a presentar los conceptos básicos de programación mientras vamos desarrollando algunos juegos clásicos.'
            },
            {
                tema: 'Robótica Educativa',
                expositor: 'Kiara Navarro y Alejandro Pérez',
                foto: 'https://si0.twimg.com/profile_images/1752848068/image1326489780_bigger.png',
                horario: '2:00 p.m. - 3:00 p.m.',
                extracto: 'Fortalece áreas específicas del conocimiento y desarrolla tus competencias, a través de la concepción, creación, ensamble y puesta en funcionamiento de robots utilizando Hardware Libre.'
            },
            {
                tema: 'Appcelerator Titanium: Plataforma de desarrollo móvil nativo para múltiples dispositivos',
                expositor: 'Demóstenes García',
                foto: 'https://si0.twimg.com/profile_images/2649978494/a3a283319e90d1f8ec5df515b15765f5_bigger.png',
                horario: '3:00 p.m. - 4:00 p.m.',
                extracto: 'Appcelerator Titanium es una plataforma abierta y extensible para el desarrollo y creación de aplicaciones móviles nativas para distintos tipos de dispositivos móviles y sistemas operativos: incluyendo iOS, Android, Windows y BlackBerry, así aplicaciones híbridas y hechas en HTML5. En esta presentación conoceremos más de la plataforma y desarrollaremos algunos de ejemplos para entender como desarrollar aplicaciones móviles multiplataforma utilizando el SDK y los API de Titanium.'
            },
            {
                tema: 'Demostración de Drupal 7',
                expositor: 'Juan Barba',
                foto: 'https://si0.twimg.com/profile_images/1623082009/perfilPosibleLittle_bigger.JPG',
                horario: '4:00 p.m. - 5:00 p.m.',
                extracto: 'Aprende del CMS con mayor participación comunitaria a nivel mundial. Conoce algunas de sus características principales y desarrolla tus habilidades para la creación de plataformas web.'
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
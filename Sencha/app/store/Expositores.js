Ext.define('FlisolApp.store.Expositores', {
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
        fields: ['nombre', 'foto', 'twitter'],
        sorters: 'nombre',
        grouper: function(record){
            return record.get('nombre')[0];
        },
        data: [
            {
                nombre: 'Abdel Martinez',
                twitter: '@abdelgmartinezl',
                foto: 'https://si0.twimg.com/profile_images/3306435872/487fcf5db58382e387f8e2232c7831df_bigger.jpeg'
            },
            {
                nombre: 'Rafael Agostini',
                twitter: '@Initsogar',
                foto: 'https://si0.twimg.com/profile_images/3410925511/b5e504ec48c3ded2c0e6937a289c1ef0_bigger.png'
            },
            {
                nombre: 'Bruno Regno',
                twitter: '@BrunoRegno',
                foto: 'https://si0.twimg.com/profile_images/262229298/Cropped_square_bigger.JPG'
            },
            {
                nombre: 'Kiara Navarro',
                twitter: '',
                foto: ''
            },
            {
                nombre: 'Alejandro Pérez',
                twitter: '@aeperezt',
                foto: 'https://si0.twimg.com/profile_images/1752848068/image1326489780_bigger.png'
            },
            {
                nombre: 'Juan Barba',
                twitter: '@jbarba109',
                foto: 'https://si0.twimg.com/profile_images/1623082009/perfilPosibleLittle_bigger.JPG'
            },
            {
                nombre: 'Demóstenes García',
                twitter: '@demogar',
                foto: 'https://si0.twimg.com/profile_images/2649978494/a3a283319e90d1f8ec5df515b15765f5_bigger.png'
            },
            {
                nombre: 'Manuel Argüelles',
                twitter: '@unPacomas',
                foto: 'https://si0.twimg.com/profile_images/3477132328/00a2092e7eb611bfdd15e53f76b555eb_bigger.png'
            },
            {
                nombre: 'Rolando Pérez',
                twitter: '@Rolilink',
                foto: 'https://si0.twimg.com/profile_images/3459696961/b142363f5f72b2d0283d6fc53daba5ad_bigger.jpeg'
            },
            {
                nombre: 'Johel Batista',
                twitter: '@_wocker',
                foto: 'https://si0.twimg.com/profile_images/3057346946/b7f2aac196ae91c1520d07d0d3aa186f_bigger.jpeg'
            },
            {
                nombre: 'Querube Urriola',
                twitter: '@qurriola',
                foto: 'https://si0.twimg.com/profile_images/1450567690/querube_bigger.jpg'
            },
            {
                nombre: 'Ariel Barría',
                twitter: '',
                foto: ''
            },
            {
                nombre: 'David Narvaez',
                twitter: '@dMaggot',
                foto: 'https://si0.twimg.com/profile_images/1508815626/173349_625895225_6642585_n_bigger.jpg'
            },
            {
                nombre: 'Mayra Morales',
                twitter: '',
                foto: ''
            },
            {
                nombre: 'Ivanna Guerrero',
                twitter: '@ivannaYanel',
                foto: 'https://si0.twimg.com/profile_images/3161188501/1e2ceb3f976d6dcf7d6ee3a90bf68ef9_bigger.jpeg'
            },
            {
                nombre: 'Anneth Batista',
                twitter: '@AnnyK13',
                foto: 'https://si0.twimg.com/profile_images/3458895662/88a99895485e089ff3b9cbe3359d40ac_bigger.jpeg'
            },
            {
                nombre: 'Carina Roper',
                twitter: '@carinaroper',
                foto: 'https://si0.twimg.com/profile_images/2465329513/2iYpQ08Y_bigger'
            },
            {
                nombre: 'Alexis Hevia',
                twitter: '@alexishevia',
                foto: 'https://si0.twimg.com/profile_images/3163681455/1c7ba46d76293a30f8af0ed3a0d8a058_bigger.jpeg'
            },
            {
                nombre: 'Baker Tilly Panamá',
                twitter: '',
                foto: ''
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
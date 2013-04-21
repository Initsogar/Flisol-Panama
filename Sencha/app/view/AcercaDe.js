Ext.define('FlisolApp.view.AcercaDe', {
    extend: 'Ext.Container',
    alias: 'widget.viewacercade',

    config: {
        scrollable: {
            direction: 'vertical',
            directionLock: true,
            /*indicators: false,*/
            outOfBoundRestrictFactor: 0,
            momentumEasing: {
                momentum: {
                    acceleration : 30,
                    friction     : 0.5
                },
                bounce: {
                    acceleration  : 0.0001,
                    springTension : 0.9999
                },
                minVelocity: 5
            }
        },
        items: [
            {
                xtype: 'panel',
                styleHtmlContent: true,
                html:''+
                '<div style="margin:auto;background:#FF7B24;text-align:center;border-radius:10px"><img src="resources/images/flisol-logo.png" height="96" width="194" /></div><br />'+
				'<div class="acerca-qa">'+
					'<div class="acerca-q">¿Qué?</div>'+
					'<div class="acerca-a">Festival Latinoamericano de Instalación de Software Libre, mayor evento de difusión de software libre que se realiza en latinoamérica desde el año 2005 de forma simultánea.</div>'+
				'</div>'+
				'<div class="acerca-qa">'+
					'<div class="acerca-q">¿Dónde?</div>'+
					'<div class="acerca-a">En Panamá, nuestra sede estará en la Facultad de Ingeniería de Sistemas Computacionales de la Universidad Tecnológica de Panamá. Piso 2 del Edificio #3.</div>'+
				'</div>'+
				'<div class="acerca-qa">'+
					'<div class="acerca-q">¿Cuándo?</div>'+
					'<div class="acerca-a">'+
						'Fecha: Sábado 27 de abril de 2013<br />'+
						'Hora: 10:00 a.m. a 5:00p.m.'+
					'</div>'+
				'</div>'+
				'<div class="acerca-qa">'+
					'<div class="acerca-q">¿Cuánto?</div>'+
					'<div class="acerca-a">'+
						'¡Gratis!'+
					'</div>'+
				'</div>'
            }
        ]
    }
});
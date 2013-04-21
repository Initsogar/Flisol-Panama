Ext.define('FlisolApp.controller.ViewController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            navigation: 'navigationview',
            irAcercaDe: '#btn-view-event',
            irExpositores: '#btn-view-expositores',
            irAgenda: '#btn-view-agenda',
            irMapa: '#btn-view-map',
            irTwitter: '#btn-view-twitter',
            irFacebook: '#btn-view-facebook',
            viewAcercaDe: {
                selector  : 'viewacercade',
                xtype     : 'viewacercade',
                autoCreate: true
            },
            viewExpositores: {
                selector  : 'viewexpositores',
                xtype     : 'viewexpositores',
                autoCreate: true
            },
            viewAgenda: {
                selector  : 'viewagenda',
                xtype     : 'viewagenda',
                autoCreate: true
            }

        },
        control: {
            irAcercaDe: {
                tap: function(){
                    window.plugins.flurry.logEvent('View_AcercaDe', null);

                    this.getNavigation().push(
                        {
                            xtype:'viewacercade',
                            title:'Acerca del FLISOL',
                            useTitleForBackButtonText: true
                        }
                    );
                }
            },
            irExpositores: {
                tap: function(){
                    window.plugins.flurry.logEvent('View_Expositores', null);

                    this.getNavigation().push(
                        {
                            xtype:'viewexpositores',
                            title:'Expositores'
                        }
                    );
                }
            },
            irAgenda: {
                tap: function(){
                    window.plugins.flurry.logEvent('View_Agenda', null);
                    this.getNavigation().push(
                        {
                            xtype:'viewagenda',
                            title:'Agenda'
                        }
                    );
                }
            },
            irMapa: {
                tap: function(){
                    window.plugins.flurry.logEvent('View_Mapa', null);

                    window.open('https://maps.google.com/?ll=9.0239, -79.5322&z=15&q=9.0239, -79.5322(Universidad Tecnológica de Panamá)', '_system');
                }
            },
            irTwitter: {
                tap: function(){
                    window.plugins.flurry.logEvent('View_Twitter', null);

                    window.open('https://twitter.com/search?q=flisolpanama&src=typd', '_blank', 'location=yes');
                }
            },
            irFacebook: {
                tap: function(){
                    window.plugins.flurry.logEvent('View_Facebook', null);

                    window.open('https://www.facebook.com/events/163767783780522/?fref=ts', '_blank', 'location=yes');
                }
            }
        }
    },
    onIrAcercaDe: function(){
        this.getNavigation().push(
            this.getViewAcercaDe()
        );
    },
    onIrExpositores: function(){
        this.getNavigation().push(
            this.getViewExpositores()
        );
    }
});
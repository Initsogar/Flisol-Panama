Ext.define('FlisolApp.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mynavigation',
    requires: ['Ext.navigation.View'],
    config: {
        id: 'nvView',
        layout:'vbox',
        items: [
            {
                xtype:'navigationview',
                flex: 1,
                animation: false,
                defaultBackButtonText: 'Volver',
                items: [
                    {
                        xtype: 'panel',
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true,
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
                        title: '#FlisolPanama',
                        id: 'view-dashboard',
                        layout: {
                            type: 'vbox'
                        },
                        flex: 1,
                        style: 'text-align:center',
                        styleHtmlContent: true,
                        items: [
                            {
                                xtype:'panel',
                                html:'<div style="margin:auto;background:#FF7B24;text-align:center;border-radius:10px"><img src="resources/images/flisol-logo.png" height="96" width="194" /><br /><span style="font-weight:bold;color:white;text-shadow:1px 1px 2px #333333">Sábado 27 de abril, 2013</span></div>'
                            },
                            {
                                xtype:'panel',
                                layout:'hbox',
                                style: 'font-size:.85em;margin-top:10px;',
                                defaults: {
                                    flex: 1
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        defaults: {
                                            flex: 1,
                                            margin:'10px'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn-view-event',
                                                height:80,
                                                html: '<img src="resources/images/dashboard-acerca.png" style="width:32px;height:32px;" /><br />Acerca de'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        defaults: {
                                            flex: 1,
                                            margin:'10px'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn-view-agenda',
                                                height:80,
                                                text: '<img src="resources/images/dashboard-agenda.png" style="width:32px;height:32px;" /><br />Agenda'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        defaults: {
                                            flex: 1,
                                            margin:'10px'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn-view-expositores',
                                                height:80,
                                                text: '<img src="resources/images/dashboard-expositores.png" style="width:32px;height:32px;" /><br />Expositores'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype:'panel',
                                layout:'hbox',
                                style: 'font-size:1em;margin: 10px',
                                defaults: {
                                    flex: 1
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        defaults: {
                                            flex: 3,
                                            margin:'auto'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn-view-map',
                                                height:100,
                                                html: '<img src="resources/images/dashboard-mapa.png" style="width:64px;height:64px;" /><br />¿Cómo llegar?'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype:'panel',
                                layout:'hbox',
                                style: 'font-size:.85em;',
                                defaults: {
                                    flex: 1
                                },
                                items: [
                                    {
                                        xtype: 'panel',
                                        defaults: {
                                            flex: 1,
                                            margin:'10px'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn-view-twitter',
                                                height:80,
                                                html: '<img src="resources/images/dashboard-twitter.png" style="width:32px;height:32px;" /><br />Twitter'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        defaults: {
                                            flex: 1,
                                            margin:'10px'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn-view-streaming',
                                                disabled: true,
                                                height:80,
                                                text: '<img src="resources/images/dashboard-streaming.png" style="width:32px;height:32px;" /><br />Streaming'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        defaults: {
                                            flex: 1,
                                            margin:'10px'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btn-view-facebook',
                                                height:80,
                                                text: '<img src="resources/images/dashboard-facebook.png" style="width:32px;height:32px;" /><br />Facebook'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
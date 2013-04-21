function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

var htmlTpl = hereDoc(function() {/*!
    <div class="taller expositor">
        <img src="{foto}" class="foto" />
        <div class="horario" style="font-size:1.3em">{horario}</div>
        <div class="tema" style="font-weight:bold;">{tema}</div>
        <div class="expositor" style="font-size:.95em"><span style="font-weight:bold;">-></span> {expositor}</div>
        <br />
        <div class="extracto" style="font-size:.85em">"{extracto}"</div>
    </div>
*/});

Ext.define('FlisolApp.view.Agenda', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.viewagenda',

    config: {
        tabBarPosition:'bottom',
        cardSwitchAnimation: false,
        items: [
            {
                xtype: 'panel',
                title: 'Charlas',
                iconCls: 'chat1',
                styleHtmlContent: true,
                layout:'fit',
                items: [
                    {
                        xtype:'list',
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
                        store: 'Charlas',
                        itemTpl: htmlTpl,
                        emptyText: '...',
                        listeners: {
                            itemtap: function(list, index){
                                setTimeout(function(){list.deselect(index);}, 1);
                            }
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Talleres',
                iconCls: 'settings5',
                styleHtmlContent: true,
                layout:'fit',
                items: [
                    {
                        xtype:'list',
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
                        store: 'Talleres',
                        itemTpl: htmlTpl,
                        emptyText: '...',
                        listeners: {
                            itemtap: function(list, index){
                                setTimeout(function(){list.deselect(index);}, 1);
                            }
                        }
                    }
                ]
            }
        ]
    }
});
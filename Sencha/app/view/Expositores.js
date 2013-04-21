function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

var htmlTpl = hereDoc(function() {/*!
    <div class="expositor">
        <img src="{foto}" class="foto" />
        <div class="nombre">{nombre}</div>
        <div class="twitter"><a href="javascript:void(0)" onclick="window.open('http://twitter.com/{twitter}', '_system');">{twitter}</a></div>
    </div>
*/});

Ext.define('FlisolApp.view.Expositores', {
    extend: 'Ext.Panel',
    alias: 'widget.viewexpositores',
    requires: ['Ext.dataview.List'],
    config: {
        layout:'fit',
        items: [
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
                store: 'Expositores',
                indexBar: true,
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
});
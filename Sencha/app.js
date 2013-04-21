/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'FlisolApp': 'app'
});
//</debug>

Ext.application({
    name: 'FlisolApp',

    requires: [
        'Ext.MessageBox'
    ],

    stores: ['Expositores', 'Talleres', 'Charlas'],

    controllers: ['ViewController'],

    views: [
        'Main', 'AcercaDe', 'Expositores', 'Agenda'
    ],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('FlisolApp.view.Main'));
    }
});
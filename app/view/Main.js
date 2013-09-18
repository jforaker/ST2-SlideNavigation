Ext.define('sencha.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {
        layout: 'fit',

        items: [{
            xtype: 'sidebar'
        }, {
            xtype: 'mainContainerView'
        }]
    }
});

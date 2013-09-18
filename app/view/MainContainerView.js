Ext.define('sencha.view.MainContainerView', {
    extend: 'Ext.Panel',
    xtype: 'mainContainerView',
    config: {
    	layout: 'fit',

    	// shadow for the left edge
        style: 'box-shadow: rgba(0, 0, 0, 0.8) 0 0.2em 0.6em;',

        items: [{
            xtype: 'mainDisplayView'
        }]
    }
});

/* This is the main view used to switch view or add view 
 * when selecting from sidebar menu 
 */
Ext.define('sencha.view.MainDisplayView', {
    extend: 'Ext.Panel',
    xtype: 'mainDisplayView',
    config: {
    	layout: 'card'
    }
});

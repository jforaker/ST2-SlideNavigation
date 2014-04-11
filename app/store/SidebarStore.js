Ext.define('sencha.store.SidebarStore', {
	extend: 'Ext.data.Store',
	xtype: 'sidebarStore',
	config: {
		fields: ['name' , 'xtypeName'],
		data: [
			{name: 'View 1', xtypeName: 'View1-Navigation'},
			{name: 'View 2', xtypeName: 'View2-Navigation'}
		]
	}
});
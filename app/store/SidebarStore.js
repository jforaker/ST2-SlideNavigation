Ext.define('sencha.store.SidebarStore', {
	extend: 'Ext.data.Store',
	xtype: 'sidebarStore',
	config: {
		fields: ['name' , 'xtypeName'],
		data: [
			{name: 'Feed', xtypeName: 'FeederNav'},
			{name: 'Attendance', xtypeName: 'Attendance'}
		]
	}
});
Ext.define('sencha.store.SidebarStore', {
	extend: 'Ext.data.Store',
	xtype: 'sidebarStore',
	config: {
		fields: ['name', 'group'],
		data: [
			{name: 'Menu Item 1', group: 'Group 1'},
			{name: 'Menu Item 2', group: 'Group 1'},
			{name: 'Menu Item 3', group: 'Group 2'},
			{name: 'Menu Item 4', group: 'Group 2'},
			{name: 'Menu Item 5', group: 'Group 3'},
		],
		grouper: {
			groupFn: function(item) {
				return item.get('group');
			}
		}
	}
});
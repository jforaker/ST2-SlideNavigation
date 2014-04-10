Ext.define('sencha.view.Sidebar', {
	extend: 'Ext.Panel',
	xtype: 'sidebar',
	config: {
		layout: 'fit',
		cls: 'sidebar',
		items: [{
			xtype: 'list',
			cls: 'sidebar-menu',
			store: {
				xtype: 'sidebarStore'
			},
			itemTpl: '<div class="sidebar-menu-item">' +
				'<div class="sidebar-menu-item-text">{name}</div>' +
			'</div>'
		}]
	}
});
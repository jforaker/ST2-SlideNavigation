Ext.define('sencha.view.NavigationBar', {
	extend: 'Ext.Toolbar',
	xtype: 'navigationBar',
	config: {
		cls: 'nav-bar',
		docked: 'top',
		minHeight: 44,
		items: [{
			xtype: 'button',
            		name: 'slidebutton-left',
			iconCls: 'home',
			cls: 'sidebar-btn'
		}]
	}
});

Ext.define('sencha.controller.SlideNavigation', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            // Main container
            mainContainerView: 'mainContainerView',
            mainDisplayView: 'mainContainerView panel[cls=main-display-view]',

            // Sidebar view
            sidebar: 'sidebar',
            sidebarMenu: 'sidebar list',

            // Sidebar button
            sidebarBtn: 'button[cls=sidebar-btn]'
        },

        control: {
            mainContainerView: {
                initialize: 'onMainContainerViewInit'
            },

            sidebarBtn: {
                tap: 'onSidebarBtnTap'
            },

            sidebarMenu: {
                itemtap: 'onSidebarMenuItemTap'
            }
        }
    },

    init: function() {
        this.callParent();
        this.initContainer();
    },

    initContainer: function() {
        this.duration = 250;
        this.defaultNavX = 280;
        this.defaultSideX = 80;
    },

    onMainContainerViewInit: function() {
        // We will setup the defaul view here
        var sidebarMenu = this.getSidebarMenu(),
            record = sidebarMenu.getStore().getAt(0);
        sidebarMenu.select(0);
        var that = this;

        // You can just add panel view if there's no need to use navigation view
        this.getMainDisplayView().add({
            xtype: 'FeederNav'
        });
    },

    onSidebarBtnTap: function() {
        this.slideOut();
    },

    onSidebarMenuItemTap: function(component, index, target, record, e, eOpts) {
        this.slideIn();

        if (this.selectedIndex !== index) {
            this.selectedIndex = index;
            var mainDisplayView = this.getMainDisplayView();
            var xtypeName = record.data.xtypeName;

            console.log(mainDisplayView);

            // Here you can switch view if you want because main display view has layout card (check if it has the old view otherwise add new view). 
            // But for simple, I just remove the old view and add new one
            mainDisplayView.removeAt(0);
            mainDisplayView.add({
                xtype: xtypeName
            });
        }
    },

    /* OVERLAY DRAGGING */
    onDrag: function(e, node, options) {
        var mainEl = this.getMainContainerView().element,
            sidebarEl = this.getSidebar().element,
            distance = e.x - e.previousX,
            mainMoveX = mainEl.getX() + distance,
            sideMoveX = sidebarEl.getX() + (distance * this.defaultSideX / this.defaultNavX);

        // drag direction (true: right - false: left)
        this.dragDirection = (distance > 0);

        // set move x
        var style = {
            '-webkit-transition': 'none',
            'transition': 'none'
        };

        // navigation
        style['-webkit-transform'] = 'translate3d(' + mainMoveX + 'px, 0, 0)';
        if (mainMoveX < 0) style['-webkit-transform'] = 'translate3d(0, 0, 0)';
        else if (mainMoveX > this.defaultNavX) style['-webkit-transform'] = 'translate3d(' + this.defaultNavX + 'px, 0, 0)';
        mainEl.setStyle(style);

        // sidebar
        style['-webkit-transform'] = 'translate3d(' + sideMoveX + 'px, 0, 0)';
        if (sideMoveX > 0) style['-webkit-transform'] = 'translate3d(0, 0, 0)';
        else if (sideMoveX < -this.defaultSideX) style['-webkit-transform'] = 'translate3d(-' + this.defaultSideX + 'px, 0, 0)';
        sidebarEl.setStyle(style);
    },

    onDragEnd: function(e, node, options) {
        if (this.dragDirection) this.slideOut();
        else this.slideIn();
    },

    /* HELPERS */
    createOverlayView: function() {
        this.overlayView = Ext.create('Ext.Panel', {
            top: 0,
            width: '100%',
            height: '100%',
            layout: 'fit',
            cls: 'overlay-view',
            listeners: {
                scope: this,
                tap: {
                    fn: this.slideIn,
                    element: 'element'
                },
                drag: {
                    fn: this.onDrag,
                    element: 'element'
                },
                dragend: {
                    fn: this.onDragEnd,
                    element: 'element'
                },
            }
        });

        return this.overlayView;
    },

    slideOut: function() {
        // show the overlay on the navigaion view
        if (!this.overlayView) this.getMainContainerView().add(this.createOverlayView());
        this.overlayView.show();

        // for main view
        new Ext.Anim({
            autoClear: false,
            to: {
                '-webkit-transform': "translate3d(" + this.defaultNavX + "px, 0, 0)",
            },
            duration: this.duration,
            easing: 'ease-out'
        }).run(this.getMainContainerView().element);

        // for sidebar
        new Ext.Anim({
            autoClear: false,
            to: {
                '-webkit-transform': "translate3d(0, 0, 0)",
            },
            duration: this.duration,
            easing: 'ease-out'
        }).run(this.getSidebar().element);
    },

    slideIn: function() {
        // for main view
        new Ext.Anim({
            autoClear: false,
            to: {
                '-webkit-transform': "translate3d(0, 0, 0)",
            },
            duration: this.duration,
            easing: 'ease-out'
        }).run(this.getMainContainerView().element);

        // for sidebar
        new Ext.Anim({
            autoClear: false,
            to: {
                '-webkit-transform': "translate3d(-" + this.defaultSideX + "px, 0, 0)",
            },
            duration: this.duration,
            easing: 'ease-out'
        }).run(this.getSidebar().element);

        // hide the overlay
        if (this.overlayView) this.overlayView.hide();
    },
});
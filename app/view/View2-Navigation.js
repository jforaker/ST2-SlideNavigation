/**
 * Created by jakeforaker on 4/10/14.
 */
/**
 * Created by jakeforaker on 4/10/14.
 */
Ext.define('sencha.view.View2-Navigation', {
    extend: 'Ext.navigation.View',
    xtype: 'View2-Navigation',
    alias: 'widget.view2',
    config: {
        showAnimation: 'fadeIn',
        layout: {
            type: 'card',
            animation: {
                type: 'fade',
                duration: 300
            }
        },
        navigationBar: {
            items: [{
                xtype: 'button',
                name: 'slidebutton-left',
                iconCls: 'home',
                cls: 'sidebar-btn'
            }]
        },
        fullscreen: true,

        items: [{
            items: [{
                xtype: 'button',
                text: 'Push another view YAA',
                handler: function () {

                    var view = Ext.ComponentQuery.query('View2-Navigation')[0];
                    view.push({
                        title: 'View2',
                        html: 'View2 View2 View2 View2!'
                    });
                }
            }]
        }],
        listeners: {
            back: function(nav) {
                if (nav.getInnerItems().length == 2) {
                    var bar = nav.getNavigationBar();
                    bar.down('button[name="slidebutton-left"]').show({
                        type: 'fade',
                        out: false,
                        duration: bar.getAnimation().duration
                    });
                }
            },

            push: function(nav) {
                var bar = nav.getNavigationBar();
                bar.down('button[name="slidebutton-left"]').hide({
                    type: 'fade',
                    out: true,
                    duration: bar.getAnimation().duration
                });
            }
        }
    }
});
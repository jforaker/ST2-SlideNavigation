/**
 * Created by jakeforaker on 4/10/14.
 */
Ext.define('sencha.view.View1-Navigation', {
    extend: 'Ext.navigation.View',
    xtype: "View1-Navigation",
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
                text: 'Push a new view!',
                handler: function () {

                    var view = Ext.ComponentQuery.query('View1-Navigation')[0];
                    view.push({
                        title: 'Second',
                        html: 'Something else cool!'
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
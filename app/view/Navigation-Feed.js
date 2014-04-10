/**
 * Created by jakeforaker on 4/10/14.
 */
Ext.define('sencha.view.Navigation-Feed', {
    extend: 'Ext.navigation.View',
    xtype: "FeederNav",
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

        title: 'chalk',
        html: 'asdf',
        fullscreen: true,
        items: [{

            items: [{
                xtype: 'button',
                text: 'Push a new view!',
                handler: function () {

                    var view = Ext.ComponentQuery.query('FeederNav')[0];
                    view.push({
                        title: 'Second',
                        html: 'Second view!'
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
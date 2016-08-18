window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');


/**
 * Created by logan on June 16, 2016.
 */
var app = (function () {
    'use strict';

    var s;
    return {
        settings: {
            document: $(document),
            pathname: window.location.pathname,
            html: $('html')
        },

        init: function () {
            s = this.settings;

            this.displaySearch();
            this.displayPhoneDirectory();
        },

        displaySearch: function(){
            $('#search_btn').on('click', function(){
               $('.search').slideToggle();
                if( $(".call").css('display') == 'block') {
                    $('.call').slideToggle();
                }
            });
        },

        displayPhoneDirectory: function(){
            $('#phone_btn').on('click', function(){
                $('.call').slideToggle();
                if( $(".search").css('display') == 'block') {
                    $('.search').slideToggle();
                }
            });
        }
    }
})();

$(function () {
    app.init();
});

window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');


/**
 * Created by logan on August 16, 2016.
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
            this.displayLocations();
            this.calculateWaitTime();
            this.getTime();
            this.getVideoCount();
        },

        /* Display Search area on search icon click */
        displaySearch: function(){
            $('#search_btn').on('click', function(){
               $('.search').slideToggle();

                if( $(".call").css('display') == 'block') {
                    $('.call').slideToggle();
                }

                if( $(".hospital-locations").css('display') == 'block') {
                    $('.hospital-locations').slideToggle();
                }
            });
        },

        /* Display Phone Directory on icon click */
        displayPhoneDirectory: function(){
            $('#phone_btn').on('click', function(){
                $('.call').slideToggle();
                if( $(".search").css('display') == 'block') {
                    $('.search').slideToggle();
                }

                if( $(".hospital-locations").css('display') == 'block') {
                    $('.hospital-locations').slideToggle();
                }
            });
        },

        /* Display Locations on icon click */
        displayLocations: function(){
            $('#location_btn').on('click', function(){
                $('.hospital-locations').slideToggle();

                if( $(".search").css('display') == 'block') {
                    $('.search').slideToggle();
                }

                if( $(".call").css('display') == 'block') {
                    $('.call').slideToggle();
                }
            });
        },

        /* Calculate a Fake Wait Time and assign a color accordingly */
        calculateWaitTime: function(){
            var time = Math.floor(Math.random() * 60) + 1;

            $('.timer-amount').text(time);

            if(time <= 20){
                $('.timer').addClass('bg-green');
            } else if(time > 20 && time <= 40){
                $('.timer').addClass('bg-orange');
            } else if(time > 40 && time <= 60){
                $('.timer').addClass('bg-red');
            }
        },

        /* Calculate Current Time for the Wait Time */
        getTime: function(){
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;

            $('.time-as-of').text(strTime);
        },

        /* Dynamic Video Count */
        getVideoCount: function(){
            var videoCount = $('.entry-list-item').length;

            $('#video-count').text(videoCount);
        }
    }
})();

$(function () {
    app.init();
});

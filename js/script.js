jQuery(document).ready(function ($) {
   Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {


      $(".scrollpanel").scrollpanel();

      $(".scrollpanel").scrollpanel({
         prefix: 'sp-'
      });

      $(function () {
         $("#my-accordion").accordion();
      });






   });
});
var FadeTransition = Barba.BaseTransition.extend({
   start: function () {
      Promise
         .all([this.newContainerLoading, this.fadeOut()])
         .then(this.fadeIn.bind(this));
   },

   fadeOut: function () {

      return $(this.oldContainer).animate({
         opacity: 0.5
      }).promise();
   },

   fadeIn: function () {

      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
         visibility: 'visible',
         opacity: 0.5
      });

      $el.animate({
         opacity: 1
      }, 300, function () {
         _this.done();
      });
   }
});

Barba.Pjax.getTransition = function () {
   return FadeTransition;
};
Barba.Pjax.start();
//////////
// INPUT READER
//////////
(function($, APP) {
  APP.Plugins.InputReader = {
    init: function() {
      this.clickListeners();
    },
    clickListeners: function() {
      var _this = this;

      $('.js-file-upload input').on('change', function(e) {
        var parent = $(this).parent();
        _this.readURL(this);
      });

      _document.on('click', '.js-remove-file', function() {
        var $input = $(this)
          .closest('.ui-file')
          .find('input');
        $input.val('');
        $input.trigger('change');
      });
    },
    readURL: function(input) {
      var parent = $(input).parent();
      if (input.files && input.files[0]) {
        var file = input.files[0];
        var $stats = parent.find('.ui-file__upload-stats');

        // limits
        var sizeMb = file.size / 1024 / 1024;
        // handled by validations.js
        // if (FileSize > 5) {
        //   alert('Файл превышает 5 Мб');
        //   return;
        // }

        var size = sizeMb.toFixed(2) + ' Мб';
        var statsContent = `${file.name} (${size})`;
        $stats.html(statsContent);
        parent.addClass('has-file');

        // reader
        // var reader = new FileReader();

        // reader.onload = function(e) {
        //   var size = sizeMb.toFixed(2) + ' Мб';
        //   var statsContent = `${file.name} (${size})`;
        //   $stats.html(statsContent);
        //   parent.addClass('has-file');
        // };

        // reader.readAsDataURL(input.files[0]);
      } else {
        parent.removeClass('has-file');
      }
    },
  };
})(jQuery, window.APP);

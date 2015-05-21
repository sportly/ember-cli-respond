/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-respond',
  contentFor: function(type) {
    if (type === 'head-footer') {
      return '<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>';
    }
  }
};

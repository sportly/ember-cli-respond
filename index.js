/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-respond',
  contentFor: function(type) {
    if (type === 'head-footer') {
      return '<script src="/ember-cli-respond/respond.min.js"></script>';
    }
  }
};

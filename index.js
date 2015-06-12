/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-respond',
  contentFor: function(type, config) {
    if (type === 'head-footer') {
        var output = '<script src="/ember-cli-respond/respond.min.js"></script>';
        if (config.respond.proxy === true) {
            output += '<link href="/ember-cli-respond/respond.proxy.gif" id="respond-redirect" rel="respond-redirect" />' +
            '<script src="/ember-cli-respond/respond.proxy.js"></script>';
        }
        return output;
    }
  }
};

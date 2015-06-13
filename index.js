/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-respond',
  contentFor: function(type, config) {
    if (type === 'head-footer') {
        var output = '<script src="' + config.respond.externalUrl + 'ember-cli-respond/respond.min.js"></script>';
        if (typeof config.respond !== 'undefined' && config.respond.proxy === true) {
            output += '<link href="' + config.respond.externalUrl + 'ember-cli-respond/respond-proxy.html" id="respond-proxy" rel="respond-proxy" />' +
            '<link href="/ember-cli-respond/respond.proxy.gif" id="respond-redirect" rel="respond-redirect" />' +
            '<script src="/ember-cli-respond/respond.proxy.js"></script>';
        }
        return output;
    }
  }
};

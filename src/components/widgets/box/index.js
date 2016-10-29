module.exports = angular.module('angular-lte.widgets.box', [])
    .component('lteBox', require('./box.component'))
    .component('lteBoxHeader', require('./header.component'))
    .component('lteBoxToolBadge', require('./boxToolBadge.component'))
    .component('lteBoxToolButton', require('./boxToolButton.component'));
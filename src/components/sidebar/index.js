module.exports = angular.module('angular-lte.sidebar', [])
    .component('lteSidebar', require('./sidebar.component'))
    .service('AngularLTESidebar', require('./sidebar.service'));
import './components/app';
import './components/sidebar';
import './components/widgets';
import './components/uiElements';

module.exports = angular.module('angular-lte', [
    'angular-lte.app',
    'angular-lte.sidebar',
    'angular-lte.uiElements',
    'angular-lte.widgets'
]);
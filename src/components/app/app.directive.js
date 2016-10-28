module.exports = function (AngularLTESidebar) {
    return {
        restrict: 'A',
        scope: {
            lteApp: '='
        },
        link: function (scope, element, attr) {
            if (angular.isObject(scope.lteApp)) {
                AngularLTESidebar.init(scope.lteApp);
            };

            function swapClasses(element, prefix, oldClass, newClass) {
                element.removeClass(prefix + oldClass);
                element.addClass(prefix + newClass);
            }
            scope.$watch(function () {
                return AngularLTESidebar.getConfig();
            }, function (newConfig, oldConfig) {
                swapClasses(element, 'sidebar-', oldConfig.sidebar, newConfig.sidebar);
                swapClasses(element, 'skin-', oldConfig.skin, newConfig.skin);

                if (newConfig.collapse) {
                    element.addClass('sidebar-collapse');
                } else {
                    element.removeClass('sidebar-collapse');
                }
            }, true);
        }
    }
}
module.exports = {
    template: `
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs" ng-class="$ctrl.orientation">
                    <li ng-repeat="tab in $ctrl.tabs" ng-class="{active: tab.active}" ng-class="tab.type">
                        <a href="#tab_{{index}}" ng-click="$ctrl.select(tab)">{{tab.label}}</a>
                    </li>
                    <li class="header" ng-class="$ctrl.headerOrientation">
                        <i class="fa fa-th"></i>
                        {{$ctrl.header}}
                    </li>
                </ul>
                <div class="tab-content" ng-transclude></div>
            </div>
        `,
    transclude: true,
    bindings: {
        header: "@",
        headerOrientation: "@",
        icon: "@",
        orientation: "@"
    },
    controller: function () {
        this.tabs = [];

        this.$postLink = () => {
            let active_found = false;
            // Ensure that only one tab is active when initializing
            // If more than one is active, unactive all the others
            angular.forEach(this.tabs, (tab) => {
                if (active_found) {
                    tab.active = false;
                } else if (tab.active) {
                    active_found = true;
                }
            })
        }
        this.select = (tab) => {
            angular.forEach(this.tabs, (tab) => {
                tab.active = false;
            });

            tab.active = true;
        }

        this.addTab = (tab) => {
            this.tabs.push(tab);
        }
    }
}
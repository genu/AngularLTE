module.exports = {
    template: `
        <div class="tab-content">
            <div class="tab-pane" ng-class="{active: $ctrl.config.active}" ng-transclude></div>
        </div>
    `,
    require: {
        tabsCtrl: '^lteTabs'
    },
    transclude: true,
    bindings: {
        active: "@",
        label: "@",
        onEnter: "&",
        onLeave: "&"
    },
    controller: function ($scope) {
        this.config = {};

        this.$onInit = () => {
            this.config = {
                type: 'tab',
                label: this.label,
                active: this.active
            }
            this.tabsCtrl.addTab(this.config);
        }
    },
}
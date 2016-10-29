module.exports = {
    template: `
        <button type="button" class="btn btn-box-tool" ng-click="$ctrl.onClick()">
            <i class="fa" ng-class="$ctrl.icon"></i>
        </button>
    `,
    require: {
        boxCtrl: '^lteBox'
    },
    bindings: {
        icon: '@',
        onClick: '&'
    }
}
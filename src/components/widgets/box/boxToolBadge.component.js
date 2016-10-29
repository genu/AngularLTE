module.exports = {
    template: `
        <span class="badge" ng-class="$ctrl.bg">{{$ctrl.label}}</span>
    `,
    require: {
        boxCtrl: '^lteBox'
    },
    bindings: {
        bg: '@',
        label: '@'
    }
}
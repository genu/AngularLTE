export default {
    template: `
        <div class="box-header"
            ng-class="{'with-border': $ctrl.border}">
            <h3 class="box-title">{{$ctrl.parentTitle}}
            <div class="box-tools pull-right" ng-translude></div>
        </header>
    `,
    require: 'lteBox',
    translude: true,
    bindings: {
        border: "@"
    }
}
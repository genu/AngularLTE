export default = {
    template: `
        <div class="small-box" ng-class="$ctrl.bg">
            <div class="inner" ng-transclude></div>
            <div class="icon" ng-if="$ctrl.icon">
                <i class="fa" ng-class="$ctrl.icon"></i>
            </div>
            <a href="#" class="small-box-footer" ng-click="">
                {{$ctrl.footerLabel}}
                <i class="fa fa-arrow-circle-right"></i>
            </a>
        </div>
    `,
    bindings: {
        bg: "@",
        icon: "@",
        footerLabel: "@",
        footerClick: "&"
    },
    controller: function () {

    }
}
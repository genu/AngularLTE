export default {
    //@TODO hide icon if there is no icon
    template: `
        <div class="info-box" ng-class="$ctrl.bg">
            <span class="info-box-icon">
                <i class="fa" ng-class="$ctrl.icon"></i>
            </span>
            <div class="info-box-content">
                <span class="info-box-text">{{$ctrl.text}}</span>
                <span class="info-box-number">{{$ctrl.number}}</span>
                <div ng-transclude></div>
            </div>
        </div>
    `,
    bindings: {
        icon: "@",
        bg: "@",
        text: "@",
        number: "@"
    }
}
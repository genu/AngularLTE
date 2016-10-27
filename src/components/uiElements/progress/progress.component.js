module.exports = {
    //@TODO Embedding expressions in class attribute is bad practice
    template: `
        <div class="progress progress-bar-{{$ctrl.size}}"
            ng-class="{vertical: $ctrl.vertical, active: $ctrl.active}">
            <div class="progress-bar progress-bar-{{$ctrl.color}}"
                ng-class="{'progress-bar-striped': $ctrl.striped}"
                ng-style="{width: $ctrl.progress}">            
            </div>            
        </div>
        <span class="progress-description" ng-transclude></span>
    `,
    transclude: true,
    bindings: {
        striped: "@",
        color: '@',
        progress: "<",
        size: "@",
        vertical: "@",
        active: "<",
        onComplete: "&",
        onStart: "&"
    },
    controller: function () {

    }
}
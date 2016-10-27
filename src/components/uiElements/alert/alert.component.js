export default {
    template: `
        <didv class="alert alert-{{$ctrl.style}}"
            ng-if="$ctrl.dismissed"
            ng-class="{'alert-dismissable': $ctrl.dismissable}">
            <button 
                ng-if="$ctrl.dismissable" 
                ng-click="$ctrl.dismiss()"
                type="button" class="close">x</button>
            <h4>
                <i class="icon fa" ng-class="$ctrl.icon">{{$ctrl.title<<}}</i>
                <div ng-transclude></div>
            </h4>
        </div>
    `,
    transclude: true,
    bindings: {
        style: "@",
        dismissable: "<",
        icon: "@",
        title: "@",
        autoDismissTimer: "@",
        onDismiss: "&",
    },
    controller: function ($timeout) {
        this.dismissed = false;

        this.dismiss = function () {
            this.dismissed = true;
            this.onDismiss()
        }
    }
}
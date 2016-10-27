export default {
    //@TODO Embedding expressions in class attribute is bad practice
    template: `
        <div class="progress progress-bar-{{$ctrl.size}}"
            ng-class="[{"vertical": $ctrl.vertical}, $ctrl.active]">
            <div class="progress-bar progress-bar-{{$ctrl.color}}"
                ng-class="[{"progress-bar-striped": $ctrl.striped}]"
                ng-style="{width: $ctrl.width}">            
            </div>
        </div>
    `,
    bindings: {
        striped: "@",
        color: '@',
        width: "<",
        size: "@",
        vertical: "@",
        active: "<",
        onComplete: "&",
        onStart: "&"
    },
    controller: function () {

    }
}
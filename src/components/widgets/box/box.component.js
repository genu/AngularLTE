export default {
    template: `
        <div class="box" 
            ng-class="[{'box-solid': $ctrl.solid}, $ctrl.boxStyle]"
            ng-transclude>
            <div ng-if="$ctrl.asyncPending" class="overlay"></div>
        </div>
    `,
    transclude: true,
    bindings: {
        boxStyle: "@",
        title: "@",
        async: "<",
        solid: "@"
    },
    controller: function () {
        this.asyncPending = false;

        this.$onInit = () => {
            this.async.then(() => {
                this.asyncPending = false;
            })
        }
    }
}
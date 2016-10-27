module.exports = {
    template: `
        <div class="box" 
            ng-class="[{'box-solid': $ctrl.solid}, $ctrl.boxStyle]">
            <div ng-transclude></div>
            <div ng-if="$ctrl.asyncPending" class="overlay">
                <i class="fa fa-refresh fa-spin"></i>
            </div>
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
        this.$onInit = () => {
            if (typeof this.async !== 'undefined') {
                this.asyncPending = true;
                this.async.then(() => {
                    this.asyncPending = false;
                })
            }
        }
    }
}
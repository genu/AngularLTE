module.exports = {
    template: `
        <div class="box-header"
            ng-class="{'with-border': $ctrl.border}">
            <h3 class="box-title">{{$ctrl.title}}</h3>
            <div class="box-tools pull-right" ng-transclude></div>
        </header>
    `,
    require: {
        boxCtrl: '^lteBox'
    },
    transclude: true,
    bindings: {
        border: "@"
    },
    controller: function () {
        this.$onInit = () => {
            this.title = this.boxCtrl.title;
        }
    }
}
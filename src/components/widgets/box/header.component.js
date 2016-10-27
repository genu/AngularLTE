module.exports = {
    template: `
        <div class="box-header"
            ng-class="{'with-border': $ctrl.border}">
            <h3 class="box-title">{{$ctrl.title}}
            <div class="box-tools pull-right" ng-translude></div>
        </header>
    `,
    require: {
        boxCtrl: '^lteBox'
    },
    translude: true,
    bindings: {
        border: "@"
    },
    controller: function () {
        this.$onInit = () => {
            this.title = this.boxCtrl.title;
        }
    }
}
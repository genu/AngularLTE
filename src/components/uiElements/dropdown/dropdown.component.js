export default {
    template: `
        <div class="btn-group" ng-class="{open: $ctrl.isOpen}">
            <button class="btn btn-{{$ctrl.style}} dropdown-toggle">
                <span class="caret"></span>
                <ul class="dropdown-menu" ng-transclude></ul>
            </button>
        </div>
    `,
    bimdings: {
        isOpen: "<"
    }
}
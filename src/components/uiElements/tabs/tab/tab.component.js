export default {
    template: `
        <li ng-class="$ctrl.active">
            <a href="#">{{$ctrl.label}}
        </li>
    `,
    require: 'lteTabs',
    bindings: {
        label: "@",
        active: "<",
        onEnter: "&",
        onLeave: "&"
    },
    controller: function () {

    }
}
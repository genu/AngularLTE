export default {
    template: `
        <div class="callout callout-{{$ctrl.style}}>
            <h4>{{$ctrl.title}}</h4>
            <p ng-transclude></p>
        </div>
    `,
    transclude: true,
    bindings: {
        style: "@",
        title: "@"
    }
}
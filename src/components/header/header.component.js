export default {
    template: `
    <header class="mini-header">
        <a href="" class="logo">
            <span lass="logo-mini">
                <b>A</b>LTE
            </span>
            <span class="logo-lg">
                <b>Admin</b>LTE
            </span>
        </a>
        <nav class="navbar navbar-static-top">
        </nav>
    </header>
    `,
    transclude: true,
    bindings: {
        headerLabel: '@'
    }
}
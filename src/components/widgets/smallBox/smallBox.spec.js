describe('Component: Small Box', function () {
    let $componentController;

    beforeEach(module('angular-lte'));

    beforeEach(inject(function (_$componentController_) {
        $compile = _$componentController_;
    }))

    it('should call the `footerClick` binding', function () {
        var footerClickSpy, bindings, ctrl;

        footerClickSpy = jasmine.createSpy('footerClick');
        bindings = {
            onFooterClick: footerClickSpy
        }
        ctrl = $componentController('lte-small-box', null, bindings);

        ctrl.footerClick();
        expect(footerClickSpy).toHaveBeenCalled();
    })
})
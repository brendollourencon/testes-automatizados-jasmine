//verifica se o numero é menor
describe("Teste do toBeLessThan", function () {
    it('Deve demonstrar o us do toBleLessThan', function () {
        var PI = 3.1415;

        expect(3).toBeLessThan(PI);
        expect(3.5).not.toBeLessThan(PI);
    });
});

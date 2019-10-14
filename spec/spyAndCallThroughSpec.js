describe("Testes do objeto spy toHaveCallThrough", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora, "subtrair");
    });

    it('Deve executar o metodo somar original', function () {
        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(2, 1)).toBeUndefined();
    });
});

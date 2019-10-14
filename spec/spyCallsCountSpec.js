describe("Suite de testes de spy", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValue(10)
    });

    it("deve demonstrar o uso de calls.count", function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });
});

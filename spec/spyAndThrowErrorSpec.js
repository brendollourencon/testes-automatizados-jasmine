describe("Testes do objeto spy callFake", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.throwError("Mensagem de erro");
    });

    it('deve lancar um erro ao somar', function () {
        expect(function () {
            Calculadora.somar(1, 1)
        }).toThrowError("Mensagem de erro");
    });

});

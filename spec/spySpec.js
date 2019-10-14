describe("Testes do objeto spy", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it('deve possuir o metodo somar como nao definido', function () {
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });

});

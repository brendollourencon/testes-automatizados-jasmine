describe("Testes do objeto spy returnValues", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar").and.returnValues(1, 5);
        spyOn(Calculadora, "subtrair");
    });


    it('Deve retornar valores distintos para o método somar', function () {
        expect(Calculadora.somar(3, 4)).toEqual(1);
        expect(Calculadora.somar(1, 5)).toEqual(5);
        expect(Calculadora.somar(4, 4)).toBeUndefined();
    });

});

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
        spyOn(Calculadora, "somar").and.callFake(function (n1, n2) {
            return n1 * n2;
        });
    });


    it('Deve transformar o metodo somar em multiplicacao', function () {
        expect(Calculadora.somar(5, 2)).toEqual(10);
    });

});

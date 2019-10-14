describe("Testes do objeto spy toHaveBeenCalled", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it('deve chamar o metodo somar ao menos uma vez', function () {
        expect(Calculadora.somar).not.toHaveBeenCalled();
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });

});

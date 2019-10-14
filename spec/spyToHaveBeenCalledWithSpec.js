describe("Testes do objeto spy toHaveBeenCalledWith", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function () {
        spyOn(Calculadora, "somar");
    });

    it('deve chamar o metodo somar com os parametros validos', function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);

        expect(Calculadora.somar).toHaveBeenCalledWith(1, 1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
    });
});

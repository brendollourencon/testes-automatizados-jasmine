describe("Teste do Fail", function () {
    it("Deve demonstrar o uso do fail", function () {

        var operacao = function (executar, callback) {
            if (executar) {
                callback();
            }
        };

        operacao(false, function () {
            fail("Nao deve executar a funcao de callback");
        })

    });
});

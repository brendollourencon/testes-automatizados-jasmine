// cai todas as vezes de cada teste
xdescribe("Teste do afterEach", function () {

    var contador = 0;

    //cai nesa funcao antes de cada teste
    beforeEach(function () {
        contador++;
    });

    //cai nessa funcao depois de cada teste
    afterEach(function () {
        contador = 0;
    });

    it('Deve garantir o valor 1 para o contador', function () {
        expect(contador).toEqual(1);
    });

    it('Deve ainda garantir o contador com o valor 1', function () {
        expect(contador).toEqual(1);
    });
});

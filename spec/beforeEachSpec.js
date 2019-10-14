//roda todas as vezes antes de cadas teste
xdescribe("Teste do beforeEach", function () {

    var contador = 0;

    //toda vez que cair em expect entrara nesse ciclo
    beforeEach(function () {
        contador++;
    });

    it('Deve incrementar o contador para 1', function () {
        expect(contador).toEqual(1);
    });

    it('Deve incrementar o contador para 2', function () {
        expect(contador).toEqual(2);
    });

});

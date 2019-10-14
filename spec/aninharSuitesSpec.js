xdescribe("Suite externa", function () {
    var contadorExterno = 0;

    beforeEach(function () {
        contadorExterno++;
    });

    it('Deve conter um para contador exerno', function () {
        expect(contadorExterno).toEqual(1);
    });

    describe("Suite  interna", function () {

        var contadorInterno = 0;

        beforeEach(function () {
            contadorInterno++;
        });

        it('Deve validar o valor dos contadores', function () {
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        });
    });
});

describe("Testes do objeto jasmine.createSpy", function () {

    var somar;

    beforeAll(function () {
        somar = jasmine.createSpy("somar");
    });

    it('deve demonstar o uso do jasmine.createSpy', function () {
        somar(1, 2);

        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1, 2);

    });

});

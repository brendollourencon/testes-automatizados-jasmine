describe("Comparador toBe", function () {
    it('deve validar o uso do toBe', function () {
        var obj1 = {valor: true};
        var obj2 = {valor: true};

        expect(true).toBe(true);
        expect("Teste").toBe("Teste");
        expect(obj1.valor).toBe(obj2.valor);
        expect(obj1).not.toBe(obj2);
    });
});

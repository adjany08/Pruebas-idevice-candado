const EncryptDecrypt = {
    /**
     * Cifra una cadena utilizando el algoritmo XOR con una clave fija.
     * @param {string} str - La cadena a cifrar.
     * @returns {string} - La cadena cifrada, codificada usando escape.
     */
    Encrypt: function (str) {
        if (!str) str = "";
        str = (str == "undefined" || str == "null") ? "" : str;
        try {
            var key = 146;
            var pos = 0;
            var ostr = '';
            while (pos < str.length) {
                ostr = ostr + String.fromCharCode(str.charCodeAt(pos) ^ key);
                pos += 1;
            }
            return escape(ostr);
        } catch (ex) {
            return '';
        }
    },

    /**
     * Descifra una cadena previamente cifrada con el método Encrypt.
     * @param {string} str - La cadena a descifrar.
     * @returns {string} - La cadena descifrada.
     */
    Decrypt: function (str) {
        if (!str) str = "";
        str = (str == "undefined" || str == "null") ? "" : str;
        str = unescape(str);
        try {
            var key = 146;
            var pos = 0;
            var ostr = '';
            while (pos < str.length) {
                ostr = ostr + String.fromCharCode(key ^ str.charCodeAt(pos));
                pos += 1;
            }
            return ostr;
        } catch (ex) {
            return '';
        }
    }
}

describe('Pruebas exhaustivas de EncryptDecrypt', () => {

    // 1. Cifrar y descifrar una cadena normal
    test('Cifrar y descifrar una cadena normal', () => {
        const str = 'Test String';
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });

    // 2. Cifrar y descifrar una cadena con espacios
    test('Cifrar y descifrar una cadena con espacios', () => {
        const str = 'Hello World';
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });

    // 3. Cifrar y descifrar una cadena numérica
    test('Cifrar y descifrar una cadena numérica', () => {
        const str = '1234567890';
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });

    // 4. Cifrar y descifrar una cadena alfanumérica
    test('Cifrar y descifrar una cadena alfanumérica', () => {
        const str = 'abc123XYZ!';
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });

    // 5. Cifrar y descifrar caracteres especiales
    test('Cifrar y descifrar caracteres especiales', () => {
        const str = '!@#$%^&*()_+[]{}|;:\'",.<>?';
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });

    // 8. Cifrar y descifrar un string vacío
    test('Cifrar y descifrar una cadena vacía', () => {
        const str = '';
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(encrypted).toBe('');  // El cifrado de una cadena vacía debe ser vacío
        expect(decrypted).toBe('');  // El descifrado de una cadena vacía debe ser vacío
    });

    // 9. Cifrar y descifrar valor null
    test('Cifrar y descifrar valor null', () => {
        const str = null;
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(''); // Un valor null debe ser manejado como una cadena vacía
    });

    // 10. Cifrar y descifrar valor undefined
    test('Cifrar y descifrar valor undefined', () => {
        const str = undefined;
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(''); // Un valor undefined debe ser manejado como una cadena vacía
    });

    // 11. Cifrar y descifrar un string que contiene solo caracteres de control
    test('Cifrar y descifrar un string con caracteres de control', () => {
        const str = '\n\t\r\x0b\x0c'; // caracteres de control
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });

    // 12. Verificar que el cifrado sea diferente del texto original
    test('Verificar que el cifrado sea diferente del texto original', () => {
        const str = 'This is a test';
        const encrypted = EncryptDecrypt.Encrypt(str);
        expect(encrypted).not.toBe(str); // El texto cifrado debe ser diferente del original
    }); // Cierre del test 12

    // 13. Cifrar y descifrar una cadena que contiene solo un carácter
    test('Cifrar y descifrar una cadena con un solo carácter', () => {
        const str = 'A'; // un solo carácter
        const encrypted = EncryptDecrypt.Encrypt(str);
        const decrypted = EncryptDecrypt.Decrypt(encrypted);
        expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });
    // 15. Cifrar y descifrar un string con caracteres de diferentes idiomas
    test('Cifrar y descifrar un string con caracteres de diferentes idiomas', () => {
            const str = '你好, Привет, Hello'; // caracteres en chino y ruso
            const encrypted = EncryptDecrypt.Encrypt(str);
            const decrypted = EncryptDecrypt.Decrypt(encrypted);
            expect(decrypted).toBe(str); // El texto descifrado debe coincidir con el original
    });

});

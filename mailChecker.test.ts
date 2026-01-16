import { isValidEmail } from "./mailChecker";

describe("Testing isValidEmail function", () => {

    test('Error : No @', () => {
        expect(isValidEmail('ivanvinci.be')).toBe(false);
    });
    test('Error: No dot in domaine', () => {
        expect(isValidEmail('ivan@vincibe')).toBe(false);
    });
    test('Error : Dot as last character', () => {
        expect(isValidEmail('ivan@vinci.')).toBe(false);
    });
    test('Error : space error', () => {
        expect(isValidEmail('iv an@vinci.be')).toBe(false);
    });
    test('Error : Nothing before or after the @', () => {
        expect(isValidEmail('@vinci.be')).toBe(false);
        expect(isValidEmail('ivan@')).toBe(false); 
    });
    test('Valid Email test@vinci.be', () => {
        expect(isValidEmail('ivan@vinci.be')).toBe(true);
    });
});
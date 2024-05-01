import { RunLengthEncoding } from './run-length-encoding'; // Adjust the import path as necessary

describe('RunLengthEncoding', () => {
    describe('encode', () => {
        it('should encode a simple string', () => {
            expect(RunLengthEncoding.encode("AAAABBBCCDAA")).toBe("4A3B2C1D2A");
        });

        it('should encode an empty string as an empty string', () => {
            expect(RunLengthEncoding.encode("")).toBe("");
        });

        it('should encode a string with single characters', () => {
            expect(RunLengthEncoding.encode("ABCD")).toBe("1A1B1C1D");
        });

        it('should handle single repeated character', () => {
            expect(RunLengthEncoding.encode("AAAA")).toBe("4A");
        });
    });

    describe('decode', () => {
        it('should decode a simple encoded string', () => {
            expect(RunLengthEncoding.decode("4A3B2C1D2A")).toBe("AAAABBBCCDAA");
        });

        it('should decode an encoded string with single characters', () => {
            expect(RunLengthEncoding.decode("1A1B1C1D")).toBe("ABCD");
        });

        it('should return an empty string when decoding an empty string', () => {
            expect(RunLengthEncoding.decode("")).toBe("");
        });

        it('should handle decoding of a single repeated character', () => {
            expect(RunLengthEncoding.decode("4A")).toBe("AAAA");
        });
    });

    describe('encode and decode', () => {
        it('should return the original string when encoded and then decoded', () => {
            const original = "AAAABBBCCDAA";
            const encoded = RunLengthEncoding.encode(original);
            const decoded = RunLengthEncoding.decode(encoded);
            expect(decoded).toBe(original);
        });

        it('should handle complex patterns', () => {
            const original = "AABBBCCCCDDDEEEFGG";
            const encoded = RunLengthEncoding.encode(original);
            const decoded = RunLengthEncoding.decode(encoded);
            expect(decoded).toBe(original);
        });
    });
});

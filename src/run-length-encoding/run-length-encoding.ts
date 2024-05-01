export class RunLengthEncoding {
    // Method to encode a string using run-length encoding
    static encode(input: string): string {
        let encoded = '';
        let count = 1;

        for (let i = 1; i <= input.length; i++) {
            if (input[i] === input[i - 1]) {
                count++;
            } else {
                encoded += count + input[i - 1];
                count = 1;
            }
        }

        return encoded;
    }

    // Method to decode a run-length encoded string
    static decode(encoded: string): string {
        let decoded = '';
        let number = '';

        for (let char of encoded) {
            if (isNaN(parseInt(char))) {
                decoded += char.repeat(parseInt(number));
                number = '';
            } else {
                number += char;
            }
        }

        return decoded;
    }
}

module.exports = {
    transform: {
        '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin'
    },
    testEnvironment: 'node',
    preset: 'ts-jest',
    bail: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
    ],
    coverageDirectory: './coverage',
    coverageReporters: [
        'text',
        'lcov'
    ],
    testMatch: [
        '**/src/**/*.test.ts',
        '**/src/**/*.spec.ts'
    ]
};

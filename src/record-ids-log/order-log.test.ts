import { OrderLog } from './order-log';

describe('OrderLog', () => {
    let orderLog: OrderLog;

    beforeEach(() => {
        orderLog = new OrderLog(5); // Create a log that can hold 5 orders
    });

    xtest('should record orders correctly', () => {
        orderLog.record(100);
        orderLog.record(101);
        expect(orderLog.get_last(1)).toBe(100);
        expect(orderLog.get_last(2)).toBe(101);
        expect(orderLog.get_last(3)).toBeUndefined(); // as only one record has been added
    });

    test('should wrap around correctly when capacity is exceeded', () => {
        orderLog.record(100);
        orderLog.record(101);
        orderLog.record(102);
        orderLog.record(103);
        orderLog.record(104);
        orderLog.record(105); // This should overwrite the first order (100)
        expect(orderLog.get_last(5)).toBe(104);
        expect(orderLog.get_last(1)).toBe(105);
    });
});

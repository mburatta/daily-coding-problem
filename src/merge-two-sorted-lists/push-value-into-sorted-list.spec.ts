import {ListNode, mergeTwoLists} from "./merge-two-sorted-lists";
import {pushValue} from "./push-value-into-sorted-list";

describe('Merge two sorted list', () => {

    it('Input: value = 2, list = [-9,-6,-3,-1,1,6]. Output: [-9,-6,-3,-2,-1,1,6]', () => {

        const value = -2;

        const listNode6 = new ListNode(6)
        const listNode5 = new ListNode(1,listNode6)
        const listNode4 = new ListNode(-1,listNode5)
        const listNode3 = new ListNode(-3,listNode4)
        const listNode2 = new ListNode(-6,listNode3)
        const list = new ListNode(-9, listNode2)

        const resultNode7 = new ListNode(6)
        const resultNode6 = new ListNode(1,resultNode7)
        const resultNode5 = new ListNode(-1,resultNode6)
        const resultNode4 = new ListNode(-2,resultNode5)
        const resultNode3 = new ListNode(-3,resultNode4)
        const resultNode2 = new ListNode(-6,resultNode3)
        const result = new ListNode(-9, resultNode2)

        expect(pushValue(value, list)).toStrictEqual(result);
    });

});

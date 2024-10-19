import {isParenthesesValid} from "../valid-parentheses/valid-parentheses";
import {ListNode, mergeTwoLists} from "./merge-two-sorted-lists";

describe('Merge two sorted list', () => {

    it('Input: list1 = [1,2,4], list2 = [1,3,4] Output:  [1,1,2,3,4,4]', () => {

        const list1ThirdNode = new ListNode(4)
        const list1SecondNode = new ListNode(2, list1ThirdNode)
        const list1 = new ListNode(1, list1SecondNode)

        const list2ThirdNode = new ListNode(4)
        const list2SecondNode = new ListNode(3, list2ThirdNode)
        const list2 = new ListNode(1, list2SecondNode)

        const resultNode6 = new ListNode(4)
        const resultNode5 = new ListNode(4, resultNode6)
        const resultNode4 = new ListNode(3, resultNode5)
        const resultNode3 = new ListNode(2, resultNode4)
        const resultNode2 = new ListNode(1, resultNode3)
        const result = new ListNode(1, resultNode2)

        expect(mergeTwoLists(list1, list2)).toStrictEqual(result);
    });

    it('Input: list1 = [1,2,4], list2 = [1,3] Output:  [1,1,2,3,4]', () => {

        const list1ThirdNode = new ListNode(4)
        const list1SecondNode = new ListNode(2, list1ThirdNode)
        const list1 = new ListNode(1, list1SecondNode)

        const list2Node2 = new ListNode(3)
        const list2 = new ListNode(1, list2Node2)

        const resultNode5 = new ListNode(4)
        const resultNode4 = new ListNode(3, resultNode5)
        const resultNode3 = new ListNode(2, resultNode4)
        const resultNode2 = new ListNode(1, resultNode3)
        const result = new ListNode(1, resultNode2)

        expect(mergeTwoLists(list1, list2)).toStrictEqual(result);
    });

    it('Input: list1 = [], list2 = [] Output:  []', () => {

        expect(mergeTwoLists(null, null)).toStrictEqual(null);
    });

    it('Input: list1 = [], list2 = [0] Output:  [0]', () => {

        const list2 = new ListNode(0)

        expect(mergeTwoLists(null, list2)).toStrictEqual(list2);
    });

    it('Input: list1 = [2], list2 = [] Output:  [2]', () => {

        const list1 = new ListNode(2)
        const list2 = null

        expect(mergeTwoLists(list1, list2)).toStrictEqual(list1);
    });

    it('Input: list1 = [-9,3], list2 = [5,7] Output:  [-9,3,5,7]', () => {

        const list1SecondNode = new ListNode(3,)
        const list1 = new ListNode(-9, list1SecondNode)

        const list2Node2 = new ListNode(7)
        const list2 = new ListNode(5, list2Node2)

        const resultNode4 = new ListNode(7)
        const resultNode3 = new ListNode(5, resultNode4)
        const resultNode2 = new ListNode(3, resultNode3)
        const result = new ListNode(-9, resultNode2)

        expect(mergeTwoLists(list1, list2)).toStrictEqual(result);
    });

    it('Input: list1 = [5,7], list2 = [-9,3] Output:  [-9,3,5,7]', () => {

        const list1SecondNode = new ListNode(3,)
        const list1 = new ListNode(-9, list1SecondNode)

        const list2Node2 = new ListNode(7)
        const list2 = new ListNode(5, list2Node2)

        const resultNode4 = new ListNode(7)
        const resultNode3 = new ListNode(5, resultNode4)
        const resultNode2 = new ListNode(3, resultNode3)
        const result = new ListNode(-9, resultNode2)

        expect(mergeTwoLists(list2, list1)).toStrictEqual(result);
    });

    it('Input: list1 = [-10,-10,-9,-4,1,6,6], list2 = [-7] Output:  [-10,-10,-9,-7,-4,1,6,6]', () => {


        const list1Node7 = new ListNode(6)
        const list1Node6 = new ListNode(6,list1Node7)
        const list1Node5 = new ListNode(1,list1Node6)
        const list1Node4 = new ListNode(-4,list1Node5)
        const list1Node3 = new ListNode(-9,list1Node4)
        const list1Node2 = new ListNode(-10,list1Node3)
        const list1 = new ListNode(-10, list1Node2)

        const list2 = new ListNode(-7)

        const resultNode8 = new ListNode(6)
        const resultNode7 = new ListNode(6,resultNode8)
        const resultNode6 = new ListNode(1,resultNode7)
        const resultNode5 = new ListNode(-4,resultNode6)
        const resultNode4 = new ListNode(-7,resultNode5)
        const resultNode3 = new ListNode(-9,resultNode4)
        const resultNode2 = new ListNode(-10,resultNode3)
        const result = new ListNode(-10, resultNode2)

        expect(mergeTwoLists(list2, list1)).toStrictEqual(result);
    });

    it('Input: list1 = [-2,5], list2 = [-9,-6,-3,-1,1,6] Output:  [-9,-6,-3,-2,-1,1,5,6]', () => {

        const list1Node2 = new ListNode(5)
        const list1 = new ListNode(1, list1Node2)

        const list2Node6 = new ListNode(6)
        const list2Node5 = new ListNode(-2,list2Node6)
        const list2Node4 = new ListNode(-1,list2Node5)
        const list2Node3 = new ListNode(-3,list2Node4)
        const list2Node2 = new ListNode(-6,list2Node3)
        const list2 = new ListNode(-9, list2Node2)

        const resultNode8 = new ListNode(6)
        const resultNode7 = new ListNode(5,resultNode8)
        const resultNode6 = new ListNode(1,resultNode7)
        const resultNode5 = new ListNode(-1,resultNode6)
        const resultNode4 = new ListNode(-2,resultNode5)
        const resultNode3 = new ListNode(-3,resultNode4)
        const resultNode2 = new ListNode(-6,resultNode3)
        const result = new ListNode(-9, resultNode2)

        expect(mergeTwoLists(list2, list1)).toStrictEqual(result);
    });

    it('Input: list1 = [-2,5], list2 = [-9,-6,-3,-1,1,6] Output:  [-9,-6,-3,-2,-1,1,5,6]', () => {

        const list1Node2 = new ListNode(5)
        const list1 = new ListNode(-2, list1Node2)

        const list2Node6 = new ListNode(6)
        const list2Node5 = new ListNode(1,list2Node6)
        const list2Node4 = new ListNode(-1,list2Node5)
        const list2Node3 = new ListNode(-3,list2Node4)
        const list2Node2 = new ListNode(-6,list2Node3)
        const list2 = new ListNode(-9, list2Node2)

        const resultNode8 = new ListNode(6)
        const resultNode7 = new ListNode(5,resultNode8)
        const resultNode6 = new ListNode(1,resultNode7)
        const resultNode5 = new ListNode(-1,resultNode6)
        const resultNode4 = new ListNode(-2,resultNode5)
        const resultNode3 = new ListNode(-3,resultNode4)
        const resultNode2 = new ListNode(-6,resultNode3)
        const result = new ListNode(-9, resultNode2)

        expect(mergeTwoLists(list2, list1)).toStrictEqual(result);
    });


});

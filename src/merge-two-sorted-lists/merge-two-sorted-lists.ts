import {pushValue} from "./push-value-into-sorted-list";

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if(list1 === null && list2 === null) {
        return null
    }

    if(list1 === null) {
        return list2
    }

    if(list2 === null) {
        return list1
    }

    if(list1.next === null && list2.next === null) {
        return mergeNodes(list1, list2)
    } else {

        const nextNodeList1 = (list1 as ListNode).next;
        const nextNodeList2 = (list2 as ListNode).next;

        if( nextNodeList1 !== null && nextNodeList2 !== null ) {
            const mergedList = mergeTwoLists(nextNodeList1, nextNodeList2) as ListNode;

            const val1 = (list1 as ListNode).val;
            const val2 = (list2 as ListNode).val;

            if (val1 <= val2) {
                // Insert val2 first
                list1.next = pushValue(val2, mergedList);
                return list1;
            } else {
                // Insert  val1 first
                list2.next = pushValue(val1, mergedList)
                return list2
            }
        } else if ( nextNodeList1 !== null && nextNodeList2 === null ) {

            const partiallyMergedList = mergeTwoLists(nextNodeList1, list2) as ListNode;
            return pushValue(list1.val, partiallyMergedList)

        } else {

            // nextNodeList1 === null && nextNodeList2 !== null
            const partiallyMergedList = mergeTwoLists(nextNodeList2, list1) as ListNode;
            return pushValue(list2.val, partiallyMergedList);

        }
    }
}

function mergeNodes(list1: ListNode, list2: ListNode): ListNode {
    if(list1.val <= list2.val) {
        list1.next = list2;
        return list1;
    } else {
        list2.next = list1;
        return list2;
    }
}

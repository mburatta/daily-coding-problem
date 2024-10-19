import {ListNode} from "./merge-two-sorted-lists";

export function pushValue(value: number, list: ListNode): ListNode {

    if(value < list.val) {
        return new ListNode(value, list);
    } else {
        if(list.next === null) {
            list.next = new ListNode(value);
            return list;
        } else {
            const sortedList = pushValue(value, list.next);
            return new ListNode(list.val, sortedList)
        }
    }
}


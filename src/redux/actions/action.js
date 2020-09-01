import {ADD, SUB,ADD2,SUB_Number,ADD_Number} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}
export function sub() {
    return {
        type: SUB
    }
}
export function AddNumber() {
    return {
        type: ADD_Number
    }
}
export function SubNumber() {
    return {
        type: SUB_Number
    }
}
export function add2(number) {
    return {
        type: ADD2,
        value: number
    }
}
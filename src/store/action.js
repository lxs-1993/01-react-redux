import { INCREMENT,DECREMENT } from "./constant";

export const createIncrementAction = num => ({
  type: INCREMENT,
  num
})
export const createDecrementAction = num => ({
  type: DECREMENT,
  num
})
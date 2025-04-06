//编写store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: 'food',
  initialState: {
    //商品列表
    foodsList: [],
    //菜单激活下标值
    activeIndex: 0,
  },
  reducers: {
    //更改商品列表
    setFoodList(state, action) {
      state.foodsList = action.payload
    },
    //更改菜单激活下标值activeIndex
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    }
  }
})

//异步获取部分
const {setFoodList,changeActiveIndex}=foodsStore.actions
const fetchFoodList = ()=>{
  return async(dispatch)=>{
    //编写异步逻辑
    const res = await axios.get('http://localhost:3004/takeaway')
    //调用dispatch函数提交action
    dispatch(setFoodList(res.data))
  }
}

export {fetchFoodList,changeActiveIndex}

const foodsReducer = foodsStore.reducer
export default foodsReducer
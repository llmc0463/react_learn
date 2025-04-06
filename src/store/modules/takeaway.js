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
    //购物车列表
    cartList: []
  },
  reducers: {
    //更改商品列表
    setFoodList(state, action) {
      state.foodsList = action.payload
    },
    //更改菜单激活下标值activeIndex
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    //添加购物车
    addCart(state,action){
      //是否添加过？以action.payload.id去cartList中匹配 匹配成功就添加过
      const item = state.cartList.find(item=>item.id === action.payload.id)
      if(item){
        //添加过，数量+1
        item.count++
      }else{
        state.cartList.push(action.payload)
      }
    },
    //删除商品列表中对应新增的一件商品
    delCart(state,action){
      //以action.payload.id去cartList中匹配 匹配成功就删除
      const item = state.cartList.find(item=>item.id === action.payload.id)
      if(item.count===1){
        //数量为1，直接删除
        state.cartList = state.cartList.filter(item=>item.id !== action.payload.id)
      }else{
        //数量不为1，数量-1
        if(item.count === 0) return
        item.count--
      }
    },
    //购物车中count增
    increCount(state,action){
      const item = state.cartList.find(item=>item.id === action.payload.id)
      item.count++
    },
    //购物车中count减
    decreCount(state,action){
      const item = state.cartList.find(item=>item.id === action.payload.id)
      if(item.count === 0) {
        // 当数量为0时，再点击‘减’从购物车列表中移除该商品
        state.cartList = state.cartList.filter(item => item.id !== action.payload.id)
        return
      }
      item.count--
    },
    //清空购物车
    clearCart(state){
      state.cartList = []
    }
  }
})

//异步获取部分
const {setFoodList,changeActiveIndex,addCart,delCart,increCount,decreCount,clearCart}=foodsStore.actions
const fetchFoodList = ()=>{
  return async(dispatch)=>{
    //编写异步逻辑
    const res = await axios.get('http://localhost:3004/takeaway')
    //调用dispatch函数提交action
    dispatch(setFoodList(res.data))
  }
}

export {fetchFoodList,changeActiveIndex,addCart,delCart,increCount,decreCount,clearCart}

const foodsReducer = foodsStore.reducer
export default foodsReducer
  //账单相关store
  import { createSlice } from "@reduxjs/toolkit";
  import axios from "axios";

  const billStore = createSlice({
    name: "bill",
	initialState:{
		billList:[]
	},
	reducers:{
		//同步修改方法
		setBillList(state,action){
			state.billList = action.payload;
		}
	}
  })

  //解构导出actionCreater函数
  const { setBillList } = billStore.actions;

  //异步修改方法
  const getBillList = ()=>{
	return async (dispatch)=>{
		//发送异步请求，获取数据
		const res = await axios.get('http://localhost:8888/ka')
		//获取数据后，调用同步修改方法reducer
		dispatch(setBillList(res.data))
	}
  }
  //导出actionCreater函数
  export { getBillList };


  //导出reducer
  const billReducer = billStore.reducer;
  //导出store实例
  export default billReducer;


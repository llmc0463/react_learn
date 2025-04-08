// const Month = ()=>{
//   return(
//     <div>我是Month</div>
//   )
// }
// export default Month

import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import React, { useState } from 'react'
import classNames from 'classnames'

	const Month = () => {
		//控制弹框的显示与隐藏
		const [dateVisible,setVisible]=useState(false)
		//点击确定按钮的回调
		const onConfirm =()=>{
			setVisible(false)
			//其他逻辑
		}
		return (
		<div className="monthlyBill">
			<NavBar className="nav" backArrow={false}>
			⽉度收⽀
			</NavBar>
			<div className="content">
				<div className="header">
					{/* 时间切换区域 */}
					<div className="date" onClick={()=>{setVisible(true)}}>
						<span className="text">
						2023 | 3⽉账单
						</span>
						{/* 思路根据当前弹框打开的状态控制expand类名是否存在 */}
						<span className={classNames('arrow',dateVisible && 'expand')}></span>
					</div>
					{/* 统计区域 */}
					<div className='twoLineOverview'>
						<div className="item">
							<span className="money">{100}</span>
							<span className="type">⽀出</span>
						</div>
						<div className="item">
							<span className="money">{200}</span>
							<span className="type">收⼊</span>
						</div>
						<div className="item">
							<span className="money">{200}</span>
							<span className="type">结余</span>
						</div>
					</div>
					{/* 时间选择器 */}
						<DatePicker
						className="kaDate"
						title="记账⽇期"
						precision="month"
						visible={dateVisible}
						onCancel={()=>{setVisible(false)}}
						onConfirm={onConfirm}
						onClose={()=>{setVisible(false)}}
						max={new Date()}
						/>
				</div>
			</div>
		</div >
 )
}
export default Month

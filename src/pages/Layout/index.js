import { Button} from 'antd-mobile'
import { Outlet } from "react-router-dom"
const Layout = ()=>{
    return(
      <div>
        <Outlet />
        我是layout
		{/*测试全局生效样式*/}
		<Button color="primary">测试全局</Button>
		{/*测试局部生效样式*/}
		<div className='purple'>
		<Button color="primary">测试局部</Button>
		</div>
      </div>
    )
}
export default Layout

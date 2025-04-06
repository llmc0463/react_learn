import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'

import './App.scss'
import { useDispatch,useSelector } from 'react-redux'
import { fetchFoodList } from './store/modules/takeaway'
import { useEffect } from'react'

// const foodsList = [
//   {
//     "tag": "318569657",
//     "name": "一人套餐",
//     "foods": [
//       {
//         "id": 8078956697,
//         "name": "烤羊肉串(10串)",
//         "like_ratio_desc": "好评度100%",
//         "month_saled": 40,
//         "unit": "10串",
//         "food_tag_list": ["点评网友推荐"],
//         "price": 90,
//         "picture": "/images/2025-04-05_21-58-09.png",
//         "description": "",
//         "tag": "318569657"
//       },
//       {
//         "id": 7384994864,
//         "name": "腊味煲仔饭",
//         "like_ratio_desc": "好评度81%",
//         "month_saled": 100,
//         "unit": "1人份",
//         "food_tag_list": [],
//         "price": 39,
//         "picture": "/images/2025-04-05_21-59-36.png",
//         "description": "",
//         "tag": "318569657"
//       },
//       {
//         "id": 2305772036,
//         "name": "鸡腿胡萝卜焖饭",
//         "like_ratio_desc": "好评度91%",
//         "month_saled": 300,
//         "unit": "1人份",
//         "food_tag_list": [],
//         "price": 34.32,
//         "picture": "/images/2025-04-05_22-00-24.png",
//         "description": "主料：大米、鸡腿、菜心、胡萝卜",
//         "tag": "318569657"
//       },
//       {
//         "id": 2233861812,
//         "name": "小份酸汤莜面鱼鱼+肉夹馍套餐",
//         "like_ratio_desc": "好评度73%",
//         "month_saled": 600,
//         "unit": "1人份",
//         "food_tag_list": ["“口味好,包装很好～点赞”"],
//         "price": 34.32,
//         "picture": "/images/2025-04-05_22-00-46.png",
//         "description": "酸汤莜面鱼鱼，主料：酸汤、莜面 肉夹馍，主料：白皮饼、猪肉",
//         "tag": "318569657"
//       }
//     ]
//   },
//   {
//     "tag": "82022594",
//     "name": "特色烧烤",
//     "foods": [
//       {
//         "id": 3823780596,
//         "name": "藤椒鸡肉串",
//         "like_ratio_desc": "",
//         "month_saled": 200,
//         "unit": "10串",
//         "food_tag_list": ["点评网友推荐"],
//         "price": 6,
//         "picture": "/images/jirou.png",
//         "description": "1串。藤椒味，主料：鸡肉",
//         "tag": "82022594"
//       },
//       {
//         "id": 6592009498,
//         "name": "烤羊排",
//         "like_ratio_desc": "",
//         "month_saled": 50,
//         "unit": "1人份",
//         "food_tag_list": [],
//         "price": 169,
//         "picture": "/images/yangpai.png",
//         "description": "6-8个月草原羔羊肋排，烤到皮脆肉香",
//         "tag": "82022594"
//       }
//     ]
//   },
//   {
//     "tag": "98147100",
//     "name": "杂粮主食",
//     "foods": [
//       {
//         "id": 4056954171,
//         "name": "五常稻花香米饭",
//         "like_ratio_desc": "",
//         "month_saled": 1000,
//         "unit": "约300克",
//         "food_tag_list": [],
//         "price": 5,
//         "picture": "/images/mifan.png",
//         "description": "浓浓的稻米清香，软糯Q弹有嚼劲",
//         "tag": "98147100"
//       },
//       {
//         "id": 740430262,
//         "name": "小米发糕(3个)",
//         "like_ratio_desc": "好评度100%",
//         "month_saled": 100,
//         "unit": "3块",
//         "food_tag_list": [],
//         "price": 13,
//         "picture": "/images/fagao.png",
//         "description": "柔软蓬松，葡萄干和蔓越莓酸甜适口",
//         "tag": "98147100"
//       },
//       {
//         "id": 7466390504,
//         "name": "沙枣玉米窝头(3个)",
//         "like_ratio_desc": "好评度100%",
//         "month_saled": 100,
//         "unit": "3个",
//         "food_tag_list": [],
//         "price": 13,
//         "picture": "/images/wotou.png",
//         "description": "",
//         "tag": "98147100"
//       }
//     ]
//   }
// ]

const App = () => {
  //触发action执行
  //1.useDispatch->dispatch  2.actionCreater导入进来  3.useEffect
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchFoodList())
  },[dispatch])

  //获取foodsList渲染数据列表
  const {foodsList,activeIndex} = useSelector(state => state.foods)
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map((item,index) => {
                return (
                 activeIndex === index && <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App

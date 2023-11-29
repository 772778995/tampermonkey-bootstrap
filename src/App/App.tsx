import { Drawer } from 'antd'
import FloatBtn from '../components/FloatBtn'
import packageJSON from '../../package.json'

const App = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  return (
    <>
      {/* 悬浮按钮 */}
      <FloatBtn _pos="top-30px right-30px" onClick={() => setIsOpenDrawer(true)}>
        <img
          src="https://img.wuhaochao.top/funny.png"
          _w="50px"
          _h="50px"
          _border="rounded-full"
          _cursor="pointer"
          _opacity="70"
          _hover="opacity-100"
          _transition="opacity duration-150"
          style={{ opacity: isOpenDrawer ? '0' : '' }}
        />
      </FloatBtn>

      {/* 抽屉内容 */}
      <Drawer title={packageJSON.name} open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}></Drawer>
    </>
  )
}

export default App

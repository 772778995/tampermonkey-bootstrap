import { message } from 'antd'
import { Drawer, Button } from 'antd'
import pkg from '~/package.json'
import FloatBtn from '../components/FloatBtn'

const copyAbcVal = () => {
  $('#source').select()
  document.execCommand('Copy')
  message.success('复制成功')
}

declare const changeStaffType: (a: null, b: 0 | 1 | 2) => any

const App = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  return (
    <>
      {/* 悬浮按钮 */}
      <FloatBtn _pos="top-30px right-30px" onClick={() => setIsShowDrawer(true)}>
        <img
          src="https://dev.midiplusedu.com/assets/music_score_editor/images/logo.svg"
          _w="50px"
          _h="50px"
          _border="rounded-full"
          _cursor="pointer"
          _opacity="70"
          _hover="opacity-100"
          _transition="opacity duration-150"
          draggable={false}
        />
      </FloatBtn>
      <Drawer
        zIndex={+'9'.repeat(10)}
        className={pkg.name}
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}>
        <div _flex="~ col" _space="y-10px">
          <Button onClick={copyAbcVal}>复制 abcVal</Button>
          <Button onClick={() => changeStaffType(null, 2)}>切换为简谱</Button>
          <Button onClick={() => changeStaffType(null, 0)}>切换为五线谱</Button>
          <Button onClick={() => changeStaffType(null, 1)}>切换为混谱</Button>
        </div>
      </Drawer>
    </>
  )
}

export default App

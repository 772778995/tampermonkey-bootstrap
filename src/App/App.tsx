import { message } from 'antd'
import { Drawer } from 'antd'
import FloatBtn from '../components/FloatBtn'

const copyAbcVal = () => {
  $('#source').select()
  document.execCommand('Copy')
  message.success('复制成功')
}

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
      <Drawer open={isShowDrawer}>
        <div onClick={copyAbcVal}>复制 abcVal</div>
      </Drawer>
    </>
  )
}

export default App

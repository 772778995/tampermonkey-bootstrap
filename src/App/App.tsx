import { message } from 'antd'
import FloatBtn from '../components/FloatBtn'

const copyAbcVal = () => {
  $('#source').select()
  document.execCommand('Copy')
  message.success('复制成功')
}

const App = () => {
  return (
    <>
      {/* 悬浮按钮 */}
      <FloatBtn _pos="top-30px right-30px" onClick={copyAbcVal}>
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
    </>
  )
}

export default App

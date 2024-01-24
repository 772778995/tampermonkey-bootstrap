import { message } from 'antd'
import { Drawer, Button, Input } from 'antd'
import pkg from '~/package.json'
import FloatBtn from '../components/FloatBtn'

declare let src_change: () => any
// declare const abc_change: () => any
declare const changeStaffType: (a: null, b: 0 | 1 | 2) => any

const getAbcVal = () => $('#source').val()

const copyAbcVal = () => {
  $('#source').select()
  document.execCommand('Copy')
  message.success('复制成功')
}

const App = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const [abcVal, _setAbcVal] = useState(getAbcVal())

  $(document).ready(() => {
    $('#source').on('change', function () {
      alert(1234)
      message.success('1234')
    })
  })
  const _src_change = src_change
  src_change = () => {
    _src_change()
    _setAbcVal(getAbcVal())
  }
  const setAbcVal = (v: string) => {
    _setAbcVal(v)
    $('#source').val(v)
    _src_change()
  }

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
        <div _flex="~ col" _h="full" _space="y-10px">
          <Button onClick={copyAbcVal}>复制 abcVal</Button>
          <Button onClick={() => changeStaffType(null, 2)}>切换为简谱</Button>
          <Button onClick={() => changeStaffType(null, 0)}>切换为五线谱</Button>
          <Button onClick={() => changeStaffType(null, 1)}>切换为混谱</Button>

          <Input.TextArea
            _m="!t-auto"
            rows={30}
            value={abcVal}
            onChange={(e) => setAbcVal(e.target.value)}></Input.TextArea>
        </div>
      </Drawer>
    </>
  )
}

export default App

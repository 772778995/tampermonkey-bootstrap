import { Dropdown } from 'antd'
import menuProps from './menuProps'

const App = () => {
  return (
    <>
      <Dropdown arrow menu={menuProps}>
        <div
          _pos="fixed top-50px right-30px"
          _p="b-10px"
          _text="40px"
          _cursor="pointer"
          _z="99999">
          🧰
        </div>
      </Dropdown>
    </>
  )
}

export default App

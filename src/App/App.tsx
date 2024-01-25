import { Drawer } from 'antd'
import pkg from '~/package.json'
import FloatBtn from '@/components/FloatBtn'
import { proxy } from 'ajax-hook'
import { unsafeWindow } from '@/utils/tampermonkey'
proxy(
  {
    //请求发起前进入
    onRequest: (config, handler) => {
      console.log(`
      config.url: ${config.url}
      config.method: ${config.method}
      config.body: ${config.body}
      config.headers: ${config.headers}
    `)
      handler.next(config)
    },
    //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
    onError: (err, handler) => {
      console.log(`
      err.type: ${err.type}
      err.config: ${err.config} 
    `)
      handler.next(err)
    },
    //请求成功后进入
    onResponse: (response, handler) => {
      console.log(`
      response.status: ${response.status}
      response.statusText: ${response.statusText}
      response.headers: ${response.headers}
      response.data: ${response.response}
    `)
      handler.next(response)
    }
  },
  unsafeWindow
)

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
          draggable={false}
          style={{ display: isOpenDrawer ? 'none' : 'block' }}
        />
      </FloatBtn>

      {/* 抽屉内容 */}
      <Drawer
        title={pkg.name}
        className={pkg.name}
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}></Drawer>
    </>
  )
}

export default App

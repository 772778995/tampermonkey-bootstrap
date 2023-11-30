import { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react'
import storage from '../utils/storage'

export type Offset = {
  x: number
  y: number
}

type Props = {
  /**
   * 容器样式
   * @default
   * { top: '30px', right: '30px' }
   */
  wrapStyle?: CSSProperties
  /**
   * 延迟拖拽的函数，如果按下和弹起之间的时间小于该数值，则触发 onClick 事件
   * @default
   * 150
   */
  delayTime?: number
  children?: ReactNode
  onClick?: MouseEventHandler
}

const FloatBtn: FC<Props> = ({
  wrapStyle = { top: '30px', right: '30px' },
  children,
  delayTime = 150,
  onClick
}) => {
  const [isShow, setIsShow] = useState(false)

  /** 坐标偏移量 */
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  /** 初始化坐标 */
  useEffect(() => {
    ;(async () => {
      const offset = await storage.getItem('offset') // 如果存在偏移量存储
      if (offset) setOffset(offset) // 设置坐标
      setIsShow(true)
    })()
  }, [])

  /** 开始拖拽的坐标 */
  const [startPoint, setStartPoint] = useState(null as null | Offset)
  let setStartPointTimer = -1 as any as NodeJS.Timeout

  /** 是否拖拽中 */
  const isDragging = useMemo(() => !!startPoint, [startPoint])

  return (
    <>
      {/* 定位容器 */}
      <div
        _pos="fixed"
        _z="99999"
        _w="auto"
        _active="opacity-50"
        _transition="opacity 150"
        style={{
          display: isShow ? 'block' : 'none',
          ...wrapStyle, // 容器样式
          transform: `translate(${offset.x}px, ${offset.y}px)` // 偏移位置
        }}
        // 按下容器时
        onMouseDown={(e) => {
          // 启动定时器，在 delayTime 之后设置拖拽起点
          setStartPointTimer = setTimeout(
            () => setStartPoint({ x: e.pageX - offset.x, y: e.pageY - offset.y }),
            delayTime
          )
        }}
        // 如果在 delayTime 时间内 onMouseUp 事件
        onMouseUp={(e) => {
          onClick && onClick(e) // 执行 onClick 事件
          clearTimeout(setStartPointTimer) // 清除设置拖拽起点定时器
        }}>
        {/* 插槽 */}
        {children}
      </div>

      {/* 拖拽遮罩层 */}
      {isDragging && (
        <div
          _pos="fixed top-0 left-0"
          _z="99999"
          _w="screen"
          _h="screen"
          _cursor="move"
          // 拖拽中
          onMouseMove={(e) => {
            if (!startPoint) return
            const x = e.pageX - startPoint.x
            const y = e.pageY - startPoint.y
            setOffset({ x, y })
            storage.setItem('offset', offset)
          }}
          // 结束拖拽
          onMouseUp={() => setStartPoint(null)}
        />
      )}
    </>
  )
}
export default FloatBtn

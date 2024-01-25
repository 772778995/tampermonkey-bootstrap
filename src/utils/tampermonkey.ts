/**
 * unsafeWindow 对象提供对页面 javascript 函数和变量的完全访问
 * - 开发时无法使用 unsafeWindow，使用 window 对象 替代
 */
const _unsafeWindow = typeof unsafeWindow === 'undefined' ? window : unsafeWindow
export { _unsafeWindow as unsafeWindow }

export type StorageMap = {
  /** 登录令牌 */
  token: 'your-token'
}

type SetValue = <K extends keyof StorageMap, V extends StorageMap[K]>(key: K, val: V) => void
/**
 * 设置本地存储'name'的值
 * - 开发时无法使用 GM_setValue，使用 localStorage.setItem 替代，所以不同域不共享储存的值
 */
const _GM_setValue = (typeof GM_setValue === 'undefined' ? localStorage.setItem : GM_setValue) as SetValue
export { _GM_setValue as GM_setValue }

type GetValue = <K extends keyof StorageMap>(key: K) => StorageMap[K]
/**
 * 获取本地存储'name'的值
 * - 开发时无法使用 GM_getValue，使用 localStorage.getItem 替代，所以不同域不共享储存的值
 */
const _GM_getValue = (typeof GM_getValue === 'undefined' ? localStorage.getItem : GM_getValue) as GetValue
export { _GM_getValue as GM_getValue }

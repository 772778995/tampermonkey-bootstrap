import { getLocalForage } from 'can-can-word-bug'
import packageJSON from '../../package.json'

/** 如果需要有有不同源的限制，用油猴的存储函数功能 */
export default getLocalForage<{
  test: string
}>({ name: packageJSON.name })

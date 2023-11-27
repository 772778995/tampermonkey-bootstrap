import { MenuProps as menuProps, message } from 'antd'

const menuProps: menuProps = {
  items: [
    {
      key: '测试一',
      label: '测试一',
      onClick: () => message.success('测试一')
    }
  ]
}

export default menuProps

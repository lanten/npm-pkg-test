import React from 'react'
import { Button } from 'antd'

interface Props {
  id?: number
}

declare interface State {
  count: number
  resData: {}
  loading: boolean
}

export class Test extends React.Component<Props, State> {
  // props 默认值
  static defaultProps = {
    id: 123,
  }

  // state 初始化
  state: State = {
    count: 1,
    resData: {},
    loading: false,
  }

  // 构造函数
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    console.log(this)
    this.queryData()
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <div className="panel">
          <p className="title-block">state count : {count}</p>

          <div className="mt-16">
            <Button
              type="primary"
              onClick={() => {
                this.setState({ count: count + 1 })
              }}
            >
              add
            </Button>
          </div>
        </div>
      </div>
    )
  }

  queryData() {
    // $api.order.queryOrderPage({}).then(res => {
    //   console.log(res)
    // })
  }
} // class Demo end

Markdown Preview Example
===

这里是一个示例

### 基本用法

```jsx mdx:preview:demo12
import ReactDOM from 'react-dom';
import { Button, Divider, Icon } from 'uiw';

export default function Demo() {
  return (
    <div>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">错误按钮</Button>
      <Button type="light">亮按钮</Button>
      <Button type="dark">暗按钮</Button>
      <Divider />
      <Button basic type="primary">主要按钮</Button>
      <Button basic type="success">成功按钮</Button>
      <Button basic type="warning">警告按钮</Button>
      <Button basic type="danger">错误按钮</Button>
      <Button basic type="light">亮按钮</Button>
      <Button basic type="dark">暗按钮</Button>
      <Divider />
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button type="primary" active>Button</Button>
      <Button type="primary" size="small">more <Icon type="down" /></Button>
      <Button type="link"> (超连接样式)link </Button>
    </div>
  )
}
```

### 按钮组

```jsx mdx:preview
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Divider, Icon } from 'uiw';

export default function Demo() {
  return (
    <div>
      <ButtonGroup>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">错误按钮</Button>
        <Button type="light">亮按钮</Button>
        <Button type="dark">暗按钮</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginTop: 5 }}>
        <Button size="small" type="primary">按钮</Button>
        <Button size="small" type="primary">按钮</Button>
        <Button size="small" type="primary">按钮</Button>
        <Button size="small" type="primary">按钮</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginTop: 5 }}>
        <Button type="light">按钮</Button>
        <Button type="light">按钮</Button>
        <Button type="light">按钮</Button>
        <Button type="light">按钮</Button>
      </ButtonGroup>
      <Divider style={{ maxWidth: 220 }}>添加图标</Divider>
      <ButtonGroup>
        <Button icon="copy" type="primary">复制</Button>
        <Button icon="delete" type="success">删除</Button>
        <Button icon="file-add" type="warning">添加文件</Button>
        <Button icon="map" type="danger">地图</Button>
        <Button icon="linux" type="light">Linux</Button>
        <Button icon="apple" type="dark">Apple</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginTop: 5 }}>
        <Button icon="copy" type="primary">复制</Button>
        <Button icon="delete" type="primary">删除</Button>
        <Button icon="file-add" type="primary">添加文件</Button>
        <Button icon="map" type="primary">地图</Button>
        <Button icon="linux" type="primary">Linux</Button>
        <Button icon="apple" type="primary">Apple</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginTop: 5 }}>
        <Button icon="copy">复制</Button>
        <Button icon="delete">删除</Button>
        <Button icon="file-add">添加文件</Button>
        <Button icon="map">地图</Button>
        <Button icon="linux">Linux</Button>
        <Button icon="apple">Apple</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginTop: 5 }}>
        <Button icon="copy" />
        <Button icon="delete" />
        <Button icon="file-add" />
        <Button icon="map" />
        <Button icon="linux" />
        <Button icon="apple" />
      </ButtonGroup>
    </div>
  )
}
```
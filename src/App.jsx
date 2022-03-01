import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { GlobalStyle } from './components/globalStyle'
import DefaultLayout from './layouts/DefaultLayout'

const Header = (props) => {
  // const Header = (    {onClick}   ) => {
  return <header {...props}>111</header> // React 物件展開
  // return <header className={props.className} onClick={props.onClick} >111</header>
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const App = () => {
  const [num, setNum] = useState(223)

  return (
    // <div>
    //   <Header className="111" onClick={() => setNum(5)} />
    //   {/* <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    //   <Form lablCol={{span: 8}} wrapperCol={{span: 8}} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}> */}
    //   {num}
    // </div>
    <BrowserRouter>
      <GlobalStyle />
      <DefaultLayout>
        <Switch>
          <Route exact path="/1" component={Route1Page} />
          {/* <Route path="/1/:name" component={Route2Page} /> */}
          <Route path="/2" component={Route2Page} />
          {/* <Redirect to="/1" /> */}
        </Switch>
        <hr />

        <CustomLink path="/1" title="Route1" />
      </DefaultLayout>
    </BrowserRouter>
  )
}

const CustomLink = ({ path, title }) => {
  const history = useHistory()
  console.log({ history })

  const handleClick = () => {
    history.push('/1', { a: 1, b: 'aaaa' })
  }
  //   return <h3 onClick={handleClick}>{title}</h3>
  return (
    <Link
      to={{
        path,
        state: { a: 1, b: 'aaa' },
      }}
    >
      {title}
    </Link>
  )
}

const Route1Page = () => {
  const location = useLocation()
  console.log('route1 ', location)
  return <h1>Route1</h1>
}

const Route2Page = () => {
  return <h2>Route2</h2>
}

export default App

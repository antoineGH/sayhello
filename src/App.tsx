import { useRoutes } from 'react-router'
import { Layout } from 'antd'
import routes from 'routes'
import './App.css'

const App: React.FC = (): JSX.Element => {
  const isLogged = false
  const routing = useRoutes(routes(isLogged))
  const { Content } = Layout

  return (
    <>
      <Layout className="layout-content">
        <Content>{routing}</Content>
      </Layout>
    </>
  )
}

export default App

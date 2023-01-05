import AppLayout from "./AppLayout"
import { Route, Switch } from "react-router-dom"
import PostPage from "./pages/PostPage"
import PostListPage from "./pages/PostListPage"

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path={"/:postId"} component={PostPage} />
        <Route exact path="/" component={PostListPage} />
      </Switch>
    </AppLayout>
  )
}

export default App

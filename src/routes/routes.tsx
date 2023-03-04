import { Route, Routes } from 'react-router-dom'

import { Base } from '~/layouts/Base'
import { About } from '~/pages/About'
import { Home } from '~/pages/Home'
import TodoPage from '~/pages/TodoPage/TodoPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<TodoPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

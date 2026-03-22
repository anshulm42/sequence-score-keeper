import { Routes, Route } from 'react-router-dom'
import ScoreBoard from './pages/ScoreBoard'
import AppLayout from './layout/AppLayout'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ScoreBoard />} />
      </Route>
    </Routes>
  )
}

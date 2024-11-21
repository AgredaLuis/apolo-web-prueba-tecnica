import { ReactNode } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import NotFoundPage from "../../pages/NotFoundPage"

interface Props {
  children: ReactNode
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<NotFoundPage />} />
    </Routes>
  )
}
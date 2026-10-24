import { createBrowserRouter } from 'react-router'
import Root from '@/components/Root'
import Home from '@/pages/Home'
import SobreMi from '@/pages/SobreMi'
import Contacto from '@/pages/Contacto'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'sobre-mi', Component: SobreMi },
      { path: 'contacto', Component: Contacto },
    ],
  },
])

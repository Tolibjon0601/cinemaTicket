
import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/main_layouts/layout'
import HomePage from './pages/home'
import { BrowserRouter, Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginPage from './pages/home/login'
import AuthPage from './pages/home/AuthPage'


function App() {

const router=createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<MainLayout/>}>
<Route index element={<HomePage/>}></Route>
<Route path={"/login"} element={<LoginPage/>}></Route>
<Route path={"authpage"} element={<AuthPage/>}></Route>
</Route>
  )
)
  return (
<>
{/* <MainLayout>
<HomePage/>
</MainLayout> */}
<BrowserRouter>
<MainLayout>
<Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path={"/login"} element={<LoginPage/>}></Route>

</Routes>
</MainLayout>
</BrowserRouter>
</>
  )
}

export default App

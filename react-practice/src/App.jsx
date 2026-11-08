import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import SimplePage from "./pages/SimplePage";
import AdminLayout from "./layouts/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="products" element={<SimplePage title="Все товары"/>} />
          <Route
            path="products/:id"
            element={<SimplePage title="Карточка товар"/>}
          />
          <Route path="new" element={<SimplePage title="Новинки"/>} />
          <Route path="sales" element={<SimplePage title="Скидки"/>} />
          <Route path="cart" element={<SimplePage title="Корзина"/>} />
          <Route path="login" element={<SimplePage title="Вход"/>} />   
          <Route path="register" element={<SimplePage title="Регистрация"/>}/>
        </Route>

        <Route path="admin" element={<AdminLayout/>}>
        <Route index element={<SimplePage title="Панель администратора"/>}/>
        <Route path="products" element={<SimplePage title="Управление товарами"/>}/>
        <Route path="categories" element={<SimplePage title="Управление категориями"/>}/>
        </Route>

        <Route path="*" element={<SimplePage title="Страница не найдена"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
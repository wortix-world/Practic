export async function getProducts() {
  const response = await fetch("http://localhost:3001/products");

  if (!response.ok) {
    throw new Error(`Не удалось загрузить товары: ${response.status}`);
  }

  return response.json();
}
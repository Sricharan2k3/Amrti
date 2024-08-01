async function fetchProducts() {
  try {
    const response = await fetch(
      "http://amrti-main-backend.vercel.app/api/v1/amrti/products/getall"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export const products = await fetchProducts();

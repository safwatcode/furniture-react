import React, { useState } from "react";
import ProductList from "./components/ProductList";
import products from "./data/products";

function Link() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredProducts(filteredProducts);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) => {
        return product.category === selectedCategory;
      });
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div>
      <div className="landing-prodcuts">
        <div class="flex flex-col min-h-[100dvh]">
          <main class="flex-1">
            <section class="w-full pt-12 md:pt-24 lg:pt-32">
              <div class="container space-y-10 xl:space-y-16">
                <div class="flex flex-col items-center space-y-4 text-center">
                  <div class="space-y-2">
                    <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Elevate Your Living Space
                    </h1>
                    <p class="product-landing-text mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      Discover our premium furniture collection, crafted with
                      exceptional quality and timeless design.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <div class="flex justify-center mb-4">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products"
          class="w-full max-w-md px-4 py-2 text-lg text-gray-700"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          class="w-full max-w-md px-4 py-2 text-lg text-gray-700"
        >
          <option value="All">All Categories</option>
          {[...new Set(products.map((product) => product.category))].map(
            (category) => (
              <option value={category}>{category}</option>
            )
          )}
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Link;

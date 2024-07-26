"use client";
import { useState, useMemo, useEffect } from "react";
import { Input } from "../../components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    price: { min: 0, max: 1000 },
  });
  const [sortBy, setSortBy] = useState("featured");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://amrti-main-backend.vercel.app/api/v1/amrti/products/getall"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedProducts = await response.json();
        setProducts(fetchedProducts.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products. Please try again later.");
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const searchMatch =
          product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
        const priceMatch = product.discountedPrice >= filters.price.min && product.discountedPrice <= filters.price.max;
        return searchMatch && categoryMatch && priceMatch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return b.featured - a.featured;
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
  }, [products, searchTerm, filters, sortBy]);

  const featuredProducts = useMemo(() => {
    return products.filter((product) => product.featured);
  }, [products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryFilter = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: prevFilters.category.includes(category)
        ? prevFilters.category.filter((c) => c !== category)
        : [...prevFilters.category, category],
    }));
  };
  const handlePriceFilter = (min, max) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: { min, max },
    }));
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  const navigate = useNavigate();

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const addToCart = async (productId) => {
    try {
      // Retrieve the token from cookies
      const token = getCookie('jwtToken');

      const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        },
        body: JSON.stringify({ productId })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);

      // Show success notification
      toast.success('Product added to cart successfully!');

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('Failed to add product to cart.');
    }
  };

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto mt-12 px-4 md:px-6 py-8">
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted"
          />
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={handleSort}>
                <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <div className="bg-muted/40 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="grid gap-4">
            <div>
              <h4 className="text-base font-medium mb-2">Category</h4>
              <div className="grid gap-2">
                {["Powders", "Kombucha"].map((category) => (
                  <Label key={category} className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={filters.category.includes(category)}
                      onCheckedChange={() => handleCategoryFilter(category)}
                    />
                    {category}
                  </Label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-background rounded-lg shadow-lg overflow-hidden">
                <a href={`/product/${product._id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </a>
                <div className="p-4">
                  <a href={`/product/${product._id}`}>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                  </a>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">₹{product.discountedPrice.toFixed(2)}</span>
                    <Button size="sm" variant="outline" onClick={() => addToCart(product._id)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-background rounded-lg shadow-lg overflow-hidden"
          >
            <a href="#" prefetch={false}>
              <img
                src={product.imageUrl}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-primary font-semibold">${product.discountedPrice.toFixed(2)}</span>
                  <Button size="sm" variant="outline">
                    <ShoppingCartIcon className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path
        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
      />
    </svg>
  );
}

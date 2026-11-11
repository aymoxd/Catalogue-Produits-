import { createContext, useContext, useEffect, useState } from "react";

// نشارك بيانات السلة بين البطاقات وصفحة السلة من خلال Context واحد.
const CartContext = createContext(null);
const CART_STORAGE_KEY = "react-tp-cart";

function readStoredCart() {
  try {
    const value = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing
        ? current.map((item) => item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item)
        : [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setItems((current) => current.map((item) => item.id === productId
      ? { ...item, quantity }
      : item));
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems: items.reduce((total, item) => total + item.quantity, 0),
    totalAmount: items.reduce((total, item) => total + item.price * item.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// نُبقي hook هنا مع السياق لتجنب إنشاء ملفات إضافية في بنية المشروع.
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}


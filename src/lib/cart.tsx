import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export interface Product {
  id: "validate" | "see" | "feel" | "plan";
  title: string;
  tagline: string;
  price: number;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "validate",
    title: "Validate",
    tagline:
      "We stress-test your idea against real market signals, TAM data, and competitor intel — so you know it's worth building before you spend a penny.",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "see",
    title: "See",
    tagline:
      "Your brand comes to life: identity, logo, visual language, and a pitch deck designed to stop investors mid-scroll.",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "feel",
    title: "Feel",
    tagline:
      "An interactive prototype your users can actually touch — hi-fi screens, micro-interactions, and a clickable demo ready for user testing.",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "plan",
    title: "Plan",
    tagline:
      "A full go-to-market strategy: financial model, roadmap, hiring plan, and investor narrative built to withstand due diligence.",
    price: 1600,
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=60",
  },
];

export interface CartItem extends Product {
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (id: string) => void;
  update: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const noop = () => {};

const defaultValue: CartContextValue = {
  items: [],
  add: noop,
  remove: noop,
  update: noop,
  clear: noop,
  count: 0,
  total: 0,
  open: false,
  setOpen: noop,
};

const CartContext = createContext<CartContextValue>(defaultValue);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((product: Product) => {
    console.log("Adding product to cart:", product.id);
    setItems((prev) => {
      console.log("Current items:", prev);
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    console.log("Setting open to true");
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const update = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
    }
  }, []);

  const clear = useCallback(() => {
    setItems([]);
    setOpen(false);
  }, []);

  const count = items.reduce((acc, i) => acc + i.qty, 0);
  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  const value: CartContextValue = { items, add, remove, update, clear, count, total, open, setOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  return useContext(CartContext);
}

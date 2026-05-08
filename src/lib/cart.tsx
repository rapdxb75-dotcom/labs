import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { toast } from "sonner";

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
    image: "/assets/Validate.avif",
  },
  {
    id: "see",
    title: "See",
    tagline:
      "Your brand comes to life: identity, logo, visual language, and a pitch deck designed to stop investors mid-scroll.",
    price: 1800,
    image: "/assets/see.png",
  },
  {
    id: "feel",
    title: "Feel",
    tagline:
      "An interactive prototype your users can actually touch — hi-fi screens, micro-interactions, and a clickable demo ready for user testing.",
    price: 2400,
    image: "/assets/Feel.jpg",
  },
  {
    id: "plan",
    title: "Plan",
    tagline:
      "A full go-to-market strategy: financial model, roadmap, hiring plan, and investor narrative built to withstand due diligence.",
    price: 1600,
    image: "/assets/Plan.jpg",
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

const noop = () => { };

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
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dna-cart");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Sync with current PRODUCTS to ensure images and other metadata are up to date
        const synced = parsed.map((item: CartItem) => {
          const product = PRODUCTS.find((p) => p.id === item.id);
          return product ? { ...item, ...product, qty: item.qty } : item;
        });
        setItems(synced);
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isLoaded) {
      console.log("Cart: Saving to localStorage", items);
      localStorage.setItem("dna-cart", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const add = useCallback((product: Product) => {
    console.log("Cart: Adding product", product.id);
    if (!product || !product.id) {
      console.error("Cart: Invalid product", product);
      return;
    }

    setItems((prev) => {
      console.log("Cart: Previous state", prev);
      const existing = prev.find((i) => i.id === product.id);
      let newState;
      if (existing) {
        newState = prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      } else {
        newState = [...prev, { ...product, qty: 1 }];
      }
      console.log("Cart: New state", newState);
      return newState;
    });

    toast.success(`${product.title} added to sample tray`);
    setOpen(true);
    console.log("Cart: Open set to true");
  }, []);

  const remove = useCallback((id: string) => {
    const item = items.find(i => i.id === id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      toast.info(`${item.title} removed from sample tray`);
    }
  }, [items]);

  const update = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      remove(id);
    } else {
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
    }
  }, [remove]);

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

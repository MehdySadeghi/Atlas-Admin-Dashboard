import headphonesImageLandscape from "../assets/images/headphones.jpg";
import keyboardImageLandscape from "../assets/images/keyboard.jpg";
import mouseImageLandscape from "../assets/images/mouse.jpg";
import monitorImageLandscape from "../assets/images/monitor.jpg";
import headphonesImageHorizontal from "../assets/images/headphones-9.16.jpg";
import keyboardImageHorizontal from "../assets/images/keyboard-9.16.jpg";
import mouseImageHorizontal from "../assets/images/mouse-9.16.jpg";
import monitorImageHorizontal from "../assets/images/monitor-9.16.jpg";

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 149.99,
    stock: 42,
    rating: 4.8,
    sku: "WH-2400",
    image: headphonesImageLandscape,
    horizontalImage : headphonesImageHorizontal,
    description:
      "Premium wireless headphones designed for everyday listening, remote work, and travel. Features active noise cancellation, 30-hour battery life, and a lightweight over-ear design.",
  },

  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 99.99,
    stock: 27,
    rating: 4.6,
    sku: "MK-1040",
    image: keyboardImageLandscape,
    horizontalImage : keyboardImageHorizontal,
    description:
      "A responsive mechanical keyboard with tactile switches, a durable frame, and a clean layout designed for productive everyday use.",
  },

  {
    id: 3,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 49.99,
    stock: 64,
    rating: 4.5,
    sku: "WM-3200",
    image: mouseImageLandscape,
    horizontalImage : mouseImageHorizontal,
    description:
      "A lightweight wireless mouse with precise tracking, a comfortable ergonomic shape, and reliable battery life for everyday work.",
  },

  {
    id: 4,
    name: "USB-C Monitor",
    category: "Electronics",
    price: 329.99,
    stock: 18,
    rating: 4.9,
    sku: "CM-2700",
    image: monitorImageLandscape,
    horizontalImage : monitorImageHorizontal,
    description:
      "A modern USB-C monitor built for productivity, with a sharp display, minimal design, and convenient single-cable connectivity.",
  },
];

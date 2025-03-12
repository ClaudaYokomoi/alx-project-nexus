import axios from 'axios';

const API_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.slice(0, 12); // Limit to 12 products
  } catch (error) {
    console.error('Error fetching products:', error);
    // Extended fallback mock data
    return [
      {
        id: 1,
        name: "Mock Lipstick",
        price: "15.99",
        product_type: "lipstick",
        image_link: "",
      },
      {
        id: 2,
        name: "Mock Foundation",
        price: "25.99",
        product_type: "foundation",
        image_link: "",
      },
      {
        id: 3,
        name: "Mock Mascara",
        price: "18.99",
        product_type: "mascara",
        image_link: "",
      },
      {
        id: 4,
        name: "Mock Eyeliner",
        price: "12.99",
        product_type: "eyeliner",
        image_link: "",
      },
      {
        id: 5,
        name: "Mock Blush",
        price: "19.99",
        product_type: "blush",
        image_link: "",
      },
      {
        id: 6,
        name: "Mock Highlighter",
        price: "22.99",
        product_type: "highlighter",
        image_link: "",
      },
      {
        id: 7,
        name: "Mock Brow Pencil",
        price: "14.99",
        product_type: "brow",
        image_link: "",
      },
      {
        id: 8,
        name: "Mock Nail Polish",
        price: "9.99",
        product_type: "nail polish",
        image_link: "",
      },
      {
        id: 9,
        name: "Mock Primer",
        price: "27.99",
        product_type: "primer",
        image_link: "",
      },
      {
        id: 10,
        name: "Mock Concealer",
        price: "20.99",
        product_type: "concealer",
        image_link: "",
      },
      {
        id: 11,
        name: "Mock Setting Spray",
        price: "23.99",
        product_type: "setting spray",
        image_link: "",
      },
      {
        id: 12,
        name: "Mock Contour Kit",
        price: "29.99",
        product_type: "contour",
        image_link: "",
      },
      {
        id: 13,
        name: "Mock Eyeshadow Palette",
        price: "34.99",
        product_type: "eyeshadow",
        image_link: "",
      },
      {
        id: 14,
        name: "Mock Tinted Moisturizer",
        price: "24.99",
        product_type: "tinted moisturizer",
        image_link: "",
      },
      {
        id: 15,
        name: "Mock Lip Gloss",
        price: "13.99",
        product_type: "lip gloss",
        image_link: "",
      },
    ];
  }
};

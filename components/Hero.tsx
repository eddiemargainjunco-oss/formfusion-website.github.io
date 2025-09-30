"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, Star, Package, Truck, Shield, Zap, Filter, ChevronDown, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Plus, Minus, Trash2, CheckCircle } from 'lucide-react';

export default function Hero() {
  // State Management
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState('popular');
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load cart and wishlist from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('formfusion-cart');
    const savedWishlist = localStorage.getItem('formfusion-wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('formfusion-cart', JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('formfusion-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Product Data with FIXED PHOTOS
  const products = [
    {
      id: 1,
      name: "Articulated Crystal Dragon",
      price: 16.99,
      category: "Collectibles",
      material: "PLA",
      printTime: "18 hours",
      difficulty: "Medium",
      description: "Stunning articulated dragon with crystal-like scales that moves and poses!",
      features: ["Fully articulated", "No supports needed", "Print-in-place", "118k downloads"],
      photo: "https://placehold.co/500x400/8b5cf6/white?text=Crystal+Dragon+🐉&font=roboto",
      rating: 4.9,
      reviews: 342,
      inStock: true,
      isPopular: true,
      downloads: "118k"
    },
    {
      id: 2,
      name: "Toothless Night Fury Dragon",
      price: 14.99,
      category: "Collectibles",
      material: "PLA",
      printTime: "14 hours",
      difficulty: "Medium",
      description: "Adorable articulated Toothless from How to Train Your Dragon!",
      features: ["Articulated wings", "Movable head", "Print-in-place", "49k downloads"],
      photo: "https://placehold.co/500x400/3b82f6/white?text=Toothless+Dragon+🐲&font=roboto",
      rating: 4.8,
      reviews: 256,
      inStock: true,
      isHot: true,
      downloads: "49k"
    },
    {
      id: 3,
      name: "Dynamic Stress Relief Spinner",
      price: 7.99,
      category: "Fidget Toys",
      material: "PLA",
      printTime: "4 hours",
      difficulty: "Easy",
      description: "Mesmerizing spinning fidget toy that never gets boring!",
      features: ["Smooth rotation", "Satisfying click", "Pocket-sized", "25k downloads"],
      photo: "https://placehold.co/500x400/10b981/white?text=Fidget+Spinner+⚡&font=roboto",
      rating: 4.7,
      reviews: 189,
      inStock: true,
      isTrending: true,
      downloads: "25k"
    },
    {
      id: 4,
      name: "Infinity Cube Fidget Toy",
      price: 5.99,
      category: "Fidget Toys",
      material: "PLA",
      printTime: "3 hours",
      difficulty: "Easy",
      description: "Classic infinity cube that flips forever! Perfect desk toy.",
      features: ["Print-in-place", "No assembly", "Satisfying", "47k downloads"],
      photo: "https://placehold.co/500x400/f59e0b/white?text=Infinity+Cube+∞&font=roboto",
      rating: 4.8,
      reviews: 421,
      inStock: true,
      isPopular: true,
      downloads: "47k"
    },
    {
      id: 5,
      name: "Articulated Flexi Shark",
      price: 12.99,
      category: "Collectibles",
      material: "TPU",
      printTime: "8 hours",
      difficulty: "Easy",
      description: "Flexible shark that wiggles and bends - kids love it!",
      features: ["Super flexible", "No supports", "One piece print", "20k downloads"],
      photo: "https://placehold.co/500x400/06b6d4/white?text=Flexi+Shark+🦈&font=roboto",
      rating: 4.9,
      reviews: 167,
      inStock: true,
      isTrending: true,
      downloads: "20k"
    },
    {
      id: 6,
      name: "Helping Hands Soldering Clamp",
      price: 8.99,
      category: "Tools & Workshop",
      material: "PETG",
      printTime: "5 hours",
      difficulty: "Easy",
      description: "Essential tool for soldering and electronics work!",
      features: ["Adjustable arms", "Strong grip", "Heat resistant", "Maker essential"],
      photo: "https://placehold.co/500x400/ef4444/white?text=Soldering+Clamp+🔧&font=roboto",
      rating: 4.6,
      reviews: 98,
      inStock: true
    },
    {
      id: 7,
      name: "One-Piece Slim Wallet",
      price: 11.99,
      category: "Useful Gadgets",
      material: "PETG",
      printTime: "6 hours",
      difficulty: "Easy",
      description: "Minimalist wallet that holds cards and cash perfectly!",
      features: ["RFID blocking", "Print-in-place", "Slim design", "Durable"],
      photo: "https://placehold.co/500x400/6366f1/white?text=Slim+Wallet+💳&font=roboto",
      rating: 4.5,
      reviews: 143,
      inStock: true
    },
    {
      id: 8,
      name: "Iris Easter Egg Secret Box",
      price: 9.99,
      category: "Home & Desk",
      material: "PLA",
      printTime: "7 hours",
      difficulty: "Medium",
      description: "Beautiful mechanical box with iris opening mechanism!",
      features: ["Secret compartment", "Smooth action", "No glue", "Print-in-place"],
      photo: "https://placehold.co/500x400/ec4899/white?text=Secret+Box+🥚&font=roboto",
      rating: 4.7,
      reviews: 201,
      inStock: true,
      isHot: true
    },
    {
      id: 9,
      name: "Pikachu Desk Buddy",
      price: 8.99,
      category: "Gaming",
      material: "PLA",
      printTime: "6 hours",
      difficulty: "Easy",
      description: "Cute Pikachu figure for your desk or shelf!",
      features: ["Adorable design", "Easy to paint", "Detailed model", "Pokemon fan favorite"],
      photo: "https://placehold.co/500x400/fbbf24/white?text=Pikachu+⚡&font=roboto",
      rating: 4.8,
      reviews: 312,
      inStock: true,
      isPopular: true
    },
    {
      id: 10,
      name: "Self-Watering Planter System",
      price: 13.99,
      category: "Home & Desk",
      material: "PETG",
      printTime: "9 hours",
      difficulty: "Easy",
      description: "Smart planter that waters your plants automatically!",
      features: ["Water reservoir", "No overflow", "Perfect for herbs", "Modern design"],
      photo: "https://placehold.co/500x400/22c55e/white?text=Self-Watering+Planter+🌱&font=roboto",
      rating: 4.6,
      reviews: 87,
      inStock: true
    },
    {
      id: 11,
      name: "Gridfinity Storage System Starter",
      price: 4.99,
      category: "Home & Desk",
      material: "PLA",
      printTime: "2 hours",
      difficulty: "Easy",
      description: "Modular storage system - organize everything perfectly!",
      features: ["Expandable", "Customizable", "Drawer friendly", "57k downloads"],
      photo: "https://placehold.co/500x400/a855f7/white?text=Gridfinity+Storage+📦&font=roboto",
      rating: 4.9,
      reviews: 523,
      inStock: true,
      isPopular: true,
      downloads: "57k"
    },
    {
      id: 12,
      name: "Phone Holder Dragon Claw",
      price: 7.99,
      category: "Useful Gadgets",
      material: "PLA",
      printTime: "5 hours",
      difficulty: "Easy",
      description: "Epic dragon claw holds your phone like a boss!",
      features: ["Adjustable angle", "Stable base", "Cool design", "Works with cases"],
      photo: "https://placehold.co/500x400/f97316/white?text=Dragon+Phone+Holder+📱&font=roboto",
      rating: 4.7,
      reviews: 234,
      inStock: true,
      isTrending: true
    },
    {
      id: 13,
      name: "Master Sword Cosplay Prop",
      price: 19.99,
      category: "Cosplay & Props",
      material: "PLA",
      printTime: "24 hours",
      difficulty: "Hard",
      description: "Epic full-size Master Sword from Legend of Zelda!",
      features: ["Life-size replica", "Multi-part print", "Easy assembly", "Convention ready"],
      photo: "https://placehold.co/500x400/14b8a6/white?text=Master+Sword+⚔️&font=roboto",
      rating: 4.8,
      reviews: 145,
      inStock: true,
      isHot: true
    },
    {
      id: 14,
      name: "Chip Bag Sealer Clips",
      price: 3.99,
      category: "Useful Gadgets",
      material: "PETG",
      printTime: "1 hour",
      difficulty: "Easy",
      description: "Keep your snacks fresh with these awesome clips!",
      features: ["Set of 4", "Strong grip", "Dishwasher safe", "Kitchen essential"],
      photo: "https://placehold.co/500x400/84cc16/white?text=Chip+Clips+🍿&font=roboto",
      rating: 4.5,
      reviews: 276,
      inStock: true
    },
    {
      id: 15,
      name: "Minecraft Creeper Planter",
      price: 11.99,
      category: "Gaming",
      material: "PLA",
      printTime: "8 hours",
      difficulty: "Easy",
      description: "SSSSsssss... Plant holder that won't explode!",
      features: ["Drainage holes", "Perfect for succulents", "Minecraft style", "Kid favorite"],
      photo: "https://placehold.co/500x400/059669/white?text=Creeper+Planter+💣&font=roboto",
      rating: 4.7,
      reviews: 189,
      inStock: true,
      isPopular: true
    },
    {
      id: 16,
      name: "Toothpaste Tube Squeezer",
      price: 4.99,
      category: "Useful Gadgets",
      material: "PLA",
      printTime: "2 hours",
      difficulty: "Easy",
      description: "Get every last drop! Bathroom game-changer.",
      features: ["Universal fit", "Easy to use", "Money saver", "Smart design"],
      photo: "https://placehold.co/500x400/0ea5e9/white?text=Toothpaste+Squeezer+🪥&font=roboto",
      rating: 4.6,
      reviews: 321,
      inStock: true
    }
  ];

  const categories = ['All', 'Fidget Toys', 'Gaming', 'Home & Desk', 'Useful Gadgets', 'Cosplay & Props', 'Collectibles', 'Tools & Workshop'];
  const materials = ['All', 'PLA', 'PETG', 'TPU'];

  // Filter and Sort Products
  const filteredProducts = products
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesMaterial = selectedMaterial === 'All' || p.material === selectedMaterial;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // popular (default order)
    });

  // Cart Functions
  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50'}`}>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  FormFusion 3D
                </h1>
                <p className="text-xs text-gray-500">Print Your Imagination</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#products" className="hover:text-purple-600 transition font-medium">Shop</a>
              <a href="#how-it-works" className="hover:text-purple-600 transition font-medium">How It Works</a>
              <a href="#custom" className="hover:text-purple-600 transition font-medium">Custom Orders</a>
              <a href="#contact" className="hover:text-purple-600 transition font-medium">Contact</a>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>

              <button 
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 hover:bg-purple-100 rounded-lg transition"
              >
                <ShoppingCart className="h-6 w-6 text-purple-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#products" className="block py-2 hover:text-purple-600">Shop</a>
              <a href="#how-it-works" className="block py-2 hover:text-purple-600">How It Works</a>
              <a href="#custom" className="block py-2 hover:text-purple-600">Custom Orders</a>
              <a href="#contact" className="block py-2 hover:text-purple-600">Contact</a>
              <button 
                onClick={() => setShowCart(!showCart)}
                className="flex items-center space-x-2 py-2 text-purple-600"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({cartCount})</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full">
              <span className="text-purple-600 dark:text-purple-300 font-semibold">✨ Now Printing Trending MakerWorld Designs!</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Awesome 3D Prints
              <br />Made Just For You! 🚀
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              From fidget toys to epic cosplay props - we print the coolest stuff on the internet!
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div>
                <div className="text-4xl font-bold text-purple-600">1000+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">24-48hr</div>
                <div className="text-gray-600 dark:text-gray-400">Quick Turnaround</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600">4.9★</div>
                <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="font-semibold">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md">
                <Zap className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold">Fast Production</span>
              </div>
            </div>

            <a 
              href="#products"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Start Shopping! 🛒
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            🔥 Trending 3D Prints
          </h2>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for awesome prints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                {/* Material Filter */}
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                >
                  {materials.map(mat => (
                    <option key={mat} value={mat}>{mat}</option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="text-gray-600 dark:text-gray-400">
                {filteredProducts.length} products found
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105`}>
                {/* Product Image */}
                <div className="relative">
                  <img 
                    src={product.photo} 
                    alt={product.name}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {product.isPopular && (
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        ⭐ Popular
                      </span>
                    )}
                    {product.isHot && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        🔥 Hot
                      </span>
                    )}
                    {product.isTrending && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        📈 Trending
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
                  >
                    <Heart 
                      className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-500 text-sm">({product.reviews})</span>
                  </div>

                  {/* Material & Print Time */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded">
                      {product.material}
                    </span>
                    <span>⏱️ {product.printTime}</span>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works 🎯
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Choose Your Print</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse our collection of trending designs from MakerWorld and pick your favorites!
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="font-bold text-xl mb-2">We Print It</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our high-quality 3D printers bring your item to life with premium materials!
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get your awesome print delivered in 24-48 hours with free shipping!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section id="custom" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-600 to-blue-600'} rounded-3xl p-8 md:p-12 text-white`}>
            <h2 className="text-4xl font-bold mb-6 text-center">
              Want Something Custom? 🎨
            </h2>
            <p className="text-xl text-center mb-8 opacity-90">
              Have your own design or idea? We can print it! Send us your STL files or describe what you need.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg text-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg text-gray-900"
              />
              <textarea
                placeholder="Describe your custom print idea..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="w-full bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
                Request Custom Quote 📧
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch! 💬</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <a href="mailto:formfusionprinting@gmail.com" className="text-purple-600 hover:underline">
                formfusionprinting@gmail.com
              </a>
            </div>
            <div>
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400">(555) 3D-PRINT</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 text-pink-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Your City, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">FormFusion 3D</h3>
              <p className="text-gray-400">
                Making 3D printing accessible and fun for everyone!
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#products" className="block text-gray-400 hover:text-white">Shop</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white">How It Works</a>
                <a href="#custom" className="block text-gray-400 hover:text-white">Custom Orders</a>
                <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Materials</h4>
              <div className="space-y-2">
                <p className="text-gray-400">PLA - Easy Mode</p>
                <p className="text-gray-400">PETG - Pro Mode</p>
                <p className="text-gray-400">TPU - Flex Mode</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FormFusion 3D. Made with ❤️ and lots of filament!</p>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)} />
          <div className={`absolute right-0 top-0 h-full w-full max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl flex flex-col`}>
            {/* Cart Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">Your Cart 🛒</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                      <div className="flex items-start space-x-4">
                        <img src={item.photo} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                          <p className="text-purple-600 font-bold">${item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-purple-600">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    setShowCart(false);
                    setShowCheckout(true);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold hover:shadow-xl transition"
                >
                  Checkout Now 🚀
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSelectedProduct(null)} />
            <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-4xl w-full p-8`}>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProduct.photo} 
                    alt={selectedProduct.name}
                    className="w-full rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-4xl font-bold text-purple-600 mb-6">
                    ${selectedProduct.price}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Material:</span>
                      <span className="font-semibold">{selectedProduct.material}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Print Time:</span>
                      <span className="font-semibold">{selectedProduct.printTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
                      <span className="font-semibold">{selectedProduct.difficulty}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Features:</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold hover:shadow-xl transition"
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCheckout(false)} />
            <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-2xl w-full p-8`}>
              <button
                onClick={() => setShowCheckout(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="text-3xl font-bold mb-6">Checkout 💳</h2>

              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                setOrderComplete(true);
                setShowCheckout(false);
                setCart([]);
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                />
                <input
                  type="text"
                  placeholder="Shipping Address"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                />
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    required
                    className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    required
                    className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>

                <div className="border-t pt-4 mt-6">
                  <h3 className="font-bold text-xl mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xl font-bold border-t pt-4">
                    <span>Total:</span>
                    <span className="text-purple-600">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-bold hover:shadow-xl transition"
                >
                  Complete Order 🎉
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Order Complete Modal */}
      {orderComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setOrderComplete(false)} />
          <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-md w-full p-8 text-center`}>
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Order Confirmed! 🎉</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Thank you for your order! We'll start printing your awesome items right away.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You'll receive a confirmation email shortly with tracking information.
              </p>
            </div>
            <button
              onClick={() => setOrderComplete(false)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:shadow-xl transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


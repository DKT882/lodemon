const productData = {
    "products": [
        {
            "id": 1,
            "slug": "minimal-leather-backpack",
            "name": "Minimal Leather Backpack",
            "description": "A clean and functional everyday backpack made from premium full-grain leather. Designed to carry your laptop, notebook, accessories, and daily essentials without unnecessary bulk.",
            "shortDescription": "Premium leather backpack for everyday carry.",
            "category": "Bags",
            "subcategory": "Backpacks",
            "brand": "North & Co.",
            "price": 149.99,
            "compareAtPrice": 179.99,
            "currency": "INR",
            "discountPercentage": 17,
            "rating": 4.8,
            "reviewCount": 284,
            "stock": 42,
            "sku": "NC-BAG-001",
            "featured": true,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/backpack1/900/1100",
                "https://picsum.photos/seed/backpack2/900/1100",
                "https://picsum.photos/seed/backpack3/900/1100"
            ],
            "colors": ["Black", "Brown", "Tan"],
            "sizes": ["16L", "20L"],
            "tags": ["leather", "backpack", "travel", "work"],
            "features": [
                "Full-grain leather exterior",
                "Padded 16-inch laptop compartment",
                "Water-resistant lining",
                "Adjustable shoulder straps",
                "Multiple interior pockets"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "3-5 business days"
            }
        },
        {
            "id": 2,
            "slug": "everyday-cotton-tshirt",
            "name": "Everyday Cotton T-Shirt",
            "description": "A soft, heavyweight cotton t-shirt with a relaxed silhouette. Built for everyday wear and designed to work just as well on its own as it does layered under a jacket.",
            "shortDescription": "Relaxed heavyweight cotton t-shirt.",
            "category": "Clothing",
            "subcategory": "T-Shirts",
            "brand": "Common Thread",
            "price": 34.0,
            "compareAtPrice": null,
            "currency": "INR",
            "discountPercentage": 0,
            "rating": 4.6,
            "reviewCount": 521,
            "stock": 128,
            "sku": "CT-TEE-002",
            "featured": true,
            "isNew": true,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/tshirt1/900/1100",
                "https://picsum.photos/seed/tshirt2/900/1100"
            ],
            "colors": ["White", "Black", "Navy", "Sage"],
            "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
            "tags": ["cotton", "tshirt", "casual", "basics"],
            "features": [
                "100% organic cotton",
                "240 GSM heavyweight fabric",
                "Relaxed fit",
                "Pre-washed finish",
                "Reinforced collar"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-6 business days"
            }
        },
        {
            "id": 3,
            "slug": "wireless-noise-cancelling-headphones",
            "name": "Wireless Noise-Cancelling Headphones",
            "description": "Immersive over-ear headphones with adaptive noise cancellation, rich sound, and up to 40 hours of battery life. Designed for focused work, travel, and everyday listening.",
            "shortDescription": "Premium wireless headphones with adaptive noise cancellation.",
            "category": "Electronics",
            "subcategory": "Headphones",
            "brand": "Aural",
            "price": 249.0,
            "compareAtPrice": 299.0,
            "currency": "INR",
            "discountPercentage": 17,
            "rating": 4.7,
            "reviewCount": 936,
            "stock": 31,
            "sku": "AU-HEAD-003",
            "featured": true,
            "isNew": true,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/headphones1/900/1100",
                "https://picsum.photos/seed/headphones2/900/1100",
                "https://picsum.photos/seed/headphones3/900/1100"
            ],
            "colors": ["Matte Black", "Silver", "Cream"],
            "sizes": ["One Size"],
            "tags": ["headphones", "wireless", "audio", "noise-cancelling"],
            "features": [
                "Adaptive active noise cancellation",
                "Up to 40 hours battery life",
                "Bluetooth 5.4",
                "USB-C fast charging",
                "Multipoint connectivity",
                "Built-in microphones for calls"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "2-4 business days"
            }
        },
        {
            "id": 4,
            "slug": "ceramic-coffee-mug",
            "name": "Handmade Ceramic Coffee Mug",
            "description": "A handcrafted ceramic mug with a naturally textured finish and comfortable rounded handle. Each piece has subtle variations that make it unique.",
            "shortDescription": "Handcrafted ceramic mug with a natural finish.",
            "category": "Home",
            "subcategory": "Kitchen",
            "brand": "Hearth Studio",
            "price": 28.0,
            "compareAtPrice": 35.0,
            "currency": "INR",
            "discountPercentage": 20,
            "rating": 4.9,
            "reviewCount": 173,
            "stock": 76,
            "sku": "HS-MUG-004",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/mug1/900/1100",
                "https://picsum.photos/seed/mug2/900/1100"
            ],
            "colors": ["Sand", "Charcoal", "Cream"],
            "sizes": ["10 oz", "14 oz"],
            "tags": ["ceramic", "mug", "coffee", "kitchen", "handmade"],
            "features": [
                "Handmade stoneware",
                "Food-safe glaze",
                "Dishwasher safe",
                "Microwave safe",
                "Approximate capacity of 10-14 oz"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-7 business days"
            }
        },
        {
            "id": 5,
            "slug": "everyday-running-shoes",
            "name": "Everyday Running Shoes",
            "description": "Lightweight running shoes built for daily miles, morning walks, and comfortable all-day wear. A responsive foam midsole provides cushioning without feeling heavy.",
            "shortDescription": "Lightweight everyday running shoes with responsive cushioning.",
            "category": "Footwear",
            "subcategory": "Running",
            "brand": "Stride",
            "price": 119.0,
            "compareAtPrice": 139.0,
            "currency": "INR",
            "discountPercentage": 14,
            "rating": 4.5,
            "reviewCount": 412,
            "stock": 64,
            "sku": "ST-RUN-005",
            "featured": true,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/shoes1/900/1100",
                "https://picsum.photos/seed/shoes2/900/1100",
                "https://picsum.photos/seed/shoes3/900/1100"
            ],
            "colors": ["Black/White", "Grey/Blue", "Cream/Green"],
            "sizes": ["7", "8", "9", "10", "11", "12", "13"],
            "tags": ["shoes", "running", "fitness", "sports"],
            "features": [
                "Breathable mesh upper",
                "Responsive foam midsole",
                "Rubber traction outsole",
                "Padded heel collar",
                "Removable cushioned insole"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "3-5 business days"
            }
        },
        {
            "id": 6,
            "slug": "smartwatch-active-2",
            "name": "Active Smartwatch 2",
            "description": "A versatile smartwatch for tracking workouts, sleep, heart rate, and everyday activity. The bright AMOLED display and long-lasting battery make it easy to use throughout the day.",
            "shortDescription": "Fitness-focused smartwatch with health tracking.",
            "category": "Electronics",
            "subcategory": "Smartwatches",
            "brand": "Pulse",
            "price": 189.0,
            "compareAtPrice": 229.0,
            "currency": "INR",
            "discountPercentage": 17,
            "rating": 4.4,
            "reviewCount": 687,
            "stock": 23,
            "sku": "PL-SW-006",
            "featured": true,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/smartwatch1/900/1100",
                "https://picsum.photos/seed/smartwatch2/900/1100"
            ],
            "colors": ["Black", "Silver", "Rose Gold"],
            "sizes": ["40mm", "44mm"],
            "tags": ["smartwatch", "fitness", "wearable", "technology"],
            "features": [
                "AMOLED touchscreen",
                "Heart-rate monitoring",
                "Sleep tracking",
                "GPS",
                "Water resistance",
                "Up to 10 days battery life"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "2-4 business days"
            }
        },
        {
            "id": 7,
            "slug": "linen-overshirt",
            "name": "Relaxed Linen Overshirt",
            "description": "A breathable linen overshirt designed as an easy layering piece for warm days and cool evenings. The relaxed cut gives it a casual, effortless look.",
            "shortDescription": "Breathable linen overshirt for effortless layering.",
            "category": "Clothing",
            "subcategory": "Shirts",
            "brand": "Common Thread",
            "price": 79.0,
            "compareAtPrice": 99.0,
            "currency": "INR",
            "discountPercentage": 20,
            "rating": 4.7,
            "reviewCount": 194,
            "stock": 57,
            "sku": "CT-LIN-007",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/linen1/900/1100",
                "https://picsum.photos/seed/linen2/900/1100"
            ],
            "colors": ["Natural", "Olive", "Stone", "Navy"],
            "sizes": ["S", "M", "L", "XL"],
            "tags": ["linen", "shirt", "summer", "casual"],
            "features": [
                "100% European linen",
                "Relaxed fit",
                "Button front",
                "Chest pocket",
                "Breathable fabric"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-6 business days"
            }
        },
        {
            "id": 8,
            "slug": "minimal-desk-lamp",
            "name": "Minimal Desk Lamp",
            "description": "A compact aluminum desk lamp with adjustable brightness and a warm, comfortable light. Designed for home offices, bedside tables, and reading corners.",
            "shortDescription": "Adjustable minimalist lamp for work and reading.",
            "category": "Home",
            "subcategory": "Lighting",
            "brand": "Form House",
            "price": 69.0,
            "compareAtPrice": null,
            "currency": "INR",
            "discountPercentage": 0,
            "rating": 4.6,
            "reviewCount": 118,
            "stock": 39,
            "sku": "FH-LAMP-008",
            "featured": false,
            "isNew": false,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/lamp1/900/1100",
                "https://picsum.photos/seed/lamp2/900/1100"
            ],
            "colors": ["Black", "White", "Silver"],
            "sizes": ["Standard"],
            "tags": ["lamp", "lighting", "desk", "office", "home"],
            "features": [
                "Adjustable brightness",
                "Three color temperature modes",
                "Touch controls",
                "USB-C charging port",
                "Adjustable arm",
                "Aluminum construction"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "3-5 business days"
            }
        },
        {
            "id": 9,
            "slug": "mechanical-keyboard",
            "name": "Compact Mechanical Keyboard",
            "description": "A compact mechanical keyboard designed for writers, developers, and anyone who spends long hours at a desk. Hot-swappable switches and wireless connectivity make it easy to customize.",
            "shortDescription": "Compact wireless mechanical keyboard with hot-swappable switches.",
            "category": "Electronics",
            "subcategory": "Computer Accessories",
            "brand": "Keyform",
            "price": 129.0,
            "compareAtPrice": 159.0,
            "currency": "INR",
            "discountPercentage": 19,
            "rating": 4.8,
            "reviewCount": 349,
            "stock": 18,
            "sku": "KF-KEY-009",
            "featured": true,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/keyboard1/900/1100",
                "https://picsum.photos/seed/keyboard2/900/1100"
            ],
            "colors": ["Black", "White", "Grey"],
            "sizes": ["75%"],
            "tags": ["keyboard", "mechanical", "wireless", "desk", "gaming"],
            "features": [
                "75% compact layout",
                "Hot-swappable switches",
                "Bluetooth and USB-C",
                "RGB backlighting",
                "PBT keycaps",
                "Up to 100 hours battery life"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "2-5 business days"
            }
        },
        {
            "id": 10,
            "slug": "everyday-sunglasses",
            "name": "Everyday Sunglasses",
            "description": "Classic sunglasses with a lightweight acetate frame and polarized lenses. A timeless shape designed to work with both casual and dressed-up outfits.",
            "shortDescription": "Classic polarized sunglasses with a lightweight frame.",
            "category": "Accessories",
            "subcategory": "Sunglasses",
            "brand": "Sol & Form",
            "price": 89.0,
            "compareAtPrice": 110.0,
            "currency": "INR",
            "discountPercentage": 19,
            "rating": 4.5,
            "reviewCount": 263,
            "stock": 81,
            "sku": "SF-SUN-010",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/sunglasses1/900/1100",
                "https://picsum.photos/seed/sunglasses2/900/1100"
            ],
            "colors": ["Black", "Tortoise", "Honey"],
            "sizes": ["One Size"],
            "tags": ["sunglasses", "accessories", "polarized", "summer"],
            "features": [
                "Polarized lenses",
                "100% UV protection",
                "Lightweight acetate frame",
                "Scratch-resistant coating",
                "Protective travel case included"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-6 business days"
            }
        }
    ]
}


export default productData
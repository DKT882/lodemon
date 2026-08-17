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
        },
        {
            "id": 11,
            "slug": "travel-french-press-kit",
            "name": "Travel French Press Kit",
            "description": "A compact coffee brewer designed for travelers, campers, and remote workers. The insulated flask keeps coffee hot for hours while the filter basket delivers a smooth, clean brew.",
            "shortDescription": "Compact insulated french press for easy travel brewing.",
            "category": "Home",
            "subcategory": "Kitchen",
            "brand": "Morn & Stone",
            "price": 64.0,
            "compareAtPrice": 79.0,
            "currency": "INR",
            "discountPercentage": 19,
            "rating": 4.6,
            "reviewCount": 142,
            "stock": 54,
            "sku": "MS-FP-011",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/frenchpress1/900/1100",
                "https://picsum.photos/seed/frenchpress2/900/1100"
            ],
            "colors": ["Stone", "Black", "Olive"],
            "sizes": ["350ml", "500ml"],
            "tags": ["coffee", "travel", "kitchen", "brew"],
            "features": [
                "Double-wall insulation",
                "BPA-free construction",
                "Fine mesh filter",
                "Portable lid design",
                "Dishwasher safe components"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "3-5 business days"
            }
        },
        {
            "id": 12,
            "slug": "woven-market-tote",
            "name": "Woven Market Tote",
            "description": "A spacious woven tote made for everyday errands, market runs, and weekend outings. It has a structured base, reinforced handles, and a surprisingly roomy interior.",
            "shortDescription": "Roomy woven tote for everyday carry.",
            "category": "Bags",
            "subcategory": "Totes",
            "brand": "Morrow & Pine",
            "price": 58.0,
            "compareAtPrice": 72.0,
            "currency": "INR",
            "discountPercentage": 19,
            "rating": 4.7,
            "reviewCount": 203,
            "stock": 68,
            "sku": "MP-TOTE-012",
            "featured": false,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/tote1/900/1100",
                "https://picsum.photos/seed/tote2/900/1100",
                "https://picsum.photos/seed/tote3/900/1100"
            ],
            "colors": ["Natural", "Charcoal", "Sage"],
            "sizes": ["Single", "Large"],
            "tags": ["tote", "bag", "market", "woven"],
            "features": [
                "Reinforced carry handles",
                "Structured base",
                "Machine washable cotton weave",
                "Interior zip pocket",
                "Sturdy, lightweight construction"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-6 business days"
            }
        },
        {
            "id": 13,
            "slug": "outdoor-trail-jacket",
            "name": "Outdoor Trail Jacket",
            "description": "A lightweight outer layer built for changing weather, city commutes, and quick weekend escapes. It balances weather protection with a clean, modern silhouette.",
            "shortDescription": "Weather-ready trail jacket with a streamlined fit.",
            "category": "Clothing",
            "subcategory": "Outerwear",
            "brand": "Summit North",
            "price": 199.0,
            "compareAtPrice": 239.0,
            "currency": "INR",
            "discountPercentage": 17,
            "rating": 4.8,
            "reviewCount": 318,
            "stock": 26,
            "sku": "SN-JKT-013",
            "featured": true,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/jacket1/900/1100",
                "https://picsum.photos/seed/jacket2/900/1100",
                "https://picsum.photos/seed/jacket3/900/1100"
            ],
            "colors": ["Forest", "Graphite", "Sand"],
            "sizes": ["S", "M", "L", "XL"],
            "tags": ["jacket", "outdoor", "travel", "weatherproof"],
            "features": [
                "Water-resistant shell",
                "Packable design",
                "Breathable lining",
                "Zippered hand pockets",
                "Adjustable hem and cuffs"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "2-5 business days"
            }
        },
        {
            "id": 14,
            "slug": "portable-blender-bottle",
            "name": "Portable Blender Bottle",
            "description": "A compact personal blender that fits into your gym bag and makes smoothies, shakes, and protein drinks in seconds with a rechargeable motor base.",
            "shortDescription": "Rechargeable portable blender for on-the-go nutrition.",
            "category": "Electronics",
            "subcategory": "Wellness",
            "brand": "Breeze Labs",
            "price": 74.0,
            "compareAtPrice": 94.0,
            "currency": "INR",
            "discountPercentage": 21,
            "rating": 4.4,
            "reviewCount": 196,
            "stock": 48,
            "sku": "BL-BLEND-014",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/blender1/900/1100",
                "https://picsum.photos/seed/blender2/900/1100"
            ],
            "colors": ["White", "Coral", "Black"],
            "sizes": ["500ml"],
            "tags": ["blender", "portable", "wellness", "fitness"],
            "features": [
                "Rechargeable battery",
                "Leak-proof lid",
                "Easy-clean stainless blade",
                "USB-C charging",
                "Compact, travel-friendly shape"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "3-5 business days"
            }
        },
        {
            "id": 15,
            "slug": "bronze-table-lamp",
            "name": "Bronze Table Lamp",
            "description": "A sculptural table lamp with a warm bronze finish and a soft ambient glow. It adds a refined accent to bedrooms, reading corners, and lounge spaces.",
            "shortDescription": "Ambient bronze table lamp with a sculptural silhouette.",
            "category": "Home",
            "subcategory": "Lighting",
            "brand": "Halo Form",
            "price": 94.0,
            "compareAtPrice": 118.0,
            "currency": "INR",
            "discountPercentage": 20,
            "rating": 4.6,
            "reviewCount": 162,
            "stock": 35,
            "sku": "HF-LAMP-015",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/lampbronze1/900/1100",
                "https://picsum.photos/seed/lampbronze2/900/1100"
            ],
            "colors": ["Bronze", "Ivory", "Charcoal"],
            "sizes": ["Standard"],
            "tags": ["lamp", "home", "lighting", "decor"],
            "features": [
                "Warm ambient glow",
                "Solid metal base",
                "Soft-touch dimmer",
                "Fits reading and bedside corners",
                "Long-lasting LED bulb"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-7 business days"
            }
        },
        {
            "id": 16,
            "slug": "leather-travel-wallet",
            "name": "Leather Travel Wallet",
            "description": "A compact leather wallet built to hold cards, cash, and travel essentials without bulk. The slim profile slips easily into a pocket or carry-on.",
            "shortDescription": "Slim leather travel wallet for every day and every trip.",
            "category": "Accessories",
            "subcategory": "Wallets",
            "brand": "North & Co.",
            "price": 69.0,
            "compareAtPrice": 89.0,
            "currency": "INR",
            "discountPercentage": 22,
            "rating": 4.7,
            "reviewCount": 227,
            "stock": 71,
            "sku": "NC-WAL-016",
            "featured": false,
            "isNew": false,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/wallet1/900/1100",
                "https://picsum.photos/seed/wallet2/900/1100"
            ],
            "colors": ["Black", "Brown", "Tan"],
            "sizes": ["Standard"],
            "tags": ["wallet", "leather", "travel", "accessories"],
            "features": [
                "Full-grain leather",
                "Multiple card slots",
                "Hidden cash pocket",
                "RFID protection",
                "Compact, slim design"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-6 business days"
            }
        },
        {
            "id": 17,
            "slug": "wireless-charge-stand",
            "name": "Wireless Charge Stand",
            "description": "A minimal charging stand for phones and earbuds, built to keep your desk tidy while you work or recharge overnight.",
            "shortDescription": "Minimal wireless charging stand for desk setups.",
            "category": "Electronics",
            "subcategory": "Accessories",
            "brand": "Arc & Beam",
            "price": 49.0,
            "compareAtPrice": 59.0,
            "currency": "INR",
            "discountPercentage": 17,
            "rating": 4.5,
            "reviewCount": 178,
            "stock": 62,
            "sku": "AB-CHG-017",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/chargestand1/900/1100",
                "https://picsum.photos/seed/chargestand2/900/1100"
            ],
            "colors": ["White", "Black", "Silver"],
            "sizes": ["Standard"],
            "tags": ["charging", "wireless", "desk", "technology"],
            "features": [
                "Qi wireless charging",
                "Stable aluminum base",
                "Adjustable viewing angle",
                "Non-slip padding",
                "USB-C power input"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "2-4 business days"
            }
        },
        {
            "id": 18,
            "slug": "nordic-throw-blanket",
            "name": "Nordic Throw Blanket",
            "description": "A soft woven throw with a contemporary woven texture. Designed for sofas, bedrooms, and reading corners with a cozy, lived-in feel.",
            "shortDescription": "Soft woven throw blanket in a modern Nordic style.",
            "category": "Home",
            "subcategory": "Textiles",
            "brand": "Hearth Studio",
            "price": 88.0,
            "compareAtPrice": 112.0,
            "currency": "INR",
            "discountPercentage": 21,
            "rating": 4.9,
            "reviewCount": 308,
            "stock": 45,
            "sku": "HS-BLANKET-018",
            "featured": true,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/blanket1/900/1100",
                "https://picsum.photos/seed/blanket2/900/1100"
            ],
            "colors": ["Ivory", "Graphite", "Dusty Blue"],
            "sizes": ["Single", "Queen"],
            "tags": ["blanket", "home", "textile", "cozy"],
            "features": [
                "Soft brushed knit",
                "Breathable texture",
                "Machine washable",
                "Modern woven pattern",
                "Ideal for layering"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-6 business days"
            }
        },
        {
            "id": 19,
            "slug": "travel-foam-pillow",
            "name": "Travel Foam Pillow",
            "description": "A supportive neck pillow with memory-foam contours designed for flights, trains, and restorative rest on the go.",
            "shortDescription": "Contoured travel pillow with memory-foam support.",
            "category": "Accessories",
            "subcategory": "Travel",
            "brand": "Restline",
            "price": 42.0,
            "compareAtPrice": 58.0,
            "currency": "INR",
            "discountPercentage": 28,
            "rating": 4.4,
            "reviewCount": 121,
            "stock": 90,
            "sku": "RL-PILLOW-019",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/pillow1/900/1100",
                "https://picsum.photos/seed/pillow2/900/1100"
            ],
            "colors": ["Black", "Ash", "Sand"],
            "sizes": ["Standard"],
            "tags": ["travel", "pillow", "comfort", "sleep"],
            "features": [
                "Memory foam neck support",
                "Washable cover",
                "Compact fold-flat design",
                "Soft touch fabric",
                "Carrying loop included"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "3-5 business days"
            }
        },
        {
            "id": 20,
            "slug": "daily-water-bottle",
            "name": "Daily Water Bottle",
            "description": "A corrosion-resistant insulated bottle that keeps drinks cold for up to 24 hours and fits neatly in standard cup holders and backpacks.",
            "shortDescription": "Insulated stainless steel bottle for everyday hydration.",
            "category": "Home",
            "subcategory": "Lifestyle",
            "brand": "Drift & Peak",
            "price": 39.0,
            "compareAtPrice": 49.0,
            "currency": "INR",
            "discountPercentage": 20,
            "rating": 4.8,
            "reviewCount": 411,
            "stock": 112,
            "sku": "DP-WATER-020",
            "featured": true,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/bottle1/900/1100",
                "https://picsum.photos/seed/bottle2/900/1100"
            ],
            "colors": ["Steel", "Forest", "Sky"],
            "sizes": ["500ml", "750ml"],
            "tags": ["bottle", "hydration", "travel", "daily"],
            "features": [
                "Vacuum insulated",
                "BPA-free lid",
                "Leak-proof twist cap",
                "Fits cup holders",
                "Stainless steel finish"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "3-5 business days"
            }
        },
        {
            "id": 21,
            "slug": "canvas-journal-set",
            "name": "Canvas Journal Set",
            "description": "A set of premium journals with thick paper stock, durable covers, and a minimalist layout suited for planning, sketching, and reflection.",
            "shortDescription": "Premium journal set for planning and creative notes.",
            "category": "Stationery",
            "subcategory": "Journals",
            "brand": "Paper Foundry",
            "price": 54.0,
            "compareAtPrice": 68.0,
            "currency": "INR",
            "discountPercentage": 21,
            "rating": 4.7,
            "reviewCount": 137,
            "stock": 50,
            "sku": "PF-JOURNAL-021",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/journal1/900/1100",
                "https://picsum.photos/seed/journal2/900/1100"
            ],
            "colors": ["Sand", "Slate", "Forest"],
            "sizes": ["A5", "B6"],
            "tags": ["journal", "stationery", "planning", "paper"],
            "features": [
                "Acid-free paper",
                "Lay-flat binding",
                "Hardcover canvas finish",
                "Thick 120 gsm sheet stock",
                "Elastic closure strap"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-7 business days"
            }
        },
        {
            "id": 22,
            "slug": "noise-canceling-earbuds",
            "name": "Noise-Cancelling Earbuds",
            "description": "Compact wireless earbuds with immersive sound, excellent call quality, and a pocket-friendly charging case for commuting and workouts.",
            "shortDescription": "Compact earbuds with premium sound and active noise cancellation.",
            "category": "Electronics",
            "subcategory": "Audio",
            "brand": "Aural",
            "price": 159.0,
            "compareAtPrice": 189.0,
            "currency": "INR",
            "discountPercentage": 16,
            "rating": 4.6,
            "reviewCount": 569,
            "stock": 44,
            "sku": "AU-EARB-022",
            "featured": true,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/earbuds1/900/1100",
                "https://picsum.photos/seed/earbuds2/900/1100"
            ],
            "colors": ["Black", "White", "Blue"],
            "sizes": ["One Size"],
            "tags": ["earbuds", "audio", "wireless", "noise-cancelling"],
            "features": [
                "Adaptive noise cancellation",
                "IPX4 water resistance",
                "Clear voice pickup",
                "USB-C charging case",
                "Up to 28 hours total playback"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "2-4 business days"
            }
        },
        {
            "id": 23,
            "slug": "ceramic-planter-set",
            "name": "Ceramic Planter Set",
            "description": "A pair of glazed ceramic planters with a matte finish and subtle organic form, ideal for herbs, cacti, and indoor greenery.",
            "shortDescription": "Matte ceramic planter set for modern indoor plants.",
            "category": "Home",
            "subcategory": "Decor",
            "brand": "Verdant Studio",
            "price": 67.0,
            "compareAtPrice": 84.0,
            "currency": "INR",
            "discountPercentage": 20,
            "rating": 4.5,
            "reviewCount": 116,
            "stock": 58,
            "sku": "VS-PLANT-023",
            "featured": false,
            "isNew": true,
            "isBestSeller": false,
            "images": [
                "https://picsum.photos/seed/planter1/900/1100",
                "https://picsum.photos/seed/planter2/900/1100"
            ],
            "colors": ["Terracotta", "Sage", "Stone"],
            "sizes": ["Small", "Medium"],
            "tags": ["planter", "home", "plants", "decor"],
            "features": [
                "Drainage hole option",
                "Hand-finished ceramic",
                "Indoor-safe glaze",
                "Lightweight shell",
                "Organic modern shape"
            ],
            "shipping": {
                "freeShipping": false,
                "estimatedDelivery": "4-6 business days"
            }
        },
        {
            "id": 24,
            "slug": "studio-monitor-speaker",
            "name": "Studio Monitor Speaker",
            "description": "A compact desktop speaker with detailed sound staging and a warm tonal balance designed for music lovers, creators, and focused work sessions.",
            "shortDescription": "Compact studio monitor speaker with rich balanced sound.",
            "category": "Electronics",
            "subcategory": "Audio",
            "brand": "Tone House",
            "price": 219.0,
            "compareAtPrice": 269.0,
            "currency": "INR",
            "discountPercentage": 19,
            "rating": 4.8,
            "reviewCount": 287,
            "stock": 19,
            "sku": "TH-SPEAK-024",
            "featured": true,
            "isNew": false,
            "isBestSeller": true,
            "images": [
                "https://picsum.photos/seed/speaker1/900/1100",
                "https://picsum.photos/seed/speaker2/900/1100",
                "https://picsum.photos/seed/speaker3/900/1100"
            ],
            "colors": ["Graphite", "Oak", "White"],
            "sizes": ["Single"],
            "tags": ["speaker", "audio", "desk", "studio"],
            "features": [
                "Balanced studio tuning",
                "Bluetooth and AUX connectivity",
                "Compact desktop footprint",
                "Rich bass output",
                "Premium matte finish"
            ],
            "shipping": {
                "freeShipping": true,
                "estimatedDelivery": "2-4 business days"
            }
        }
    ]
}


export default productData
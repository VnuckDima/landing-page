export const productsData = {
  beans: [
    {
      id: 'ethiopia-yirgacheffe',
      name: 'Ethiopia Yirgacheffe',
      basePrice: 18.50,
      desc: 'Bright citrus notes with floral aroma. Washed process.',
      shortDesc: 'Citrus, floral, washed.',
      img: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: {
          label: 'Grind Type',
          values: [
            { id: 'whole', label: 'Whole Bean', price: 0, desc: 'Best for freshness, grind before brewing' },
            { id: 'espresso', label: 'Espresso Grind', price: 0, desc: 'Fine, for espresso machines' },
            { id: 'filter', label: 'Filter Grind', price: 0, desc: 'Medium, for pour-over/drip' },
            { id: 'french', label: 'French Press Grind', price: 0, desc: 'Coarse, for french press' },
          ],
          default: 'whole',
        },
        size: {
          label: 'Bag Size',
          values: [
            { id: '250g', label: '250g', price: 0, desc: 'Sample size, ~15 cups' },
            { id: '500g', label: '500g', price: 6.00, desc: 'Standard, ~30 cups' },
            { id: '1kg', label: '1kg', price: 10.00, desc: 'Best value, ~60 cups' },
          ],
          default: '250g',
        },
        roast: {
          label: 'Roast Level',
          values: [
            { id: 'light', label: 'Light', price: 0, desc: 'Bright, acidic, fruity notes' },
            { id: 'medium', label: 'Medium', price: 0, desc: 'Balanced, caramel sweetness' },
            { id: 'dark', label: 'Dark', price: 0, desc: 'Bold, chocolate, low acidity' },
          ],
          default: 'medium',
        },
      },
    },
    {
      id: 'guatemala-antigua',
      name: 'Guatemala Antigua',
      basePrice: 16.00,
      desc: 'Full body with chocolate and smoky undertones.',
      shortDesc: 'Chocolate, smoky, full body.',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: {
          label: 'Grind Type',
          values: [
            { id: 'whole', label: 'Whole Bean', price: 0 },
            { id: 'espresso', label: 'Espresso Grind', price: 0 },
            { id: 'filter', label: 'Filter Grind', price: 0 },
            { id: 'french', label: 'French Press Grind', price: 0 },
          ],
          default: 'whole',
        },
        size: {
          label: 'Bag Size',
          values: [
            { id: '250g', label: '250g', price: 0 },
            { id: '500g', label: '500g', price: 5.00 },
            { id: '1kg', label: '1kg', price: 8.00 },
          ],
          default: '250g',
        },
        roast: {
          label: 'Roast Level',
          values: [
            { id: 'light', label: 'Light', price: 0 },
            { id: 'medium', label: 'Medium', price: 0 },
            { id: 'dark', label: 'Dark', price: 0 },
          ],
          default: 'dark',
        },
      },
    },
    {
      id: 'colombia-huila',
      name: 'Colombia Huila',
      basePrice: 15.50,
      desc: 'Red apple acidity with caramel sweetness.',
      shortDesc: 'Red apple, caramel, balanced.',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: {
          label: 'Grind Type',
          values: [
            { id: 'whole', label: 'Whole Bean', price: 0 },
            { id: 'espresso', label: 'Espresso Grind', price: 0 },
            { id: 'filter', label: 'Filter Grind', price: 0 },
            { id: 'french', label: 'French Press Grind', price: 0 },
          ],
          default: 'whole',
        },
        size: {
          label: 'Bag Size',
          values: [
            { id: '250g', label: '250g', price: 0 },
            { id: '500g', label: '500g', price: 4.50 },
            { id: '1kg', label: '1kg', price: 7.50 },
          ],
          default: '250g',
        },
        roast: {
          label: 'Roast Level',
          values: [
            { id: 'light', label: 'Light', price: 0 },
            { id: 'medium', label: 'Medium', price: 0 },
            { id: 'dark', label: 'Dark', price: 0 },
          ],
          default: 'medium',
        },
      },
    },
    {
      id: 'kenya-aa',
      name: 'Kenya AA',
      basePrice: 22.00,
      desc: 'Blackcurrant and winey acidity, bright finish.',
      shortDesc: 'Blackcurrant, winey, bright.',
      img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: { label: 'Grind Type', values: [{ id: 'whole', label: 'Whole Bean', price: 0 }, { id: 'espresso', label: 'Espresso Grind', price: 0 }, { id: 'filter', label: 'Filter Grind', price: 0 }, { id: 'french', label: 'French Press Grind', price: 0 }], default: 'whole' },
        size: { label: 'Bag Size', values: [{ id: '250g', label: '250g', price: 0 }, { id: '500g', label: '500g', price: 7.00 }, { id: '1kg', label: '1kg', price: 12.00 }], default: '250g' },
        roast: { label: 'Roast Level', values: [{ id: 'light', label: 'Light', price: 0 }, { id: 'medium', label: 'Medium', price: 0 }, { id: 'dark', label: 'Dark', price: 0 }], default: 'light' },
      },
    },
    {
      id: 'brazil-santos',
      name: 'Brazil Santos',
      basePrice: 14.00,
      desc: 'Nutty, low acidity, smooth chocolate notes.',
      shortDesc: 'Nutty, smooth, low acidity.',
      img: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: { label: 'Grind Type', values: [{ id: 'whole', label: 'Whole Bean', price: 0 }, { id: 'espresso', label: 'Espresso Grind', price: 0 }, { id: 'filter', label: 'Filter Grind', price: 0 }, { id: 'french', label: 'French Press Grind', price: 0 }], default: 'whole' },
        size: { label: 'Bag Size', values: [{ id: '250g', label: '250g', price: 0 }, { id: '500g', label: '500g', price: 4.00 }, { id: '1kg', label: '1kg', price: 6.50 }], default: '250g' },
        roast: { label: 'Roast Level', values: [{ id: 'light', label: 'Light', price: 0 }, { id: 'medium', label: 'Medium', price: 0 }, { id: 'dark', label: 'Dark', price: 0 }], default: 'medium' },
      },
    },
    {
      id: 'panama-geisha',
      name: 'Panama Geisha',
      basePrice: 45.00,
      desc: 'Jasmine, bergamot, peach — exceptional floral cup.',
      shortDesc: 'Jasmine, bergamot, peach.',
      img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: { label: 'Grind Type', values: [{ id: 'whole', label: 'Whole Bean', price: 0 }, { id: 'espresso', label: 'Espresso Grind', price: 0 }, { id: 'filter', label: 'Filter Grind', price: 0 }, { id: 'french', label: 'French Press Grind', price: 0 }], default: 'whole' },
        size: { label: 'Bag Size', values: [{ id: '100g', label: '100g', price: 0 }, { id: '250g', label: '250g', price: 15.00 }], default: '100g' },
        roast: { label: 'Roast Level', values: [{ id: 'light', label: 'Light', price: 0 }, { id: 'medium', label: 'Medium', price: 0 }], default: 'light' },
      },
    },
    {
      id: 'sumatra-mandheling',
      name: 'Sumatra Mandheling',
      basePrice: 17.00,
      desc: 'Earthy, herbal, full body with low acidity.',
      shortDesc: 'Earthy, herbal, full body.',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: { label: 'Grind Type', values: [{ id: 'whole', label: 'Whole Bean', price: 0 }, { id: 'espresso', label: 'Espresso Grind', price: 0 }, { id: 'filter', label: 'Filter Grind', price: 0 }, { id: 'french', label: 'French Press Grind', price: 0 }], default: 'whole' },
        size: { label: 'Bag Size', values: [{ id: '250g', label: '250g', price: 0 }, { id: '500g', label: '500g', price: 5.50 }, { id: '1kg', label: '1kg', price: 9.00 }], default: '250g' },
        roast: { label: 'Roast Level', values: [{ id: 'light', label: 'Light', price: 0 }, { id: 'medium', label: 'Medium', price: 0 }, { id: 'dark', label: 'Dark', price: 0 }], default: 'dark' },
      },
    },
    {
      id: 'costa-rica-tarrazu',
      name: 'Costa Rica Tarrazu',
      basePrice: 16.50,
      desc: 'Bright, crisp acidity with citrus and honey notes.',
      shortDesc: 'Citrus, honey, crisp.',
      img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
      category: 'beans',
      options: {
        grind: { label: 'Grind Type', values: [{ id: 'whole', label: 'Whole Bean', price: 0 }, { id: 'espresso', label: 'Espresso Grind', price: 0 }, { id: 'filter', label: 'Filter Grind', price: 0 }, { id: 'french', label: 'French Press Grind', price: 0 }], default: 'whole' },
        size: { label: 'Bag Size', values: [{ id: '250g', label: '250g', price: 0 }, { id: '500g', label: '500g', price: 5.00 }, { id: '1kg', label: '1kg', price: 8.50 }], default: '250g' },
        roast: { label: 'Roast Level', values: [{ id: 'light', label: 'Light', price: 0 }, { id: 'medium', label: 'Medium', price: 0 }, { id: 'dark', label: 'Dark', price: 0 }], default: 'medium' },
      },
    },
  ],
  drinks: [
    {
      id: 'caramel-macchiato',
      name: 'Caramel Macchiato',
      basePrice: 4.80,
      desc: 'Fragrant espresso with velvety milk and sweet caramel sauce.',
      shortDesc: 'Espresso, milk, caramel.',
      img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: {
          label: 'Size',
          values: [
            { id: 'small', label: 'Small (8oz)', price: -0.50, desc: 'Perfect quick pick-me-up' },
            { id: 'medium', label: 'Medium (12oz)', price: 0, desc: 'Standard size' },
            { id: 'large', label: 'Large (16oz)', price: 0.70, desc: 'Extra fuel for the day' },
          ],
          default: 'medium',
        },
        milk: {
          label: 'Milk',
          values: [
            { id: 'whole', label: 'Whole Milk', price: 0, desc: 'Classic, creamy' },
            { id: 'oat', label: 'Oat Milk', price: 0.60, desc: 'Creamy, naturally sweet' },
            { id: 'almond', label: 'Almond Milk', price: 0.60, desc: 'Light, nutty' },
            { id: 'soy', label: 'Soy Milk', price: 0.50, desc: 'Protein-rich' },
            { id: 'coconut', label: 'Coconut Milk', price: 0.70, desc: 'Tropical twist' },
          ],
          default: 'whole',
        },
        syrup: {
          label: 'Extra Syrup',
          values: [
            { id: 'none', label: 'None', price: 0 },
            { id: 'caramel', label: 'Extra Caramel', price: 0.50 },
            { id: 'vanilla', label: 'Vanilla', price: 0.50 },
            { id: 'hazelnut', label: 'Hazelnut', price: 0.50 },
          ],
          default: 'none',
        },
        ice: {
          label: 'Temperature',
          values: [
            { id: 'hot', label: 'Hot', price: 0 },
            { id: 'iced', label: 'Iced', price: 0 },
          ],
          default: 'hot',
        },
      },
    },
    {
      id: 'iced-vanilla-latte',
      name: 'Iced Vanilla Latte',
      basePrice: 5.20,
      desc: 'Chilled espresso with milk, vanilla syrup and ice.',
      shortDesc: 'Espresso, vanilla, ice.',
      img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: { label: 'Size', values: [{ id: 'small', label: 'Small (8oz)', price: -0.50 }, { id: 'medium', label: 'Medium (12oz)', price: 0 }, { id: 'large', label: 'Large (16oz)', price: 0.70 }], default: 'medium' },
        milk: { label: 'Milk', values: [{ id: 'whole', label: 'Whole Milk', price: 0 }, { id: 'oat', label: 'Oat Milk', price: 0.60 }, { id: 'almond', label: 'Almond Milk', price: 0.60 }, { id: 'soy', label: 'Soy Milk', price: 0.50 }], default: 'whole' },
        syrup: { label: 'Extra Syrup', values: [{ id: 'none', label: 'None', price: 0 }, { id: 'vanilla', label: 'Extra Vanilla', price: 0.50 }, { id: 'caramel', label: 'Caramel', price: 0.50 }], default: 'none' },
        ice: { label: 'Ice Level', values: [{ id: 'regular', label: 'Regular', price: 0 }, { id: 'light', label: 'Light Ice', price: 0 }, { id: 'extra', label: 'Extra Ice', price: 0 }], default: 'regular' },
      },
    },
    {
      id: 'flat-white',
      name: 'Flat White',
      basePrice: 4.50,
      desc: 'Double shot espresso with velvety microfoam.',
      shortDesc: 'Double shot, microfoam.',
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: { label: 'Size', values: [{ id: 'small', label: 'Small (6oz)', price: -0.30 }, { id: 'medium', label: 'Medium (8oz)', price: 0 }], default: 'medium' },
        milk: { label: 'Milk', values: [{ id: 'whole', label: 'Whole Milk', price: 0 }, { id: 'oat', label: 'Oat Milk', price: 0.60 }], default: 'whole' },
        shots: { label: 'Espresso Shots', values: [{ id: 'double', label: 'Double (Standard)', price: 0 }, { id: 'triple', label: 'Triple', price: 0.80 }], default: 'double' },
      },
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      basePrice: 4.00,
      desc: '12-hour steeped, smooth, naturally low acidity.',
      shortDesc: '12h steeped, smooth.',
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: { label: 'Size', values: [{ id: 'small', label: 'Small (12oz)', price: -0.50 }, { id: 'medium', label: 'Medium (16oz)', price: 0 }, { id: 'large', label: 'Large (24oz)', price: 1.00 }], default: 'medium' },
        milk: { label: 'Add Milk', values: [{ id: 'none', label: 'Black', price: 0 }, { id: 'splash', label: 'Splash of Milk', price: 0.30 }, { id: 'oat', label: 'Oat Milk', price: 0.60 }], default: 'none' },
        sweetener: { label: 'Sweetener', values: [{ id: 'none', label: 'None', price: 0 }, { id: 'simple', label: 'Simple Syrup', price: 0.30 }, { id: 'vanilla', label: 'Vanilla Syrup', price: 0.50 }], default: 'none' },
      },
    },
    {
      id: 'americano',
      name: 'Americano',
      basePrice: 3.50,
      desc: 'Espresso diluted with hot water.',
      shortDesc: 'Espresso + hot water.',
      img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: { label: 'Size', values: [{ id: 'small', label: 'Small (8oz)', price: -0.30 }, { id: 'medium', label: 'Medium (12oz)', price: 0 }, { id: 'large', label: 'Large (16oz)', price: 0.50 }], default: 'medium' },
        shots: { label: 'Espresso Shots', values: [{ id: 'double', label: 'Double', price: 0 }, { id: 'triple', label: 'Triple', price: 0.80 }], default: 'double' },
        water: { label: 'Water Ratio', values: [{ id: 'standard', label: 'Standard (1:2)', price: 0 }, { id: 'long', label: 'Long (1:3)', price: 0 }], default: 'standard' },
      },
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      basePrice: 4.20,
      desc: 'Espresso with thick foam and cocoa dust.',
      shortDesc: 'Espresso, foam, cocoa.',
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: { label: 'Size', values: [{ id: 'small', label: 'Small (6oz)', price: -0.30 }, { id: 'medium', label: 'Medium (8oz)', price: 0 }], default: 'medium' },
        milk: { label: 'Milk', values: [{ id: 'whole', label: 'Whole Milk', price: 0 }, { id: 'oat', label: 'Oat Milk', price: 0.60 }], default: 'whole' },
        foam: { label: 'Foam Style', values: [{ id: 'classic', label: 'Classic Thick', price: 0 }, { id: 'dry', label: 'Extra Dry', price: 0 }], default: 'classic' },
      },
    },
    {
      id: 'latte',
      name: 'Latte',
      basePrice: 4.50,
      desc: 'Espresso with steamed milk, light foam.',
      shortDesc: 'Espresso, steamed milk.',
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: { label: 'Size', values: [{ id: 'small', label: 'Small (8oz)', price: -0.50 }, { id: 'medium', label: 'Medium (12oz)', price: 0 }, { id: 'large', label: 'Large (16oz)', price: 0.70 }], default: 'medium' },
        milk: { label: 'Milk', values: [{ id: 'whole', label: 'Whole Milk', price: 0 }, { id: 'oat', label: 'Oat Milk', price: 0.60 }, { id: 'almond', label: 'Almond Milk', price: 0.60 }], default: 'whole' },
        flavor: { label: 'Flavor Shot', values: [{ id: 'none', label: 'None', price: 0 }, { id: 'vanilla', label: 'Vanilla', price: 0.50 }, { id: 'caramel', label: 'Caramel', price: 0.50 }, { id: 'hazelnut', label: 'Hazelnut', price: 0.50 }], default: 'none' },
      },
    },
    {
      id: 'mocha',
      name: 'Mocha',
      basePrice: 5.00,
      desc: 'Espresso, chocolate, steamed milk, whipped cream.',
      shortDesc: 'Espresso, chocolate, milk.',
      img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
      category: 'drinks',
      options: {
        size: { label: 'Size', values: [{ id: 'small', label: 'Small (8oz)', price: -0.50 }, { id: 'medium', label: 'Medium (12oz)', price: 0 }, { id: 'large', label: 'Large (16oz)', price: 0.70 }], default: 'medium' },
        milk: { label: 'Milk', values: [{ id: 'whole', label: 'Whole Milk', price: 0 }, { id: 'oat', label: 'Oat Milk', price: 0.60 }], default: 'whole' },
        chocolate: { label: 'Chocolate', values: [{ id: 'dark', label: 'Dark Chocolate', price: 0 }, { id: 'milk', label: 'Milk Chocolate', price: 0 }, { id: 'white', label: 'White Chocolate', price: 0.30 }], default: 'dark' },
        whip: { label: 'Whipped Cream', values: [{ id: 'yes', label: 'Yes', price: 0 }, { id: 'no', label: 'No', price: 0 }], default: 'yes' },
      },
    },
  ],
  gear: [
    {
      id: 'aeropress-go',
      name: 'AeroPress Go',
      basePrice: 39.00,
      desc: 'Portable coffee maker, brews in 1 minute. Includes mug and case.',
      shortDesc: 'Portable, 1 min brew.',
      img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        color: {
          label: 'Color',
          values: [
            { id: 'gray', label: 'Gray', price: 0, img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80' },
            { id: 'red', label: 'Red', price: 0, img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80' },
            { id: 'blue', label: 'Blue', price: 0, img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80' },
          ],
          default: 'gray',
        },
        bundle: {
          label: 'Bundle',
          values: [
            { id: 'standard', label: 'Standard (Press + Mug)', price: 0 },
            { id: 'plus', label: 'Plus (Press + Mug + Filters + Tote)', price: 15.00 },
          ],
          default: 'standard',
        },
      },
    },
    {
      id: 'hario-v60',
      name: 'Hario V60 Dripper',
      basePrice: 24.00,
      desc: 'Iconic pour-over cone, spiral ribs for even extraction.',
      shortDesc: 'Pour-over cone, glass.',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        material: {
          label: 'Material',
          values: [
            { id: 'glass', label: 'Glass', price: 0, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
            { id: 'ceramic', label: 'Ceramic', price: 8.00, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
            { id: 'plastic', label: 'Plastic', price: -5.00, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
            { id: 'metal', label: 'Stainless Steel', price: 18.00, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
          ],
          default: 'glass',
        },
        size: {
          label: 'Size',
          values: [
            { id: '01', label: 'Size 01 (1-2 cups)', price: 0 },
            { id: '02', label: 'Size 02 (1-4 cups)', price: 4.00 },
            { id: '03', label: 'Size 03 (1-6 cups)', price: 8.00 },
          ],
          default: '02',
        },
        filters: {
          label: 'Filter Pack',
          values: [
            { id: 'none', label: 'No Filters', price: 0 },
            { id: '100', label: '100 White Filters', price: 6.00 },
            { id: '200', label: '200 White Filters', price: 10.00 },
          ],
          default: 'none',
        },
      },
    },
    {
      id: 'baratza-encore',
      name: 'Baratza Encore',
      basePrice: 149.00,
      desc: 'Entry-level conical burr grinder, 40 grind settings.',
      shortDesc: 'Conical burr, 40 settings.',
      img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        color: {
          label: 'Color',
          values: [
            { id: 'black', label: 'Black', price: 0 },
            { id: 'white', label: 'White', price: 0 },
          ],
          default: 'black',
        },
        burr: {
          label: 'Burr Set',
          values: [
            { id: 'standard', label: 'Standard Steel', price: 0 },
            { id: 'm2', label: 'M2 Upgrade (Faster, Cleaner)', price: 45.00 },
          ],
          default: 'standard',
        },
      },
    },
    {
      id: 'fellow-stagg-ekg',
      name: 'Fellow Stagg EKG',
      basePrice: 165.00,
      desc: 'Precision gooseneck kettle, variable temperature, LCD display.',
      shortDesc: 'Variable temp, gooseneck.',
      img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        finish: {
          label: 'Finish',
          values: [
            { id: 'matte-black', label: 'Matte Black', price: 0 },
            { id: 'polished-steel', label: 'Polished Steel', price: 10.00 },
            { id: 'copper', label: 'Copper', price: 25.00 },
            { id: 'walnut', label: 'Walnut Accent', price: 20.00 },
          ],
          default: 'matte-black',
        },
        base: {
          label: 'Base',
          values: [
            { id: 'standard', label: 'Standard Base', price: 0 },
            { id: 'walnut', label: 'Walnut Base', price: 30.00 },
          ],
          default: 'standard',
        },
      },
    },
    {
      id: 'chemex-6',
      name: 'Chemex 6-Cup',
      basePrice: 42.00,
      desc: 'Elegant glass pour-over brewer, uses bonded filters.',
      shortDesc: 'Glass pour-over, 6 cups.',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        size: {
          label: 'Size',
          values: [
            { id: '3cup', label: '3 Cup', price: -8.00 },
            { id: '6cup', label: '6 Cup', price: 0 },
            { id: '8cup', label: '8 Cup', price: 8.00 },
            { id: '10cup', label: '10 Cup', price: 15.00 },
          ],
          default: '6cup',
        },
        collar: {
          label: 'Collar & Tie',
          values: [
            { id: 'wood', label: 'Wood + Leather', price: 0 },
            { id: 'glass', label: 'Glass Handle', price: 5.00 },
          ],
          default: 'wood',
        },
        filters: {
          label: 'Filters',
          values: [
            { id: 'none', label: 'No Filters', price: 0 },
            { id: '100', label: '100 Bonded Filters', price: 12.00 },
          ],
          default: 'none',
        },
      },
    },
    {
      id: 'timemore-c2',
      name: 'Timemore C2',
      basePrice: 79.00,
      desc: 'Compact hand grinder, steel burrs, stepped adjustment.',
      shortDesc: 'Hand burr grinder.',
      img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        color: {
          label: 'Color',
          values: [
            { id: 'black', label: 'Black', price: 0 },
            { id: 'silver', label: 'Silver', price: 0 },
            { id: 'chestnut', label: 'Chestnut', price: 5.00 },
          ],
          default: 'black',
        },
        burr: {
          label: 'Burr Type',
          values: [
            { id: 'steel', label: 'Steel Burrs', price: 0 },
            { id: 'titanium', label: 'Titanium Coated', price: 20.00 },
          ],
          default: 'steel',
        },
      },
    },
    {
      id: 'scale-01g',
      name: 'Precision Scale 0.1g',
      basePrice: 28.00,
      desc: 'Brewing scale with timer, auto-tare, USB-C rechargeable.',
      shortDesc: 'Scale with timer, 0.1g.',
      img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        color: {
          label: 'Color',
          values: [
            { id: 'black', label: 'Black', price: 0 },
            { id: 'white', label: 'White', price: 0 },
          ],
          default: 'black',
        },
        mode: {
          label: 'Mode',
          values: [
            { id: 'standard', label: 'Standard (Timer + Weight)', price: 0 },
            { id: 'pro', label: 'Pro (Flow Rate + BT)', price: 22.00 },
          ],
          default: 'standard',
        },
      },
    },
    {
      id: 'tamper-58mm',
      name: 'Tamper 58mm',
      basePrice: 19.00,
      desc: 'Stainless steel espresso tamper, ergonomic handle.',
      shortDesc: '58mm stainless tamper.',
      img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      category: 'gear',
      options: {
        handle: {
          label: 'Handle',
          values: [
            { id: 'aluminum', label: 'Aluminum', price: 0 },
            { id: 'wood', label: 'Walnut Wood', price: 8.00 },
            { id: 'titanium', label: 'Titanium', price: 15.00 },
          ],
          default: 'aluminum',
        },
        base: {
          label: 'Base',
          values: [
            { id: 'flat', label: 'Flat', price: 0 },
            { id: 'convex', label: 'Convex (Ripple)', price: 5.00 },
          ],
          default: 'flat',
        },
      },
    },
  ],
};

export const categories = [
  { key: 'beans', label: 'Coffee Beans' },
  { key: 'drinks', label: 'Hot & Cold Drinks' },
  { key: 'gear', label: 'Brewing Gear' },
];

export function getProductById(id) {
  for (const cat of Object.values(productsData)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

export function getProductsByCategory(category) {
  return productsData[category] || [];
}

export function calculatePrice(product, selections) {
  let total = product.basePrice;
  for (const [key, value] of Object.entries(selections)) {
    const option = product.options[key];
    if (!option) continue;
    const selected = option.values.find(v => v.id === value);
    if (selected && selected.price) total += selected.price;
  }
  return total;
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}
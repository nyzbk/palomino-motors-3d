export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  engine: string;
  horsepower: string;
  acceleration: string;
  transmission: string;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  status: 'In Showroom' | 'Reserved' | 'In Transit';
  image: string;
  tags: string[];
  description: string;
}

export const INVENTORY_DATA: Vehicle[] = [
  {
    id: 'ferrari-488-spider',
    make: 'Ferrari',
    model: '488 Spider Carbon Corsa',
    year: 2021,
    price: '$289,900',
    mileage: '4,180 mi',
    engine: '3.9L Twin-Turbocharged V8',
    horsepower: '661 HP',
    acceleration: '0-60 in 3.0s',
    transmission: '7-Speed Dual-Clutch F1',
    exteriorColor: 'Rosso Corsa',
    interiorColor: 'Cuoio Full Leather with Contrast Stitching',
    vin: 'ZFF79LLA0K0249811',
    status: 'In Showroom',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=85',
    tags: ['Carbon Package', 'Scuderia Shields', 'Daytona Seats'],
    description: 'Documented single-owner Ferrari 488 Spider with full carbon aerodynamic package, sports exhaust, and complete factory service provenance.'
  },
  {
    id: 'porsche-911-gt3-rs',
    make: 'Porsche',
    model: '911 GT3 RS Weissach Package',
    year: 2024,
    price: '$349,500',
    mileage: '940 mi',
    engine: '4.0L Naturally Aspirated Boxer-6',
    horsepower: '518 HP',
    acceleration: '0-60 in 3.0s',
    transmission: '7-Speed Porsche Doppelkupplung (PDK)',
    exteriorColor: 'Shark Blue with Satin Black Wheels',
    interiorColor: 'Black Leather & Race-Tex with GT Silver Stitching',
    vin: 'WP0AF2A97RS284102',
    status: 'In Showroom',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    tags: ['Weissach Package', 'Ceramic Composite Brakes (PCCB)', 'Front Axle Lift'],
    description: 'Pristine 992 GT3 RS featuring magnesium wheels, exposed carbon fiber bonnet and roof, and Porsche Ceramic Composite Brakes.'
  },
  {
    id: 'rolls-royce-ghost',
    make: 'Rolls-Royce',
    model: 'Ghost Extended Luxury Saloon',
    year: 2023,
    price: '$395,000',
    mileage: '1,920 mi',
    engine: '6.75L Twin-Turbocharged V12',
    horsepower: '563 HP',
    acceleration: '0-60 in 4.6s',
    transmission: '8-Speed Satellite Aided Transmission',
    exteriorColor: 'Diamond Black with Mandarin Coachline',
    interiorColor: 'Mandarin & Scivaro Grey with Open Pore Obsidian Wood',
    vin: 'SCA664D00PU118742',
    status: 'In Showroom',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
    tags: ['Shooting Star Headliner', 'Rear Theater Configuration', 'Effortless Doors'],
    description: 'Bespoke extended wheelbase Ghost with illuminated fascia, immersive rear entertainment, and lambswool floor mats.'
  },
  {
    id: 'lamborghini-huracan-evo',
    make: 'Lamborghini',
    model: 'Huracán EVO Spyder',
    year: 2022,
    price: '$318,000',
    mileage: '2,840 mi',
    engine: '5.2L Naturally Aspirated V10',
    horsepower: '631 HP',
    acceleration: '0-60 in 2.9s',
    transmission: '7-Speed LDF Dual-Clutch',
    exteriorColor: 'Grigio Telesto',
    interiorColor: 'Nero Ade & Verde Fauns Alcantara',
    vin: 'ZHWEF6ZF7NLA13904',
    status: 'In Showroom',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85',
    tags: ['Sport Exhaust', 'Lifting System', 'Sensonum Premium Audio'],
    description: 'Breathtaking naturally aspirated V10 symphony paired with all-wheel steering, magnetic suspension, and carbon ceramic stopping power.'
  },
  {
    id: 'mercedes-amg-g63',
    make: 'Mercedes-AMG',
    model: 'G 63 4MATIC Edition',
    year: 2023,
    price: '$224,900',
    mileage: '3,450 mi',
    engine: '4.0L Handcrafted AMG Biturbo V8',
    horsepower: '577 HP',
    acceleration: '0-60 in 4.5s',
    transmission: 'AMG SPEEDSHIFT PLUS 9G-TRONIC',
    exteriorColor: 'Night Black Magno (Matte)',
    interiorColor: 'Bengal Red & Black Exclusive Nappa Leather',
    vin: 'W1NYH88H5PF394018',
    status: 'In Showroom',
    image: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=1200&q=85',
    tags: ['AMG Night Package', '22-inch Forged Cross-Spoke Wheels', 'Burmester Surround Sound'],
    description: 'Factory matte exterior finish, dual side-exit exhaust system, and diamond-quilted leather seats.'
  },
  {
    id: 'mclaren-720s',
    make: 'McLaren',
    model: '720S Performance Coupe',
    year: 2021,
    price: '$274,500',
    mileage: '3,120 mi',
    engine: '4.0L Twin-Turbocharged V8',
    horsepower: '710 HP',
    acceleration: '0-60 in 2.7s',
    transmission: '7-Speed Seamless Shift Gearbox (SSG)',
    exteriorColor: 'Papaya Spark Metallic',
    interiorColor: 'Carbon Black Alcantara & Scoria Grey',
    vin: 'SBM14BAA2MW003412',
    status: 'In Showroom',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=85',
    tags: ['Carbon Fibre Monocage II', 'Variable Drift Control', 'Telemetry System'],
    description: 'Pinnacle British engineering with active aero wing, dihedral soft-close doors, and full vehicle front paint protection film.'
  }
];

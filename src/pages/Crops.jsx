import { useState } from 'react';
import { Sprout, X, MapPin, Thermometer, Beaker, IndianRupee, Lightbulb } from 'lucide-react';

const cropsData = [
  {
    id: 1,
    name: "Rice (Paddy)",
    type: "Cereal",
    image: "https://via.placeholder.com/400x300/86efac/000000?text=Rice",
    districts: "Mandya, Mysuru, Hassan, Raichur, Ballari, Shivamogga, Udupi, Dakshina Kannada",
    climate: "Needs plenty of water and warm weather. Clay or wet soils.",
    fertilizers: "Urea, DAP, MOP in 3 stages",
    price: "₹2,350/q",
    bestPractice: "Maintain standing water during growth; control weeds early."
  },
  {
    id: 2,
    name: "Ragi (Finger Millet)",
    type: "Millet",
    image: "https://via.placeholder.com/400x300/a78bfa/000000?text=Ragi",
    districts: "Mandya, Ramanagara, Chitradurga, Tumakuru, Hassan, Kolar",
    climate: "Dry areas with moderate rain. Red/loamy soils.",
    fertilizers: "DAP, small Urea, MOP if needed",
    price: "₹4,100/q",
    bestPractice: "Use drought-resistant seeds; apply mulch to save moisture."
  },
  {
    id: 3,
    name: "Jowar (Sorghum)",
    type: "Millet",
    image: "https://via.placeholder.com/400x300/fbbf24/000000?text=Jowar",
    districts: "Vijayapura, Kalaburagi, Bagalkote, Dharwad, Belagavi",
    climate: "Warm & dry. Black/red loamy soils.",
    fertilizers: "DAP at sowing, Urea later",
    price: "₹2,850/q",
    bestPractice: "Rotate with pulses; sow before heavy rains for better yield."
  },
  {
    id: 4,
    name: "Wheat",
    type: "Cereal",
    image: "https://via.placeholder.com/400x300/fb923c/000000?text=Wheat",
    districts: "Vijayapura, Belagavi, Dharwad, Ballari",
    climate: "Cool rabi season. Well-drained loamy soil.",
    fertilizers: "DAP, Urea twice later",
    price: "₹3,150/q",
    bestPractice: "Irrigate at critical stages like tillering & grain filling."
  },
  {
    id: 5,
    name: "Red Gram (Tur)",
    type: "Pulse",
    image: "https://via.placeholder.com/400x300/f87171/000000?text=Red+Gram",
    districts: "Kalaburagi, Bidar, Raichur, Koppal, Ballari",
    climate: "Warm, semi-dry. Black or loamy soils.",
    fertilizers: "DAP/SSP, low nitrogen",
    price: "₹7,000/q",
    bestPractice: "Intercrop with jowar; keep spacing wide for sunlight."
  },
  {
    id: 6,
    name: "Green Gram (Moong)",
    type: "Pulse",
    image: "https://via.placeholder.com/400x300/4ade80/000000?text=Green+Gram",
    districts: "Vijayapura, Raichur, Koppal, Kalaburagi",
    climate: "Warm short-season. Sandy loam soils.",
    fertilizers: "DAP/SSP, minimal nitrogen",
    price: "₹4,700-7,500/q",
    bestPractice: "Use certified seed; harvest when 80% pods turn black."
  },
  {
    id: 7,
    name: "Groundnut (Peanut)",
    type: "Oilseed",
    image: "https://via.placeholder.com/400x300/d97706/000000?text=Groundnut",
    districts: "Raichur, Koppal, Tumakuru, Chitradurga, Ballari, Dharwad",
    climate: "Warm, dry. Sandy loam soils.",
    fertilizers: "Gypsum, SSP, Urea, micronutrients",
    price: "₹5,150-5,800/q",
    bestPractice: "Use gypsum at flowering; avoid excess irrigation."
  },
  {
    id: 8,
    name: "Sunflower",
    type: "Oilseed",
    image: "https://via.placeholder.com/400x300/facc15/000000?text=Sunflower",
    districts: "Koppal, Ballari, Raichur, Davanagere, Tumakuru",
    climate: "Sunny, moderate rain. Loamy soils.",
    fertilizers: "DAP, Urea, MOP",
    price: "₹6,200-6,400/q",
    bestPractice: "Ensure good sunlight; rotate crop to prevent pest buildup."
  },
  {
    id: 9,
    name: "Sesame (Til)",
    type: "Oilseed",
    image: "https://via.placeholder.com/400x300/e5e7eb/000000?text=Sesame",
    districts: "Chitradurga, Tumakuru, Mandya, Mysuru, Ballari",
    climate: "Warm; light, well-drained soils.",
    fertilizers: "SSP, MOP, small Urea",
    price: "₹4,900-7,100/q",
    bestPractice: "Sow in rows; harvest before pods shatter."
  },
  {
    id: 10,
    name: "Castor",
    type: "Oilseed",
    image: "https://via.placeholder.com/400x300/7c3aed/000000?text=Castor",
    districts: "Koppal, Raichur, Bagalkote, Gadag",
    climate: "Hot, dry. Black/red soils.",
    fertilizers: "DAP, Urea, MOP moderate",
    price: "₹5,000-6,100/q",
    bestPractice: "Keep field weed-free; avoid waterlogging."
  },
  {
    id: 11,
    name: "Sugarcane",
    type: "Cash Crop",
    image: "https://via.placeholder.com/400x300/10b981/000000?text=Sugarcane",
    districts: "Belagavi, Mandya, Bagalkote, Ballari, Davanagere, Mysuru",
    climate: "Plenty of sun & water. Fertile soil.",
    fertilizers: "Urea, DAP, MOP (4-5 splits)",
    price: "₹355/q (FRP)",
    bestPractice: "Use sets from healthy canes; maintain regular irrigation."
  },
  {
    id: 12,
    name: "Cotton",
    type: "Fibre",
    image: "https://via.placeholder.com/400x300/f3f4f6/000000?text=Cotton",
    districts: "Raichur, Ballari, Koppal, Kalaburagi, Dharwad, Belagavi",
    climate: "Warm. Black cotton soils.",
    fertilizers: "DAP, Urea, MOP, micronutrients",
    price: "₹6,800-8,100/q",
    bestPractice: "Use Bt seeds; control bollworm."
  },
  {
    id: 13,
    name: "Coffee",
    type: "Plantation Crop",
    image: "https://via.placeholder.com/400x300/92400e/000000?text=Coffee",
    districts: "Kodagu, Chikkamagaluru, Hassan",
    climate: "Cool, shaded hills; well-drained loamy soil.",
    fertilizers: "Organic compost, Urea, SSP",
    price: "₹30,000-35,000/q",
    bestPractice: "Maintain shade trees and prune branches regularly."
  },
  {
    id: 14,
    name: "Arecanut (Supari)",
    type: "Plantation Crop",
    image: "https://via.placeholder.com/400x300/b45309/000000?text=Arecanut",
    districts: "Shivamogga, Chikkamagaluru, Uttara Kannada",
    climate: "Humid and warm; red loamy soil.",
    fertilizers: "DAP, Urea, MOP",
    price: "₹45,000-52,000/q",
    bestPractice: "Provide irrigation and protect from stem borer insects."
  },
  {
    id: 15,
    name: "Mango",
    type: "Fruit Crop",
    image: "https://via.placeholder.com/400x300/fbbf24/000000?text=Mango",
    districts: "Kolar, Ramanagara, Dharwad, Chikkaballapur",
    climate: "Warm climate; well-drained soil.",
    fertilizers: "FYM, Urea, SSP",
    price: "₹2,000-3,000/q",
    bestPractice: "Prune after harvest and avoid overwatering."
  },
  {
    id: 16,
    name: "Pepper (Black Pepper)",
    type: "Spice Crop",
    image: "https://via.placeholder.com/400x300/1f2937/000000?text=Pepper",
    districts: "Kodagu, Uttara Kannada, Hassan",
    climate: "Humid hills; laterite or loamy soil.",
    fertilizers: "Organic manure, SSP",
    price: "₹50,000-55,000/q",
    bestPractice: "Train vines on live supports and control fungal diseases."
  },
  {
    id: 17,
    name: "Cardamom",
    type: "Spice Crop",
    image: "https://via.placeholder.com/400x300/84cc16/000000?text=Cardamom",
    districts: "Kodagu, Chikkamagaluru, Hassan",
    climate: "Cool, shaded; rich forest soil.",
    fertilizers: "Organic manure, NPK mixture",
    price: "₹14,000-18,000/kg",
    bestPractice: "Provide regular shade and maintain moisture."
  },
  {
    id: 18,
    name: "Maize (Corn)",
    type: "Cereal Crop",
    image: "https://via.placeholder.com/400x300/facc15/000000?text=Maize",
    districts: "Davanagere, Haveri, Hassan, Belagavi, Chitradurga",
    climate: "Warm; red loamy or black soil.",
    fertilizers: "DAP, Urea, MOP",
    price: "₹2,100-2,400/q",
    bestPractice: "Rotate with pulses and use hybrid seeds."
  },
  {
    id: 19,
    name: "Urad Dal (Black Gram)",
    type: "Pulse",
    image: "https://via.placeholder.com/400x300/374151/000000?text=Urad+Dal",
    districts: "Ballari, Koppal, Raichur, Kalaburagi",
    climate: "Warm and dry; loamy soil.",
    fertilizers: "DAP, SSP",
    price: "₹7,000-7,500/q",
    bestPractice: "Avoid water logging and weeds at an early stage."
  },
  {
    id: 20,
    name: "Huruli (Horse Gram)",
    type: "Pulse",
    image: "https://via.placeholder.com/400x300/dc2626/000000?text=Horse+Gram",
    districts: "Chitradurga, Tumakuru, Hassan",
    climate: "Dry; red loamy soil.",
    fertilizers: "DAP, Urea",
    price: "₹5,000-6,000/q",
    bestPractice: "Suitable for dryland farming, use organic manure."
  },
  {
    id: 21,
    name: "Bengal Gram (Chickpea)",
    type: "Pulse",
    image: "https://via.placeholder.com/400x300/f59e0b/000000?text=Bengal+Gram",
    districts: "Kalaburagi, Vijayapura, Bagalkote",
    climate: "Cool and dry; black cotton soil.",
    fertilizers: "DAP, SSP",
    price: "₹4,800-5,200/q",
    bestPractice: "Avoid excess watering and rotate with cereals."
  },
  {
    id: 22,
    name: "Tobacco",
    type: "Commercial Crop",
    image: "https://via.placeholder.com/400x300/78350f/000000?text=Tobacco",
    districts: "Mysuru, Hassan, Belagavi, Chitradurga",
    climate: "Dry climate; sandy or loamy soil.",
    fertilizers: "NPK mixture",
    price: "₹140-180/kg",
    bestPractice: "Cure leaves properly and avoid over-fertilising."
  },
  {
    id: 23,
    name: "Banana",
    type: "Fruit Crop",
    image: "https://via.placeholder.com/400x300/fde047/000000?text=Banana",
    districts: "Kolar, Mandya, Chikkamagaluru, Mysuru",
    climate: "Warm and moist; alluvial or loamy soil.",
    fertilizers: "FYM, Urea, MOP",
    price: "₹1,000-1,200 per bunch",
    bestPractice: "Provide irrigation, mulch soil, and support bunches."
  }
];

const Crops = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="w-full max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Sprout size={18} />
              <span className="font-semibold text-sm uppercase tracking-wider">Karnataka Crops</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Major Crops of Karnataka
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore detailed information about 23 major crops cultivated across Karnataka
            </p>
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="relative w-full bg-gradient-to-b from-green-50 to-white py-12">
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cropsData.map((crop) => (
                <div
                  key={crop.id}
                  onClick={() => setSelectedCrop(crop)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-green-700">
                      {crop.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {crop.name}
                    </h3>
                    <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mb-3">
                      <IndianRupee size={14} />
                      <span>{crop.price}</span>
                    </div>
                    <button className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors flex items-center gap-1">
                      View Details
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl">
            <div className="relative">
              <img
                src={selectedCrop.image}
                alt={selectedCrop.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedCrop(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X size={24} className="text-gray-700" />
              </button>
              <div className="absolute bottom-4 left-6 bg-white px-4 py-2 rounded-full text-sm font-semibold text-green-700">
                {selectedCrop.type}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {selectedCrop.name}
              </h2>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <MapPin className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Main Districts</h3>
                    <p className="text-gray-600">{selectedCrop.districts}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Thermometer className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Climate & Soil</h3>
                    <p className="text-gray-600">{selectedCrop.climate}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Beaker className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Recommended Fertilizers</h3>
                    <p className="text-gray-600">{selectedCrop.fertilizers}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <IndianRupee className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Approximate Market Price</h3>
                    <p className="text-gray-600 text-lg font-semibold text-green-700">{selectedCrop.price}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Lightbulb className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Best Practice</h3>
                    <p className="text-gray-600">{selectedCrop.bestPractice}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCrop(null)}
                className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crops;
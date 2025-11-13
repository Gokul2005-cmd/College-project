import { useState } from 'react';
import { FileText, Users, Award, CheckCircle2, Droplets, Heart, Sprout, Shield, DollarSign, TrendingUp, X, ExternalLink, Youtube } from 'lucide-react';

const GovernmentSchemes = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const schemes = [
    {
      title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
      category: "Irrigation",
      shortDescription: "Extending irrigation coverage with 'Har Khet ko pani' and improving water use efficiency with 'More crop per drop'",
      description: "Government of India is committed to accord high priority to water conservation and its management. PMKSY has been formulated with the vision of extending the coverage of irrigation and improving water use efficiency in a focused manner with end to end solution on source creation, distribution, management, field application and extension activities.",
      eligibility: [
        "Must be an Indian farmer",
        "Should have agricultural land",
        "Must be located in areas selected by the state government",
        "Cooperative societies, panchayats, and FPOs are also eligible"
      ],
      benefits: [
        "Irrigation facilities using modern technologies like drip and sprinkler irrigation",
        "Water conservation through harvesting and recharge structures",
        "Increase in production with better quality and quantity",
        "More profit at lower cost through precision irrigation"
      ],
      websiteLink: "https://pmksy.gov.in/",
      youtubeLink: "https://youtu.be/YJyrH5YXs0s?si=6pUY7eN8gWfrNrMl",
      icon: <Droplets className="w-10 h-10 text-blue-600" />
    },
    {
      title: "Soil Health Card Scheme",
      category: "Soil Testing",
      shortDescription: "Free soil testing and nutrient status report every 2 years for all farmers",
      description: "A Soil Health Card is used to assess the current status of soil health and determine changes in soil health affected by land management. It displays soil health indicators based on farmers' practical experience and knowledge of local natural resources.",
      eligibility: [
        "All farmers in India including small, marginal, and large-scale farmers",
        "Both land-owning and tenant farmers are eligible",
        "Cards issued every two years for each landholding"
      ],
      benefits: [
        "Crop-specific nutrient recommendations based on soil type",
        "Improved soil fertility by avoiding overuse of chemicals",
        "Cost reduction through optimized fertilizer use",
        "Higher productivity with balanced nutrient application",
        "Environmental sustainability and reduced pollution",
        "Scientific soil analysis for 12 parameters including pH, NPK"
      ],
      websiteLink: "https://soilhealth.dac.gov.in/",
      youtubeLink: "https://youtu.be/-0L2s9okVtk?si=2FNIae5tKoFPhLU2",
      icon: <Heart className="w-10 h-10 text-green-600" />
    },
    {
      title: "Paramparagat Krishi Vikas Yojana (PKVY)",
      category: "Organic Farming",
      shortDescription: "Promotion of organic farming through cluster approach with financial support",
      description: "Launched in 2015 to promote organic farming in India using traditional practices and modern science. It aims to improve soil health, reduce chemical use, and empower farmers through community-based approaches.",
      eligibility: [
        "All farmers in India including small, marginal, and tenant farmers",
        "Preference for those willing to adopt organic practices",
        "Minimum 20 farmers per cluster covering at least 20 hectares",
        "Commitment to avoid synthetic fertilizers and pesticides"
      ],
      benefits: [
        "Financial support up to ₹50,000 per hectare over 3 years",
        "Improved soil health and reduced chemical use",
        "Eco-friendly farming conserving biodiversity",
        "Participatory Guarantee System for low-cost certification",
        "Cluster-based development with 20+ farmers",
        "Market linkage and direct buyer connection",
        "Training in composting, bio-fertilizers, and pest control"
      ],
      websiteLink: "https://pgsindia-ncof.gov.in/",
      youtubeLink: "https://youtu.be/VjPjcfla8vs?si=rCvrt1rzdtC_Xhf0",
      icon: <Sprout className="w-10 h-10 text-green-700" />
    },
    {
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      category: "Crop Insurance",
      shortDescription: "Comprehensive crop insurance covering pre-sowing to post-harvest losses",
      description: "Launched in 2016 to provide financial protection to farmers against crop loss caused by natural calamities, pests, and diseases. It offers affordable crop insurance to stabilize income and encourage modern agricultural practices.",
      eligibility: [
        "All farmers growing notified crops in notified areas",
        "Both loanee farmers (with crop loans) and non-loanee farmers",
        "Must cultivate crops listed under the scheme for that season",
        "Non-loanee farmers enroll through CSCs or agriculture offices"
      ],
      benefits: [
        "Coverage for drought, flood, hailstorm, cyclone, pests, and diseases",
        "Low premium: 2% for Kharif, 1.5% for Rabi, 5% for commercial crops",
        "Full sum insured without any cap on subsidy",
        "Post-harvest losses covered within 14 days of harvest",
        "Localized calamity compensation",
        "Technology-driven claims using remote sensing and drones"
      ],
      websiteLink: "https://pmfby.gov.in/",
      youtubeLink: "https://youtu.be/bmLTCfsddIs?si=pqaAbg5xSn6bC3O2",
      icon: <Shield className="w-10 h-10 text-blue-600" />
    },
    {
      title: "National Mission on Oilseeds and Oil Palm",
      category: "Production Support",
      shortDescription: "Increase domestic production of edible oils and reduce import dependency",
      description: "National Mission on Edible Oils (NMEO) includes sub-missions for oilseeds and oil palm to increase domestic production, expand cultivation areas, boost farmer incomes, and improve edible oil availability.",
      eligibility: [
        "All farmers in India including small and marginal farmers",
        "Priority for farmers in identified oilseed and oil palm districts",
        "Land must meet agro-climatic conditions for oil palm",
        "Willingness to follow recommended practices and training"
      ],
      benefits: [
        "Subsidies on high-yielding variety seeds",
        "Support for fertilizers, bio-pesticides, and micronutrients",
        "Farm machinery subsidies for seed drills and irrigation tools",
        "Oil palm development assistance for planting and maintenance",
        "Training on best practices and modern techniques",
        "Cluster-based approach for maximum impact",
        "Post-harvest infrastructure support"
      ],
      websiteLink: "https://nmoop.gov.in/",
      youtubeLink: "https://youtu.be/FFQpsmyoXYc?si=fqjugT8DpsiEXTs8",
      icon: <DollarSign className="w-10 h-10 text-yellow-600" />
    },
    {
      title: "Rashtriya Krishi Vikas Yojana (RKVY)",
      category: "Agriculture Development",
      shortDescription: "National Agriculture Development Programme for holistic agricultural growth",
      description: "Launched in 2007-08 as an umbrella scheme to promote holistic development of agriculture and allied sectors. Main objectives include achieving 4% annual growth, reducing yield gaps, and maximizing farmers' returns.",
      eligibility: [
        "All farmers in India including small and marginal farmers",
        "Agri-startups and entrepreneurs in agriculture sector",
        "State governments and implementing agencies",
        "Must be engaged in agriculture or allied activities"
      ],
      benefits: [
        "Financial assistance to states for agricultural investment",
        "Infrastructure development support",
        "Subsidies for farm machinery and inputs",
        "Training and capacity building programs",
        "Agri-entrepreneurship promotion with startup funding",
        "Incubation centers and mentoring support",
        "Technology transfer and precision agriculture adoption"
      ],
      websiteLink: "https://rkvy.nic.in/",
      youtubeLink: "https://youtu.be/Dp-XNzY5rko?si=uG8XakcJ5rzFDPm6",
      icon: <TrendingUp className="w-10 h-10 text-purple-600" />
    },
    {
      title: "Krishi Yantra Dhare",
      category: "Farm Mechanization",
      shortDescription: "Affordable rental access to farm machinery through Custom Hire Service Centers",
      description: "Karnataka government scheme providing affordable rental access to farm machinery for small and marginal farmers through CHSCs. Farmers can rent equipment at rates 20-50% lower than market rates.",
      eligibility: [
        "All farmers in Karnataka are eligible",
        "Priority given to small and marginal farmers",
        "NGOs, FPOs, and registered companies can establish CHSCs",
        "Must operate at hobli level (cluster of villages)"
      ],
      benefits: [
        "Access to modern machinery like tractors and harvesters",
        "Reduced cost of cultivation without buying expensive machinery",
        "Timely agricultural operations for better efficiency",
        "Doorstep delivery directly to farmer's field",
        "Promotion of mechanization reducing manual labor",
        "Rental rates 20-50% lower than market"
      ],
      websiteLink: "https://raitamitra.karnataka.gov.in/",
      youtubeLink: "",
      icon: <Users className="w-10 h-10 text-orange-600" />
    }
  ];

  const SchemeModal = ({ scheme, onClose }) => {
    if (!scheme) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Modal Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  {scheme.icon}
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-2">
                    {scheme.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-2">{scheme.title}</h2>
                  <p className="text-white/90 text-sm">{scheme.shortDescription}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors ml-4"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">About the Scheme</h3>
              <p className="text-gray-600 leading-relaxed">{scheme.description}</p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">✅ Benefits</h3>
              <ul className="space-y-2">
                {scheme.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">🧑‍🌾 Eligibility</h3>
              <ul className="space-y-2">
                {scheme.eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📎 Quick Links</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={scheme.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Official Website
                </a>
                {scheme.youtubeLink && (
                  <a
                    href={scheme.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Youtube className="w-5 h-5" />
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen min-h-screen bg-white m-0 p-0 overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative w-screen py-16 md:py-20 overflow-hidden">
        <img 
          src="/homepage.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to right, rgb(29 78 216), rgb(79 70 229))';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        
        <div className="relative z-10 w-full px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <FileText size={20} className="text-white" />
            <span className="font-semibold text-sm uppercase tracking-wider text-white">Government Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Government Schemes
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Explore central and state government schemes designed to support farmers
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-screen px-4 md:px-8 py-16 m-0">
        <div className="w-full">
        <div className="grid md:grid-cols-3 gap-6 mb-16 px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
            <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-gray-600 font-medium">Active Schemes</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
            <div className="text-5xl font-bold text-green-600 mb-2">₹50K Cr</div>
            <p className="text-gray-600 font-medium">Total Budget</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
            <div className="text-5xl font-bold text-purple-600 mb-2">10M+</div>
            <p className="text-gray-600 font-medium">Beneficiaries</p>
          </div>
        </div>

        </div>

        {/* Schemes Grid */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 px-4">Available Schemes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {schemes.map((scheme, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
              onClick={() => setSelectedScheme(scheme)}
            >
              <div className="bg-gray-50 rounded-xl p-4 w-fit mb-6">
                {scheme.icon}
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
                {scheme.category}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {scheme.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {scheme.shortDescription}
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="w-screen bg-gradient-to-r from-blue-700 to-indigo-600 py-16 px-4 md:px-8 m-0">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Applications?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our AI assistant can guide you through the application process for any scheme
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Get Assistance
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedScheme && (
        <SchemeModal scheme={selectedScheme} onClose={() => setSelectedScheme(null)} />
      )}
    </div>
  );
};

export default GovernmentSchemes;
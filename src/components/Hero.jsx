import { Leaf } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '10,000+', label: 'Active Farmers' },
    { value: '50+', label: 'Crops Covered' },
    { value: '100+', label: 'Govt. Schemes' },
    { value: '24/7', label: 'AI Support' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/homepage.jpg')",
        }}
      />

      {/* ✅ Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* ✅ Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-12 md:py-20 flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="text-center flex flex-col items-center justify-center">
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full mb-6 md:mb-8 border border-white/30">
              <Leaf size={18} className="text-green-400" />
              <p className="text-white font-semibold text-xs md:text-sm tracking-widest uppercase">
                Welcome to KrishiSahayak
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 text-center px-4">
              Empowering Farmers with
              <br />
              <span className="text-green-400">Smart Agriculture</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 md:mb-12 max-w-4xl text-center px-4">
              Get real-time weather updates, market prices, government schemes, 
              and AI-powered farming advice — all in one place. Join thousands 
              of farmers making informed decisions every day.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16 w-full justify-items-center px-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 w-full text-center"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm lg:text-base text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

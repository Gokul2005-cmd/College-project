import { useState, useEffect } from 'react';
import { 
  Cloud, CloudRain, Sun, Wind, Droplets, ThermometerSun, 
  AlertTriangle, CheckCircle, Sprout, Wheat, Eye, Gauge
} from 'lucide-react';

const KARNATAKA_DISTRICTS = [
  'Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Mangaluru', 'Hubballi-Dharwad',
  'Belagavi', 'Kalaburagi', 'Davanagere', 'Ballari', 'Vijayapura',
  'Raichur', 'Shivamogga', 'Tumakuru', 'Bidar', 'Hassan',
  'Mandya', 'Chitradurga', 'Udupi', 'Chikkamagaluru', 'Kolar',
  'Gadag', 'Bagalkot', 'Haveri', 'Dharwad', 'Uttara Kannada',
  'Chamarajanagar', 'Kodagu', 'Koppal', 'Ramanagara', 'Chikkaballapura',
  'Yadgir', 'Dakshina Kannada', 'Vijayanagara'
];

const Weather = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('Bengaluru Urban');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [farmingAlerts, setFarmingAlerts] = useState([]);

  const apiKey = 'a921e5ab33a2419eb9a143815251705';

  const analyzeFarmingConditions = (forecast) => {
    const alerts = [];
    const days = forecast.forecastday;

    let totalRainfall = 0;
    let consecutiveSunnyDays = 0;
    let consecutiveRainyDays = 0;
    let maxTemp = 0;
    let minTemp = 100;
    let highWindDays = 0;

    days.forEach((day) => {
      totalRainfall += day.day.totalprecip_mm;
      maxTemp = Math.max(maxTemp, day.day.maxtemp_c);
      minTemp = Math.min(minTemp, day.day.mintemp_c);

      if (day.day.daily_chance_of_rain < 30) {
        consecutiveSunnyDays++;
        consecutiveRainyDays = 0;
      } else if (day.day.daily_chance_of_rain > 70) {
        consecutiveRainyDays++;
        consecutiveSunnyDays = 0;
      }

      if (day.day.maxwind_kph > 25) {
        highWindDays++;
      }
    });

    if (totalRainfall > 50) {
      alerts.push({
        type: 'error',
        icon: <CloudRain className="w-6 h-6" />,
        title: 'Heavy Rainfall Expected',
        message: `Expected rainfall: ${totalRainfall.toFixed(1)}mm over 7 days. Cover sensitive crops, ensure proper drainage, and delay fertilizer application.`,
        actions: ['Cover crops', 'Check drainage', 'Postpone fertilization']
      });
    }

    if (consecutiveSunnyDays >= 5 && totalRainfall < 10) {
      alerts.push({
        type: 'warning',
        icon: <Sun className="w-6 h-6" />,
        title: 'Prolonged Dry Period',
        message: `${consecutiveSunnyDays} consecutive dry days expected. Ensure adequate water storage and plan irrigation schedule.`,
        actions: ['Arrange water storage', 'Schedule irrigation', 'Apply mulch']
      });
    }

    if (maxTemp > 35) {
      alerts.push({
        type: 'warning',
        icon: <ThermometerSun className="w-6 h-6" />,
        title: 'Heat Stress Warning',
        message: `Temperatures up to ${maxTemp.toFixed(1)}°C expected. Protect livestock and provide shade for crops.`,
        actions: ['Increase watering', 'Provide shade', 'Monitor livestock']
      });
    }

    if (minTemp < 10) {
      alerts.push({
        type: 'error',
        icon: <AlertTriangle className="w-6 h-6" />,
        title: 'Cold Temperature Alert',
        message: `Temperatures may drop to ${minTemp.toFixed(1)}°C. Protect sensitive crops from cold damage.`,
        actions: ['Cover seedlings', 'Delay transplanting', 'Protect sensitive crops']
      });
    }

    if (highWindDays >= 3) {
      alerts.push({
        type: 'warning',
        icon: <Wind className="w-6 h-6" />,
        title: 'High Wind Alert',
        message: `${highWindDays} days with high winds (>25 kph). Avoid pesticide/fertilizer spraying on windy days.`,
        actions: ['Postpone spraying', 'Check spray schedule', 'Secure equipment']
      });
    }

    if (totalRainfall > 15 && totalRainfall < 40 && maxTemp < 32 && minTemp > 15) {
      alerts.push({
        type: 'success',
        icon: <Sprout className="w-6 h-6" />,
        title: 'Optimal Planting Conditions',
        message: 'Weather conditions are favorable for planting and transplanting activities.',
        actions: ['Good time for sowing', 'Transplant seedlings', 'Apply organic fertilizer']
      });
    }

    if (consecutiveSunnyDays >= 3 && totalRainfall < 5) {
      alerts.push({
        type: 'success',
        icon: <Wheat className="w-6 h-6" />,
        title: 'Good Harvesting Weather',
        message: 'Dry weather ahead - ideal for harvesting and drying crops.',
        actions: ['Plan harvest schedule', 'Prepare storage', 'Arrange labor']
      });
    }

    if (totalRainfall >= 20 && totalRainfall <= 50 && consecutiveRainyDays < 4) {
      alerts.push({
        type: 'info',
        icon: <Droplets className="w-6 h-6" />,
        title: 'Moderate Rainfall Expected',
        message: `Expected rainfall: ${totalRainfall.toFixed(1)}mm. Good for crops, but monitor for waterlogging.`,
        actions: ['Monitor soil moisture', 'Check field drainage', 'Time for nitrogen application']
      });
    }

    return alerts.length > 0 ? alerts : [{
      type: 'info',
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Normal Weather Conditions',
      message: 'Weather conditions are normal. Continue regular farming activities.',
      actions: ['Regular maintenance', 'Monitor crops', 'Follow schedule']
    }];
  };

  const fetchWeather = async (district) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${district},Karnataka,India&days=7&aqi=no&alerts=yes`
      );
      if (!res.ok) throw new Error('Failed to fetch weather data');
      const data = await res.json();
      setWeatherData(data);
      const alerts = analyzeFarmingConditions(data.forecast);
      setFarmingAlerts(alerts);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
      setFarmingAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(selectedDistrict);
  }, [selectedDistrict]);

  const getAlertStyle = (type) => {
    switch (type) {
      case 'error': return 'bg-red-50 border-l-4 border-red-500';
      case 'warning': return 'bg-orange-50 border-l-4 border-orange-500';
      case 'success': return 'bg-green-50 border-l-4 border-green-500';
      default: return 'bg-blue-50 border-l-4 border-blue-500';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'error': return 'text-red-600';
      case 'warning': return 'text-orange-600';
      case 'success': return 'text-green-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="w-screen min-h-screen bg-white m-0 p-0 overflow-x-hidden">
      {/* Header with District Selector */}
      <div className="relative w-screen py-10 md:py-16 px-4 md:px-8 shadow-lg overflow-hidden">
        <img 
          src="/homepage.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to right, rgb(79 70 229), rgb(124 58 237))';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">Karnataka Weather Forecast</h1>
              <p className="text-base md:text-lg text-white/90">Real-time weather data with farming advisory</p>
            </div>
            <div className="w-full md:w-80 mx-auto md:mx-0">
              <label className="block text-xs font-semibold mb-2 text-white/90 uppercase tracking-wide">
                Select District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
              >
                {KARNATAKA_DISTRICTS.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
        </div>
      )}

      {error && (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-6">
          <div className="bg-red-50 border-l-4 border-red-500 text-red-800 px-6 py-4 rounded">
            <p className="font-medium">{error}</p>
          </div>
        </div>
      )}

      {weatherData && !loading && (
        <div className="w-screen px-4 md:px-8 py-8 m-0">
          <div className="w-full mx-auto">
            {/* Current Weather Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {weatherData.location.name}
                  </h2>
                  <p className="text-lg text-gray-700 mb-3">
                    Feels like {weatherData.current.feelslike_c}°C. {weatherData.current.condition.text}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Wind className="w-4 h-4" />
                      <span>{weatherData.current.wind_kph}km/h {weatherData.current.wind_dir}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Gauge className="w-4 h-4" />
                      <span>{weatherData.current.pressure_mb}hPa</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Droplets className="w-4 h-4" />
                      <span>Humidity: {weatherData.current.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ThermometerSun className="w-4 h-4" />
                      <span>Dew point: {weatherData.current.dewpoint_c}°C</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4" />
                      <span>Visibility: {weatherData.current.vis_km}km</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={weatherData.current.condition.icon} alt="weather" className="w-20 h-20 mx-auto" />
                  <p className="text-4xl font-bold text-gray-900">{Math.round(weatherData.current.temp_c)}°C</p>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Hourly & Farming Alerts */}
              <div className="lg:col-span-2 space-y-6">
                {/* Hourly Forecast */}
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900">Hourly forecast</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {weatherData.forecast.forecastday[0].hour.slice(0, 12).map((hour, index) => {
                        const time = new Date(hour.time).toLocaleTimeString('en-US', { 
                          hour: 'numeric', 
                          hour12: true 
                        });
                        return (
                          <div key={index} className="flex flex-col items-center min-w-20 text-center">
                            <p className="text-xs text-gray-600 mb-2 font-medium">{time}</p>
                            <img src={hour.condition.icon} alt="weather" className="w-10 h-10 mb-2" />
                            <p className="text-sm font-bold text-gray-900 mb-1">{Math.round(hour.temp_c)}°</p>
                            <div className="flex items-center gap-1">
                              <Droplets className="w-3 h-3 text-blue-500" />
                              <p className="text-xs text-blue-600 font-medium">{hour.chance_of_rain}%</p>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Wind className="w-3 h-3 text-gray-500" />
                              <p className="text-xs text-gray-600">{Math.round(hour.wind_kph)}km/h</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Farming Alerts */}
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Sprout className="w-5 h-5 text-green-600" />
                      <h3 className="text-lg font-bold text-gray-900">Farming Advisory & Alerts</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {farmingAlerts.map((alert, index) => (
                      <div key={index} className={`${getAlertStyle(alert.type)} rounded-lg p-5`}>
                        <div className="flex items-start gap-3 mb-3">
                          <div className={getIconColor(alert.type)}>{alert.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1.5">{alert.title}</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{alert.message}</p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs font-semibold text-gray-700 mb-2 uppercase">Recommended Actions:</p>
                          <div className="flex flex-wrap gap-2">
                            {alert.actions.map((action, idx) => (
                              <span key={idx} className="px-2.5 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-300">
                                {action}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - 7-Day Forecast */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border border-gray-200 sticky top-4">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900">7-day forecast</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {weatherData.forecast.forecastday.map((day, index) => (
                      <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 mb-0.5">
                              {new Date(day.date).toLocaleDateString('en-US', { 
                                weekday: 'short', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </p>
                            <div className="flex items-center gap-2">
                              <img src={day.day.condition.icon} alt="weather" className="w-8 h-8" />
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Droplets className="w-3 h-3 text-blue-500" />
                                  {day.day.totalprecip_mm}mm
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-base font-bold text-gray-900">
                              {Math.round(day.day.maxtemp_c)}° / {Math.round(day.day.mintemp_c)}°
                            </p>
                            <p className="text-xs text-gray-600 capitalize">{day.day.condition.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
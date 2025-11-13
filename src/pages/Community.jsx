import { MessageSquare, ThumbsUp, Reply, User, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Community = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  const posts = [
    {
      id: 1,
      author: "Rajesh Kumar",
      location: "Mandya, Karnataka",
      avatar: "👨‍🌾",
      time: "2 hours ago",
      content: "I've been growing Ragi for 15 years now. This season, I tried using organic compost instead of chemical fertilizers. The yield increased by 20%! Anyone else tried organic farming?",
      crop: "Ragi",
      likes: 45,
      replies: 8,
      comments: [
        {
          author: "Prakash Gowda",
          location: "Hassan",
          avatar: "👨‍🌾",
          time: "1 hour ago",
          content: "That's amazing Rajesh! Which organic compost did you use? I want to try this for my next crop."
        },
        {
          author: "Lakshmi Devi",
          location: "Tumakuru",
          avatar: "👩‍🌾",
          time: "45 minutes ago",
          content: "Organic is the future! I switched to vermicompost last year and my soil health has improved significantly."
        }
      ]
    },
    {
      id: 2,
      author: "Manjunath Reddy",
      location: "Raichur, Karnataka",
      avatar: "👨‍🌾",
      time: "5 hours ago",
      content: "Cotton crop is facing bollworm attack in my field. I'm using Bt cotton but still facing issues. Any suggestions from experienced farmers?",
      crop: "Cotton",
      likes: 32,
      replies: 12,
      comments: [
        {
          author: "Venkatesh Patil",
          location: "Ballari",
          avatar: "👨‍🌾",
          time: "4 hours ago",
          content: "Try neem oil spray early morning. It worked for me last season. Also maintain proper spacing between plants."
        },
        {
          author: "Suma Naik",
          location: "Kalaburagi",
          avatar: "👩‍🌾",
          time: "3 hours ago",
          content: "Contact your nearest agriculture office. They provide free pest management training and support."
        }
      ]
    },
    {
      id: 3,
      author: "Kavitha Shetty",
      location: "Kodagu, Karnataka",
      avatar: "👩‍🌾",
      time: "1 day ago",
      content: "Coffee prices are good this year! Just sold my harvest at ₹34,000 per quintal. Perfect timing with the weather being favorable. Shade management was key to quality beans.",
      crop: "Coffee",
      likes: 67,
      replies: 15,
      comments: [
        {
          author: "Suresh Bhat",
          location: "Chikkamagaluru",
          avatar: "👨‍🌾",
          time: "20 hours ago",
          content: "Congratulations Kavitha! Which variety are you growing? Arabica or Robusta?"
        }
      ]
    },
    {
      id: 4,
      author: "Basavaraj Patil",
      location: "Vijayapura, Karnataka",
      avatar: "👨‍🌾",
      time: "2 days ago",
      content: "Jowar crop is ready for harvest! This time I used drip irrigation and the water saving was significant. Yield is also better than last year. Highly recommend modern irrigation methods.",
      crop: "Jowar",
      likes: 54,
      replies: 9,
      comments: [
        {
          author: "Ramesh Naidu",
          location: "Belagavi",
          avatar: "👨‍🌾",
          time: "1 day ago",
          content: "How much did the drip irrigation system cost? Is it affordable for small farmers?"
        },
        {
          author: "Anjali Kulkarni",
          location: "Bagalkote",
          avatar: "👩‍🌾",
          time: "1 day ago",
          content: "There are government subsidies available for drip irrigation. Check PM Krishi Sinchayee Yojana."
        }
      ]
    },
    {
      id: 5,
      author: "Ningappa Gowda",
      location: "Mysuru, Karnataka",
      avatar: "👨‍🌾",
      time: "3 days ago",
      content: "Rice paddy fields are showing signs of brown spot disease. I've started spraying copper oxychloride. Any other preventive measures I should take?",
      crop: "Rice",
      likes: 28,
      replies: 6,
      comments: [
        {
          author: "Dr. Ashok Kumar",
          location: "Agriculture Expert",
          avatar: "👨‍🔬",
          time: "2 days ago",
          content: "Ensure proper drainage and avoid excess nitrogen fertilizer. Maintain 2-3 cm water level. Disease resistant varieties like BPT 5204 are also good options."
        }
      ]
    },
    {
      id: 6,
      author: "Shantamma",
      location: "Chitradurga, Karnataka",
      avatar: "👩‍🌾",
      time: "4 days ago",
      content: "Groundnut harvest complete! Used gypsum at flowering stage as recommended. The pods are well developed and market price is also good at ₹5,600/q. Happy with this season!",
      crop: "Groundnut",
      likes: 41,
      replies: 7,
      comments: [
        {
          author: "Mallikarjun",
          location: "Koppal",
          avatar: "👨‍🌾",
          time: "4 days ago",
          content: "Great results! When did you apply the gypsum? I'm planning groundnut for next season."
        }
      ]
    }
  ];

  const trendingTopics = [
    { topic: "Organic Farming", posts: 234 },
    { topic: "Drip Irrigation", posts: 189 },
    { topic: "Pest Management", posts: 156 },
    { topic: "Government Schemes", posts: 142 },
    { topic: "Market Prices", posts: 128 }
  ];

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MessageSquare size={18} />
            <span className="font-semibold text-sm uppercase tracking-wider">Farmer Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community Forum
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Connect with fellow farmers, share experiences, and learn from each other
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Posts Section */}
            <div className="lg:col-span-2 space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  {/* Post Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{post.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-gray-800">{post.author}</h3>
                          <p className="text-sm text-gray-500">{post.location}</p>
                        </div>
                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                          {post.crop}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                        <Clock size={14} />
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.content}
                  </p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 transition-colors ${
                        likedPosts.includes(post.id) 
                          ? 'text-green-600' 
                          : 'text-gray-500 hover:text-green-600'
                      }`}
                    >
                      <ThumbsUp size={18} fill={likedPosts.includes(post.id) ? "currentColor" : "none"} />
                      <span className="font-semibold text-sm">
                        {likedPosts.includes(post.id) ? post.likes + 1 : post.likes}
                      </span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors">
                      <Reply size={18} />
                      <span className="font-semibold text-sm">{post.replies}</span>
                    </button>
                  </div>

                  {/* Comments */}
                  {post.comments && post.comments.length > 0 && (
                    <div className="mt-6 space-y-4 pl-4 border-l-2 border-gray-200">
                      {post.comments.map((comment, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="text-2xl">{comment.avatar}</div>
                          <div className="flex-1 bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-sm text-gray-800">{comment.author}</h4>
                                <p className="text-xs text-gray-500">{comment.location}</p>
                              </div>
                              <span className="text-xs text-gray-400">{comment.time}</span>
                            </div>
                            <p className="text-sm text-gray-700">{comment.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-green-600" size={20} />
                  <h3 className="font-bold text-lg text-gray-800">Trending Topics</h3>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <span className="text-gray-700 font-medium">#{topic.topic}</span>
                      <span className="text-sm text-gray-500">{topic.posts} posts</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl shadow-md p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Active Farmers</span>
                    <span className="font-bold text-xl">2,450+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total Discussions</span>
                    <span className="font-bold text-xl">8,932</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Problems Solved</span>
                    <span className="font-bold text-xl">5,678</span>
                  </div>
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our community of experienced farmers is here to help you with your farming questions.
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors">
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
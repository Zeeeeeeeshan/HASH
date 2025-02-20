import React, { useState } from 'react';
import { ArrowRight, Bot, Sparkles, Mail, ChevronRight, Linkedin, X, ToggleLeft as Google } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-[#00FF94]" />
              <span className="text-2xl font-bold">HASH</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowSignIn(true)} 
                className="px-4 py-2 rounded-full text-sm hover:bg-white/10 transition"
              >
                Sign In
              </button>
              <button className="px-4 py-2 bg-[#00FF94] text-black rounded-full text-sm font-medium hover:bg-[#00FF94]/90 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-md p-6 relative">
            <button 
              onClick={() => {
                setShowSignIn(false);
                setIsRegistering(false);
              }}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {isRegistering ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-400">
                {isRegistering 
                  ? 'Join HASH to explore the future of AI'
                  : 'Sign in to continue to HASH'}
              </p>
            </div>

            <button className="w-full flex items-center justify-center space-x-2 bg-white text-black rounded-lg p-3 hover:bg-white/90 transition mb-4">
              <Google className="w-5 h-5" />
              <span>{isRegistering ? 'Sign up with Google' : 'Continue with Google'}</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#0A0A0A] text-gray-400">or</span>
              </div>
            </div>

            <form onSubmit={handleSignInSubmit} className="space-y-4">
              {isRegistering && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00FF94] transition"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00FF94] transition"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00FF94] transition"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#00FF94] text-black rounded-lg p-3 font-medium hover:bg-[#00FF94]/90 transition"
              >
                {isRegistering ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-[#00FF94] hover:text-[#00FF94]/80 transition"
              >
                {isRegistering ? 'Sign In' : 'Create one'}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#00FF94]" />
            <span className="text-sm">Coming Soon</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
            The Next Generation of
            <span className="text-[#00FF94]"> AI Agents</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Join us on our mission to revolutionize the way we interact with artificial intelligence.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-12">
            <span className="text-gray-400">Founded by</span>
            <span className="font-semibold">Zeeshan</span>
            <a 
              href="https://www.linkedin.com/in/md-zeeshan-shahid/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-[#00FF94] hover:text-[#00FF94]/80 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span className="underline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Email Signup Form */}
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00FF94] transition"
                  required
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#00FF94] transition"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2 bg-[#00FF94] text-black rounded-md hover:bg-[#00FF94]/90 transition"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center p-6 bg-white/5 rounded-lg border border-[#00FF94]/30">
              <Sparkles className="w-8 h-8 text-[#00FF94] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thank you for joining!</h3>
              <p className="text-gray-400">We'll keep you updated on our launch.</p>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced AI',
                description: 'Powered by cutting-edge artificial intelligence technology'
              },
              {
                title: 'Seamless Integration',
                description: 'Effortlessly integrate with your existing workflows'
              },
              {
                title: 'Secure & Private',
                description: 'Your data is protected with enterprise-grade security'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#00FF94]/30 transition group cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  {feature.title}
                  <ChevronRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition" />
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="w-6 h-6 text-[#00FF94]" />
              <span className="text-lg font-bold">HASH</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 HASH. Founded by Zeeshan. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
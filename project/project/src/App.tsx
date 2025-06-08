import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  BookOpen, 
  Award, 
  Globe,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  // Handle scroll for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'infrastructure', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const programs = [
    {
      title: 'Computer Science',
      description: 'Advanced programming, AI, and software engineering',
      duration: '4 Years',
      level: 'Bachelor\'s',
      icon: '💻'
    },
    {
      title: 'Business Administration',
      description: 'Leadership, management, and entrepreneurship',
      duration: '4 Years',
      level: 'Bachelor\'s',
      icon: '📊'
    },
    {
      title: 'Engineering',
      description: 'Mechanical, electrical, and civil engineering',
      duration: '4 Years',
      level: 'Bachelor\'s',
      icon: '⚙️'
    },
    {
      title: 'Medical Sciences',
      description: 'Healthcare, research, and clinical practice',
      duration: '6 Years',
      level: 'Bachelor\'s',
      icon: '🏥'
    }
  ];

  const infrastructure = [
    {
      title: 'Modern Laboratories',
      description: 'State-of-the-art research and learning facilities',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg'
    },
    {
      title: 'Digital Library',
      description: 'Extensive collection of books and digital resources',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      title: 'Sports Complex',
      description: 'Complete facilities for sports and recreation',
      image: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg'
    },
    {
      title: 'Smart Classrooms',
      description: 'Technology-enabled interactive learning spaces',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">EduExcel</span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Programs', 'Infrastructure', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {['Home', 'About', 'Programs', 'Infrastructure', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Beyond the Classroom
              <span className="block text-2xl md:text-4xl text-blue-200 mt-2">
                A World of Opportunities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Discover excellence in education with world-class facilities, expert faculty, 
              and innovative programs designed to shape tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('programs')}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EduExcel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing world-class education that prepares students 
              for success in an ever-evolving global landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: '15,000+',
                subtitle: 'Students Worldwide',
                description: 'A diverse community of learners from over 50 countries'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: '500+',
                subtitle: 'Expert Faculty',
                description: 'Renowned professors and industry professionals'
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: '100+',
                subtitle: 'Global Partners',
                description: 'International collaborations and exchange programs'
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: '95%',
                subtitle: 'Job Placement',
                description: 'Graduates successfully placed in top companies'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.title}</div>
                <div className="text-lg font-medium text-blue-600 mb-2">{stat.subtitle}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of undergraduate and graduate programs 
              designed to meet industry demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between items-center text-sm text-blue-600 mb-4">
                  <span className="bg-blue-100 px-2 py-1 rounded">{program.level}</span>
                  <span>{program.duration}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities provide the perfect environment for learning, 
              research, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructure.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{facility.title}</h3>
                    <p className="text-sm opacity-90">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your educational journey? Contact us today to learn more 
              about our programs and admission requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Campus Address</h4>
                    <p className="text-gray-600">123 Education Street<br />Academic City, AC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                    <p className="text-gray-600">Main: +1 (555) 123-4567<br />Admissions: +1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Addresses</h4>
                    <p className="text-gray-600">info@eduexcel.edu<br />admissions@eduexcel.edu</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a program</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="business">Business Administration</option>
                      <option value="engineering">Engineering</option>
                      <option value="medical">Medical Sciences</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your interests and any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">EduExcel</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering minds, shaping futures. Join us in our mission to provide 
                world-class education that prepares students for success in a global economy.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  📘
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  🐦
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  📷
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  💼
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white">About Us</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="text-gray-300 hover:text-white">Academic Programs</button></li>
                <li><button onClick={() => scrollToSection('infrastructure')} className="text-gray-300 hover:text-white">Campus Facilities</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">Contact Us</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Student Portal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Faculty Portal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Library</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Career Services</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 EduExcel University. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
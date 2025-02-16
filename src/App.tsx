import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Brain,
  Rocket,
  Users,
  Heart,
} from "lucide-react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Helmet>
        <title>Jacob Ayokunle | Tech Founder | AI Enthusiast | Father</title>
        <meta
          name="description"
          content="Jacob Ayokunle is a tech entrepreneur and AI enthusiast with a passion for building successful tech companies."
        />
        <meta
          name="keywords"
          content="Jacob Ayokunle, tech entrepreneur, AI enthusiast, tech founder, father"
        />
        <meta name="author" content="Jacob Ayokunle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Jacob Ayokunle | Tech Founder | AI Enthusiast | Father"
        />
        <meta
          property="og:description"
          content="Jacob Ayokunle is a tech entrepreneur and AI enthusiast with a passion for building successful tech companies."
        />
        <meta property="og:image" content="/images/Official_Pic.jpg" />
        <meta property="og:url" content="https://ayokunle.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jacob Ayokunle" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:image:width" content="1200" />
      </Helmet>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img
            src="/images/Official_Pic.jpg"
            alt="Jacob Ayokunle Image"
            className="w-32 h-40 rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
          />
          <h1 className="text-5xl font-bold text-white mb-4">Jacob Ayokunle</h1>
          <p className="text-xl text-gray-200 mb-8">
            Tech Founder • AI Enthusiast • Father
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/@jayrobzy"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jacob-ayokunle"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/aderopoa"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:jacob@ayokunle.com"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As a passionate tech entrepreneur and AI advocate, I've dedicated my
            career to pushing the boundaries of what's possible with technology.
            With over 10 years of experience in founding and scaling tech
            companies, I bring a unique perspective to the intersection of
            business and artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Expert</h3>
              <p className="text-gray-600">
                Leading AI innovation and implementation
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Rocket className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech Founder</h3>
              <p className="text-gray-600">
                Founded tech companies that have raised millions in funding
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentor</h3>
              <p className="text-gray-600">
                Guiding the next generation of founders
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Family Man</h3>
              <p className="text-gray-600">Proud father and tech enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">Let's connect and build the future together.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/@jayrobzy"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jacob-ayokunle"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/aderopoa"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:jacob@ayokunle.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            © {new Date().getFullYear()} Jacob Ayokunle. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Star,
  Users,
  Clock,
  CheckCircle,
  ArrowDown,
  Quote,
  Calendar,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textReveal = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const services = [
  {
    icon: Code,
    title: "Shopify Development",
    description:
      "Custom Shopify stores, theme development, and e-commerce solutions that drive sales and enhance user experience.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "React Development",
    description:
      "Modern React applications with Next.js, responsive design, and optimized performance for web and mobile.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Full-Stack Development",
    description:
      "Complete web solutions using PHP, JavaScript, HTML, and CSS with database integration and API development.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    color: "from-cyan-500 to-blue-500",
  },
];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Custom Shopify store with advanced filtering and checkout optimization",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Shopify", "JavaScript", "CSS"],
    link: "https://demo-ecommerce-store.vercel.app", // Replace with actual project URL
    github: "https://github.com/yourusername/ecommerce-project", // Add GitHub link
    category: "E-commerce",
  },
  {
    title: "React Dashboard",
    description: "Modern admin dashboard with real-time data visualization",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Next.js", "TypeScript"],
    link: "https://react-dashboard-demo.vercel.app", // Replace with actual project URL
    github: "https://github.com/yourusername/react-dashboard",
    category: "Web App",
  },
  {
    title: "PHP Web Application",
    description: "Full-stack web application with user authentication and CMS",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["PHP", "MySQL", "JavaScript"],
    link: "https://php-webapp-demo.com", // Replace with actual project URL
    github: "https://github.com/yourusername/php-webapp",
    category: "Full-Stack",
  },
  {
    title: "Corporate Website",
    description: "Modern corporate website with CMS integration",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind", "Strapi"],
    link: "https://corporate-website-demo.vercel.app", // Replace with actual project URL
    github: "https://github.com/yourusername/corporate-website",
    category: "Website",
  },
  {
    title: "Mobile App Landing",
    description: "Responsive landing page for mobile application",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Framer Motion", "CSS"],
    link: "https://mobile-app-landing.vercel.app", // Replace with actual project URL
    github: "https://github.com/yourusername/mobile-landing",
    category: "Landing Page",
  },
  {
    title: "SaaS Platform",
    description: "Complete SaaS solution with subscription management",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    link: "https://saas-platform-demo.vercel.app", // Replace with actual project URL
    github: "https://github.com/yourusername/saas-platform",
    category: "SaaS",
  },
];

const skills = [
  "Shopify",
  "React",
  "Next.js",
  "PHP",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MySQL",
  "Node.js",
  "Git",
  "WordPress",
  "Laravel",
  "Vue.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
];

const stats = [
  { number: "150+", label: "Projects Completed", icon: CheckCircle },
  { number: "150+", label: "Happy Clients", icon: Users },
  { number: "8+", label: "Years Experience", icon: Calendar },
  { number: "24/7", label: "Support Available", icon: Clock },
];

const timeline = [
  {
    year: "2025",
    title: "Senior Freelance Developer",
    description:
      "Expanded services to include advanced React applications and enterprise solutions",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Full-Stack Specialist",
    description: "Mastered PHP frameworks and database optimization techniques",
    icon: Code,
  },
  {
    year: "2021",
    title: "Shopify Expert",
    description:
      "Became certified Shopify developer and launched e-commerce solutions",
    icon: Award,
  },
  {
    year: "2017",
    title: "Started Freelancing",
    description: "Began freelance journey focusing on modern web technologies",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    name: "Vishal Nyati, magento360.com",
    role: "Client",
    content:
      "It was a great experience working with Ishant. He has a strong understanding of Shopify and completed the job exceptionally well. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ruben Tibre, TIBRE ONLINE MARKETIN",
    role: "Client",
    content:
      "I had a great experience working with Ishant. The work was delivered on time, communication was smooth, and the quality exceeded my expectations. Highly professional, reliable, and efficient. I definitely recommend and look forward to working together again!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Muhammad Asim Tahir, Haxr IT Solutions",
    role: "Client",
    content:
      "⭐⭐⭐⭐⭐ Outstanding Shopify Expert – Highly Recommended!Ishant Gupta was an absolute pleasure to work with on my Shopify project. He understood my requirements perfectly and delivered a high-quality, customized Shopify store that exceeded my expectations. Their expertise in theme development, customization, and optimization was evident throughout the project",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Altaf Nadaf, RemotiFi",
    role: "Client",
    content:
      "Working with Ishant on our Shopify store has been an absolute pleasure! He is highly skilled, professional, and delivered exactly what we needed. From designing a user-friendly layout to optimizing the store for conversions, his expertise in Shopify is impressive. Communication was smooth, deadlines were met, and he even provided valuable suggestions to improve our store. Highly recommended for anyone looking for a top-notch Shopify developer!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your requirements, goals, and target audience to create a comprehensive project plan.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Creating wireframes and prototypes to visualize the final product before development begins.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Building your project with clean, scalable code and thorough testing to ensure quality.",
    icon: Code,
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Deploying your project and providing ongoing support to ensure continued success.",
    icon: Rocket,
  },
];

const blogPosts = [
  {
    title: "10 Shopify Optimization Tips for Better Conversions",
    excerpt:
      "Learn how to optimize your Shopify store for maximum conversions and sales.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "E-commerce",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "React Performance: Best Practices for 2024",
    excerpt:
      "Discover the latest techniques to optimize React applications for better performance.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "React",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "PHP vs Node.js: Choosing the Right Backend",
    excerpt:
      "A comprehensive comparison to help you choose the best backend technology.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Backend",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in Shopify development, React/Next.js applications, PHP backends, and modern web technologies including HTML5, CSS3, and JavaScript.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks. I provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer ongoing support and maintenance packages to ensure your website continues to perform optimally after launch.",
  },
  {
    question: "Can you work with existing teams?",
    answer:
      "I collaborate effectively with existing development teams and can integrate seamlessly into your workflow.",
  },
];

export default function Portfolio() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Cridtick
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {[
                "Home",
                "Services",
                "Projects",
                "About",
                "Process",
                "Blog",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col space-y-1 w-6 h-6"
            >
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0,
                }}
                className="w-6 h-0.5 bg-white block transition-all"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-white block transition-all"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0,
                }}
                className="w-6 h-0.5 bg-white block transition-all"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-gray-800"
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {[
                    "Home",
                    "Services",
                    "Projects",
                    "About",
                    "Process",
                    "Blog",
                    "Contact",
                  ].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                      className="text-gray-300 hover:text-emerald-400 transition-colors text-lg"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
          />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-emerald-400 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 100, 0],
                y: [0, Math.random() * 100, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block text-white"
              >
                CREATIVE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent"
              >
                FREELANCER
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              Crafting exceptional digital experiences through innovative web
              development. Specializing in{" "}
              <span className="text-emerald-400 font-semibold">Shopify</span>,
              <span className="text-cyan-400 font-semibold"> React</span>, and
              <span className="text-orange-400 font-semibold">
                {" "}
                Full-Stack
              </span>{" "}
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              Let's Talk
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                </div>
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              CLIENT{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TESTIMONIALS
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-gray-900/50 border-gray-800 p-8">
                  <CardContent className="p-0">
                    <Quote className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      "{testimonials[activeTestimonial].content}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={
                          testimonials[activeTestimonial].avatar ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[activeTestimonial].name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="text-white font-bold">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-gray-400">
                          {testimonials[activeTestimonial].role}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-1 mt-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-emerald-400"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              MY{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business
              needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 h-full">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                      style={{ boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
                    >
                      <service.icon className="h-8 w-8 text-black" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              FEATURED{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and successful client collaborations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() =>
                  (window.location.href = `/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`)
                }
              >
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group-hover:border-emerald-500/50 transition-all duration-500 h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Button
                          onClick={() =>
                            (window.location.href = `/projects/${project.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`)
                          }
                          className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm px-3 py-2"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                        <Button
                          onClick={() => window.open(project.link, "_blank")}
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-black/50 text-sm px-3 py-2"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-black/50 text-white border-0 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm sm:text-base flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gray-800 text-gray-300 border-gray-700 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              MY{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                JOURNEY
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-emerald-400 font-semibold mb-3">
                      {item.year}
                    </p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-4 relative z-10">
                  <item.icon className="h-8 w-8 text-black" />
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              TECHNICAL{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SKILLS
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                viewport={{ once: true }}
              >
                <Badge className="text-lg px-6 py-3 bg-gray-800 text-gray-300 border-gray-700 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-cyan-500/20 hover:text-white hover:border-emerald-500/50 transition-all duration-300 cursor-pointer">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              MY{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                PROCESS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures project success from concept to
              launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                    <step.icon className="h-10 w-10 text-black" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-emerald-500">
                    <span className="text-emerald-400 font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              LATEST{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ARTICLES
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <Badge className="absolute top-4 left-4 bg-cyan-500 text-black border-0">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              FREQUENTLY{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                ASKED
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-0">
                    <button
                      onClick={() =>
                        setActiveFaq(activeFaq === index ? null : index)
                      }
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-white">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: activeFaq === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="h-5 w-5 text-emerald-400" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-gray-400">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8">
                ABOUT{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  ME
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                I'm a passionate freelance web developer with over 3 years of
                experience creating exceptional digital experiences. I
                specialize in modern web technologies and e-commerce solutions
                that help businesses grow online.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From custom Shopify stores to complex React applications, I
                bring ideas to life with clean code, stunning design, and
                optimal performance. My goal is to create digital solutions that
                not only look amazing but also drive real business results.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-bold">
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-semibold">
                      Currently working on
                    </p>
                    <p className="text-emerald-400">
                      Next.js E-commerce Platform
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={textReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
              LET'S{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                CONNECT
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch and let's create
              something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-8">
                      Get In Touch
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          label: "Email",
                          value: "hello@yourname.com",
                          color: "from-emerald-500 to-cyan-500",
                        },
                        {
                          icon: Phone,
                          label: "Phone",
                          value: "+1 (555) 123-4567",
                          color: "from-orange-500 to-red-500",
                        },
                        {
                          icon: MapPin,
                          label: "Location",
                          value: "Available Worldwide",
                          color: "from-purple-500 to-pink-500",
                        },
                      ].map((contact, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 group"
                        >
                          <div
                            className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                          >
                            <contact.icon className="h-7 w-7 text-black" />
                          </div>
                          <div>
                            <p className="text-white font-semibold text-lg">
                              {contact.label}
                            </p>
                            <p className="text-gray-400">{contact.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <form className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm sm:text-base"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm sm:text-base"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm sm:text-base"
                      />
                      <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none transition-all duration-300 text-sm sm:text-base"
                      ></textarea>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-bold py-3 sm:py-4 text-base sm:text-lg">
                        Send Message
                      </Button>
                    </form>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                DevPortfolio
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Creating exceptional digital experiences through innovative web
                development.
              </p>
            </motion.div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                &copy; 2024 Your Name. All rights reserved. Built with Next.js &
                Framer Motion.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, CheckCircle, TrendingUp, Users, ShoppingCart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function EcommercePlatformProject() {
  const projectStats = [
    { icon: TrendingUp, label: "Conversion Rate", value: "+45%", color: "from-emerald-500 to-cyan-500" },
    { icon: Users, label: "User Engagement", value: "+60%", color: "from-orange-500 to-red-500" },
    { icon: ShoppingCart, label: "Sales Increase", value: "+80%", color: "from-purple-500 to-pink-500" },
    { icon: Zap, label: "Page Load Speed", value: "2.1s", color: "from-cyan-500 to-blue-500" },
  ]

  const challenges = [
    {
      title: "Slow Loading Times",
      description: "The original site had loading times of 8+ seconds, causing high bounce rates.",
      solution: "Implemented lazy loading, optimized images, and used Shopify's performance best practices.",
    },
    {
      title: "Poor Mobile Experience",
      description: "Mobile users were abandoning carts due to poor responsive design.",
      solution: "Created a mobile-first responsive design with touch-optimized interactions.",
    },
    {
      title: "Complex Checkout Process",
      description: "Multi-step checkout was causing cart abandonment.",
      solution: "Streamlined to a single-page checkout with guest checkout options.",
    },
  ]

  const features = [
    "Advanced product filtering and search",
    "One-page checkout optimization",
    "Mobile-responsive design",
    "Inventory management integration",
    "Customer review system",
    "Email marketing automation",
    "Analytics and reporting dashboard",
    "Multi-currency support",
  ]

  const technologies = [
    "Shopify Liquid",
    "JavaScript ES6+",
    "CSS3 & SCSS",
    "Shopify APIs",
    "Google Analytics",
    "Klaviyo Integration",
    "Responsive Design",
    "Performance Optimization",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/#projects">
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              E-commerce Platform Case Study
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6">
                  E-commerce • Shopify Development
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                  Premium Fashion
                  <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    E-commerce Store
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  A complete Shopify store redesign that increased conversions by 45% and improved user experience
                  across all devices. Built with performance and scalability in mind.
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => window.open("https://demo-ecommerce-store.vercel.app", "_blank")}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-bold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </Button>
                  <Button
                    onClick={() => window.open("https://github.com/yourusername/ecommerce-project", "_blank")}
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="E-commerce Platform Screenshot"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {projectStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <stat.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Project <span className="text-emerald-400">Overview</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This project involved a complete redesign and development of a premium fashion e-commerce store. The
                  client needed a modern, fast, and conversion-optimized Shopify store that would appeal to their target
                  demographic of fashion-conscious millennials.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  The main goals were to improve site performance, enhance user experience, increase conversion rates,
                  and create a scalable platform that could handle high traffic during sales events.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-bold text-white mb-4">Project Timeline</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Discovery & Planning</span>
                      <span className="text-emerald-400">Week 1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Design & Prototyping</span>
                      <span className="text-emerald-400">Week 2-3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Development & Testing</span>
                      <span className="text-emerald-400">Week 4-6</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Launch & Optimization</span>
                      <span className="text-emerald-400">Week 7</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Challenges & <span className="text-emerald-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Every project comes with unique challenges. Here's how we overcame them.
              </p>
            </motion.div>

            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                              <span className="text-red-400 font-bold">{index + 1}</span>
                            </div>
                            Challenge: {challenge.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">{challenge.description}</p>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
                            <CheckCircle className="h-6 w-6" />
                            Solution
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Before & <span className="text-emerald-400">After</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See the transformation that led to significant improvements in user experience and conversions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
                  <div className="bg-red-500/10 p-4 border-b border-gray-800">
                    <h3 className="text-xl font-bold text-red-400">Before</h3>
                  </div>
                  <CardContent className="p-0">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Before redesign"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <ul className="space-y-2 text-gray-400">
                        <li>• Slow loading times (8+ seconds)</li>
                        <li>• Poor mobile experience</li>
                        <li>• Complex navigation</li>
                        <li>• Low conversion rate (1.2%)</li>
                        <li>• High bounce rate (78%)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
                  <div className="bg-emerald-500/10 p-4 border-b border-gray-800">
                    <h3 className="text-xl font-bold text-emerald-400">After</h3>
                  </div>
                  <CardContent className="p-0">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="After redesign"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Fast loading (2.1 seconds)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Mobile-optimized design
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Intuitive navigation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Improved conversion (1.74%)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Reduced bounce rate (45%)
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Project <span className="text-emerald-400">Results</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The redesign delivered exceptional results that exceeded client expectations.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                          <span className="text-gray-300">Conversion Rate</span>
                          <span className="text-emerald-400 font-bold text-xl">+45%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                          <span className="text-gray-300">Page Load Speed</span>
                          <span className="text-orange-400 font-bold text-xl">-74%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                          <span className="text-gray-300">Mobile Traffic</span>
                          <span className="text-purple-400 font-bold text-xl">+60%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                          <span className="text-gray-300">Revenue</span>
                          <span className="text-cyan-400 font-bold text-xl">+80%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Client Testimonial</h3>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <p className="text-gray-300 mb-4 italic">
                          "The new website exceeded all our expectations. Not only does it look amazing, but our sales
                          have increased by 80% since launch. The mobile experience is fantastic, and our customers love
                          the new checkout process."
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Client"
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="text-white font-semibold">Sarah Johnson</p>
                            <p className="text-gray-400 text-sm">CEO, Fashion Forward</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-emerald-400">Business?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help you achieve similar results for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black font-bold px-8 py-4 text-lg">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/#projects">
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg">
                    View More Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

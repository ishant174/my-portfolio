"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, CheckCircle, Shield, Database, Users, Zap } from "lucide-react"
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

export default function PHPWebApplicationProject() {
  const projectStats = [
    { icon: Users, label: "Active Users", value: "5,000+", color: "from-emerald-500 to-cyan-500" },
    { icon: Shield, label: "Security Score", value: "A+", color: "from-orange-500 to-red-500" },
    { icon: Database, label: "Data Processed", value: "1TB+", color: "from-purple-500 to-pink-500" },
    { icon: Zap, label: "Uptime", value: "99.9%", color: "from-cyan-500 to-blue-500" },
  ]

  const features = [
    "User authentication & authorization",
    "Content management system",
    "Advanced search functionality",
    "File upload and management",
    "Email notification system",
    "Admin dashboard",
    "API integration",
    "Multi-language support",
  ]

  const technologies = [
    "PHP 8.1",
    "Laravel Framework",
    "MySQL Database",
    "JavaScript",
    "Bootstrap 5",
    "Redis Cache",
    "AWS S3",
    "Docker",
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
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              PHP Web Application Case Study
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
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-6">
                  Full-Stack • PHP Development
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                  Enterprise
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Web Platform
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  A comprehensive web application built with PHP and Laravel, featuring user management, content
                  management system, and advanced security measures for enterprise-level operations.
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => window.open("https://php-webapp-demo.com", "_blank")}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </Button>
                  <Button
                    onClick={() => window.open("https://github.com/yourusername/php-webapp", "_blank")}
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
                    alt="PHP Web Application Screenshot"
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
                  Project <span className="text-cyan-400">Overview</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This enterprise web application was developed for a mid-sized company that needed a robust platform to
                  manage their operations, content, and user base. The application handles sensitive data and requires
                  high security standards and scalability.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Built with PHP and Laravel framework, the application features a modern architecture with clean code
                  practices, comprehensive testing, and deployment automation.
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
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
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
                      className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-bold text-white mb-4">Architecture Highlights</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">MVC Architecture</p>
                        <p className="text-gray-400 text-sm">
                          Clean separation of concerns using Laravel's MVC pattern
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Security First</p>
                        <p className="text-gray-400 text-sm">
                          CSRF protection, SQL injection prevention, and data encryption
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Scalable Design</p>
                        <p className="text-gray-400 text-sm">
                          Modular structure with caching and database optimization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                Project <span className="text-cyan-400">Success</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The application has been running successfully for over 2 years with excellent performance.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                          <span className="text-gray-300">System Uptime</span>
                          <span className="text-cyan-400 font-bold text-xl">99.9%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                          <span className="text-gray-300">Active Users</span>
                          <span className="text-emerald-400 font-bold text-xl">5,000+</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                          <span className="text-gray-300">Security Incidents</span>
                          <span className="text-orange-400 font-bold text-xl">0</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Client Testimonial</h3>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <p className="text-gray-300 mb-4 italic">
                          "The web application has transformed our business operations. It's secure, fast, and handles
                          our growing user base effortlessly. The admin panel makes content management a breeze."
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Client"
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="text-white font-semibold">Emily Davis</p>
                            <p className="text-gray-400 text-sm">Operations Manager, TechCorp</p>
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
                Need a Robust <span className="text-cyan-400">Web Application?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's build a secure, scalable solution that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-4 text-lg">
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

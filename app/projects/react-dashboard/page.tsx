"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, CheckCircle, BarChart3, Users, Clock, Database } from "lucide-react"
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

export default function ReactDashboardProject() {
  const projectStats = [
    { icon: BarChart3, label: "Data Processing", value: "10x Faster", color: "from-emerald-500 to-cyan-500" },
    { icon: Users, label: "User Satisfaction", value: "95%", color: "from-orange-500 to-red-500" },
    { icon: Clock, label: "Load Time", value: "1.2s", color: "from-purple-500 to-pink-500" },
    { icon: Database, label: "Data Points", value: "1M+", color: "from-cyan-500 to-blue-500" },
  ]

  const features = [
    "Real-time data visualization",
    "Interactive charts and graphs",
    "User management system",
    "Advanced filtering and search",
    "Export functionality",
    "Mobile responsive design",
    "Dark/Light theme toggle",
    "Role-based access control",
  ]

  const technologies = [
    "React 18",
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Chart.js",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
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
            <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              React Dashboard Case Study
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
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
                  Web App • React Development
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                  Analytics
                  <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Dashboard
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  A comprehensive analytics dashboard built with React and Next.js, featuring real-time data
                  visualization, advanced filtering, and intuitive user management capabilities.
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => window.open("https://react-dashboard-demo.vercel.app", "_blank")}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button
                    onClick={() => window.open("https://github.com/yourusername/react-dashboard", "_blank")}
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
                    alt="React Dashboard Screenshot"
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
                  Project <span className="text-orange-400">Overview</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This analytics dashboard was built for a growing SaaS company that needed to visualize complex data
                  sets and provide their team with actionable insights. The challenge was to create an intuitive
                  interface that could handle large amounts of data while maintaining excellent performance.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  The solution involved building a modern React application with server-side rendering, real-time
                  updates, and advanced data visualization capabilities.
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
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
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
                      className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h4 className="text-lg font-bold text-white mb-4">Development Highlights</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Performance Optimization</p>
                        <p className="text-gray-400 text-sm">
                          Implemented virtual scrolling and data pagination for handling large datasets
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Real-time Updates</p>
                        <p className="text-gray-400 text-sm">
                          WebSocket integration for live data streaming and notifications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Responsive Design</p>
                        <p className="text-gray-400 text-sm">
                          Mobile-first approach with adaptive layouts for all screen sizes
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
                Project <span className="text-orange-400">Impact</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The dashboard transformed how the team analyzes data and makes decisions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Key Results</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                          <span className="text-gray-300">Data Processing Speed</span>
                          <span className="text-orange-400 font-bold text-xl">10x Faster</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                          <span className="text-gray-300">User Adoption Rate</span>
                          <span className="text-emerald-400 font-bold text-xl">95%</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                          <span className="text-gray-300">Decision Making Time</span>
                          <span className="text-purple-400 font-bold text-xl">-60%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Client Feedback</h3>
                      <div className="bg-gray-800/50 p-6 rounded-lg">
                        <p className="text-gray-300 mb-4 italic">
                          "This dashboard has revolutionized how we analyze our data. The real-time insights have helped
                          us make faster, more informed decisions. The interface is intuitive and our team adopted it
                          immediately."
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Client"
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="text-white font-semibold">Mike Chen</p>
                            <p className="text-gray-400 text-sm">CTO, DataTech Solutions</p>
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
                Need a Custom <span className="text-orange-400">Dashboard?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's build a data visualization solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 text-lg">
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

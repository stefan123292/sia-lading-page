import { ArrowRight, ChevronRight, Menu, Linkedin, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <div className="relative w-20 h-16 flex items-center justify-center">
              <Image src="/images/sia-logo.png" alt="SIA Logo" width={80} height={80} />
            </div>
            <span className="hidden sm:inline-block">Smart Intelligence Agency</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#what-we-do" className="text-sm font-medium hover:text-blue-600 transition-colors">
              What We Do
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#why-sia" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Why SIA
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link href="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-[radial-gradient(circle_500px_at_50%_200px,#4f46e5,transparent)]"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Smart Development for Modern Startups
                </h1>
                <p className="text-xl text-muted-foreground">
                  We build fast, scalable, AI-powered solutions for businesses ready to lead.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2">
                      Contact Us
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#portfolio">
                    <Button size="lg" variant="outline">
                      View our work
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Animated elements */}
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-cyan-500/20 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Code/data visualization elements */}
                    <div className="absolute top-1/4 right-1/3 w-32 h-6 bg-blue-200/50 rounded-md"></div>
                    <div className="absolute top-1/4 right-1/3 mt-8 w-24 h-6 bg-blue-300/50 rounded-md"></div>
                    <div className="absolute top-1/4 right-1/3 mt-16 w-28 h-6 bg-blue-400/50 rounded-md"></div>

                    {/* Central image - repositioned */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-80 blur-sm"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 bg-white/70 rounded-xl backdrop-blur-sm shadow-lg">
                          <div className="w-24 h-24 bg-transparent flex items-center justify-center mb-3 shadow-md">
                            <Image src="/images/sia-logo.png" alt="SIA Logo" width={96} height={96} />
                          </div>
                          <h3 className="text-lg font-bold text-blue-900 mb-1">Smart Intelligence</h3>
                          <p className="text-sm text-blue-700">AI-Powered Solutions</p>
                        </div>
                      </div>
                    </div>

                    {/* Animated Atom with Enhanced Details */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 400 400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Background glow effect */}
                      <defs>
                        <radialGradient id="atomGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                        </radialGradient>
                      </defs>
                      <circle
                        cx="200"
                        cy="200"
                        r="150"
                        fill="url(#atomGlow)"
                        className="animate-pulse"
                        style={{ animationDuration: "4s" }}
                      />

                      {/* Additional electron orbits */}
                      <ellipse
                        cx="200"
                        cy="200"
                        rx="150"
                        ry="75"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="1.5"
                        transform="rotate(0 200 200)"
                        className="animate-[spin_8s_linear_infinite]"
                      />
                      <ellipse
                        cx="200"
                        cy="200"
                        rx="150"
                        ry="75"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="1.5"
                        transform="rotate(60 200 200)"
                        className="animate-[spin_10s_linear_infinite]"
                      />
                      <ellipse
                        cx="200"
                        cy="200"
                        rx="150"
                        ry="75"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="1.5"
                        transform="rotate(120 200 200)"
                        className="animate-[spin_12s_linear_infinite_reverse]"
                      />
                      <ellipse
                        cx="200"
                        cy="200"
                        rx="100"
                        ry="100"
                        fill="none"
                        stroke="rgba(99, 102, 241, 0.2)"
                        strokeWidth="1.5"
                        className="animate-[spin_15s_linear_infinite]"
                      />

                      {/* Electrons with different colors */}
                      <circle
                        cx="350"
                        cy="200"
                        r="6"
                        fill="#3b82f6"
                        className="animate-[spin_8s_linear_infinite]"
                        filter="drop-shadow(0 0 3px #3b82f6)"
                      >
                        <animateMotion dur="8s" repeatCount="indefinite" path="M 0 0 A 150 75 0 1 1 0 -0.1 Z" />
                      </circle>

                      <circle cx="290" cy="265" r="6" fill="#8b5cf6" filter="drop-shadow(0 0 3px #8b5cf6)">
                        <animateMotion
                          dur="10s"
                          repeatCount="indefinite"
                          path="M 0 0 A 150 75 0 1 1 0 -0.1 Z"
                          transform="rotate(60)"
                        />
                      </circle>

                      <circle cx="110" cy="265" r="6" fill="#06b6d4" filter="drop-shadow(0 0 3px #06b6d4)">
                        <animateMotion
                          dur="12s"
                          repeatCount="indefinite"
                          path="M 0 0 A 150 75 0 1 1 0 -0.1 Z"
                          transform="rotate(120)"
                        />
                      </circle>

                      <circle cx="300" cy="200" r="5" fill="#ec4899" filter="drop-shadow(0 0 3px #ec4899)">
                        <animateMotion dur="15s" repeatCount="indefinite" path="M 0 0 A 100 100 0 1 1 0 -0.1 Z" />
                      </circle>

                      {/* Nucleus with enhanced details */}
                      <circle
                        cx="200"
                        cy="200"
                        r="20"
                        fill="url(#atomGlow)"
                        className="animate-pulse"
                        style={{ animationDuration: "2s" }}
                      />
                      <circle cx="200" cy="200" r="15" fill="#3b82f6" filter="drop-shadow(0 0 8px #3b82f6)" />

                      {/* Inner nucleus details */}
                      <circle cx="195" cy="195" r="4" fill="#ffffff" opacity="0.6" />
                      <circle cx="205" cy="193" r="2" fill="#ffffff" opacity="0.4" />

                      {/* Additional small particles */}
                      <g className="animate-[spin_20s_linear_infinite]">
                        <circle
                          cx="230"
                          cy="170"
                          r="3"
                          fill="#3b82f6"
                          className="animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                        <circle
                          cx="170"
                          cy="230"
                          r="3"
                          fill="#8b5cf6"
                          className="animate-pulse"
                          style={{ animationDelay: "1s" }}
                        />
                        <circle
                          cx="230"
                          cy="230"
                          r="3"
                          fill="#06b6d4"
                          className="animate-pulse"
                          style={{ animationDelay: "1.5s" }}
                        />
                        <circle
                          cx="170"
                          cy="170"
                          r="3"
                          fill="#ec4899"
                          className="animate-pulse"
                          style={{ animationDelay: "2s" }}
                        />
                      </g>

                      {/* Technology labels near electrons */}
                      <g className="animate-[spin_8s_linear_infinite]">
                        <text x="350" y="190" fill="#3b82f6" fontSize="10" fontFamily="monospace" textAnchor="middle">
                          <animateMotion dur="8s" repeatCount="indefinite" path="M 0 0 A 150 75 0 1 1 0 -0.1 Z" />
                          AI
                        </text>
                      </g>

                      <g className="animate-[spin_10s_linear_infinite]">
                        <text x="290" y="255" fill="#8b5cf6" fontSize="10" fontFamily="monospace" textAnchor="middle">
                          <animateMotion
                            dur="10s"
                            repeatCount="indefinite"
                            path="M 0 0 A 150 75 0 1 1 0 -0.1 Z"
                            transform="rotate(60)"
                          />
                          React
                        </text>
                      </g>

                      <g className="animate-[spin_12s_linear_infinite_reverse]">
                        <text x="110" y="255" fill="#06b6d4" fontSize="10" fontFamily="monospace" textAnchor="middle">
                          <animateMotion
                            dur="12s"
                            repeatCount="indefinite"
                            path="M 0 0 A 150 75 0 1 1 0 -0.1 Z"
                            transform="rotate(120)"
                          />
                          Node
                        </text>
                      </g>

                      <g className="animate-[spin_15s_linear_infinite]">
                        <text x="300" y="200" fill="#ec4899" fontSize="10" fontFamily="monospace" textAnchor="middle">
                          <animateMotion dur="15s" repeatCount="indefinite" path="M 0 0 A 100 100 0 1 1 0 -0.1 Z" />
                          GPT-4
                        </text>
                      </g>
                    </svg>

                    {/* Repositioned floating tech words with enhanced styling */}
                    <div className="absolute top-[15%] left-[10%] text-blue-600 font-mono text-sm font-bold px-2 py-1 bg-white/30 rounded-md backdrop-blur-sm">
                      AI Solutions
                    </div>
                    <div className="absolute bottom-[20%] left-[15%] text-purple-600 font-mono text-sm font-bold px-2 py-1 bg-white/30 rounded-md backdrop-blur-sm">
                      Full Stack
                    </div>
                    <div className="absolute top-[25%] right-[10%] text-cyan-600 font-mono text-sm font-bold px-2 py-1 bg-white/30 rounded-md backdrop-blur-sm">
                      Cloud Services
                    </div>
                    <div className="absolute bottom-[30%] right-[15%] text-pink-600 font-mono text-sm font-bold px-2 py-1 bg-white/30 rounded-md backdrop-blur-sm">
                      ML/AI
                    </div>
                    <div className="absolute top-[50%] left-[5%] text-emerald-600 font-mono text-sm font-bold px-2 py-1 bg-white/30 rounded-md backdrop-blur-sm">
                      Next.js
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Do</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We specialize in creating intelligent solutions that help businesses thrive in the digital age.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Products",
                  description:
                    "Leverage the latest in artificial intelligence to create smart, adaptive solutions for your business needs.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Full Stack App Development",
                  description:
                    "End-to-end development services from concept to deployment, creating seamless experiences across all platforms.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  ),
                },
                {
                  title: "Startup MVP Launch & Support",
                  description:
                    "Rapidly develop and launch your minimum viable product with ongoing support to scale as you grow.",
                  icon: (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We offer a comprehensive range of services to meet your technology needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { icon: "🤖", title: "AI Chatbots", description: "GPT-4, LangChain powered conversational agents" },
                {
                  icon: "🧠",
                  title: "NLP & Document Understanding",
                  description: "Advanced natural language processing solutions",
                },
                { icon: "⚙️", title: "AI Automation", description: "Process & workflow automation systems" },
                {
                  icon: "📄",
                  title: "PDF/Doc Processing",
                  description: "Intelligent document analysis and extraction",
                },
                { icon: "🔍", title: "AI Search", description: "Semantic search with vector databases" },
                { icon: "🧩", title: "Full Stack Web Apps", description: "React, Node.js, Next.js development" },
                { icon: "🧪", title: "MVP Development", description: "2-6 week delivery timeframes" },
                { icon: "📈", title: "Admin Dashboards", description: "Custom analytics and management interfaces" },
                { icon: "📱", title: "Responsive UI/UX", description: "Beautiful, functional frontend design" },
                { icon: "☁️", title: "API Integrations", description: "OpenAI, Supabase, Stripe, and more" },
                { icon: "🧰", title: "SaaS Development", description: "Scalable software-as-a-service solutions" },
                { icon: "🛡️", title: "AI-enhanced Security", description: "Advanced protection for your systems" },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-md transition-all duration-300 border-0 shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore some of our recent projects and success stories.
              </p>
            </div>
            <Tabs defaultValue="ai" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="ai">AI Solutions</TabsTrigger>
                  <TabsTrigger value="web">Web Applications</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="ai" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Intelligent Document Processor",
                      description:
                        "AI-powered system that extracts, categorizes, and summarizes information from thousands of documents.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["AI", "NLP", "Document Processing"],
                    },
                    {
                      title: "Customer Support Chatbot",
                      description: "GPT-4 powered chatbot that handles 80% of customer inquiries automatically.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["Chatbot", "GPT-4", "Customer Service"],
                    },
                    {
                      title: "Predictive Analytics Dashboard",
                      description: "AI system that forecasts business metrics with 94% accuracy.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["Analytics", "Machine Learning", "Dashboard"],
                    },
                  ].map((project, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-md">
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="web" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "E-commerce Platform",
                      description:
                        "Full-stack solution with inventory management, payment processing, and customer analytics.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["React", "Node.js", "E-commerce"],
                    },
                    {
                      title: "Healthcare Management System",
                      description: "Secure platform for patient records, appointment scheduling, and telemedicine.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["Next.js", "HIPAA", "Healthcare"],
                    },
                    {
                      title: "Real Estate Marketplace",
                      description: "Property listing platform with virtual tours and AI-powered recommendations.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["Full Stack", "Maps API", "Real Estate"],
                    },
                  ].map((project, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-md">
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="mobile" className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Fitness Tracking App",
                      description: "Mobile application with workout plans, progress tracking, and social features.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["React Native", "Health", "Mobile"],
                    },
                    {
                      title: "Food Delivery Platform",
                      description: "End-to-end solution for restaurants and customers with real-time order tracking.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["Mobile", "Maps", "Payments"],
                    },
                    {
                      title: "Language Learning App",
                      description: "AI-powered language learning with speech recognition and personalized lessons.",
                      image: "/placeholder.svg?height=400&width=600",
                      tags: ["Education", "AI", "Mobile"],
                    },
                  ].map((project, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-md">
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg" className="gap-2">
                View all case studies
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why SIA Section */}
        <section id="why-sia" className="py-20 bg-blue-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose SIA?</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We combine technical expertise with business acumen to deliver exceptional results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0"></div>

                {/* Dynamic Team Visualization */}
                <div className="absolute inset-0 z-10">
                  {/* Background elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-[80%] h-[80%] rounded-full bg-blue-100/30 animate-pulse"
                      style={{ animationDuration: "7s" }}
                    ></div>
                    <div
                      className="w-[60%] h-[60%] rounded-full bg-blue-200/40 animate-pulse"
                      style={{ animationDuration: "5s" }}
                    ></div>
                  </div>

                  {/* Connecting lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
                      </linearGradient>
                      <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                        <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
                      </linearGradient>
                      <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
                        <stop offset="100%" stopColor="rgba(6, 182, 212, 0.6)" />
                      </linearGradient>
                      <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(236, 72, 153, 0.2)" />
                        <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
                      </linearGradient>
                    </defs>

                    {/* Connection lines with animation */}
                    <path
                      d="M100,100 Q200,50 300,100"
                      stroke="url(#lineGradient1)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_30s_linear_infinite]"
                    />
                    <path
                      d="M100,300 Q200,350 300,300"
                      stroke="url(#lineGradient1)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_30s_linear_infinite]"
                      style={{ animationDirection: "reverse" }}
                    />
                    <path
                      d="M100,100 Q100,200 100,300"
                      stroke="url(#lineGradient2)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_25s_linear_infinite]"
                    />
                    <path
                      d="M300,100 Q300,200 300,300"
                      stroke="url(#lineGradient2)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_25s_linear_infinite]"
                      style={{ animationDirection: "reverse" }}
                    />
                    <path
                      d="M100,100 Q200,200 300,300"
                      stroke="url(#lineGradient3)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_35s_linear_infinite]"
                    />
                    <path
                      d="M300,100 Q200,200 100,300"
                      stroke="url(#lineGradient4)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_35s_linear_infinite]"
                      style={{ animationDirection: "reverse" }}
                    />

                    {/* Additional curved paths */}
                    <path
                      d="M200,50 Q300,150 200,250"
                      stroke="url(#lineGradient3)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_40s_linear_infinite]"
                    />
                    <path
                      d="M200,350 Q100,250 200,150"
                      stroke="url(#lineGradient4)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-[dash_40s_linear_infinite]"
                      style={{ animationDirection: "reverse" }}
                    />

                    {/* Animated particles along paths */}
                    <circle r="3" fill="#3b82f6">
                      <animateMotion dur="10s" repeatCount="indefinite" path="M100,100 Q200,50 300,100" />
                    </circle>
                    <circle r="3" fill="#8b5cf6">
                      <animateMotion dur="12s" repeatCount="indefinite" path="M100,300 Q200,350 300,300" />
                    </circle>
                    <circle r="3" fill="#06b6d4">
                      <animateMotion dur="15s" repeatCount="indefinite" path="M100,100 Q200,200 300,300" />
                    </circle>
                    <circle r="3" fill="#ec4899">
                      <animateMotion dur="18s" repeatCount="indefinite" path="M300,100 Q200,200 100,300" />
                    </circle>
                    <circle r="3" fill="#3b82f6">
                      <animateMotion dur="20s" repeatCount="indefinite" path="M200,50 Q300,150 200,250" />
                    </circle>
                    <circle r="3" fill="#8b5cf6">
                      <animateMotion dur="22s" repeatCount="indefinite" path="M200,350 Q100,250 200,150" />
                    </circle>
                  </svg>

                  {/* Technology/Service nodes */}
                  <div className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-blue-500/90 shadow-md flex items-center justify-center text-white">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-center text-xs font-medium shadow-sm">
                        AI Solutions
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[25%] right-[25%] transform translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-purple-500/90 shadow-md flex items-center justify-center text-white">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-center text-xs font-medium shadow-sm">
                        Development
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[25%] left-[25%] transform -translate-x-1/2 translate-y-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/90 shadow-md flex items-center justify-center text-white">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-center text-xs font-medium shadow-sm">
                        Cloud Services
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[25%] right-[25%] transform translate-x-1/2 translate-y-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-pink-500/90 shadow-md flex items-center justify-center text-white">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-center text-xs font-medium shadow-sm">
                        Data Analytics
                      </div>
                    </div>
                  </div>

                  {/* Central element */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center text-white font-bold">
                      <div className="text-center">
                        <div className="text-2xl">SIA</div>
                        <div className="text-xs mt-1">Solutions</div>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>

                  {/* Floating skill badges */}
                  <div
                    className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-800 shadow-sm animate-pulse"
                    style={{ animationDuration: "4s" }}
                  >
                    Rapid Delivery
                  </div>
                  <div
                    className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 translate-y-1/2 px-3 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-800 shadow-sm animate-pulse"
                    style={{ animationDuration: "5s", animationDelay: "1s" }}
                  >
                    Modern Tech
                  </div>
                  <div
                    className="absolute left-[15%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-cyan-100 rounded-full text-xs font-medium text-cyan-800 shadow-sm animate-pulse"
                    style={{ animationDuration: "4.5s", animationDelay: "0.5s" }}
                  >
                    Scalable
                  </div>
                  <div
                    className="absolute right-[15%] top-1/2 transform translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-pink-100 rounded-full text-xs font-medium text-pink-800 shadow-sm animate-pulse"
                    style={{ animationDuration: "5.5s", animationDelay: "1.5s" }}
                  >
                    Intelligent
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Fast Delivery",
                    description: "We deliver MVPs in 2-6 weeks, getting your product to market quickly.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    title: "Reliable & Scalable",
                    description: "Our solutions are built to grow with your business, from startup to enterprise.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    title: "Elite Team",
                    description: "Our team consists of top-tier developers, designers, and AI specialists.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    title: "Cutting-Edge Technology",
                    description: "We stay at the forefront of technology to provide innovative solutions.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We use the latest technologies to build powerful, scalable solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
              {[
                {
                  name: "React",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
                },
                {
                  name: "Node.js",
                  logo: "https://nodejs.org/static/images/logo.svg",
                },
                {
                  name: "Next.js",
                  logo: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
                },
                {
                  name: "GPT-4",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
                },
                {
                  name: "Docker",
                  logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
                },
                {
                  name: "AWS",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
                },
                {
                  name: "Supabase",
                  logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
                },
                {
                  name: "Django",
                  logo: "https://static.djangoproject.com/img/logos/django-logo-negative.svg",
                },
                {
                  name: "PostgreSQL",
                  logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
                },
                {
                  name: "TypeScript",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
                },
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                    <Image
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      width={64}
                      height={64}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our talented professionals are dedicated to bringing your ideas to life.
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { name: "Covanji Stepan", role: "CEO & Founder", image: "/images/team/stefan.png" },
                { name: "Ursu Arsenie", role: "CTO", image: "/images/team/arsenie.png" },
                { name: "Trofim Ion", role: "Lead Developer", image: "/images/team/trofim.png" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-full pt-[125%]">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                    <p className="text-md text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Don't just take our word for it. Here's what our clients have to say.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "SIA transformed our business with their AI-powered solution. Our customer engagement increased by 40% within the first month.",
                  author: "Jennifer Lee",
                  position: "CTO, TechVision Inc.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "The team at SIA delivered our MVP in just 4 weeks, exceeding our expectations. Their technical expertise and professionalism are unmatched.",
                  author: "Robert Chen",
                  position: "Founder, StartupX",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Working with SIA has been a game-changer for our company. Their full-stack development capabilities helped us scale rapidly and efficiently.",
                  author: "Maria Garcia",
                  position: "Product Manager, GrowthLabs",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-4">Let's bring your idea to life with smart technology</h2>
              <p className="text-lg opacity-90 max-w-2xl mb-8">
                Ready to transform your business with cutting-edge AI and development solutions? Get in touch with us
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="relative w-12 h-12 bg-transparent">
                  <Image src="/images/sia-logo.png" alt="SIA Logo" width={48} height={48} />
                </div>
                <span>Smart Intelligence Agency</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building fast, scalable, AI-powered solutions for businesses ready to lead.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cloud Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:info@sia.com" className="hover:text-white">
                    info@sia.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-blue-400" />
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 mt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Smart Intelligence Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

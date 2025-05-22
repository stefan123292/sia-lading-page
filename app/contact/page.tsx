import { Mail, ArrowLeft, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <Image src="/images/sia-logo.png" alt="SIA Logo" width={64} height={64} />
            </div>
            <span className="hidden sm:inline-block">Smart Intelligence Agency</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#what-we-do" className="text-sm font-medium hover:text-blue-600 transition-colors">
              What We Do
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/#portfolio" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/#why-sia" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Why SIA
            </Link>
            <Link href="/#team" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link href="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 sm:px-6">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have a question or want to work with us? Fill out the form below or use our contact information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+373 12345678" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-muted-foreground mb-1">For general inquiries:</p>
                      <a href="mailto:info@sia.com" className="text-blue-600 hover:underline">
                        info@sia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">LinkedIn</h3>
                      <p className="text-muted-foreground mb-1">Connect with us:</p>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Smart Intelligence Agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Instagram</h3>
                      <p className="text-muted-foreground mb-1">Follow us:</p>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @smartintelligenceagency
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative z-10 bg-white/90 p-6 rounded-xl shadow-lg max-w-md text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <Image src="/images/sia-logo.png" alt="SIA Logo" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Let's Build Something Amazing Together</h3>
                    <p className="text-gray-700 mb-4">
                      Our team is ready to turn your ideas into reality with cutting-edge technology and innovative
                      solutions.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 z-0">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                      </linearGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Background gradient */}
                    <rect width="100" height="100" fill="url(#bgGradient)" />

                    {/* Animated tech-themed elements */}
                    <g className="animate-pulse" style={{ animationDuration: "3s" }}>
                      <path
                        d="M20,20 L80,80 M80,20 L20,80 M50,10 L50,90 M10,50 L90,50"
                        stroke="#4F46E5"
                        strokeWidth="0.5"
                        strokeDasharray="2,2"
                        opacity="0.6"
                      />
                    </g>

                    {/* Digital circuit pattern */}
                    <g stroke="#06B6D4" strokeWidth="0.7" opacity="0.7" fill="none">
                      <path d="M10,30 L40,30 L40,70 L70,70 L70,30 L90,30" />
                      <path d="M30,10 L30,40 L60,40 L60,90" />
                      <circle cx="40" cy="30" r="2" fill="#06B6D4" />
                      <circle cx="60" cy="40" r="2" fill="#06B6D4" />
                      <circle cx="70" cy="70" r="2" fill="#06B6D4" />
                      <circle cx="30" cy="40" r="2" fill="#06B6D4" />
                    </g>

                    {/* Animated particles */}
                    <circle cx="40" cy="30" r="1" fill="#FFFFFF" filter="url(#glow)">
                      <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="40" r="1" fill="#FFFFFF" filter="url(#glow)">
                      <animate
                        attributeName="opacity"
                        values="0.2;1;0.2"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </circle>
                    <circle cx="70" cy="70" r="1" fill="#FFFFFF" filter="url(#glow)">
                      <animate
                        attributeName="opacity"
                        values="0.2;1;0.2"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="2s"
                      />
                    </circle>

                    {/* AI/Tech related symbols */}
                    <g transform="translate(20,60) scale(0.15)" fill="#8B5CF6" opacity="0.8">
                      <path d="M50,0 L100,50 L50,100 L0,50 Z" /> {/* Diamond shape */}
                      <circle cx="50" cy="50" r="20" />
                    </g>

                    <g transform="translate(75,25) scale(0.15)" fill="#EC4899" opacity="0.8">
                      <rect x="25" y="25" width="50" height="50" rx="10" />
                      <circle cx="50" cy="50" r="15" fill="none" stroke="#EC4899" strokeWidth="5" />
                    </g>

                    {/* Animated data flow */}
                    <path id="dataPath" d="M10,80 C30,90 70,70 90,80" fill="none" stroke="none" />
                    <circle r="1.2" fill="#FFFFFF">
                      <animateMotion path="M10,80 C30,90 70,70 90,80" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="1.2" fill="#FFFFFF">
                      <animateMotion path="M10,80 C30,90 70,70 90,80" dur="4s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    <circle r="1.2" fill="#FFFFFF">
                      <animateMotion path="M10,80 C30,90 70,70 90,80" dur="4s" repeatCount="indefinite" begin="2s" />
                    </circle>
                    <circle r="1.2" fill="#FFFFFF">
                      <animateMotion path="M10,80 C30,90 70,70 90,80" dur="4s" repeatCount="indefinite" begin="3s" />
                    </circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container px-4 sm:px-6">
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
                  <Link href="/#services" className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="hover:text-white">
                    Portfolio
                  </Link>
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

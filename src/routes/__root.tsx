import { createRootRoute, Outlet } from '@tanstack/react-router';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, ChevronDown, Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: "easeInOut" } },
};

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

function RootComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = false; // Placeholder for auth state

  const handleLogout = () => {
    setIsUserMenuOpen(false);
    navigate({ to: '/' });
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <motion.header 
          className="bg-white border-b shadow-sm sticky top-0 z-50"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <div className="container mx-auto px-4 relative">
            <div className="flex h-16 items-center justify-between relative z-10">
              {/* Logo */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="/" 
                      className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors duration-300 flex items-center gap-2"
                    >
                      <motion.span whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        EduTech
                      </motion.span>
                      <BookOpen className="h-6 w-6" />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Desktop Navigation */}
              <NavigationMenu>
                <NavigationMenuList className="hidden md:flex gap-8">
                  {[{ href: "/courses", label: "Courses" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }].map(
                    (item) => (
                      <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink 
                          href={item.href}
                          className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 relative group py-2"
                        >
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Auth Buttons & Mobile Menu Toggle */}
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-3">
                  {isAuthenticated ? (
                    <div className="relative">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      >
                        <User className="h-5 w-5" />
                        <span></span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                      </Button>
                      <AnimatePresence>
                        {isUserMenuOpen && (
                          <motion.div
                            className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-2"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate({ to: '/' })}>
                              My 
                            </Button>
                            <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                              <LogOut className="h-4 w-4 mr-2" /> Logout
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                        onClick={() => navigate({ to: '/login' })}
                      >
                        Log in
                      </Button>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                        onClick={() => navigate({ to: '/' })}
                      >
                        Sign up
                      </Button>
                    </>
                  )}
                </div>
                <button 
                  className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="md:hidden overflow-hidden bg-white border-t"
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="py-4 space-y-4 px-4">
                    {["Courses", "About", "Contact"].map((item) => (
                      <a 
                        key={item}
                        href={`/${item.toLowerCase()}`} 
                        className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                    {isAuthenticated ? (
                      <>
                        <Button 
                          variant="outline" 
                          className="w-full text-left justify-start"
                          onClick={() => { navigate({ to: '/' }); setIsMobileMenuOpen(false); }}
                        >
                          My 
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full text-left justify-start"
                          onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                        >
                          <LogOut className="h-4 w-4 mr-2" /> Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => { navigate({ to: '/login' }); setIsMobileMenuOpen(false); }}
                        >
                          Log in
                        </Button>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => { navigate({ to: '/' }); setIsMobileMenuOpen(false); }}
                        >
                          Sign up
                        </Button>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-grow relative">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 100 100">
              <path d="M0 50 H100 M50 0 V100" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                  <motion.span whileHover={{ scale: 1.05 }}>EduTech</motion.span>
                  <BookOpen className="h-6 w-6" />
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Empowering professionals with world-class online education and cutting-edge skills.
                </p>
                <div className="flex gap-4 mt-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  {["Courses", "About", "Contact", "Blog"].map((item) => (
                    <li key={item}>
                      <a 
                        href={`/${item.toLowerCase()}`} 
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200 relative group"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
                <ul className="space-y-3">
                  {["Help Center", "Terms of Service", "Privacy Policy", "FAQ"].map((item) => (
                    <li key={item}>
                      <a 
                        href={`/${item.toLowerCase().replace(" ", "-")}`} 
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200 relative group"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span>Email:</span> <a href="mailto:info@edutech.com" className="hover:text-blue-400">info@edutech.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>Phone:</span> <a href="tel:+15551234567" className="hover:text-blue-400">+1 (555) 123-4567</a>
                  </li>
                  <li>Mon-Fri: 9AM-6PM EST</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {new Date().getFullYear()} EduTech. All rights reserved.
            </motion.div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default RootComponent;
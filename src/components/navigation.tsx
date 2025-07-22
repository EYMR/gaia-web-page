"use client"

import {Leaf, Menu, X} from "lucide-react"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {useState} from "react"

const navigationItems = [
    {name: "Inicio", href: "/"},
    {name: "Acerca de", href: "/about"},
    {name: "Productos", href: "/products"},
    {name: "Servicios", href: "/services"},
    {name: "Consultas", href: "/calendar"},
    {name: "Tratamientos", href: "/treatments"},
    /*{name: "Blog", href: "/blog"},*/
    {name: "Testimonios", href: "/testimonials"},
    {name: "Contacto", href: "/contact"},
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Leaf className="h-8 w-8 text-green-600"/>
                            <span className="font-bold text-xl text-gray-800">Gaia Medico Tradicional</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    pathname === item.href
                                        ? "text-green-600 bg-green-50"
                                        : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        >
                            {isOpen ? <X className="block h-6 w-6"/> : <Menu className="block h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                    pathname === item.href
                                        ? "text-green-600 bg-green-50"
                                        : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-20 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Steffens Showcase</h3>
            <p className="text-sm opacity-90">Handcrafted custom wood furniture and design for discerning customers.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="opacity-90 hover:opacity-100">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="opacity-90 hover:opacity-100">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/education" className="opacity-90 hover:opacity-100">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/events" className="opacity-90 hover:opacity-100">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@steffensshowcase.com" className="opacity-90 hover:opacity-100">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/faq" className="opacity-90 hover:opacity-100">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="opacity-90 hover:opacity-100">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="opacity-90 hover:opacity-100">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="opacity-90 hover:opacity-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="opacity-90 hover:opacity-100">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="opacity-90 hover:opacity-100">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
          <p>&copy; {currentYear} Steffens Showcase. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100">
              Twitter
            </a>
            <a href="#" className="hover:opacity-100">
              Instagram
            </a>
            <a href="#" className="hover:opacity-100">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

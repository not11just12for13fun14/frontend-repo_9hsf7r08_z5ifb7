import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Sithebe VisionX Studios</h4>
          <p className="text-muted-foreground">A futuristic creative-engineering studio crafting brands, products, and AI experiences.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold mb-2">Explore</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="/services" className="hover:text-primary">Services</a></li>
              <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
              <li><a href="/ai" className="hover:text-primary">AI</a></li>
              <li><a href="/svxs/dashboard" className="hover:text-primary">Studios</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Company</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="/themes" className="hover:text-primary">Themes</a></li>
              <li><a href="/test" className="hover:text-primary">System</a></li>
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground">
          <p>© {new Date().getFullYear()} SVXS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

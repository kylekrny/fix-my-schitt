import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Button } from './Button'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex flex-col items-center">
            <Logo className="mx-auto h-10 w-auto" />
            <Button href="/contact" color="blue" className="mt-6">
              <span>
                Contact <span className="hidden lg:inline">us</span>
              </span>
            </Button>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/#services">Services</NavLink>
              <NavLink href="/#principles">Principles</NavLink>
              {/* <NavLink href="/#testimonials">Testimonials</NavLink>
              <NavLink href="/#faq">FAQ</NavLink> */}
              {/* <NavLink href="/#pricing">Pricing</NavLink> */}
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="mailto:hello@fixmyschitt.com"
              className="group"
              aria-label="Fix My Schitt email"
            >
              hello@fixmyschitt.com
            </Link>
            <Link
              href="tel:7206757448"
              className="group"
              aria-label="Fix My Schitt phone number"
            >
              (720) 675-7448
            </Link>
            <Link
              href="https://instagram.com/fixmyschitt"
              target="_blank"
              noreferrer
            >
              @fixmyschitt
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Fix My Schitt. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

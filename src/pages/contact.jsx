import Head from 'next/head'
import { ContactForm } from '@/components/ContactForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Fix My Schitt</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

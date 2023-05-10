import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import backgroundImage from '@/images/background-features.jpg'
import { Container } from './Container'

const features = [
  {
    name: 'Hardware Management',
    description:
      'Managing your employees devices out in the field. Building custom servers or nucs. Hardware repairs / replacements. You name it, we can do it.',
  },
  {
    name: 'Software Development',
    description:
      'Developing custom plugins for a software you already love to developing a barcode management system to better track warehouse inventory.',
  },
  {
    name: 'Networking',
    description:
      'Need a shared database any one can access? Need to set up a mesh network so your whole office is online? We got you.',
  },
  {
    name: 'Cloud / Hosting Management',
    description:
      'Whether you manage your email and website through GoDaddy, or your app is running on AWS EKS with your database on AWS RDS we can help optimize your cloud setup.',
  },
  {
    name: 'Web Development',
    description:
      'Shopify, Squarespace, Wix sometimes the out of the box solutions don’t quite cooperate. When you need a modification or a custom site built we have you covered.',
  },
  {
    name: 'IoT (Internet of Things)',
    description:
      'Want to have your home / office fully connected? We can help install, configure and automate all your devices. We can setup your smart security system to program your lights to change colors when your phone rings. ',
  },
]

export function TertiaryFeatures() {
  return (
    <section
      id="services"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-24%] translate-y-[-32%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-white">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                None of the bull schitt.
              </p>
              <p className="mt-6 text-base leading-7 text-white">
                Our well rounded IT and digital services allow you to work
                smarter. From automation, system design to hardware management.
                We have you covered.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-white sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-white">
                    <CheckIcon
                      className="absolute left-0 top-1 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}

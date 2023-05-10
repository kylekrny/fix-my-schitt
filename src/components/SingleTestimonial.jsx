import { StarIcon } from '@heroicons/react/20/solid'

export function SingleTestimonial() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
          <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        </div>
        <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
          <p>
            “I was skeptical having prior website experiences that were not
            optimal for me. Fix My Schitt actually heard and understood the message I
            wished to communicate to the public via the website. They then
            educated me on the best way to do that with their knowledge of all the
            things that go in to search engines, marketing, buzz words, e.t.c. I
            trust Fix My Schitt.”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900">Jeff Jones</div>
            <div className="mt-0.5 text-gray-600">Owner of Jones Bodywork</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

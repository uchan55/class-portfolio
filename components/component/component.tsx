/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/UzqpCI1A0L9
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <PaletteIcon className="h-6 w-6" />
          <span className="sr-only">Jane Doe's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Jane Doe</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Graphic Designer | UI/UX Expert
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    I create visually stunning and user-friendly designs that captivate and engage audiences.
                  </p>
                </div>
              </div>
              <img
                alt="Jane Doe"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of my latest design projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 1"
                  className="object-cover w-full h-60"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-semibold text-lg md:text-xl">Acme Website Redesign</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A modern and responsive website design for Acme Inc.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 2"
                  className="object-cover w-full h-60"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-semibold text-lg md:text-xl">Mobile App UI Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A sleek and intuitive mobile app design for a fitness tracking app.
                  </p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project</span>
                </Link>
                <img
                  alt="Project 3"
                  className="object-cover w-full h-60"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-semibold text-lg md:text-xl">Brand Identity Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A comprehensive brand identity design for a sustainable clothing line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I am a passionate graphic designer with over 7 years of experience in creating visually stunning and
                  user-friendly designs. My expertise spans across various domains, including branding, web design,
                  mobile app design, and print media.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I have a keen eye for detail and a deep understanding of design principles, color theory, and
                  typography. I am constantly learning and staying up-to-date with the latest design trends and
                  technologies to ensure that my work remains cutting-edge and impactful.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Skills</h2>
                <ul className="grid gap-4">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Graphic Design</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and Figma.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">UI/UX Design</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Experienced in creating user-friendly and visually appealing interfaces for web and mobile
                        applications.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Branding</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Skilled in developing comprehensive brand identities, including logos, color palettes, and brand
                        guidelines.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as
                  soon as possible.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" required rows={5} />
                  </div>
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Jane Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}

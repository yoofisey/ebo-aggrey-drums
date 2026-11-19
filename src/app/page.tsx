import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DiscIcon,
  FolderIcon,
  UserIcon,
} from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-7 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:gap-12">
          <div className="order-2 flex flex-col justify-between lg:order-1 lg:py-6">
            <Eyebrow className="reveal">
              01 / Ebo Aggrey / Drums and records
            </Eyebrow>

            <div className="mt-10 lg:mt-0">
              <h1 className="reveal reveal-delay-1 text-balance text-[clamp(2.9rem,7.8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
                <span className="block">Play the</span>
                <span className="block sm:pl-[0.55em]">room.</span>
                <span className="block">Serve the song.</span>
              </h1>

              <p className="reveal reveal-delay-2 mt-8 max-w-lg text-[15px] leading-8 text-ink-muted sm:text-base">
                I&apos;m Ebo. I teach drummers how to listen, relax and trust
                what they hear. Got a record that needs drums? Bring me the
                track and we&apos;ll take it from there.
              </p>

              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="/book" size="lg">
                  <DiscIcon className="size-4" />
                  Book a record session
                </ButtonLink>
                <ButtonLink href="/materials" variant="secondary" size="lg">
                  Browse materials
                  <ArrowRightIcon className="size-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="reveal reveal-delay-4 mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs tracking-[0.04em] text-ink-subtle lg:mt-0">
              <span>Live tracking</span>
              <span>Remote overdubs</span>
              <span>Lessons and notes</span>
            </div>
          </div>

          <div className="relative order-1 min-h-[500px] lg:order-2 lg:min-h-[700px]">
            <div className="reveal reveal-delay-2 absolute inset-x-4 top-4 bottom-12 overflow-hidden rounded-[40px] bg-ink shadow-[0_32px_90px_rgba(0,0,0,0.24)] lg:inset-x-0 lg:bottom-16">
              <Image
                src="/images/live-drummer.jpg"
                alt="A drummer playing live, reduced to a silhouette"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="silhouette film-drift object-cover object-[50%_42%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

              <span className="glass absolute left-6 top-6 hidden rounded-full px-3 py-2 text-xs tracking-[0.04em] text-ink sm:inline-flex">
                Ebo / at the kit
              </span>

              <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-xs tracking-[0.04em] text-ink-subtle">
                  Listening first
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.02em] text-ink">
                  The feel comes before the fill.
                </p>
              </div>
            </div>

            <div className="glass reveal reveal-delay-3 absolute right-4 top-4 z-10 w-[min(300px,calc(100%-2rem))] rounded-[28px] p-5 sm:right-8 sm:top-8 lg:-bottom-2 lg:-left-10 lg:right-auto lg:top-auto lg:w-[290px] lg:p-6">
              <span className="ink-gradient flex size-10 items-center justify-center rounded-2xl text-white shadow-[0_6px_18px_rgba(0,0,0,0.16)]">
                <DiscIcon className="size-5" />
              </span>
              <Eyebrow className="mt-5">For your next record</Eyebrow>
              <p className="mt-2 text-lg font-semibold leading-snug tracking-[-0.025em]">
                Need drums that listen first?
              </p>
              <ButtonLink href="/book" size="sm" className="mt-5 w-full">
                Send a track
                <ArrowRightIcon className="size-3.5" />
              </ButtonLink>
            </div>
          </div>
        </div>

        <section
          className="mt-24 sm:mt-32"
          aria-labelledby="home-approach-title"
        >
          <div className="panel relative overflow-hidden p-6 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
              <div className="relative min-h-[300px] overflow-hidden rounded-[30px] bg-ink shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
                <Image
                  src="/images/studio-mics.jpg"
                  alt="Studio microphones beside a drum kit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="silhouette film-drift object-cover object-[50%_50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="glass absolute left-5 top-5 rounded-full px-3 py-2 text-xs tracking-[0.04em] text-ink">
                  In the room
                </span>
                <span className="glass absolute bottom-5 left-5 rounded-full px-3 py-2 text-xs tracking-[0.04em] text-ink sm:bottom-6 sm:left-6">
                  Room tone / Take three
                </span>
              </div>

              <div>
                <Eyebrow>02 / The approach</Eyebrow>
                <h2
                  id="home-approach-title"
                  className="mt-6 text-balance text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
                >
                  The best take is the one where everyone forgets they&apos;re
                  being recorded.
                </h2>
                <p className="mt-6 max-w-xl text-[15px] leading-8 text-ink-muted">
                  I keep the room calm, the references close and the drums in
                  service of the song. Whether it is a lesson or a record
                  session, we start by listening.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="chip">Feel over flash</span>
                  <span className="chip">Clear references</span>
                  <span className="chip">No ego in the room</span>
                </div>
                <ButtonLink
                  href="/about"
                  variant="ghost"
                  className="mt-8 -ml-4"
                >
                  More about how I work
                  <ArrowRightIcon className="size-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Explore the site" className="mt-24 sm:mt-28">
          <div className="mb-6 flex items-end justify-between gap-6">
            <Eyebrow>Where to next</Eyebrow>
            <p className="hidden text-xs tracking-[0.04em] text-ink-subtle sm:block">
              Three good places to start
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            <Link
              href="/book"
              className="group hover-lift reveal panel flex min-h-[250px] flex-col justify-between p-7 sm:p-9 md:col-span-5"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-surface-raised text-ink transition-colors duration-300 group-hover:bg-white">
                  <DiscIcon className="size-5" />
                </span>
                <ArrowUpRightIcon className="size-4 text-ink-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
              <div>
                <Eyebrow>03 / Records</Eyebrow>
                <h3 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-[-0.035em]">
                  Play on your record.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-ink-muted">
                  Send a reference and a few words about the track. I&apos;ll
                  reply with what I hear and how we can work together.
                </p>
              </div>
            </Link>

            <Link
              href="/materials"
              className="group hover-lift reveal reveal-delay-1 panel-sm flex min-h-[250px] flex-col justify-between p-7 sm:p-8 md:col-span-4"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-surface-raised text-ink transition-colors duration-300 group-hover:bg-white">
                  <FolderIcon className="size-5" />
                </span>
                <ArrowUpRightIcon className="size-4 text-ink-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
              <div>
                <Eyebrow>04 / Practice</Eyebrow>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  The materials shelf.
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  Videos, notes, audio studies and links.
                </p>
              </div>
            </Link>

            <Link
              href="/about"
              className="group hover-lift reveal reveal-delay-2 panel-sm flex min-h-[250px] flex-col justify-between p-7 md:col-span-3"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-surface-raised text-ink transition-colors duration-300 group-hover:bg-white">
                  <UserIcon className="size-5" />
                </span>
                <ArrowUpRightIcon className="size-4 text-ink-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
              <div>
                <Eyebrow>05 / Person</Eyebrow>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                  About Ebo.
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  Who is teaching, and how.
                </p>
              </div>
            </Link>
          </div>
        </nav>
      </Container>
    </section>
  );
}

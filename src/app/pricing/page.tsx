import type { Metadata } from "next";
import { CheckIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Ways to work with Ebo Aggrey, with prices to be supplied.",
};

const plans = [
  {
    name: "Free first lesson",
    price: "[YOUR PRICE]",
    note: "A conversation and a listen, with no commitment.",
    includes: ["One 1-on-1 lesson", "A simple practice direction", "No payment details"],
    href: "/book",
    action: "Start free lesson",
    popular: false,
  },
  {
    name: "Regular lessons",
    price: "[YOUR PRICE]",
    note: "For drummers who want to keep working steadily.",
    includes: ["Weekly or fortnightly lessons", "Notes after each session", "Practice goals you can measure"],
    href: "/book",
    action: "Book lessons",
    popular: true,
  },
  {
    name: "Session drums",
    price: "[YOUR PRICE]",
    note: "For records that need drums that belong to the song.",
    includes: ["Live or remote tracking", "Reference-led approach", "A clear quote before we start"],
    href: "/play-on-your-record",
    action: "Send a track",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Pricing / ways to work together"
          title="Simple ways in."
          intro="Prices are placeholders until Ebo supplies them. The work behind each one is real."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col p-8",
                plan.popular ? "card card-raised" : "card",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Eyebrow>{plan.name}</Eyebrow>
                  <p className="mt-5 placeholder text-[26px] font-bold tracking-[-0.035em]">
                    {plan.price}
                  </p>
                </div>
                {plan.popular ? (
                  <span className="control px-3 py-2 text-[12px] font-semibold text-line">
                    Most popular
                  </span>
                ) : null}
              </div>

              <p className="mt-5 text-[14px] leading-7 text-ink-muted">
                {plan.note}
              </p>

              <ul className="mt-8 grid gap-4">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-6 text-ink-muted"
                  >
                    <CheckIcon className="mt-1 size-4 shrink-0 text-line" />
                    {item}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={plan.href}
                variant={plan.popular ? "primary" : "secondary"}
                className="mt-auto w-full"
              >
                {plan.action}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="card p-8 sm:p-10">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-5 text-[28px] font-bold tracking-[-0.035em]">
            No payment is taken on this site
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-ink-muted">
            Every form here prepares an email. Nothing is charged, stored or
            scheduled by the site itself. Prices and payment details need a real
            backend before they mean anything.
          </p>
        </div>
      </Section>
    </>
  );
}

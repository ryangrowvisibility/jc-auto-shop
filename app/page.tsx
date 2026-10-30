import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 492-1377";
const TEL = "tel:+19164921377";
const MAPS = "https://www.google.com/maps/search/?api=1&query=JC%20Auto%20Shop&query_place_id=ChIJXxiFo8bRmoARXIaLUSPrAyE";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=501+T+St+Sacramento+CA+95811";
const ADDRESS = "501 T St, Sacramento, CA 95811";

const services = [
  { icon: "drop", name: "Oil Changes & Maintenance", body: "Oil and filter changes, tune-ups, belts and hoses, and factory-scheduled maintenance to keep your warranty and your engine happy." },
  { icon: "disc", name: "Brakes & Clutches", body: "Pads, rotors and brake service, plus clutch replacement for manual transmissions. We tell you what's worn and what can wait." },
  { icon: "thermo", name: "A/C, Radiators & Water Pumps", body: "A/C service for Sacramento heat, and cooling-system repairs when the temperature gauge starts climbing." },
  { icon: "battery", name: "Starters, Alternators & Batteries", body: "Car won't start or the battery keeps dying? We test the charging system and replace only what's actually bad." },
  { icon: "car", name: "Tires & Wheel Alignment", body: "Tires and wheel alignments so the car tracks straight and your tires wear evenly instead of wearing out early." },
  { icon: "cog", name: "Transmissions", body: "Transmission service and complete transmission work, from fluid changes to bigger repairs, done in-house." },
  { icon: "grid", name: "Windshield Replacement", body: "Cracked windshield? It's on our menu too, which most general repair shops can't say. One stop for the whole car." },
];

const reviews = [
  { name: "Daryl M.", job: "Customer for nearly 20 years", quote: "Our experience has always been positive. The mechanics are efficient, friendly, knowledgeable and honest. It's been close to 20 years and we still keep coming back for any of our auto issues." },
  { name: "M.A. B.", job: "Dead battery around the corner", quote: "My car battery died while I was parked around the corner. The owner came out, jumped the battery and sent me on my way, and refused to let me pay him anything. I'm so grateful." },
  { name: "Kelly", job: "Tires, oil and brakes", quote: "Great location right off the freeway. The owner and his workers are super nice and fast, and they can fix almost anything in a timely manner. I've been coming for years and fully trust their work. The price is right on, too." },
  { name: "Google reviewer", job: "General repair", quote: "You get the most honest pricing here with really good customer service. I don't think you can get both at most mechanic shops." },
  { name: "Brandon", job: "Regular customer", quote: "Best mechanic in the Sacramento area in my opinion. Great guys." },
];

const steps = [
  { title: "Call ahead", body: `We're a busy shop, so call ${PHONE} first. Tell us what the car is doing and we'll tell you when to bring it in.` },
  { title: "Drop it at 501 T St", body: "We're right off the freeway near the R Street and Midtown area, with an accessible entrance and parking." },
  { title: "Straight answer", body: "We tell you what actually needs fixing, what it costs, and what can wait. Nothing extra." },
  { title: "Back on the road", body: "We finish on time and you pay by card, debit or phone. Then you're on your way." },
];

const faqs = [
  { q: "Do I need an appointment?", a: `It's the best way. JC Auto Shop is busy because people keep coming back, so a quick call to ${PHONE} saves you a wait.` },
  { q: "What are your hours?", a: "Monday through Friday 9 a.m. to 5:30 p.m., and Saturday 9 a.m. to 2:30 p.m. Closed Sunday. Saturday hours are handy if you work downtown during the week." },
  { q: "Will you upsell me on repairs I don't need?", a: "No. Reviewers call out exactly this: we tell you what you actually need fixed. If something can wait, we'll say so." },
  { q: "What kind of work do you do?", a: "Oil changes and tune-ups, A/C, brakes, clutches, alignments, starters, alternators, radiators, water pumps, batteries, tires, belts, hoses, transmissions, factory-scheduled maintenance and windshield replacement." },
  { q: "How can I pay?", a: "We take credit cards, debit cards and tap-to-pay mobile payments." },
  { q: "Where exactly are you?", a: `${ADDRESS}, in Downtown Sacramento just off the freeway. The entrance and parking lot are wheelchair accessible.` },
];

const areas = ["Downtown Sacramento", "Midtown", "R Street corridor", "T Street", "Greater Sacramento"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "JC Auto Shop",
  alternateName: "J.C.'s Auto Service Center",
  telephone: "+1-916-492-1377",
  address: { "@type": "PostalAddress", streetAddress: "501 T St", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95811", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 38.5712082, longitude: -121.5045424 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:30" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "13" },
  paymentAccepted: "Credit card, debit card, mobile payments",
  areaServed: areas,
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent"><span className="h-1 w-6 rounded-full bg-cta" aria-hidden="true" />{children}</p>;
}

function CallButton({ className = "", label = `Call ${PHONE}` }: { className?: string; label?: string }) {
  return <a href={TEL} className={`btn bg-cta text-ink hover:bg-cta-dark ${className}`}><Icon name="phone" className="h-5 w-5" />{label}</a>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="JC Auto Shop home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-brand font-head text-lg font-extrabold text-cta">JC</span>
            <span className="font-head text-xl font-bold leading-none text-ink">JC Auto Shop</span>
          </a>
          <nav className="hidden items-center gap-7 font-semibold text-ink/80 lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#reviews" className="hover:text-accent">Reviews</a>
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#location" className="hover:text-accent">Location</a>
            <a href="#faq" className="hover:text-accent">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden font-bold text-ink md:inline">{PHONE}</a>
            <CallButton className="hidden md:inline-flex" label="Call Now" />
            <a href={TEL} className="grid h-11 w-11 place-items-center rounded-md bg-cta text-ink md:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-6 md:py-24 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-muted"><Icon name="pin" className="h-4 w-4 text-accent" />501 T Street · Downtown Sacramento</p>
              <h1 className="text-[clamp(2.3rem,5vw,3.6rem)] font-extrabold text-ink">Honest Auto Repair in Downtown Sacramento</h1>
              <p className="mt-5 max-w-xl text-lg text-muted md:text-xl">
                An independent, full-service shop with one of the deepest service menus downtown, from oil changes and brakes to transmissions and windshields. Some customers have trusted us with their cars for close to 20 years.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton className="text-lg" />
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn border-2 border-ink/15 bg-white text-ink hover:border-ink/40"><Icon name="route" className="h-5 w-5" />Get directions</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-ink">
                <span className="inline-flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /><strong>4.9</strong></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-accent">13 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>4.8 on Yelp from 95 reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Open Saturdays</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-line md:p-8">
              <Stars />
              <blockquote className="mt-4 font-head text-xl font-semibold leading-snug text-ink md:text-2xl">“The mechanics are efficient, friendly, knowledgeable and honest. It's been close to 20 years and we still keep coming back.”</blockquote>
              <p className="mt-4 text-sm font-semibold text-muted">Daryl M. · Google review</p>
              <dl className="mt-6 grid gap-3 border-t border-line pt-6 text-[0.97rem]">
                <div className="flex items-center gap-3"><Icon name="clock" className="h-5 w-5 text-accent" /><dt className="sr-only">Weekday hours</dt><dd>Mon–Fri 9:00–5:30</dd></div>
                <div className="flex items-center gap-3"><Icon name="calendar" className="h-5 w-5 text-accent" /><dt className="sr-only">Saturday hours</dt><dd>Sat 9:00–2:30 · Sun closed</dd></div>
                <div className="flex items-center gap-3"><Icon name="tag" className="h-5 w-5 text-accent" /><dt className="sr-only">Payment</dt><dd>Cards &amp; tap-to-pay accepted</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-brand text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "award", t: "4.9 on Google", s: "4.8 on Yelp (95)" },
              { icon: "thumb", t: "Honest pricing", s: "Only what you need" },
              { icon: "wrench", t: "17 services", s: "Under one roof" },
              { icon: "route", t: "Off the freeway", s: "Easy downtown drop-off" },
            ].map((i) => (
              <div key={i.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white/10 text-cta"><Icon name={i.icon} className="h-5 w-5" /></span>
                <div><p className="font-bold leading-tight">{i.t}</p><p className="text-sm text-white/70">{i.s}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="text-4xl font-extrabold text-ink md:text-[2.75rem]">A full service menu, from oil to windshields</h2>
              <p className="mt-4 text-lg text-muted">Most downtown drivers can get everything done in one place. Here's what we do.</p>
            </div>
            <div className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-2">
              {services.map((s) => (
                <article key={s.name} className="reveal flex gap-5 border-b border-line py-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{s.name}</h3>
                    <p className="mt-1.5 text-muted">{s.body}</p>
                    <a href={TEL} className="mt-2 inline-flex items-center gap-1.5 font-bold text-accent hover:text-ink">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <Eyebrow>Reviews</Eyebrow>
                <h2 className="text-4xl font-extrabold text-ink md:text-[2.75rem]">Rated 4.9 from 13 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Plus a 4.8 average across 95 Yelp reviews. The shop is busy for a reason.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn shrink-0 border-2 border-ink/15 bg-white text-ink hover:border-ink/40">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-6">
              {reviews.map((r, i) => (
                <figure key={r.name} className={`reveal flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}>
                  <Stars className="h-4 w-4" />
                  <blockquote className={`mt-3 flex-1 text-ink ${i < 2 ? "text-lg" : ""}`}>“{r.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm"><strong className="text-ink">{r.name}</strong><span className="text-muted"> · {r.job}</span></figcaption>
                </figure>
              ))}
            </div>
            <p className="reveal mt-8 text-muted">One honest note from the reviews: the only complaint customers mention is the wait, because the place is busy. Call ahead and we'll give you the best time to come in.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="reveal">
              <Eyebrow>About the shop</Eyebrow>
              <h2 className="text-4xl font-extrabold text-ink md:text-[2.75rem]">The shop that tells you what you actually need</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>JC Auto Shop, also known as J.C.'s Auto Service Center, is an independent repair shop at 501 T Street in Downtown Sacramento. It runs on word of mouth: families who have come back for close to 20 years, commuters who drop their car off on the way to work, and neighbors who tell their friends.</p>
                <p>The owner is thorough and straightforward. Customers say he tells you what really needs fixing, unlike shops that pad the bill. One driver whose battery died around the corner had the owner walk over, jump the car, and refuse to take a dollar for it.</p>
              </div>
            </div>
            <ul className="reveal grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "thumb", t: "Honest assessments", s: "What's needed now, and what can wait." },
                { icon: "tag", t: "Fair prices", s: "Customers call the price right on." },
                { icon: "clock", t: "Done on time", s: "Efficient mechanics who finish when promised." },
                { icon: "users", t: "Loyal regulars", s: "Customers returning for decades." },
              ].map((d) => (
                <li key={d.t} className="rounded-2xl bg-tint p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-brand text-cta"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <strong className="mt-4 block text-lg text-ink">{d.t}</strong>
                  <span className="mt-1 block text-muted">{d.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-4xl font-extrabold text-ink md:text-[2.75rem]">Four simple steps</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-6 ring-1 ring-line">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cta font-head text-lg font-extrabold text-ink">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="reveal">
              <Eyebrow>Location</Eyebrow>
              <h2 className="text-4xl font-extrabold text-ink md:text-[2.75rem]">Right off the freeway, downtown</h2>
              <p className="mt-4 text-lg text-muted">{ADDRESS}. Convenient for anyone who lives or works in:</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => <li key={a} className="rounded-full bg-tint px-3.5 py-1.5 font-semibold text-ink ring-1 ring-line">{a}</li>)}
              </ul>
              <dl className="mt-8 grid gap-3 text-ink">
                <div className="flex gap-3"><dt className="w-24 font-bold">Mon–Fri</dt><dd>9:00 a.m. – 5:30 p.m.</dd></div>
                <div className="flex gap-3"><dt className="w-24 font-bold">Saturday</dt><dd>9:00 a.m. – 2:30 p.m.</dd></div>
                <div className="flex gap-3"><dt className="w-24 font-bold">Sunday</dt><dd>Closed</dd></div>
              </dl>
            </div>
            <div className="reveal overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe title="Map to JC Auto Shop, 501 T St, Sacramento" src="https://maps.google.com/maps?q=501%20T%20St%2C%20Sacramento%2C%20CA%2095811&output=embed" className="h-[380px] w-full lg:h-full lg:min-h-[440px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <div className="reveal">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="text-4xl font-extrabold text-ink md:text-[2.75rem]">Before you call</h2>
            </div>
            <div className="reveal mt-10 divide-y divide-line rounded-2xl bg-white px-6 ring-1 ring-line">
              {faqs.map((f) => (
                <details key={f.q} className="py-5">
                  <summary className="flex items-center justify-between gap-6 text-lg font-bold text-ink">
                    {f.q}
                    <span className="faq-toggle grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cta text-ink"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-4xl font-extrabold md:text-5xl">Need your car looked at?</h2>
              <p className="mt-3 text-lg text-white/75">Call ahead and we'll tell you the best time to bring it in. Mon–Fri 9–5:30, Sat 9–2:30.</p>
            </div>
            <CallButton className="shrink-0 px-8 text-xl" />
          </div>
        </section>
      </main>

      <footer className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-head text-xl font-bold text-ink">JC Auto Shop</p>
            <p className="mt-1 text-sm text-muted">J.C.'s Auto Service Center</p>
            <address className="mt-4 not-italic text-ink">501 T St<br />Sacramento, CA 95811</address>
            <a href={TEL} className="mt-3 inline-block text-lg font-bold text-ink underline decoration-cta decoration-4 underline-offset-4">{PHONE}</a>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-1 text-muted">{services.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          </div>
          <div>
            <p className="font-bold text-ink">Hours</p>
            <ul className="mt-3 space-y-1 text-muted"><li>Mon–Fri 9 a.m.–5:30 p.m.</li><li>Sat 9 a.m.–2:30 p.m.</li><li>Sun closed</li></ul>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-accent hover:text-ink">Google reviews →</a>
          </div>
        </div>
        <div className="border-t border-line py-5 text-center text-sm text-muted">© {new Date().getFullYear()} JC Auto Shop, Sacramento, CA</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-2.5 backdrop-blur md:hidden">
        <a href={TEL} className="btn bg-cta text-ink"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn border-2 border-ink/15 bg-white text-ink"><Icon name="route" className="h-5 w-5" />Directions</a>
      </div>
    </>
  );
}

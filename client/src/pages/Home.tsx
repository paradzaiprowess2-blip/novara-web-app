/**
 * NOVARA / Quiet Authority: cinematic editorial chapters make a strategic operating system feel tangible.
 * Midnight navy, titanium, signal blue, offset composition, and restrained motion shape this public homepage.
 */

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Compass,
  Layers3,
  MoveUpRight,
  Orbit,
  Sparkles,
  Waypoints,
} from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import NovaraMark from "@/components/NovaraMark";
import SgosOverviewDialog from "@/components/SgosOverviewDialog";
import SiteHeader from "@/components/SiteHeader";

const capabilities = [
  ["01", "Strategic Consulting", "Strategic guidance for consequential business decisions."],
  ["02", "Business Strategy Development", "Clear direction for the opportunities ahead."],
  ["03", "Strategic Growth Planning", "Prioritized plans for sustainable growth."],
  ["04", "Organizational Transformation", "Change that strengthens the organization from within."],
  ["05", "Innovation Advisory", "Guidance for new possibilities and stronger value creation."],
  ["06", "Leadership Facilitation", "Focused support for leaders navigating complexity."],
  ["07", "Strategic Workshops", "Working sessions that create clarity and alignment."],
  ["08", "Performance Improvement", "Better outcomes through purposeful improvement."],
  ["09", "Growth Advisory", "Ongoing counsel for organizations moving forward."],
  ["10", "Executive Strategic Support", "A strategic partner for executive decision-making."],
];

const growthStages = [
  ["01", "Discovery", "We build a clear, complete picture of where your organization truly stands."],
  ["02", "Diagnosis", "We identify the real issues behind the surface-level symptoms."],
  ["03", "Strategy Blueprint", "We design a prioritized roadmap built for your reality, not a template."],
  ["04", "Execution", "We turn strategy into coordinated action your teams can actually run."],
  ["05", "Measurement", "We track what matters, so progress is never a guess."],
  ["06", "Optimization", "We refine continuously, using evidence instead of assumption."],
  ["07", "Partnership Success", "We stay invested in outcomes, not just deliverables."],
  ["08", "Strategic Renewal", "We prepare you for the next cycle of growth before you need it."],
];

const initiatives = [
  ["AI-First Business Systems", "Intelligent systems designed to reduce operational complexity and improve decision-making."],
  ["Future of Work", "AI-powered workflows that allow small teams to operate with the capabilities of much larger organisations."],
  ["Intelligent Media", "AI-assisted storytelling, production, and creative workflows for organisations with something meaningful to say."],
  ["Emerging Markets", "Practical growth systems for businesses operating in rapidly changing markets."],
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "text-[#72b2ff]" : "text-[#2169cf]"}`}>{children}</p>;
}

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [sgosOverviewOpen, setSgosOverviewOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#f5f7fa] text-[#0a1525]">
      <SiteHeader onOpenContact={() => setContactOpen(true)} />
      <main>
        <section className="relative isolate min-h-[820px] overflow-hidden bg-[#07111f] pt-[76px] text-white lg:min-h-[900px]">
          <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/manus-storage/novara-evolution-hero_0e0f176a.jpg')" }} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,.97)_0%,rgba(7,17,31,.91)_36%,rgba(7,17,31,.47)_68%,rgba(7,17,31,.15)_100%)]" />
          <div className="hero-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(transparent,#07111f)]" />
          <div className="relative mx-auto flex min-h-[744px] max-w-[1440px] flex-col justify-between px-5 pb-10 pt-20 sm:px-8 lg:min-h-[824px] lg:px-14 lg:pb-14 lg:pt-28">
            <div className="max-w-[780px]">
              <div className="hero-entrance flex items-center gap-3">
                <img src="/manus-storage/novara-evolution-mark_8048f649.png" alt="" className="h-8 w-8 object-contain opacity-90" />
                <span className="h-px w-9 bg-[#3d91ff]" />
                <SectionLabel light>STRATEGIC GROWTH · INNOVATION · TECHNOLOGY</SectionLabel>
              </div>
              <h1 className="hero-entrance delay-1 mt-7 max-w-[760px] font-display text-[clamp(3.7rem,8.2vw,8.5rem)] font-semibold leading-[.91] tracking-[-0.072em] text-white">
                Turning uncertainty into <span className="text-[#73b2ff]">growth.</span>
              </h1>
              <p className="hero-entrance delay-2 mt-8 max-w-[570px] text-lg leading-8 text-slate-300 sm:text-xl">
                Novara — Strategic Growth Innovation Company. We help organizations turn uncertainty into clarity, and clarity into disciplined action.
              </p>
              <div className="hero-entrance delay-3 mt-10 flex flex-wrap gap-4">
                <button type="button" onClick={() => setContactOpen(true)} className="signal-button">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </button>
                <a href="#strategy" className="ghost-button">
                  Explore Novara <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="hero-entrance delay-4 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[400px] text-sm leading-6 text-slate-400">
                A connected operating philosophy for organisations that want disciplined progress—not disconnected initiatives.
              </p>
              <div className="flex items-center gap-5 text-[11px] font-semibold tracking-[0.18em] text-slate-400">
                <span>INSIGHT</span><span className="h-px w-6 bg-[#3c89ed]" /><span>STRATEGY</span><span className="h-px w-6 bg-[#3c89ed]" /><span>SYSTEMS</span><span className="h-px w-6 bg-[#3c89ed]" /><span>GROWTH</span>
              </div>
            </div>
          </div>
        </section>

        <section id="strategy" className="relative bg-[#f5f7fa] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
          <div className="absolute left-[8%] top-0 h-24 w-px bg-[#1d6de0]/25" />
          <div className="system-register left-[8%] top-24 hidden sm:flex"><span className="system-node" /> <span>01 / STRATEGIC CLARITY</span><i /></div>
          <div className="mx-auto max-w-[1300px]">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,.95fr)] lg:gap-24">
              <div>
                <SectionLabel>THE NOVARA DIFFERENCE</SectionLabel>
                <h2 className="mt-5 max-w-[740px] font-display text-[clamp(2.9rem,5.1vw,5.8rem)] font-semibold leading-[.95] tracking-[-0.065em] text-[#0a1525]">
                  Growth needs more than ideas.
                </h2>
              </div>
              <div className="border-l border-[#0c2340]/15 pl-6 lg:mt-12">
                <p className="text-xl leading-8 text-[#24354a]">
                  Businesses rarely fail because they lack ideas. They struggle because strategy, execution, technology, people, and opportunity are disconnected.
                </p>
                <p className="mt-5 font-display text-2xl font-medium tracking-[-0.04em] text-[#0a1525]">Novara connects them.</p>
              </div>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden border border-[#0c2340]/13 bg-[#0c2340]/13 md:grid-cols-2">
              {[
                ["Strategy", "Turn uncertainty into a clear strategic direction.", Compass],
                ["Growth", "Identify opportunity, strengthen positioning, and build repeatable growth systems.", MoveUpRight],
                ["Innovation", "Design new products, services, experiences, and business models.", Sparkles],
                ["Technology", "Use AI, automation, data, and modern infrastructure to make better businesses possible.", Layers3],
              ].map(([title, text, Icon], index) => {
                const FeatureIcon = Icon as typeof Compass;
                return (
                  <article key={title as string} className="group relative min-h-[270px] bg-[#f5f7fa] p-7 transition-colors duration-300 hover:bg-white sm:p-9">
                    <span className="absolute right-7 top-7 text-xs font-semibold tracking-[0.18em] text-[#6f7f90]">0{index + 1}</span>
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-[#1d6de0]/20 text-[#1d6de0] transition-all duration-300 group-hover:border-[#1d6de0] group-hover:bg-[#1d6de0] group-hover:text-white group-hover:shadow-[0_8px_22px_rgba(29,109,224,.24)]">
                      <FeatureIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-12 font-display text-3xl font-medium tracking-[-0.05em] text-[#0a1525]">{title as string}</h3>
                    <p className="mt-4 max-w-sm leading-7 text-[#526174]">{text as string}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0a1727] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-36">
          <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_72%_45%,rgba(27,112,230,.32),transparent_23%),linear-gradient(rgba(126,177,245,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(126,177,245,.05)_1px,transparent_1px)] [background-size:auto,50px_50px,50px_50px]" />
          <div className="relative mx-auto max-w-[1300px]">
            <div className="max-w-2xl">
              <SectionLabel light>THE NOVARA GROWTH SYSTEM</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(3rem,5.7vw,6.4rem)] font-semibold leading-[.93] tracking-[-0.07em] text-white">SGOS is strategy designed to operate.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                An eight-stage proprietary methodology that brings disciplined progress to every phase of growth.
              </p>
            </div>
            <div className="relative mt-16">
              <div className="sgos-wheel mx-auto hidden max-w-[880px] lg:block" aria-label="Eight-stage Strategic Growth Operating System cycle">
                <div className="sgos-wheel-core"><span>SGOS</span><small>CONTINUOUS<br />GROWTH</small></div>
                {growthStages.map(([number, title, copy], index) => (
                  <article key={title} className={`sgos-stage sgos-stage-${index + 1}`}>
                    <span className="sgos-stage-number">{number}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
                {growthStages.map(([number, title, copy]) => (
                  <article key={title} className="group relative min-h-[220px] border border-white/10 bg-white/[.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4d99ff]/55 hover:bg-[#1051a5]/15">
                    <div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-full border border-[#4595ff]/50 text-[11px] font-bold text-[#78b5ff]">{number}</span><span className="text-[10px] font-bold tracking-[0.18em] text-slate-500">SGOS</span></div>
                    <h3 className="mt-10 font-display text-2xl font-medium tracking-[-0.05em] text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                  </article>
                ))}
              </div>
              <p className="mt-10 text-center font-display text-lg tracking-[-0.02em] text-[#b7d7ff]">Sustainable growth is achieved through disciplined systems, not isolated initiatives.</p>
              <div className="mt-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8bc0ff]"><span className="h-px w-10 bg-[#4a9bff]" />08 Strategic Renewal feeds back into 01 Discovery</div>
            </div>
            <button type="button" onClick={() => setSgosOverviewOpen(true)} className="ghost-button mt-16 border-white/20 text-white hover:border-[#4795ff] hover:bg-white/5">
              Request the Full SGOS Overview <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section id="capabilities" className="bg-white px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
          <div className="system-register left-[calc(50%-1px)] top-10 hidden sm:flex"><span className="system-node" /> <span>02 / CONNECTED CAPABILITIES</span><i /></div>
          <div className="mx-auto max-w-[1300px]">
            <div className="grid gap-10 border-b border-[#0c2340]/12 pb-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div><SectionLabel>CAPABILITIES</SectionLabel></div>
              <div>
                <h2 className="font-display text-[clamp(3rem,5.1vw,5.8rem)] font-semibold leading-[.94] tracking-[-0.065em] text-[#0a1525]">Where strategy meets execution.</h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#526174]">Every capability is delivered through Novara's proprietary methodology, ensuring consistency, quality, and measurable outcomes across every engagement.</p>
              </div>
            </div>
            <div className="relative divide-y divide-[#0c2340]/12 before:absolute before:bottom-0 before:left-[73px] before:top-0 before:w-px before:bg-[#1d6de0]/15">
              {capabilities.map(([number, title, copy]) => (
                <article key={title} className="group grid gap-4 py-7 transition-all duration-300 md:grid-cols-[90px_minmax(260px,.85fr)_minmax(0,1fr)_44px] md:items-center md:py-9">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#1d6de0]">{number}</span>
                  <h3 className="font-display text-2xl font-medium tracking-[-0.05em] text-[#0a1525] transition-transform duration-300 group-hover:translate-x-2">{title}</h3>
                  <p className="max-w-lg leading-7 text-[#5d6d7e]">{copy}</p>
                  <span className="hidden h-10 w-10 place-items-center rounded-full border border-[#0c2340]/13 text-[#1d6de0] transition-all duration-300 group-hover:border-[#1d6de0] group-hover:bg-[#1d6de0] group-hover:text-white md:grid"><ArrowUpRight className="h-4 w-4" /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosystem" className="relative bg-[#e9eef5] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
          <div className="absolute right-[8%] top-0 h-24 w-px bg-[#1d6de0]/25" />
          <div className="system-register left-[8%] top-12 hidden sm:flex"><span className="system-node" /> <span>03 / EVOLUTION ARCHITECTURE</span><i /></div>
          <div className="mx-auto max-w-[1300px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_.93fr] lg:gap-20">
              <div>
                <SectionLabel>THE NOVARA ECOSYSTEM</SectionLabel>
                <h2 className="mt-5 font-display text-[clamp(3rem,5.1vw,5.8rem)] font-semibold leading-[.95] tracking-[-0.065em] text-[#0a1525]">One company. Multiple expressions of progress.</h2>
              </div>
              <p className="border-l border-[#0c2340]/15 pl-6 text-lg leading-8 text-[#405168] lg:mt-16">
                Novara is designed to evolve beyond a single consulting practice into an interconnected ecosystem of strategic intelligence, education, research, and innovation.
              </p>
            </div>
            <div className="mt-16 grid gap-5 lg:grid-cols-12">
              <article className="relative overflow-hidden bg-[#0a1727] p-8 text-white lg:col-span-5 lg:min-h-[605px] lg:p-10">
                <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_80%_20%,rgba(44,119,232,.50),transparent_25%),linear-gradient(rgba(151,194,250,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(151,194,250,.09)_1px,transparent_1px)] [background-size:auto,42px_42px,42px_42px]" />
                <div className="relative flex h-full flex-col">
                  <span className="status-tag border-white/20 text-slate-300">ACTIVE</span>
                  <h3 className="mt-24 font-display text-6xl font-semibold tracking-[-0.07em] text-white">NOVARA</h3>
                  <p className="mt-4 max-w-xs text-xl leading-8 text-slate-300">Strategic Growth Innovation Company</p>
                  <p className="mt-auto border-t border-white/15 pt-6 text-sm leading-6 text-slate-400">The core company. Strategic consulting delivered through Novara's proprietary methodology.</p>
                </div>
              </article>
              <div className="grid gap-5 lg:col-span-7 lg:grid-cols-2">
                {[
                  ["LUMORA", "Strategic Intelligence Platform (Future)", "Novara's future digital platform, designed to operationalize Novara's methodology — turning strategic thinking into an intelligent digital environment for planning, execution, measurement, and continuous improvement.", ""],
                  ["NOVARA ACADEMY", "Education & Certification (Future)", "The education and professional development division — training, certification, and executive education for leaders and practitioners.", ""],
                  ["NOVARA LABS", "Research & Innovation (Future)", "The research and innovation division — exploring new methodologies, emerging technologies, and future Novara intellectual property. Novara Labs is also developing intelligent business systems for retailers, starting with a tool that helps store owners protect their business from inventory loss.", "/manus-storage/novara-labs-system_3ddbbce0.jpg"],
                ].map(([title, subtitle, copy, image], index) => (
                  <article key={title} className={`group relative overflow-hidden bg-[#122138] p-7 text-white ${index === 2 ? "lg:col-span-2 lg:min-h-[270px]" : "min-h-[290px]"}`}>
                    {image ? <div className="absolute inset-0 bg-cover bg-center opacity-65 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} /> : <div className="absolute inset-0 opacity-65 [background-image:linear-gradient(rgba(151,194,250,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(151,194,250,.09)_1px,transparent_1px),radial-gradient(circle_at_75%_25%,rgba(36,119,232,.55),transparent_25%)] [background-size:42px_42px,42px_42px,auto]" />}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,31,.95)_0%,rgba(8,17,31,.72)_50%,rgba(8,17,31,.26)_100%)]" />
                    <div className="relative z-10 flex h-full flex-col">
                      <span className="status-tag w-fit border-[#6eafff]/45 text-[#9bcbff]">FUTURE INITIATIVE — IN DEVELOPMENT</span>
                      <div className="mt-auto">
                        <p className="text-xs font-bold tracking-[0.18em] text-[#77b5ff]">{subtitle}</p>
                        <h3 className="mt-3 font-display text-4xl font-medium tracking-[-0.06em] text-white">{title}</h3>
                        <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{copy}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#6b7c90]">The named divisions above are presented as future-facing Novara initiatives, not established operating companies.</p>
          </div>
        </section>

        <section className="bg-white px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
          <div className="system-register left-[8%] top-10 hidden sm:flex"><span className="system-node" /> <span>04 / OPERATING MOMENTUM</span><i /></div>
          <div className="mx-auto max-w-[1300px]">
            <div className="grid gap-8 lg:grid-cols-[1fr_.96fr] lg:gap-20">
              <div>
                <SectionLabel>HOW NOVARA WORKS</SectionLabel>
                <h2 className="mt-5 font-display text-[clamp(3rem,5.1vw,5.8rem)] font-semibold leading-[.94] tracking-[-0.065em] text-[#0a1525]">From uncertainty to momentum.</h2>
              </div>
              <blockquote className="border-l-2 border-[#2477e8] pl-7 font-display text-3xl leading-[1.14] tracking-[-0.045em] text-[#0a1525] lg:mt-10">“We don’t deliver strategy that sits in a presentation. We build strategy that can operate.”</blockquote>
            </div>
            <div className="mt-16 grid gap-0 border-t border-[#0c2340]/12 md:grid-cols-4">
              {[
                ["Diagnose", "Understand what is actually happening."],
                ["Strategize", "Determine where the business should go."],
                ["Build", "Create the systems, capabilities, and initiatives required."],
                ["Grow", "Measure results and improve continuously."],
              ].map(([title, copy], index) => (
                <article key={title} className="group relative border-b border-[#0c2340]/12 py-8 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#1d6de0]">0{index + 1}</span>
                  <h3 className="mt-8 font-display text-3xl font-medium tracking-[-0.05em] text-[#0a1525]">{title}</h3>
                  <p className="mt-4 max-w-[210px] leading-7 text-[#627286]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-36">
          <div className="absolute right-0 top-0 h-full w-[45%] bg-[radial-gradient(ellipse_at_center,rgba(29,109,224,.28),transparent_70%)]" />
          <div className="relative mx-auto max-w-[1300px]">
            <div className="flex max-w-3xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div><SectionLabel light>SELECTED AREAS OF EXPLORATION</SectionLabel><h2 className="mt-5 font-display text-[clamp(3rem,5vw,5.7rem)] font-semibold leading-[.95] tracking-[-0.065em] text-white">Looking beyond the obvious.</h2></div>
            </div>
            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {initiatives.map(([title, copy], index) => (
                <article key={title} className={`group relative border border-white/10 bg-white/[.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4d99ff]/50 hover:bg-[#1051a5]/15 sm:p-9 ${index === 0 ? "md:col-span-2 md:grid md:min-h-[280px] md:grid-cols-[.85fr_1.15fr] md:items-end" : ""}`}>
                  <span className="absolute right-7 top-7 text-xs font-bold tracking-[0.2em] text-[#559df8]">0{index + 1}</span>
                  <Orbit className="h-6 w-6 text-[#75b3ff]" />
                  <h3 className="mt-14 max-w-md font-display text-3xl font-medium tracking-[-0.055em] text-white">{title}</h3>
                  <p className="mt-4 max-w-lg leading-7 text-slate-400">{copy}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8bc0ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100">Explore thinking <ArrowRight className="h-4 w-4" /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#dbe5f3] px-5 py-24 sm:px-8 lg:px-14 lg:py-36">
          <div className="vision-orbit absolute -right-20 -top-20 h-[480px] w-[480px] rounded-full border border-[#1d6de0]/20" />
          <div className="vision-orbit-delay absolute -right-2 -top-2 h-[360px] w-[360px] rounded-full border border-[#1d6de0]/14" />
          <div className="relative mx-auto max-w-[1300px]">
            <div className="max-w-[850px]">
              <SectionLabel>FUTURE VISION</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(3.3rem,7vw,7.7rem)] font-semibold leading-[.9] tracking-[-0.075em] text-[#0a1525]">Built for what comes next.</h2>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-[#344861]">Novara begins with strategy. It evolves through technology, innovation, education, and new ventures. The objective is not simply to advise businesses—but to help build the systems and companies that define their next chapter.</p>
            </div>
            <div className="mt-18 grid gap-4 pt-16 md:grid-cols-4">
              {[
                ["Today", "Strategy & Growth"],
                ["Next", "Technology & AI"],
                ["Expansion", "Labs · Academy · Intelligence"],
                ["Vision", "A connected Novara ecosystem"],
              ].map(([time, title], index) => (
                <div key={time} className="relative border-t border-[#0c2340]/20 pt-5">
                  {index < 3 && <ChevronRight className="absolute -right-3 top-[-11px] hidden h-5 w-5 bg-[#dbe5f3] text-[#1d6de0] md:block" />}
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d6de0]">{time}</p>
                  <p className="mt-3 font-display text-xl font-medium tracking-[-0.04em] text-[#132943]">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative bg-white px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="system-register left-[8%] top-10 hidden sm:flex"><span className="system-node" /> <span>05 / THE NOVARA POSITION</span><i /></div>
          <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
            <div><SectionLabel>ABOUT NOVARA</SectionLabel><div className="mt-6 flex items-center gap-3"><span className="h-px w-9 bg-[#1d6de0]" /><span className="text-xs font-semibold tracking-[0.18em] text-[#637488]">STRATEGIC GROWTH INNOVATION COMPANY</span></div></div>
            <div>
              <h2 className="font-display text-[clamp(3rem,5.1vw,5.8rem)] font-semibold leading-[.94] tracking-[-0.065em] text-[#0a1525]">A different kind of growth company.</h2>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-[#40536b]">Novara sits at the intersection of strategy, business growth, technology, and creativity.</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#607084]">We believe the strongest businesses of the next decade will not separate strategy from technology or creativity from execution. They will connect them.</p>
              <blockquote className="mt-8 border-l-2 border-[#2477e8] pl-5 font-display text-2xl leading-[1.2] tracking-[-0.04em] text-[#132943]">A future where no organization grows by accident — where strategy, execution, and innovation operate as one connected system, guided by Novara.</blockquote>
              <div className="mt-10 border-t border-[#0c2340]/12 pt-6">
                <p className="eyebrow text-[#2169cf]">CORE VALUES</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Strategic Thinking", "Innovation", "Excellence", "Partnership", "Continuous Growth"].map((value) => <span key={value} className="border border-[#0c2340]/15 px-3 py-2 text-xs font-bold tracking-[0.04em] text-[#40536b]">{value}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0b1b30] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-32">
          <div className="absolute inset-0 opacity-75 [background-image:linear-gradient(125deg,transparent_0%,transparent_43%,rgba(41,128,243,.20)_43.1%,transparent_58%),radial-gradient(circle_at_82%_20%,rgba(51,130,239,.38),transparent_23%)]" />
          <div className="absolute left-[8%] top-0 hidden h-24 w-px bg-[#4a9bff]/50 sm:block" />
          <div className="system-register left-[8%] top-24 hidden text-[#8dc2ff] sm:flex"><span className="system-node border-[#76b4ff]" /> <span>06 / NEXT CHAPTER</span><i className="bg-[#76b4ff]/35" /></div>
          <div className="relative mx-auto max-w-[1300px]">
            <SectionLabel light>YOUR NEXT CHAPTER</SectionLabel>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-4xl font-display text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[.9] tracking-[-0.075em] text-white">Your next chapter starts with clarity.</h2>
                <p className="mt-7 max-w-xl text-xl leading-8 text-slate-300">Tell us where your business is today, where you want to go, and what is standing in the way.</p>
              </div>
              <button type="button" onClick={() => setContactOpen(true)} className="signal-button whitespace-nowrap">
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#07111f] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col justify-between gap-12 border-b border-white/10 pb-12 md:flex-row">
            <div><NovaraMark inverted /><p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">Strategic Growth Innovation Company</p></div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-slate-400 sm:grid-cols-4">
              {["Strategy", "Capabilities", "Ecosystem", "About"].map((label) => <a key={label} href={`#${label.toLowerCase()}`} className="transition-colors hover:text-[#79b8ff]">{label}</a>)}
            </div>
          </div>
          <div className="flex flex-col gap-3 py-6 text-xs tracking-[0.04em] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Novara. All rights reserved.</p><p>Turning uncertainty into growth.</p></div>
        </div>
      </footer>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <SgosOverviewDialog open={sgosOverviewOpen} onOpenChange={setSgosOverviewOpen} />
    </div>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Navbar from "./components/Navbar";
import { useTheme } from "./providers";

const teamMembers = [
  {
    name: "Paul Angelo Derige",
    role: "Back-end Engineer · UI/UX Designer",
    bio: "Architects robust services and shapes intuitive flows so data, logic, and feel work as one.",
  },
  {
    name: "Alejandro Cerafica Jr.",
    role: "Front-end Engineer · UI/UX · Team Lead",
    bio: "Guides the squad while translating interfaces into performant web and mobile front-ends.",
  },
  {
    name: "Fortune Matthew Tamares",
    role: "Back-end Engineer · UI/UX · Lead Programmer",
    bio: "Owns mission-critical codebases, connecting product goals to ship-ready architecture.",
  },
];

const stats = [
  { label: "Products shipped", value: "35+" },
  { label: "Average ROI uplift", value: "3.4x" },
  { label: "NPS from partners", value: "82" },
  { label: "Years of shipping", value: "8" },
];

const services = [
  {
    title: "Experience & Product",
    description: "User research, UX/UI systems, design QA, prototyping, stakeholder facilitation.",
    items: ["Design sprints", "Design systems", "Journey mapping"],
  },
  {
    title: "Engineering",
    description: "Full-stack product teams that deliver reliable, observable, and scalable builds.",
    items: ["Next.js & React", "Node & serverless", "Cloud infra"],
  },
  {
    title: "Delivery & Growth",
    description: "Ops, analytics, and GTM playbooks so the product keeps compounding after launch.",
    items: ["Release orchestration", "CRO", "Founder enablement"],
  },
];

const processSteps = [
  {
    phase: "01 — Discover",
    title: "Obsess over the brief",
    copy: "Stakeholder interviews, technical audits, and value mapping to align on the real objective.",
  },
  {
    phase: "02 — Design",
    title: "Prototype clarity",
    copy: "We pair design systems with rapid prototyping so teams react to something tangible week one.",
  },
  {
    phase: "03 — Build",
    title: "Ship with rigor",
    copy: "Feature slicing, automation, and quality bars borrowed from product orgs we’ve built with.",
  },
  {
    phase: "04 — Launch & scale",
    title: "Measure, learn, repeat",
    copy: "Post-launch analytics, CRO tests, and enablement to keep compounding outcomes.",
  },
];

const caseStudies = [
  {
    badge: "Enterprise Platform",
    title: "Workflow OS for a logistics challenger",
    summary: "Rebuilt legacy workflow tools into a modern platform that cut fulfillment time by 42%.",
    metric: "42% faster operations",
  },
  {
    badge: "Commerce",
    title: "Headless storefront for a DTC collective",
    summary: "Unified catalog, checkout, and lifecycle comms to unlock a 2.8× lift in repeat revenue.",
    metric: "2.8× repeat revenue",
  },
  {
    badge: "SaaS",
    title: "Analytics suite for seed-stage founders",
    summary: "Designed a self-serve analytics kit that got the startup to $1M ARR before Series A.",
    metric: "$1M ARR pre-Series A",
  },
];

export default function Home() {
  const { isDark } = useTheme();
  const processTimelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: processTimelineRef,
    offset: ["start 0.85", "end 0.2"],
  });
  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fadeUpParent: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUpItem: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const heroSectionClasses = `${
    isDark
      ? "bg-gradient-to-br from-[#05010e] via-[#0b0b2c] to-[#03030e] text-white"
      : "bg-gradient-to-br from-[#f5f8ff] via-[#eef2ff] to-white text-slate-900"
  } relative overflow-hidden min-h-screen px-4 pt-28 pb-16 transition-colors sm:px-6 lg:px-8`;

  const accentTextClass = isDark ? "text-amber-300" : "text-amber-500";
  const bodyTextClass = isDark ? "text-white/70" : "text-slate-600";

  const heroButtonPrimary = isDark
    ? "bg-white text-[#0b0b2c] shadow-white/10"
    : "bg-[#05010e] text-white shadow-slate-900/20";
  const heroButtonSecondary = isDark
    ? "border-white/25 text-white hover:bg-white/10"
    : "border-slate-900/15 text-slate-900 hover:bg-slate-900/5";

  const statCardClass = isDark
    ? "rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 backdrop-blur"
    : "rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5";

  const cardBase = isDark
    ? "border-white/10 bg-white/5"
    : "border-slate-100 bg-white";

  const sectionHeadingClass = isDark ? "text-white" : "text-slate-900";
  const sectionSubheadingClass = isDark ? "text-white/70" : "text-slate-600";

  const teamSectionClasses = `${
    isDark ? "bg-[#040717] text-white" : "bg-[#f7f9ff] text-slate-900"
  } px-4 py-24 transition-colors sm:px-6 lg:px-8`;

  const teamDescriptionClass = isDark ? "text-white/70" : "text-slate-600";

  const teamCardClass = isDark
    ? "rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/20 backdrop-blur"
    : "rounded-3xl border border-slate-900/10 bg-white p-6 text-left shadow-xl shadow-slate-900/5";

  const teamRoleClass = isDark ? "text-white/60" : "text-slate-500";
  const teamBioClass = isDark ? "text-white/70" : "text-slate-600";

  const contactCardClass = isDark
    ? "bg-white/5 border-white/10"
    : "bg-white border-slate-100";

  return (
    <>
      <Navbar />
      <section className={heroSectionClasses}>
        <motion.div
          className="mx-auto flex min-h-[75vh] w-full max-w-6xl flex-col items-center justify-center gap-12 px-4 text-center sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={fadeUpParent}
        >
          <motion.div className="space-y-6" variants={fadeUpParent}>
            <motion.div
              className={`mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] ${heroButtonSecondary}`}
              variants={fadeUpItem}
            >
              Product builders for hire
            </motion.div>
            <motion.h1
              className="text-4xl font-light leading-tight sm:text-5xl lg:text-[56px]"
              variants={fadeUpItem}
            >
              We design and engineer digital experiences that win users and ship faster than in-house ramp-ups.
            </motion.h1>
            <motion.p className={`mx-auto max-w-3xl text-lg ${bodyTextClass}`} variants={fadeUpItem}>
              Fractional product teams for ambitious founders and operators. Strategy, UX, and engineering move together—so you can turn opportunity into a shipped product in weeks, not quarters.
            </motion.p>
          </motion.div>

          <motion.div className="flex flex-col gap-4 sm:flex-row" variants={fadeUpParent}>
            <motion.div variants={fadeUpItem}>
              <Link
                href="#contact"
                className={`rounded-full px-8 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 ${heroButtonPrimary}`}
              >
                Book a discovery call
              </Link>
            </motion.div>
            <motion.div variants={fadeUpItem}>
              <Link
                href="#services"
                className={`rounded-full border px-8 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${heroButtonSecondary}`}
              >
                View capabilities
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={fadeUpParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} className={`${statCardClass} px-6 py-5 text-left`} variants={fadeUpItem}>
                <p className="text-sm uppercase tracking-[0.4em] opacity-70">{stat.label}</p>
                <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-40 mx-auto h-[420px] w-[80%] rounded-full blur-[120px] ${
            isDark ? "bg-amber-500/10" : "bg-amber-500/20"
          }`}
        />
      </section>

      <section
        id="services"
        className="bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),transparent_45%)] px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <motion.header
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpParent}
          >
            <motion.p className={`text-xs uppercase tracking-[0.5em] ${accentTextClass}`} variants={fadeUpItem}>
              What we deliver
            </motion.p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <motion.h2 className={`text-3xl font-light sm:text-4xl ${sectionHeadingClass}`} variants={fadeUpItem}>
                Purpose-built teams for every stage: discovery, design, delivery, and the momentum after launch.
              </motion.h2>
              <motion.p className={`max-w-xl text-base ${sectionSubheadingClass}`} variants={fadeUpItem}>
                Each engagement is staffed with the mix of leadership, designers, and engineers required to meet your goals—not ours.
              </motion.p>
            </div>
          </motion.header>

          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={fadeUpParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                className={`flex flex-col gap-4 rounded-3xl border p-8 shadow-2xl shadow-black/5 ${cardBase}`}
                variants={fadeUpItem}
                whileHover={{
                  y: -6,
                  boxShadow: isDark ? "0px 18px 48px rgba(0,0,0,0.45)" : "0px 18px 48px rgba(15,23,42,0.12)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <span className="text-sm uppercase tracking-[0.3em] opacity-60">Team</span>
                </div>
                <p className={`text-base ${sectionSubheadingClass}`}>{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-4 py-1 text-xs font-medium ${
                        isDark ? "border-white/15 text-white/80" : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
          <motion.header
            className="space-y-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpParent}
          >
            <motion.p className={`text-xs uppercase tracking-[0.5em] ${accentTextClass}`} variants={fadeUpItem}>
              How we work
            </motion.p>
            <motion.h2 className={`text-3xl font-light sm:text-4xl ${sectionHeadingClass}`} variants={fadeUpItem}>
              One integrated crew, four disciplined phases.
            </motion.h2>
            <motion.p className={`text-base ${sectionSubheadingClass}`} variants={fadeUpItem}>
              We meet your team where they are, drop in with playbooks already battle-tested, and stay accountable through delivery.
            </motion.p>
          </motion.header>

          <motion.div
            ref={processTimelineRef}
            className="relative space-y-10 pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUpParent}
          >
            <span
              className={`pointer-events-none absolute left-3 top-0 bottom-0 w-px ${isDark ? "bg-white/15" : "bg-slate-200"}`}
              aria-hidden="true"
            />
            <motion.span
              style={{ height: timelineProgress }}
              className="pointer-events-none absolute left-3 top-0 w-px bg-amber-400"
              aria-hidden="true"
            />
            {processSteps.map((step, index) => (
              <motion.div key={step.phase} className="relative pl-6" variants={fadeUpItem}>
                <span
                  className={`absolute left-[-34px] top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                    isDark ? "border-white/40" : "border-slate-200"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xs uppercase tracking-[0.4em] opacity-70">{step.phase}</p>
                <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                <p className={`mt-2 text-base ${sectionSubheadingClass}`}>{step.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="works" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl space-y-12">
          <motion.header
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpParent}
          >
            <motion.p className={`text-xs uppercase tracking-[0.5em] ${accentTextClass}`} variants={fadeUpItem}>
              Selected work
            </motion.p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <motion.h2 className={`text-3xl font-light sm:text-4xl ${sectionHeadingClass}`} variants={fadeUpItem}>
                Proof that boutique teams can outpace headcount-heavy orgs.
              </motion.h2>
              <motion.div variants={fadeUpItem}>
                <Link href="#contact" className={`inline-flex items-center gap-2 text-sm font-semibold ${accentTextClass}`}>
                  Let’s scope yours
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 12 12 4M12 4H5M12 4v7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.header>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={fadeUpParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {caseStudies.map((study) => (
              <motion.article
                key={study.title}
                className={`flex flex-col gap-4 rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-2xl ${cardBase}`}
                variants={fadeUpItem}
              >
                <span className="text-xs uppercase tracking-[0.35em] opacity-70">{study.badge}</span>
                <h3 className="text-2xl font-semibold">{study.title}</h3>
                <p className={`text-base ${sectionSubheadingClass}`}>{study.summary}</p>
                <p className={`text-sm font-semibold ${accentTextClass}`}>{study.metric}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="team" className={teamSectionClasses}>
        <div className="mx-auto w-full max-w-6xl space-y-12 px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpParent}
          >
            <motion.p className="text-xs uppercase tracking-[0.5em] text-amber-300" variants={fadeUpItem}>
              Our Team
            </motion.p>
            <motion.h2 className="text-3xl font-light sm:text-4xl" variants={fadeUpItem}>
              The trio behind every WeDev build.
            </motion.h2>
            <motion.p className={teamDescriptionClass} variants={fadeUpItem}>
              We sit directly with founders and product leaders to define, design, and deliver software that actually ships.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={fadeUpParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} className={teamCardClass} variants={fadeUpItem}>
                <p className={`text-sm uppercase tracking-[0.35em] ${teamRoleClass}`}>{member.role}</p>
                <h3 className="mt-3 text-xl font-semibold">{member.name}</h3>
                <p className={`mt-4 text-sm ${teamBioClass}`}>{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            className={`rounded-[40px] border px-8 py-10 text-center shadow-2xl shadow-black/10 sm:px-14 sm:py-16 ${contactCardClass}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpParent}
          >
            <motion.p className={`text-xs uppercase tracking-[0.5em] ${accentTextClass}`} variants={fadeUpItem}>
              Let’s build together
            </motion.p>
            <motion.h2 className={`mt-4 text-3xl font-light sm:text-4xl ${sectionHeadingClass}`} variants={fadeUpItem}>
              Tell us what you’re trying to ship. We’ll respond within one business day.
            </motion.h2>
            <motion.p className={`mt-4 text-base ${sectionSubheadingClass}`} variants={fadeUpItem}>
              hello@wedev.studio · +63 900 000 0000 · Remote-first from PH
            </motion.p>
            <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center" variants={fadeUpParent}>
              <motion.div variants={fadeUpItem}>
                <Link
                  href="mailto:hello@wedev.studio"
                  className={`rounded-full px-8 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 ${heroButtonPrimary}`}
                >
                  Send us a brief
                </Link>
              </motion.div>
              <motion.div variants={fadeUpItem}>
                <Link
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-8 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${heroButtonSecondary}`}
                >
                  Schedule a call
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

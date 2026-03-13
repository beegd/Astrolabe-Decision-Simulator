"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Binary,
  BrainCircuit,
  ChartColumnIncreasing,
  Compass,
  Radar,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { HeroCommandCenter } from "@/components/landing/hero-command-center";
import { SectionHeading } from "@/components/landing/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capabilityCards = [
  {
    icon: BrainCircuit,
    title: "Decision Intelligence Layer",
    label: "Assess",
    description:
      "Turn founder input, evidence, and constraints into a structured scenario the engine can reason about.",
  },
  {
    icon: Radar,
    title: "100 Company Worldlines",
    label: "Simulate",
    description:
      "Run 100 constrained branches of the same startup idea with different founder types, pricing paths, channels, and market noise.",
  },
  {
    icon: Compass,
    title: "Planner Output",
    label: "Act",
    description:
      "Convert the strongest and weakest branches into staged execution plans, next experiments, and stop-loss rules.",
  },
];

const architectureBlocks = [
  {
    title: "World Modeling",
    body: "Structure the startup thesis first so the simulator can inspect evidence and constraints instead of reacting to vague prompts.",
  },
  {
    title: "Constrained Simulation",
    body: "The same startup idea branches into 100 constrained company paths rather than collapsing into one optimistic narrative.",
  },
  {
    title: "Replay + Action",
    body: "Every path is inspectable, replayable, and convertible into concrete next moves instead of abstract advice alone.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Assess",
    body: "Score the idea, inspect evidence quality, and identify risks before making a high-cost move.",
  },
  {
    step: "02",
    title: "Simulate",
    body: "Compare 100 constrained company paths instead of anchoring on a single founder intuition too early.",
  },
  {
    step: "03",
    title: "Act",
    body: "Turn the strongest paths into next experiments, execution plans, and stop-loss thresholds.",
  },
];

const audiences = [
  {
    icon: Target,
    title: "AI Founders",
    body: "Use the system when a startup idea needs stronger evidence before time, capital, and scope get committed.",
  },
  {
    icon: Binary,
    title: "Solo Operators",
    body: "Inspect how pricing, channel strategy, and execution style alter the shape of a possible company path.",
  },
  {
    icon: Users,
    title: "Small Teams",
    body: "Compare scenario paths when a product wedge feels promising but the economics and GTM path are still uncertain.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-8 md:pb-28 md:pt-12">
        <div className="tech-border flex items-center justify-between bg-black/40 px-6 py-3 backdrop-blur-md">
          <div className="flex items-center gap-4 text-sm text-cyan-100">
            <div className="flex h-9 w-9 items-center justify-center border border-cyan-500/30 bg-cyan-900/20 text-cyan-300">
              <Radar className="h-5 w-5 animate-pulseGlow" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-300 glow-text-sm">[ SYSTEM: ONLINE ] ASTROLABE DECISION SIMULATOR</div>
              <div className="text-mono text-[10px] uppercase tracking-[0.3em] text-cyan-500/70">
                {"// STARTUP WORLDLINE ENGINE v2.4"}
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            <a href="#capabilities" className="transition-colors hover:text-white">
              Capabilities
            </a>
            <a href="#workflow" className="transition-colors hover:text-white">
              Workflow
            </a>
            <a href="#audience" className="transition-colors hover:text-white">
              Audience
            </a>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-14 xl:grid-cols-[1.05fr,0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="relative z-10 space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="tech-border inline-flex items-center bg-cyan-950/30 px-4 py-2 text-mono text-xs uppercase tracking-[0.4em] text-cyan-300"
            >
              [ PROCESS.SEQUENCE: ASSESS // SIMULATE // ACT ]
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-6">
              <h1 className="glow-text max-w-4xl text-balance text-5xl font-semibold tracking-[-0.04em] text-white md:text-6xl xl:text-7xl">
                <span className="text-cyan-400">&lt;</span> ASSESS THE IDEA BEFORE YOU BURN TIME, CASH, AND SCOPE <span className="text-cyan-400">/&gt;</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Astrolabe Decision Simulator structures the startup thesis, simulates 100 company
                worldlines, and turns uncertainty into replayable action paths. It is built for moments
                when founder instinct is not enough and the real task is comparing branches with discipline.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row font-mono">
              <Link href="/intake" className={buttonVariants({ size: "lg" }) + " tech-border rounded-none bg-cyan-600 hover:bg-cyan-500 text-black font-bold uppercase tracking-widest"}>
                [ INIT_ASSESSMENT ]
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                href="#dashboard-preview"
                className={buttonVariants({ size: "lg", variant: "secondary" }) + " tech-border rounded-none bg-transparent hover:bg-cyan-950/50 border border-cyan-600/50 text-cyan-300 uppercase tracking-widest"}
              >
                Explore Dashboard
                <ChartColumnIncreasing className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
              {[
                ["100", "company worldlines"],
                ["12", "monthly heartbeats"],
                ["Replay", "judgeable paths"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="tech-border scanline bg-black/40 p-4 backdrop-blur-md"
                >
                  <div className="font-mono text-3xl font-semibold tracking-tight text-cyan-300 glow-text-sm">{value}</div>
                  <div className="mt-2 text-mono text-xs uppercase tracking-[0.22em] text-slate-400">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
            className="relative"
          >
            <HeroCommandCenter />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Architecture"
          title="A startup simulator, not a generic brainstorming interface."
          description="The product thesis is simple: structure the idea, branch the scenario into multiple company worldlines, then convert the replay into a better next move."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {architectureBlocks.map((item, index) => (
            <Card key={item.title} className="tech-border rounded-none border-cyan-900/50 bg-black/50">
              <CardContent className="p-6">
                <div className="text-mono text-xs uppercase tracking-[0.28em] text-cyan-400">
                  [ BLK.0{index + 1} ]
                </div>
                <div className="mt-4 font-mono text-lg font-medium text-cyan-100">{item.title}</div>
                <p className="mt-4 text-lg leading-8 text-slate-200">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="From assessment, to simulation, to action planning."
          description="These modules are not isolated pages. They are one continuous loop: assess the idea, simulate the branches, then act with more clarity."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilityCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="tech-border scanline group relative h-full overflow-hidden rounded-none border-cyan-900/50 bg-black/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-strong">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.15),_transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative border-b border-cyan-900/30 mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-cyan-500/30 bg-cyan-900/20 text-cyan-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="text-mono text-xs uppercase tracking-[0.28em] text-slate-500">
                      {item.label}
                    </div>
                  </div>
                  <CardTitle className="pt-4 text-2xl tracking-[-0.05em]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative pt-0 text-base leading-7 text-slate-300">
                  {item.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="dashboard-preview" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Dashboard Preview"
          title="Read the company field like a control plane, not a feed of disconnected opinions."
          description="The preview shows how the product combines viability, survival curves, judge notes, and next guidance in one replayable interface."
        />
        <div className="mt-10">
          <DashboardPreview />
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="Assess -&gt; Simulate -&gt; Act"
          description="Do not jump from founder instinct to conclusions. First structure the evidence, then inspect the branches, then decide what deserves action."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <Card key={item.step} className="tech-border relative overflow-hidden rounded-none border-cyan-900/30 bg-black/40">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400/0 via-cyan-500/80 to-cyan-400/0" />
              <CardHeader>
                <div className="text-mono text-xs uppercase tracking-[0.28em] text-cyan-500">
                  [ STEP.{item.step} ]
                </div>
                <CardTitle className="font-mono text-2xl tracking-tight text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-7 text-slate-300">{item.body}</CardContent>
              {index < workflow.length - 1 ? (
                <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-px w-9 -translate-y-1/2 bg-gradient-to-r from-cyan-300/60 to-transparent lg:block" />
              ) : null}
            </Card>
          ))}
        </div>
      </section>

      <section id="audience" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Built For"
          title="Made for founders who want structure, replay, and comparison."
          description="If a startup decision feels noisy, capital-sensitive, or strategically unclear, this system is designed to slow judgment down and make the branches legible."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {audiences.map((item) => (
            <Card key={item.title} className="border-white/10 bg-white/[0.03]">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-cyan-200">
                  <item.icon className="h-5 w-5" />
                </div>
                <CardTitle className="pt-4 text-2xl tracking-[-0.05em]">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-7 text-slate-300">{item.body}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-12 md:px-8">
        <Card className="tech-border scanline rounded-none border-cyan-500/30 bg-black/80 panel-highlight">
          <CardContent className="relative p-8 md:p-12">
            <div className="absolute right-[-4rem] top-[-4rem] h-48 w-48 bg-cyan-500/20 blur-[100px]" />
            <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-end">
              <div>
                <div className="inline-flex items-center border border-cyan-500/40 bg-cyan-950/40 px-3 py-1 text-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
                  {"// INITIALIZE.SYSTEM //"}
                </div>
                <h2 className="glow-text mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  Put the question into the system. Assess it. Simulate it. Replay it.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  The goal is not to force certainty. The goal is to compare possible company paths with more discipline than instinct alone can provide.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                <Link href="/intake" className={buttonVariants({ size: "lg" })}>
                  Create First Scenario
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#workflow" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                  See How It Works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Mobile-friendly design",
  "Free subdomain",
  "GitHub hosting",
  "Full ownership",
  "WhatsApp support",
];

const Pricing = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-primary-foreground">Pricing</h1>
        <p className="mt-4 text-primary-foreground/70">Simple, transparent pricing. No hidden fees.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-2xl border-2 border-accent bg-card p-10 text-center shadow-lg"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Complete Website</p>
          <p className="mt-4 font-display text-5xl font-bold text-card-foreground">R1500</p>
          <p className="mt-1 text-sm text-muted-foreground">once-off payment</p>

          <ul className="mt-8 space-y-3 text-left">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-card-foreground">
                <Check size={18} className="shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/27602051383"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  </>
);

export default Pricing;

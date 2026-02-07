import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Zap } from "lucide-react";

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-primary py-24 md:py-36">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container relative mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl"
        >
          Professional Websites for Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/70"
        >
          Get a modern, mobile-friendly website for only <span className="font-semibold text-accent">R1500</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="https://wa.me/27602051383"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            WhatsApp Us <ArrowRight size={16} />
          </a>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl font-bold text-foreground">Why Choose Sitecrafters?</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            { icon: Monitor, title: "Modern Design", desc: "Clean, professional websites that make a great first impression." },
            { icon: Smartphone, title: "Mobile-Friendly", desc: "Every site looks perfect on phones, tablets, and desktops." },
            { icon: Zap, title: "Fast Delivery", desc: "Get your website up and running quickly without the wait." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <f.icon size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Ready to get started?</h2>
        <p className="mt-3 text-muted-foreground">Let's build your dream website today.</p>
        <a
          href="https://wa.me/27602051383"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          Get in Touch <ArrowRight size={16} />
        </a>
      </div>
    </section>
  </>
);

export default Index;

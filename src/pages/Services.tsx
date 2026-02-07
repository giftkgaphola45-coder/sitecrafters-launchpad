import { motion } from "framer-motion";
import { Globe, User, FileText, Smartphone, Clock } from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", desc: "Professional websites tailored to your brand, helping you reach more customers online." },
  { icon: User, title: "Personal Websites", desc: "Showcase your portfolio, resume, or personal brand with a clean, modern site." },
  { icon: FileText, title: "Landing Pages", desc: "High-converting single-page sites designed to promote your products or services." },
  { icon: Smartphone, title: "Mobile Responsive Design", desc: "Every website we build looks and works flawlessly on all devices." },
  { icon: Clock, title: "Fast Delivery", desc: "We value your time. Get your website delivered quickly without compromising quality." },
];

const Services = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-primary-foreground">Our Services</h1>
        <p className="mt-4 text-primary-foreground/70">Everything you need to get your business online.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <s.icon size={22} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Services;

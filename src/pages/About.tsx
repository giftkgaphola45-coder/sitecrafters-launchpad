import { motion } from "framer-motion";

const About = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-primary-foreground">About Us</h1>
        <p className="mt-4 text-primary-foreground/70">Helping small businesses get online — simply.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-muted-foreground"
        >
          <p className="text-lg leading-relaxed">
            <span className="font-display font-semibold text-foreground">Sitecrafters</span> was founded with one
            simple mission: to make professional websites accessible to every small business, regardless of budget.
          </p>
          <p className="leading-relaxed">
            We understand that getting online can feel overwhelming. That's why we handle everything — from design to
            hosting — so you can focus on running your business. Our streamlined process means you get a modern,
            mobile-friendly website without the complexity or high costs.
          </p>
          <p className="leading-relaxed">
            Whether you're a local shop, a freelancer, or a startup, we're here to help you make a strong first
            impression online. With full ownership of your site and ongoing WhatsApp support, you're always in control.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default About;

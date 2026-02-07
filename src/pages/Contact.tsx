import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Contact = () => (
  <>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-primary-foreground">Contact Us</h1>
        <p className="mt-4 text-primary-foreground/70">We'd love to hear from you.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto flex max-w-md flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground">
            Ready to get your business online? Send us a message on WhatsApp and we'll get back to you right away.
          </p>

          <a
            href="https://wa.me/27602051383"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            <MessageCircle size={22} />
            Chat on WhatsApp
          </a>

          <p className="text-sm text-muted-foreground">060 205 1383</p>
        </motion.div>
      </div>
    </section>
  </>
);

export default Contact;

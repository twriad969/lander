import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Bot, Code2, Sparkles, Zap, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered',
    description: 'Advanced language models for generating human-like content.',
  },
  {
    icon: Code2,
    title: 'Open Source',
    description: 'Free to use and modify, with a transparent codebase.',
  },
  {
    icon: Sparkles,
    title: 'High Quality',
    description: 'Consistently produces well-structured, engaging content.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate articles in seconds, not hours.',
  },
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security for your content.',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description: 'Always available when you need it.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to generate high-quality articles at scale
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 hover:shadow-lg transition-shadow group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
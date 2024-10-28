import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full text-sm mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>Open Source AI Article Generation</span>
          </motion.div>
          
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary/80 to-primary/60">
            Transform Ideas into Articles with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Harness the power of state-of-the-art AI to generate engaging, 
            well-researched articles in seconds. Open-source and free to use.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="group">
              Try Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              ['10M+', 'Articles Generated'],
              ['100k+', 'Active Users'],
              ['99.9%', 'Uptime'],
            ].map(([stat, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold mb-1">{stat}</div>
                <div className="text-muted-foreground text-sm">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
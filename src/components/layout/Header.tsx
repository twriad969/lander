import { motion } from 'framer-motion';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-primary/10 p-2 rounded-lg">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl">ArticleAI</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <ModeToggle />
          <Button>Get Started</Button>
        </motion.div>
      </nav>
    </header>
  );
}
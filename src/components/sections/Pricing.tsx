import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for getting started',
    price: '$0',
    features: [
      '100 articles/month',
      'Basic API access',
      'Community support',
      'Standard response time',
    ],
  },
  {
    name: 'Pro',
    description: 'For power users',
    price: '$5',
    popular: true,
    features: [
      'Unlimited articles',
      'Priority API access',
      'Premium support',
      'Advanced features',
      'Custom templates',
      'API key management',
      'Team collaboration',
      'Analytics dashboard',
    ],
  },
];

function SpotlightButton() {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-full"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), 0.1), transparent 40%)`,
        }}
      />
      <span className="text-sm font-medium text-primary px-4 py-2 relative z-10">
        Simple Pricing for Everyone
      </span>
    </div>
  );
}

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Aceternity UI Lamp effect mouse tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Aceternity UI Lamp Header Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15) 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <SpotlightButton />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your needs. All plans include our core
            features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`p-8 h-full relative overflow-hidden group ${
                  plan.popular ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {/* Card Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p
                  className={`mb-4 ${
                    plan.popular
                      ? 'text-primary-foreground/80'
                      : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full relative overflow-hidden group"
                  variant={plan.popular ? 'secondary' : 'default'}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <span className="relative">
                    {plan.popular ? 'Upgrade to Pro' : 'Get Started'}
                  </span>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

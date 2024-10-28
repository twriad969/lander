import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
        </main>
        
        <footer className="py-8 border-t">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>&copy; 2024 ArticleAI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
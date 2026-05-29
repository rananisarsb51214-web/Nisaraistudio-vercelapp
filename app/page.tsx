'use client';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/glass-card';
import { NeonButton } from '@/components/neon-button';
import { ParticleBackground } from '@/components/particle-background';

export default function Landing() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 w-full min-h-screen text-white">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
          >
            Your AI Organization<br />Runs Itself.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mt-6 max-w-2xl"
          >
            Automate Google Workspace, Slack, and your entire stack with Gemini + Claude.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <NeonButton href="/dashboard">Launch Dashboard →</NeonButton>
            <NeonButton variant="outline" href="/waitlist">Join Waitlist</NeonButton>
          </motion.div>
        </section>

        {/* AI Showcase Animation */}
        <section className="py-20">
          <GlassCard className="max-w-5xl mx-auto p-8 text-center">
            <div className="flex flex-wrap gap-6 justify-center">
              {['Gmail', 'Calendar', 'Drive', 'Docs', 'Sheets'].map((app) => (
                <div key={app} className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  {app}
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Integration Grid */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Live Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Gemini AI', 'Claude AI', 'Google Workspace', 'Firebase', 'Slack', 'GitHub'].map((item) => (
              <GlassCard key={item} className="text-center p-6">
                {item}
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

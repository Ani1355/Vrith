import { Mail, Phone, Twitter, Linkedin, Github, CheckCircle2, Send, Circle } from 'lucide-react';
import { Button } from './ui/design-system/Button';
import { Typography } from './ui/design-system/Typography';
import { Card } from './ui/design-system/Card';
import { ScrollAnimation } from './ui/ScrollAnimation';

export default function Footer() {
  return (
    <div className="py-20 px-4 bg-primary-50">
      <div className="max-w-container mx-auto">
        <ScrollAnimation animation="slideUp">
          <Card variant="default" padding="xl" radius="3xl" className="mb-6">
          <div className="grid grid-cols-[400px_1fr] gap-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <Typography variant="caption" className="font-medium text-primary-900">
                  Vrith Labs
                </Typography>
              </div>
              <Typography variant="body-large" className="mb-8 text-gray-600">
                We build ambitious products with small, senior teams. Tell us a bit about your project and we'll get back within one business day.
              </Typography>

              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Circle size={6} fill="var(--color-success)" stroke="none" />
                    <Typography variant="caption" className="font-medium text-primary-900">
                      Booking Q4
                    </Typography>
                  </div>
                  <Typography variant="label" className="mb-3 text-primary-900">
                    Start a project
                  </Typography>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Senior engineers and designers only — no handoffs, no fluff.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Transparent weekly demos, metrics, and delivery plans.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Security, accessibility, and performance baked-in.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-200">
                <a href="mailto:hello@vrithlabs.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-900 transition-colors duration-normal">
                  <Mail size={16} />
                  <span>hello@vrithlabs.com</span>
                </a>
                <a href="tel:+14155551234" className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary-900 transition-colors duration-normal">
                  <Phone size={16} />
                  <span>+1 (555) 000-0000</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Your name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Project type</label>
                  <input
                    type="text"
                    placeholder="New product build"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-2 font-medium">What are you building?</label>
                <textarea
                  placeholder="A few sentences about your goals, timeline, and success metrics."
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 bg-white cursor-pointer"
                    />
                  <span className="group-hover:text-gray-300 transition-colors duration-normal">Please send an NDA</span>
                </label>
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                  <Send size={16} />
                  Send request
                </Button>
              </div>
            </div>
          </div>
          </Card>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={200}>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-[32px] p-12 text-white shadow-2xl">
            <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-[12px] font-semibold mb-4 text-gray-400 uppercase tracking-[0.1em]">
                Services
              </h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Product Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Frontend Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & Agents</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud & DevOps</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold mb-4 text-gray-400 uppercase tracking-[0.1em]">
                Resources
              </h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Playgrounds</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Open Source</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold mb-4 text-gray-400 uppercase tracking-[0.1em]">
                Company
              </h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Principles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold mb-4 text-gray-400 uppercase tracking-[0.1em]">
                Stay in touch
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[13px] text-white placeholder-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
                />
                <Button variant="secondary" size="sm">
                  Join
                </Button>
              </div>
              <div className="flex gap-2.5">
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10">
                  <Github size={16} className="text-gray-400" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10">
                  <Twitter size={16} className="text-gray-400" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10">
                  <Linkedin size={16} className="text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="text-[13px] text-gray-500">
              © 2025 Vrith Labs. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

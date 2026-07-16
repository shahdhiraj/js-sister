import React from 'react';
import { MapPin, Phone, Mail, Send, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { FadeIn } from '../components/ui/motion';
import { toast } from 'sonner';
export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };
  return (
    <div className="pt-24 pb-20 bg-surface-base min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-strong mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-text-secondary">
            Have questions? We're here to help you find the right teaching
            talent or your next dream job.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="bg-surface-muted p-8 rounded-3xl border border-border-default h-full">
              <h3 className="text-2xl font-bold text-surface-strong mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-base shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-surface-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-strong mb-1">
                      Office Location
                    </h4>
                    <p className="text-text-secondary">
                      Tinkune
                      <br />
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-base shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-surface-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-strong mb-1">
                      Phone Number
                    </h4>
                    <p className="text-text-secondary">
                      +977 9800000000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-base shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-surface-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-strong mb-1">
                      Email Address
                    </h4>
                    <p className="text-text-secondary">
                      support@js-sister.com
                      <br />
                      info@js-sister.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-base shadow-sm flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-surface-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-surface-strong mb-1">
                      Business Hours
                    </h4>
                    <p className="text-text-secondary">
                      Sunday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border-default mt-8">
                  <h4 className="font-bold text-surface-strong mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-surface-base shadow-sm flex items-center justify-center text-text-secondary hover:text-surface-accent hover:border-surface-accent transition-colors border border-transparent">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-surface-base shadow-sm flex items-center justify-center text-text-secondary hover:text-surface-accent hover:border-surface-accent transition-colors border border-transparent">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-surface-base shadow-sm flex items-center justify-center text-text-secondary hover:text-surface-accent hover:border-surface-accent transition-colors border border-transparent">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-surface-base shadow-sm flex items-center justify-center text-text-secondary hover:text-surface-accent hover:border-surface-accent transition-colors border border-transparent">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left">
            <div className="bg-surface-base p-8 rounded-3xl shadow-2 border border-border-default">
              <h3 className="text-2xl font-bold text-surface-strong mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">
                      First Name
                    </label>
                    <Input placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">
                      Last Name
                    </label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    Subject
                  </label>
                  <select className="flex h-[44px] w-full rounded-md border border-border-default bg-surface-base px-3 py-2 text-base text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring">
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Billing</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="flex w-full rounded-md border border-border-default bg-surface-base px-3 py-2 text-base text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring resize-none"
                    placeholder="How can we help you?"
                    required>
                  </textarea>
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  className="w-full h-12 text-lg mt-4">
                  
                  <Send className="h-5 w-5 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>);

}

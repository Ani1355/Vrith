import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './design-system/Button';
import { Typography } from './design-system/Typography';
import { Card } from './design-system/Card';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    sendNda: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        description: '',
        sendNda: false
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card variant="default" padding="xl" radius="3xl" className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Typography variant="heading-2" className="mb-2">
              Book a Slot
            </Typography>
            <Typography variant="body-small" color="muted">
              Tell us about your project and we'll get back within one business day.
            </Typography>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <Typography variant="heading-3" className="mb-2">
              Request Sent!
            </Typography>
            <Typography variant="body-small" color="muted">
              We'll get back to you within one business day.
            </Typography>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-2 font-medium">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@company.com"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-2 font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Acme Inc."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2 font-medium">Project type</label>
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  placeholder="New product build"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2 font-medium">What are you building?</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="A few sentences about your goals, timeline, and success metrics."
                rows={4}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-primary-900 placeholder-gray-500 focus:outline-none focus:border-primary-900 focus:bg-white transition-all duration-normal resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer group">
                <input
                  type="checkbox"
                  name="sendNda"
                  checked={formData.sendNda}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-gray-300 bg-white cursor-pointer"
                />
                <span className="group-hover:text-gray-300 transition-colors duration-normal">Please send an NDA</span>
              </label>
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send request
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};

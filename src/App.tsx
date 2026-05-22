/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Envelope } from './components/Envelope';
import { InvitationContent } from './components/InvitationContent';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Preload images for a smoother experience
  useEffect(() => {
    const images = [
      '/src/assets/images/shell_wax_seal_1779206106370.png',
      'https://images.unsplash.com/photo-1548625361-12502ec32381?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <main className="min-h-screen bg-beige-warm">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            <Envelope onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <InvitationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

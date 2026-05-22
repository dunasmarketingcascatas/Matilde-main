import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Smooth transition time to trigger the content display
    setTimeout(onOpen, 1800);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-beige-warm z-50 overflow-hidden">
      {/* Wax Seal - Positioned precisely at the center */}
      <motion.div
        animate={isOpening ? { 
          scale: 0.8,
          opacity: 0,
          transition: { duration: 0.6, ease: "easeInOut" }
        } : { scale: 1, opacity: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer flex flex-col items-center justify-center"
        onClick={handleOpen}
      >
        <div className="relative group">
          <img 
            src="/images/shell_wax_seal_1779206106370.png" 
            alt="Selo da Matilde" 
            className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-500 group-hover:scale-110 active:scale-95"
            referrerPolicy="no-referrer"
          />
          {/* Soft glowing concentric aura to invite interaction */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gold/20 -z-10 blur-xl"
          />
        </div>
        
        {/* Extremely subtle invitation to tap */}
        <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-neutral-400/80 font-sans font-medium hover:text-gold transition-colors">
          Toque para abrir
        </p>
      </motion.div>
    </div>
  );
}


import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Utensils, MessageCircle, Calendar, Clock, Volume2, VolumeX, ChevronUp } from 'lucide-react';
import { EVENT_INFO } from '@/src/constants';
import { Countdown } from './Countdown';
import { cn } from '@/src/lib/utils';
import { useState, useRef, useEffect } from 'react';

export function InvitationContent() {
  const [isMuted, setIsMuted] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          // Chrome prevents autoplay, user action needed
          console.log("Audio playback failed");
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const Section = ({ children, className, title, subtitle }: any) => (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={cn("py-20 px-6 max-w-4xl mx-auto text-center", className)}
    >
      {(title || subtitle) && (
        <div className="mb-12">
          {subtitle && (
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-400 font-sans font-medium mb-3">
              {subtitle}
            </p>
          )}
          {title && <h2 className="text-3xl md:text-5xl text-neutral-800 italic">{title}</h2>}
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6" />
        </div>
      )}
      {children}
    </motion.section>
  );

  return (
    <div className="bg-ivory selection:bg-gold/10 min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-40 paper-texture -z-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mb-10 px-4"
        >
          {/* Presidential-style/Luxury Editorial Double-Border Portrait Frame */}
          <div className="relative mx-auto w-64 h-80 md:w-72 md:h-96 bg-white p-3 shadow-2xl rounded-sm border border-neutral-200/40 hover:shadow-gold/10 transition-shadow duration-700">
            {/* Inner Double Gilded Border */}
            <div className="w-full h-full border-2 border-double border-gold/30 rounded-xs overflow-hidden flex flex-col justify-center items-center bg-ivory relative group">
              {EVENT_INFO.mainPhotoUrl ? (
                <img 
                  src={EVENT_INFO.mainPhotoUrl} 
                  alt="Matilde Fontoura Crespo" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full p-4 flex flex-col items-center justify-between bg-beige-warm/30 relative">
                  {/* Watercolor backdrop */}
                  <img 
                    src="/images/matilde-invite.jpeg" 
                    alt="Floral Background Placeholder" 
                    className="absolute inset-0 w-full h-full object-contain opacity-75 p-6"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Delicate Placeholder Frame Decoration */}
                  <div className="absolute inset-2 border border-dashed border-gold/20" />
                  
                  <div className="z-10 mt-auto mb-4 text-center">
                    <span className="block text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-bold mb-1">
                  
                    </span>
                    <span className="block text-xs italic text-neutral-500 font-serif">
         
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-neutral-400 font-sans font-semibold mb-6">
            O Batismo de
          </p>
          <h1 className="text-5xl md:text-8xl font-display text-neutral-800 mb-8 tracking-tight">
            {EVENT_INFO.name}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-neutral-500 font-serif text-lg md:text-xl italic">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold/60" />
              <span>{EVENT_INFO.dateDisplay}</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gold/20" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold/60" />
              <span>{EVENT_INFO.time}H</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-300"
        >
          <div className="w-[1px] h-12 bg-neutral-200 mx-auto" />
        </motion.div>
      </header>

      {/* Intro Message */}
      <Section className="bg-neutral-50/50">
        <p className="text-xl md:text-2xl leading-relaxed text-neutral-600 font-serif italic max-w-2xl mx-auto">
          "Há momentos que se tornam eternos quando partilhados com aqueles que amamos. 
          Convidamo-vos a celebrar connosco este primeiro grande passo na vida da nossa querida Matilde."
        </p>
      </Section>

      {/* Countdown */}
      <Section title="A Contagem Decrescente" subtitle="Falta Pouco">
        <Countdown targetDate={EVENT_INFO.date} />
      </Section>

      {/* Timeline / Program */}
      <Section title="O Programa" subtitle="O Nosso Dia">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-center text-left">
            <div className="w-full md:w-1/2 overflow-hidden rounded-sm shadow-xl">
              <img 
                src={EVENT_INFO.ceremony.image} 
                alt="Ceremony Venue" 
                className="w-full h-64 object-contain hover:scale-105 transition-transform duration-700 bg-neutral-100" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 text-gold mb-2">
                <span className="text-sm font-sans font-bold tracking-widest uppercase">12:00</span>
                <div className="flex-grow h-[1px] bg-gold/20" />
              </div>
              <h3 className="text-2xl mb-3">Cerimónia Religiosa</h3>
              <p className="text-neutral-500 italic mb-4">{EVENT_INFO.ceremony.name}</p>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                A celebração terá lugar na Igreja da Afurada, um espaço de paz onde a Matilde receberá a sua primeira luz.
              </p>
              <a 
                href={EVENT_INFO.ceremony.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans font-bold text-neutral-800 border-b border-gold/40 pb-1 hover:text-gold transition-colors"
              >
                <MapPin className="w-3 h-3" /> Ver no Google Maps
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-center text-left">
            <div className="w-full md:w-1/2 overflow-hidden rounded-sm shadow-xl">
              <img 
                src={EVENT_INFO.reception.image} 
                alt="Reception Venue" 
                className="w-full h-64 object-contain hover:scale-105 transition-transform duration-700 bg-neutral-100" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 text-gold mb-2">
                <span className="text-sm font-sans font-bold tracking-widest uppercase">13:30</span>
                <div className="flex-grow h-[1px] bg-gold/20" />
              </div>
              <h3 className="text-2xl mb-3">A celebração continua...</h3>
              <p className="text-neutral-500 italic mb-4">{EVENT_INFO.reception.name}</p>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                Seguiremos para uma tarde de convívio e celebração nos belos jardins da Quinta do Alferes de Castro.
              </p>
              <a 
                href={EVENT_INFO.reception.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans font-bold text-neutral-800 border-b border-gold/40 pb-1 hover:text-gold transition-colors"
              >
                <MapPin className="w-3 h-3" /> Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </Section>

     

      {/* RSVP Section */}
      <Section title="Confirmação" subtitle="RSVP">
        <div className="space-y-8">
          <p className="text-neutral-600 italic text-lg">
            Agradecemos a confirmação de presença até ao dia 15 de Agosto.
          </p>
          <a 
            href={`https://wa.me/${EVENT_INFO.whatsapp.number}?text=${encodeURIComponent(EVENT_INFO.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-neutral-800 text-ivory px-10 py-5 rounded-full hover:bg-neutral-900 transition-all hover:scale-105 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-gold" />
            <span className="font-sans font-bold uppercase tracking-widest text-sm">Confirmar Presença</span>
          </a>
        </div>
      </Section>

      {/* Flexible Section: Memories / Dress Code */}
      <Section title="Notas Adicionais" subtitle="Extras">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 border border-neutral-100 rounded-sm hover:shadow-lg transition-all duration-500">
            <h4 className="text-xl mb-4 italic">Dress Code</h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Sugerimos traje passeio ou casual chique. Tons claros e pastéis são muito bem-vindos para acompanhar a luz do dia.
            </p>
          </div>
          <div className="p-8 border border-neutral-100 rounded-sm hover:shadow-lg transition-all duration-500">
            <h4 className="text-xl mb-4 italic">Lista de Presentes</h4>
            <p className="text-neutral-500 text-sm leading-relaxed">
              O vosso carinho é o melhor presente que a Matilde pode receber. Se desejarem assinalar o momento, haverá um mealheiro no local para o seu futuro.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-neutral-100 opacity-50 relative">
        <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-sans">
          Matilde • 2026
        </p>
      </footer>

      {/* Persistent Controls */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full shadow-lg text-neutral-500 hover:text-gold transition-colors"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
        
        <button
          onClick={toggleMute}
          className="p-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full shadow-lg text-neutral-500 hover:text-gold transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      <audio 
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2026/04/08/audio_8ccf6e3f6f.mp3?filename=mondamusic-lofi-lofi-girl-lofi-chill-512853.mp3" // Lofi Girls Chill track from Pixabay
      />
    </div>
  );
}

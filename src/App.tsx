import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, CheckCircle2, Shield, Wrench, 
  ThermometerSnowflake, Droplets, Star, MapPin, 
  MessageCircle, Phone, Instagram, Facebook, Send,
  ArrowRight, Clock, ChevronLeft, ChevronRight,
  Camera
} from 'lucide-react';

const PHONE = '553492434778';
const WP_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent('Olá, Deivid! Acessei o site da Primo Refrigerações e gostaria de solicitar um orçamento.')}`;

const FadeIn = ({ children, delay = 0, className = "" }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const signatureGlow = "shadow-[0_0_15px_rgba(251,192,45,0.4)]";

const SignatureLine = () => (
  <div className={`absolute top-0 left-0 w-full h-[3px] bg-accent z-50 ${signatureGlow}`} />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 500 : 300;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Form states para conversão avançada via WhatsApp
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: 'Manutenção de Ar Condicionado',
    mensagem: ''
  });

  const isFormValid = formData.nome.trim().length > 1 && formData.telefone.trim().length > 8;

  let generatedText = `Olá, equipe Primo Refrigerações! Vim pelo site. ❄️\n\n`;
  if (formData.nome) generatedText += `Meu nome é *${formData.nome.trim()}*.\n`;
  generatedText += `Tenho interesse no serviço de: *${formData.servico}*.\n`;
  if (formData.mensagem) generatedText += `\n*Detalhes do ambiente/problema:* \n${formData.mensagem.trim()}`;
  
  const generatedUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(generatedText)}`;

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { icon: ThermometerSnowflake, title: "Instalação", desc: "Instalação profissional de equipamentos de refrigeração e ar condicionado, garantindo máxima eficiência." },
    { icon: Wrench, title: "Manutenção", desc: "Manutenção preventiva e corretiva para prolongar a vida útil de suas máquinas e resolver falhas com agilidade." },
    { icon: Droplets, title: "Higienização", desc: "Limpeza profunda e sanitização completa, cuidando da qualidade do ar que você respira e do seu bem-estar." }
  ];

  const faqs = [
    { q: "Quais marcas de ar condicionado vocês instalam?", a: "Trabalhamos com todas as principais marcas do mercado (LG, Samsung, Daikin, Midea, etc), oferecendo instalação seguindo o mais alto rigor técnico." },
    { q: "Com que frequência devo fazer a higienização?", a: "Recomendamos a higienização completa a cada 6 meses para residências e a cada 3 meses para ambientes comerciais de alto fluxo." },
    { q: "Vocês atendem emergências ou apenas manutenção programada?", a: "Realizamos tanto manutenções preventivas programadas quanto atendimentos corretivos para restabelecer seu conforto no momento em que você mais precisar." },
    { q: "A higienização ajuda na economia de energia?", a: "Sim! Um equipamento limpo e bem mantido não precisa 'forçar' o motor para gelar o ambiente, resultando em até 30% de economia na sua conta de luz." },
    { q: "Dão garantia nos serviços prestados?", a: "Com certeza. Nossos serviços possuem garantia total de mão de obra, refletindo a nossa eficiência no seu dia a dia." }
  ];

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-accent selection:text-primary scroll-smooth relative">
      {/* Global Film Grain Overlay - Pentagram/Awwwards touch */}
      <div className="pointer-events-none fixed inset-0 z-[999] h-full w-full opacity-[0.035] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <SignatureLine />

      {/* Floating CTA */}
      <a 
        href={WP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:opacity-0 hover:before:opacity-100 border border-white/20 backdrop-blur-sm group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
        <MessageCircle size={32} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* HEADER */}
      <header className="fixed top-[3px] left-0 w-full z-40 bg-primary/95 text-white backdrop-blur-md border-b border-white/10 transition-all shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-secondary to-accent flex items-center justify-center text-white shadow-lg border border-white/20">
               <ThermometerSnowflake size={22} strokeWidth={2.5} />
            </div>
            <span className="font-display font-medium text-xl tracking-tight text-white">Primo</span>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 ml-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Bem-estar online
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Sobre</a>
            <a href="#atendimento" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Área de atendimento</a>
            <a href="#contato" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Contato</a>
          </nav>

          <a 
            href={WP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-secondary text-white font-medium text-sm hover:scale-105 hover:bg-accent transition-all duration-300 shadow-[0_0_15px_rgba(0,153,255,0.4)]"
          >
            Solicitar orçamento
          </a>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-primary border-b border-white/10 px-6 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6">
                <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-white/80">Serviços</a>
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-white/80">Sobre</a>
                <a href="#atendimento" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-white/80">Área de atendimento</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-white/80">Contato</a>
                <a href={WP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 rounded-lg bg-secondary text-white font-medium w-full mt-2 hover:scale-105 hover:bg-accent transition-all shadow-[0_0_15px_rgba(0,153,255,0.4)]">
                  (34) 9243-4778 / WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0099FF10_1px,transparent_1px),linear-gradient(to_bottom,#0099FF10_1px,transparent_1px)] bg-[size:4rem_4rem] mix-blend-multiply" />
        
        {/* Animated Orbs for that "WOW" modern feel - Optmized to avoid paint bleeding */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none mix-blend-normal will-change-transform" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-[90px] pointer-events-none mix-blend-normal will-change-transform" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 w-full relative z-20">
            <FadeIn>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/60 backdrop-blur-md border border-secondary/20 shadow-sm rounded-full text-[11px] font-semibold tracking-widest uppercase text-secondary mb-8 relative hover:border-accent hover:bg-secondary/5 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>Referência em Climatização</span>
              </div>
            </FadeIn>
            
            <div className="mb-8 max-w-[800px]">
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tighter text-primary">
                <span className="block">Instalação,</span>
                <span className="block">Manutenção &</span>
                <span className="block mt-2 lg:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-[#4A90E2] drop-shadow-sm pb-4">
                  Higienização.
                </span>
              </h1>
            </div>
            
            <div className="mb-12">
              <p className="font-sans text-xl md:text-2xl text-text/80 max-w-xl leading-relaxed font-light">
                <strong className="font-medium text-secondary">Primo Refrigerações.</strong><br/> Cuidando do seu bem-estar com segurança, desempenho e a pureza do ar ideal.
              </p>
            </div>

            <FadeIn delay={0.15} className="flex flex-col sm:flex-row gap-5 mb-16">
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="relative group overflow-hidden inline-flex items-center justify-center gap-3 h-16 px-10 rounded-full bg-secondary text-white font-medium text-lg shadow-[0_15px_30px_rgba(0,90,156,0.25)] hover:shadow-[0_20px_40px_rgba(0,90,156,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                <span className="relative z-10 flex items-center gap-2">Agendar Serviço <ArrowRight size={20} /></span>
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 h-16 px-10 rounded-full bg-white text-primary border border-primary/10 font-medium text-lg hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all duration-300">
                Ver portfólio
              </a>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-primary/10 text-sm font-medium text-primary/70">
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-accent" /> Residencial e Comercial</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-accent" /> Todas as marcas</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-accent" /> Serviço Garantido</span>
              </div>
            </FadeIn>
          </div>

          <div className="w-full lg:w-[45%]">
            <FadeIn delay={0.1} className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-secondary/30 rounded-[3rem] transform rotate-3 scale-105 -z-10 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-white/60 backdrop-blur-3xl border text-center border-white/60 rounded-[2.5rem] p-4 shadow-[0_40px_80px_-20px_rgba(0,90,156,0.2)] overflow-visible aspect-[9/16] w-full max-w-[360px] mx-auto flex flex-col justify-center items-center group/img animate-pulse-glow">
                
                {/* GLASS BORDER */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] z-10 pointer-events-none" />

                {/* PRESENTATION VIDEO INSTEAD OF PLACEHOLDER */}
                <motion.div 
                  className="w-full h-full relative rounded-[2rem] overflow-hidden bg-primary border border-secondary/20 flex flex-col items-center justify-center animate-float z-20 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] group/video"
                >
                  {/* Vídeo atualizado: Agora puxa "apresentacao.mp4" (sem acentos e perfeitamente compatível) */}
                  <video 
                    key="apresentacao-video"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover scale-105 group-hover/video:scale-100 transition-transform duration-700"
                  >
                    <source src="/apresentacao.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  {/* Subtle gradient overlay to make video look more premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent pointer-events-none" />
                </motion.div>

                {/* FLOATING TRUST BADGE */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 z-30 bg-white/90 backdrop-blur-xl shadow-[0_20px_40px_rgb(0,0,0,0.15)] border border-white rounded-[1.5rem] p-5 flex items-center gap-4 hover:scale-105 transition-transform"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white shadow-inner">
                    <Droplets size={26} strokeWidth={2} />
                  </div>
                  <div className="text-left pr-4">
                    <span className="block text-[10px] uppercase tracking-widest text-primary/50 font-bold mb-1">Qualidade Garantida</span>
                    <strong className="block text-primary font-display text-base">Ar 100% Puro</strong>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE - BRAND AUTHORITY */}
      <section className="w-full py-10 border-y border-primary/5 bg-background relative overflow-hidden flex items-center">
        {/* Gradient fades for seamless loop visually */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="animate-scrolling-banner flex whitespace-nowrap items-center gap-16 md:gap-24 w-max px-8">
          {/* Duplicando listagem de marcas para o loop infinito visualmente fluido... */}
          {[...Array(2)].fill(['DAIKIN', 'FUJITSU', 'SAMSUNG', 'LG', 'MIDEA', 'GREE', 'CARRIER', 'TRANE', 'INTELBRAS', 'GIGA']).flat().map((brand, i) => (
            <span key={i} className="font-display font-medium text-2xl lg:text-4xl tracking-[0.15em] text-primary/10 uppercase flex items-center gap-16 md:gap-24">
              {brand}
              {/* Separador minimalista */}
              <span className="w-2 h-2 rounded-full bg-accent/30"></span>
            </span>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-secondary text-white relative border-y border-white/5">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">01 // Expertise Multidisciplinar</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl leading-tight">
                  Tranquilidade e segurança em um só lugar.
                </h2>
              </div>
              <p className="font-mono text-sm text-white/90 uppercase max-w-[200px] text-right hidden lg:block">
                Residencial e Industrial <br/>Profissionais Capacitados
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((svc, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden h-full flex flex-col backdrop-blur-sm hover:border-accent/40">
                  {/* Hover cyan line */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent transition-all duration-700 ease-out group-hover:w-full z-10" />

                  <div className="flex items-center gap-4 mb-4 mt-2">
                    <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-secondary transition-all duration-500 shrink-0">
                      <svc.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-lg leading-tight text-white">{svc.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed text-base">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[80px]" />
              <div className="relative z-10">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Precisa de um orçamento de clima ou segurança?</h3>
                <p className="text-white/90 text-lg">Conte com nossa experiência para dimensionar o equipamento ideal e proteger as suas instalações com sistemas modernos.</p>
              </div>
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="relative group overflow-hidden z-10 shrink-0 inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-secondary font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-secondary/10 to-transparent animate-shimmer" />
                <span className="relative z-10">Falar com Especialista</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="sobre" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Autoridade Técnica</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">Por que escolher a Primo Refrigerações?</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
            <FadeIn className="md:col-span-2 bg-white p-10 rounded-2xl border border-primary/5 flex flex-col justify-end group hover:shadow-[0_20px_40px_-15px_rgba(10,25,47,0.1)] transition-all">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">Atendimento Rápido</h3>
              <p className="text-text/70 max-w-md">Resposta imediata e execução ágil sem perda de qualidade em serviços corretivos.</p>
            </FadeIn>
            
            <FadeIn delay={0.1} className="bg-primary text-white p-10 rounded-2xl flex flex-col justify-end group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
              <h3 className="font-display text-2xl font-bold mb-2 text-white">Atendimento Especializado</h3>
              <p className="text-white/90">Técnicos capacitados e experientes em diversas tecnologias instaladas.</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="bg-secondary text-white p-10 rounded-2xl flex flex-col justify-end shadow-[0_20px_40px_-15px_rgba(0,87,183,0.4)]">
              <h3 className="font-display text-2xl font-bold mb-2 text-white">NF Garantida</h3>
              <p className="text-white/90">Segurança legal e transparência total em 100% dos nossos serviços prestados.</p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="md:col-span-2 bg-white p-10 rounded-2xl border border-primary/5 flex flex-col justify-end shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(10,25,47,0.1)] transition-all">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">Garantia no Serviço</h3>
              <p className="text-text/70 max-w-md">Feito uma vez, feito para durar. Você coberto tecnicamente em todos os reparos.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GALERIA (ANTES E DEPOIS) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Nosso Trabalho</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">Resultados na prática.</h2>
            </div>
          </FadeIn>
          
          <div className="relative group">
            <button 
              onClick={() => scrollGallery('left')} 
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all xl:-left-6 opacity-0 sm:opacity-100 group-hover:opacity-100" 
              aria-label="Foto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollGallery('right')} 
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 shadow-lg border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all xl:-right-6 opacity-0 sm:opacity-100 group-hover:opacity-100" 
              aria-label="Próxima foto"
            >
              <ChevronRight size={24} />
            </button>

            <div ref={galleryRef} className="flex gap-6 w-full overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth hide-scroll px-2">
              {[
                { src: "/depoimento1.jpg" },
                { src: "/depoimento2.jpg" },
                { src: "https://imgbly.com/ib/9GVxMsRxWIxzIyA_1776471549.jpeg" },
                { src: "https://imgbly.com/ib/EamCSPBvSEZTPIO_1776471565.jpeg" },
                { src: "https://imgbly.com/ib/mBDyrdiDvyFV8Dy_1776471576.jpeg" },
                { src: "https://imgbly.com/ib/BJ7wvADw9j6jYhM_1776471615.jpeg" },
                { src: "https://imgbly.com/ib/6mbaeiToBgox1ci_1776471638.jpeg" },
                { src: "https://imgbly.com/ib/6gxSMN7njqCTJ48_1776471650.jpeg" },
                { src: "https://imgbly.com/ib/rKMYyLo5UXgEg7e_1776471679.jpeg" },
                { src: "https://imgbly.com/ib/4uLtoAXJgkc5BBC_1776471705.jpeg" },
                { src: "https://imgbly.com/ib/60Y64DSuUm0CXHx_1776471718.jpeg" },
                { src: "https://imgbly.com/ib/qrUqZ700ZzXzcm8_1776471730.jpeg" }
              ].map((imgItem, i) => (
                <div key={i} style={{ animationDelay: `${i * 50}ms` }} className="shrink-0 w-[85vw] sm:w-[400px] snap-center animate-[fadeIn_0.5s_ease-out_forwards]">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white p-2 border border-primary/10 shadow-sm hover:shadow-lg transition-shadow duration-300 group/card">
                    <div className="w-full h-full relative rounded-xl overflow-hidden transition-transform duration-700 group-hover/card:scale-[1.03] bg-background flex items-center justify-center">
                      <picture>
                        {imgItem.fallback && <source srcSet={imgItem.src} />}
                        <img src={imgItem.fallback || imgItem.src} alt={`Serviço ${i + 1}`} className="w-full h-full object-cover absolute inset-0" referrerPolicy="no-referrer" loading="lazy" />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white w-full transform translate-y-4 transition-transform duration-500 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100">
                        <span className="font-display font-bold text-xl block drop-shadow-md">Serviço Executado #{i+1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-primary text-white relative">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Avaliações Verificadas</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl">O que nossos clientes dizem</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Carlos T.", via: "Google Reviews", text: "Me salvou! O ar condicionado estragou num dia muito quente. O Deivid da Primo Refrigerações foi super rápido e honesto no diagnóstico." },
              { name: "Mariana S.", via: "Google Reviews", text: "Fizemos a higienização completa dos aparelhos do escritório. A diferença no ar que respiramos é absurda, e as alergias melhoraram 100%!" },
              { name: "Fabiano L.", via: "Facebook", text: "A instalação foi impecável. Equipamento alinhado, sem sujeira, sem bagunça. Muito profissional, recomendo fortemente os serviços do Deivid." }
            ].map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md h-full flex flex-col justify-between">
                  <div>
                    <div className="flex text-accent mb-6">
                      {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" /> )}
                    </div>
                    <p className="text-white/80 leading-relaxed mb-8 italic">"{review.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex overflow-hidden items-center justify-center shrink-0">
                      <img src={`https://picsum.photos/seed/person${i+10}/100/100`} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                    </div>
                    <div>
                      <strong className="block font-display text-lg">{review.name}</strong>
                      <span className="text-sm text-white/50">Via {review.via}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREA DE ATENDIMENTO */}
      <section id="atendimento" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[2rem] p-8 md:p-16 border border-white/5 flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden text-white shadow-2xl">
            {/* Dark Blue Luxury Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

            <FadeIn className="flex-1 w-full relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm flex items-center justify-center text-accent mb-8">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Área de Cobertura</h2>
              <p className="font-sans text-lg text-white/80 mb-8 max-w-md">
                Atuamos em <strong className="text-white font-bold">Uberlândia e região</strong>, oferecendo deslocamento ágil para garantir a climatização quando você mais precisa.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full font-medium text-white shadow-sm backdrop-blur-md">
                <CheckCircle2 size={20} className="text-accent" /> Serviço Local Prioritário
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex-1 w-full relative z-10">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10 p-4 bg-white/5 backdrop-blur-md">
                   {/* Abstract Map UI representation */}
                   <div className="w-full h-full bg-[#071324] rounded-xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0099FF15_1px,transparent_1px),linear-gradient(to_bottom,#0099FF15_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                         <div className="w-24 h-24 bg-accent/20 rounded-full animate-ping absolute" />
                         <div className="w-12 h-12 bg-accent/40 rounded-full absolute" />
                         <MapPin size={36} className="text-accent relative z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" fill="#0A192F" />
                         <span className="font-display font-bold text-white mt-2 relative z-10 bg-white/10 px-3 py-1 text-sm rounded backdrop-blur-md border border-white/20">Uberlândia e Região</span>
                      </div>
                   </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background border-t border-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">Perguntas Frequentes</h2>
            </div>
          </FadeIn>
          
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div 
                  className={`bg-white border ${activeFaq === index ? 'border-accent shadow-md' : 'border-primary/10'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between font-display font-bold text-lg md:text-xl text-primary hover:text-secondary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={24} className={`shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-accent' : 'text-primary/30'}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-text/70 leading-relaxed font-sans">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Fale com os Especialistas</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8">
                Pronto para o conforto absoluto?
              </h2>
              <p className="text-lg text-text/70 mb-12">Preencha o formulário e nossa equipe técnica entrará em contato em menos de 15 minutos úteis para entender o seu cenário.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 text-secondary border border-primary/5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong className="block font-display text-xl text-primary mb-1">WhatsApp & Plantão</strong>
                    <a href={WP_LINK} target="_blank" rel="noreferrer" className="text-text/70 hover:text-secondary transition-colors">(34) 9243-4778</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 text-secondary border border-primary/5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="block font-display text-xl text-primary mb-1">Localização Base</strong>
                    <span className="text-text/70">Rua Ibrantina Pena 219<br/>Shopping Park, Uberlândia - MG</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 text-secondary border border-primary/5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong className="block font-display text-xl text-primary mb-1">Horário de Operação</strong>
                    <span className="text-text/70">Seg a Sex: 08h às 18h<br/>Sáb: 08h às 12h (Plantão 24h via contrato)</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-primary rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl shadow-primary/20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-semibold text-white/80">Seu Nome</label>
                      <input 
                        id="nome"
                        type="text" 
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        placeholder="Nome Completo" 
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-sans text-white placeholder-white/30 backdrop-blur-sm" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="text-sm font-semibold text-white/80">Telefone / WhatsApp</label>
                      <input 
                        id="telefone"
                        type="tel" 
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                        placeholder="(00) 00000-0000" 
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-sans text-white placeholder-white/30 backdrop-blur-sm" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="servico" className="text-sm font-semibold text-white/80">Serviço Desejado</label>
                    <div className="relative">
                      <select 
                        id="servico"
                        value={formData.servico}
                        onChange={(e) => setFormData({...formData, servico: e.target.value})}
                        className="w-full h-14 bg-[#0F1D36] border border-white/10 rounded-xl px-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none font-sans text-white"
                      >
                        <option>Manutenção Preventiva</option>
                        <option>Manutenção Corretiva / Conserto</option>
                        <option>Instalação de Ar Condicionado</option>
                        <option>Higienização Completa</option>
                        <option>Projeto de Refrigeração Comercial</option>
                        <option>Outros Serviços de Refrigeração</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={20} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-semibold text-white/80">Detalhes sobre o problema ou ambiente</label>
                    <textarea 
                      id="mensagem"
                      rows={4} 
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      placeholder="Ex: Sala comercial de 40m², o ar parou de gelar após queda de energia..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none font-sans text-white placeholder-white/30 backdrop-blur-sm"
                    ></textarea>
                  </div>

                  {isFormValid ? (
                    <a 
                      href={generatedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full h-14 bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all shadow-[0_10px_20px_rgba(0,153,255,0.3)] hover:shadow-[0_15px_30px_rgba(0,153,255,0.5)] hover:-translate-y-1 group"
                    >
                      Solicitar Orçamento no WhatsApp
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <div 
                      className="w-full h-14 bg-white/5 border border-white/10 text-white/40 rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed transition-all"
                    >
                      Preencha Nome e Telefone
                      <Send size={18} className="opacity-50" />
                    </div>
                  )}
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white pt-24 pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-secondary font-display font-bold text-xl">
                    PR
                </div>
                <span className="font-display font-bold text-xl">Primo Refrigerações</span>
              </div>
              <p className="text-white/60 mb-6 font-light">Especialistas garantindo a instalação, manutenção e higienização para o seu conforto térmico e bem-estar, com a qualidade do Deivid.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Links Rápidos</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços Técnicos</a></li>
                <li><a href="#sobre" className="hover:text-accent transition-colors">Nossa Engenharia</a></li>
                <li><a href="#atendimento" className="hover:text-accent transition-colors">Área de Cobertura</a></li>
                <li><a href="#contato" className="hover:text-accent transition-colors">Fale Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Serviços Específicos</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-accent transition-colors">Instalação de Ar Condicionado</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Manutenção Preventiva</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Consertos e Correções</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Higienização e Limpeza</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Informações Legais</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
                <li>CNPJ: 00.000.000/0001-00</li>
                <li>Rua Ibrantina Pena 219<br/>Shopping Park, Uberlândia - MG</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Primo Refrigerações. Todos os direitos reservados.</p>
            <p>Por um ar mais puro e saudável.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

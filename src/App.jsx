import { useEffect, useState } from 'react'
import DigitalBusinessCard from './components/DigitalBusinessCard'
import logo from './assets/images/optimized/chasm-logo.webp'
import heroImg from './assets/images/optimized/chasm-hero-desktop.webp'
import heroMobileImg from './assets/images/optimized/chasm-hero-mobile.webp'
import pathwayImg from './assets/images/optimized/graduate-development-pathway.webp'
import stakeholderImg from './assets/images/optimized/stakeholder-collaboration.webp'

import { 
  GraduationCap, 
  Briefcase, 
  Compass, 
  Award, 
  Coins, 
  Users, 
  ChevronDown, 
  Mail, 
  ShieldAlert, 
  ArrowRight,
  Menu,
  X,
  Target,
  Eye,
  Sparkles
} from 'lucide-react'

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const desktopPreload = document.createElement('link')
    const mobilePreload = document.createElement('link')

    desktopPreload.rel = 'preload'
    desktopPreload.as = 'image'
    desktopPreload.href = heroImg
    desktopPreload.media = '(min-width: 768px)'
    desktopPreload.fetchPriority = 'high'

    mobilePreload.rel = 'preload'
    mobilePreload.as = 'image'
    mobilePreload.href = heroMobileImg
    mobilePreload.media = '(max-width: 767px)'
    mobilePreload.fetchPriority = 'high'

    document.head.append(desktopPreload, mobilePreload)

    return () => {
      desktopPreload.remove()
      mobilePreload.remove()
    }
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqItems = [
    {
      q: "Does Chasm Bridge Charity guarantee employment?",
      a: "No. Chasm Bridge Charity supports structured pathways toward opportunity. Employment outcomes depend on programme structure, partners, funding, graduate readiness, and available opportunities."
    },
    {
      q: "Are stipends guaranteed?",
      a: "No. Stipend support depends on funding availability and programme structure. Where funding allows, support may help reduce practical barriers such as transport, food, or participation costs."
    },
    {
      q: "Is the training accredited?",
      a: "Accreditation or MQA status must be confirmed before any public claim is made. Chasm Bridge Charity aims to work with credible and appropriately aligned partners where relevant."
    },
    {
      q: "Who can apply?",
      a: "Eligibility criteria must be confirmed by project leadership before recruitment opens. The current focus is unemployed graduates, especially mining-engineering graduates."
    },
    {
      q: "How do I contact recruitment?",
      a: "For recruitment-related communication, use Recruitment@chasmbridgecharity.com."
    }
  ]

  const workTowardCards = [
    {
      title: "Graduate Support",
      description: "Helping unemployed graduates facing financial, logistical, and employment barriers after completing their studies.",
      icon: GraduationCap,
      color: "border-brand-blue"
    },
    {
      title: "Workplace Readiness",
      description: "Supporting graduates as they prepare for the expectations, discipline, and realities of professional industry environments.",
      icon: Briefcase,
      color: "border-brand-gold"
    },
    {
      title: "Industry Exposure",
      description: "Working toward opportunities that give graduates relevant exposure and a stronger understanding of mining-sector work.",
      icon: Compass,
      color: "border-brand-green"
    },
    {
      title: "Professional Pathways",
      description: "Supporting longer-term development goals where applicable, including certification and professional-growth pathways.",
      icon: Award,
      color: "border-brand-blue-dark"
    },
    {
      title: "Resource Mobilisation",
      description: "Working to mobilise funding, mentorship, training opportunities, and support structures that make participation more accessible.",
      icon: Coins,
      color: "border-brand-gold-dark"
    },
    {
      title: "Advocacy and Partnerships",
      description: "Engaging stakeholders around stronger graduate-to-industry pathways and more inclusive opportunities.",
      icon: Users,
      color: "border-brand-green-dark"
    }
  ]

  const bridgeModelSteps = [
    {
      step: "01",
      title: "Identify",
      description: "Recognising graduates who need support and are ready to grow."
    },
    {
      step: "02",
      title: "Prepare",
      description: "Supporting development, confidence, readiness, and direction."
    },
    {
      step: "03",
      title: "Expose",
      description: "Working toward relevant industry exposure where opportunities allow."
    },
    {
      step: "04",
      title: "Progress",
      description: "Helping graduates move toward stronger professional and employment pathways."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 bg-brand-navy-dark/95 backdrop-blur-md border-b border-brand-navy-light/40 text-white transition-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4 min-h-[80px]">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Chasm Bridge Charity Logo" 
                className="h-16 sm:h-20 md:h-24 max-h-[80px] w-auto object-contain"
              />
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider bg-gradient-to-r from-white via-slate-100 to-brand-gold bg-clip-text text-transparent">
                CHASM BRIDGE
              </span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#challenge" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors focus-visible:outline-none">The Challenge</a>
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors focus-visible:outline-none">Why We Exist</a>
              <a href="#work" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors focus-visible:outline-none">What We Work Toward</a>
              <a href="#model" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors focus-visible:outline-none">The Bridge Model</a>
              <a href="#stakeholders" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors focus-visible:outline-none">Stakeholders</a>
              <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition-colors focus-visible:outline-none">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center">
              <a 
                href="mailto:Recruitment@chasmbridgecharity.com" 
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark px-5 h-11 rounded-lg text-sm font-semibold hover-lift cursor-pointer focus-visible:outline-none"
              >
                <Mail className="w-4 h-4" />
                Email Recruitment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white focus-visible:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-navy px-4 pt-2 pb-6 space-y-3 border-t border-brand-navy-light/40">
            <a 
              href="#challenge" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-brand-navy-light/40 focus-visible:outline-none"
            >
              The Challenge
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-brand-navy-light/40 focus-visible:outline-none"
            >
              Why We Exist
            </a>
            <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-brand-navy-light/40 focus-visible:outline-none"
            >
              What We Work Toward
            </a>
            <a 
              href="#model" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-brand-navy-light/40 focus-visible:outline-none"
            >
              The Bridge Model
            </a>
            <a 
              href="#stakeholders" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-brand-navy-light/40 focus-visible:outline-none"
            >
              Stakeholders
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-brand-navy-light/40 focus-visible:outline-none"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a 
                href="mailto:Recruitment@chasmbridgecharity.com" 
                className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark py-3 px-4 rounded-lg text-base font-semibold focus-visible:outline-none cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Email Recruitment
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section className="relative flex items-start md:items-center min-h-[85svh] md:min-h-[85vh] lg:min-h-[95vh] pt-28 pb-16 md:py-20 lg:py-32 text-white overflow-hidden bg-brand-navy-dark">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Responsive Hero Image with WebP and Eager Loading */}
            <picture>
              <source media="(min-width: 768px)" srcSet={heroImg} />
              <img 
                src={heroMobileImg} 
                alt="Graduates standing on bridge with industrial horizon" 
                className="w-full h-full object-cover object-top md:object-[32%_center]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            {/* Full image overlay: rgba(0, 20, 45, 0.15) */}
            <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0, 20, 45, 0.15)' }}></div>
            {/* Soft linear gradient overlay on the left text area for readability (stays under 0.30 opacity) */}
            <div className="absolute inset-0 z-10" style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 20, 45, 0.30) 0%, rgba(0, 20, 45, 0.10) 60%, transparent 100%)' }}></div>
            {/* Soft vertical transition overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-navy-dark/40 via-transparent to-brand-navy-dark/35"></div>
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
            {/* Narrow text panel: sits directly on image on mobile, and converts to a premium glass card on desktop/tablet */}
            <div className="w-full max-w-[480px] bg-brand-navy-dark/15 md:bg-brand-navy-dark/30 backdrop-blur-none md:backdrop-blur-xs border border-transparent md:border-white/5 p-0 md:p-8 rounded-none md:rounded-2xl shadow-none md:shadow-xl space-y-6 lg:space-y-8 text-left transition-smooth">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy-light/80 border border-slate-700/40 text-brand-gold text-xs font-semibold uppercase tracking-wider hover-lift">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Helping Graduates Get a Foot in the Door
              </div>
              
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(7,11,25,0.75)]">
                Helping Graduates Get <br />
                <span className="bg-gradient-to-r from-brand-gold via-amber-400 to-amber-300 bg-clip-text text-transparent">
                  a Foot in the Door
                </span>
              </h1>
              
              <p className="text-slate-100 font-display text-base sm:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(7,11,25,0.7)]">
                A graduate-development and social-impact initiative helping unemployed graduates bridge the gap between qualification and meaningful opportunity.
              </p>

              <div className="border-l-4 border-brand-green pl-4 space-y-3 text-slate-200 text-xs sm:text-sm font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(7,11,25,0.7)]">
                <p>
                  Every year, young people complete demanding qualifications with the hope of building a future. Yet for many graduates, the distance between academic achievement and industry opportunity remains difficult to cross.
                </p>
                <p className="font-semibold text-white">
                  Chasm Bridge Charity exists to help close that gap.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="mailto:Recruitment@chasmbridgecharity.com" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark px-5 py-3.5 rounded-xl font-bold hover-lift cursor-pointer shadow-lg shadow-brand-gold/15 focus-visible:outline-none text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email Recruitment
                </a>
                <a 
                  href="#challenge" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-navy-dark/45 hover:bg-white/10 backdrop-blur-xs border border-slate-500/40 hover:border-slate-300 text-white px-5 py-3.5 rounded-xl font-semibold transition-smooth focus-visible:outline-none text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </a>
              </div>
              
            </div>
          </div>

          {/* Subtle scroll cue at bottom center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
            <span className="text-xs uppercase tracking-widest font-semibold font-display">Scroll to explore</span>
            <a href="#challenge" aria-label="Scroll to challenge section" className="animate-bounce p-1 hover:text-brand-gold focus-visible:outline-none">
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* 2. The Challenge Section */}
        <section id="challenge" className="py-20 bg-slate-100 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">The Reality</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy-dark">
              The gap is not talent. It is access.
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
            
            <div className="mt-8 space-y-6 text-left max-w-3xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Many graduates leave university with the knowledge, discipline, and ambition to contribute. But entering the mining industry often requires more than a qualification.
              </p>
              <p>
                Graduates may still need practical exposure, workplace readiness, professional documentation, financial support, and access to the right industry entry points.
              </p>
              <p className="border-l-4 border-brand-gold pl-4 italic text-brand-navy font-medium bg-white py-3 pr-3 rounded-r-lg shadow-sm">
                For many, the first opportunity is the hardest one to reach.
              </p>
              <p>
                Chasm Bridge Charity was created to stand in that gap — helping graduates move from waiting for opportunity to preparing for it.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Why Chasm Bridge Exists Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Core Mandate</span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy-dark leading-tight">
                  A bridge between qualification and opportunity
                </h2>
                <div className="w-12 h-1 bg-brand-green rounded-full"></div>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  Chasm Bridge Charity supports unemployed graduates, especially mining-engineering graduates, who face barriers to entering the mining sector.
                </p>
              </div>

              <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
                <div className="text-slate-500 uppercase tracking-wider text-xs font-bold">Guiding Principle</div>
                <blockquote className="border-l-4 border-brand-blue pl-4 text-lg sm:text-xl font-display font-semibold text-brand-navy-dark leading-relaxed">
                  "A graduate’s potential should not be lost because they lack access, support, guidance, transport, exposure, or the first real opportunity to prove themselves."
                </blockquote>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our role is to help create structured pathways that make graduates more visible, more prepared, and better supported as they work toward meaningful industry participation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. What We Work Toward Section */}
        <section id="work" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Focus Areas</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy-dark">
                Support that looks beyond the CV
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                Chasm Bridge Charity focuses on the practical barriers that often stand between graduates and opportunity.
              </p>
              <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-2"></div>
            </div>

            {/* Focus cards grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workTowardCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={idx} 
                    className={`bg-white border-t-4 ${card.color} border border-slate-200/80 p-6 rounded-xl shadow-sm hover-lift`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-brand-navy-dark font-display">
                        {card.title}
                      </h3>
                      <div className="p-2 rounded-lg bg-slate-100/80 text-brand-navy-light">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* 5. Mission and Vision Section */}
        <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-green via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
              
              {/* Mission */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl sm:text-4xl text-white font-display font-extrabold tracking-tight">
                  Empowering graduates, building pathways
                </h2>
                <div className="w-12 h-1 bg-brand-green rounded-full"></div>
                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    Our mission is to empower unemployed graduates through training, resources, employment opportunities, and advocacy for systemic change in the mining industry.
                  </p>
                  <p>
                    We work toward a future where capable graduates are not left behind simply because they lack access to support, exposure, or the first step into industry.
                  </p>
                </div>
              </div>

              {/* Vision block */}
              <div className="lg:col-span-5 flex items-stretch">
                <div className="w-full bg-brand-navy-light border border-slate-700/50 p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/10 via-transparent to-transparent rounded-bl-full"></div>
                  
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
                      <Eye className="w-4 h-4" />
                      Our Vision
                    </div>
                    <p className="text-xl sm:text-2xl font-display font-bold text-white leading-relaxed">
                      A future where mining-engineering graduates have a fair opportunity to build successful careers, regardless of financial or social circumstances.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-slate-700/60 pt-4 flex items-center gap-3 text-slate-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                    <span>Working towards systemic industry accessibility</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. The Bridge Model Section */}
        <section id="model" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Framework</span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy-dark">
                  From qualified to prepared
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full"></div>
                
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    Chasm Bridge Charity is not only about identifying unemployed graduates. It is about helping build a pathway that can support their progression.
                  </p>
                  <p>
                    That pathway may include graduate identification, development support, practical exposure, stakeholder partnerships, professional-pathway support, and impact tracking.
                  </p>
                  <p className="text-sm border-l-2 border-slate-300 pl-3 italic text-slate-500 bg-slate-50 py-2">
                    Some forms of support depend on confirmed funding, partners, programme structure, and approval. The goal is not to promise outcomes, but to create a stronger bridge toward them.
                  </p>
                </div>

                {/* Timeline steps */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {bridgeModelSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="font-display font-extrabold text-2xl text-brand-gold leading-none">
                        {step.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-brand-navy-dark text-base font-display">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic/Image column */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative background outline */}
                  <div className="absolute -inset-2 rounded-2xl border-2 border-slate-100"></div>
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={pathwayImg} 
                      alt="Infographic depicting the graduate development pathway model" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                      <span className="text-xs text-slate-500 font-medium tracking-wide">
                        Graduate Development Pathway
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Working With Stakeholders Section */}
        <section id="stakeholders" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-blue/10 to-brand-green/10 blur-lg opacity-40"></div>
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={stakeholderImg} 
                      alt="Young graduate receiving guidance from an industry mentor" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                      <span className="text-xs text-slate-500 font-medium tracking-wide">
                        Collaboration: Graduates, Mentors, and Stakeholders
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark">Collective Action</span>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy-dark">
                  A shared responsibility
                </h2>
                <div className="w-12 h-1 bg-brand-gold rounded-full"></div>
                
                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    Graduate unemployment cannot be solved by graduates alone.
                  </p>
                  <p>
                    It requires collaboration between charities, mining companies, universities, funders, mentors, training partners, and industry stakeholders.
                  </p>
                  <p className="border-l-4 border-brand-green pl-4 font-semibold text-brand-navy-dark">
                    Chasm Bridge Charity exists to help create a more structured point of connection between graduates who are ready to grow and stakeholders who can help open the door.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. Chasm Bridge Charity and Filament Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm bg-slate-50/50 space-y-6 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">Synergy &amp; Context</span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy-dark">
                Social impact supported by practical industry exposure
              </h2>
              <div className="w-12 h-1 bg-brand-green mx-auto rounded-full"></div>
              
              <div className="space-y-4 text-left text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto pt-4">
                <p>
                  Chasm Bridge Charity and Filament are distinct but complementary.
                </p>
                <p>
                  Chasm Bridge Charity focuses on graduate support, social impact, advocacy, and access.
                </p>
                <p>
                  Filament represents a practical operational-excellence model that has been evidenced through a Wits-endorsed graduate-development initiative in a mining environment.
                </p>
                <p className="font-semibold text-brand-navy-dark text-center pt-2">
                  Together, the wider pathway connects graduate support with practical exposure, workplace learning, and mining-sector value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Responsible Expectations Section */}
        <section className="py-12 bg-amber-50/40 border-y border-amber-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex gap-4 items-start bg-white border border-amber-200/80 p-6 rounded-xl shadow-sm">
              <div className="p-2 bg-amber-50 rounded-lg text-brand-gold-dark shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-brand-navy-dark">
                  Clear expectations. Honest communication.
                </h3>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-2">
                  <p>
                    Chasm Bridge Charity supports pathways toward opportunity. It does not guarantee employment, stipends, placements, accreditation, or acceptance into a programme.
                  </p>
                  <p>
                    Any support offered depends on the approved programme structure, available funding, confirmed partners, eligibility criteria, and leadership approval.
                  </p>
                  <p className="font-semibold text-slate-800 text-xs">
                    This matters because trust must be built on clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy-dark">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full mt-2"></div>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-brand-navy text-sm sm:text-base focus-visible:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                      />
                    </button>
                    
                    {/* Collapsible Panel */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-slate-200' : 'max-h-0'}`}
                    >
                      <div className="p-5 text-slate-600 text-sm sm:text-base leading-relaxed bg-white">
                        {item.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* 11. Final CTA Section */}
        <section className="bg-brand-navy-dark text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Take the First Step
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              For recruitment-related communication, please use the official Chasm Bridge Charity recruitment email.
            </p>
            <div className="pt-4 flex flex-col items-center">
              <a 
                href="mailto:Recruitment@chasmbridgecharity.com" 
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy-dark px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover-lift cursor-pointer focus-visible:outline-none max-w-full text-center break-all sm:break-normal"
              >
                <Mail className="w-5 h-5" />
                Recruitment@chasmbridgecharity.com
              </a>
              <span className="text-xs text-slate-400 mt-3">
                Official Chasm Bridge Charity Recruitment Channel
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Chasm Bridge Charity Logo" 
                className="h-14 sm:h-16 w-auto object-contain brightness-95 opacity-80"
                loading="lazy"
                decoding="async"
              />
              <span className="font-display font-bold text-base text-slate-200 tracking-wider">
                CHASM BRIDGE CHARITY
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#challenge" className="hover:text-white transition-colors">The Challenge</a>
              <a href="#about" className="hover:text-white transition-colors">Why We Exist</a>
              <a href="#work" className="hover:text-white transition-colors">What We Work Toward</a>
              <a href="#model" className="hover:text-white transition-colors">The Bridge Model</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
            <div className="space-y-1 text-center sm:text-left">
              <p>
                &copy; 2026 Chasm Bridge Charity. All rights reserved.
              </p>
              <p className="text-[11px] text-slate-500/80">
                Website designed, developed &amp; hosted by{' '}
                <a 
                  href="https://www.embarkdigitals.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-brand-gold transition-colors duration-200 font-medium underline underline-offset-2"
                >
                  Embark Digitals
                </a>.
              </p>
            </div>
            <p className="flex flex-wrap items-center gap-1.5 justify-center sm:justify-start">
              <span>Recruitment Portal:</span>
              <a href="mailto:Recruitment@chasmbridgecharity.com" className="text-slate-400 hover:text-brand-gold transition-colors font-medium break-all sm:break-normal">
                Recruitment@chasmbridgecharity.com
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

function App() {
  const isDigitalCardRoute = window.location.pathname.startsWith('/cards/')

  if (isDigitalCardRoute) {
    return <DigitalBusinessCard />
  }

  return <HomePage />
}

export default App

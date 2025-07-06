import { createI18n } from 'vue-i18n'

const messages = {
  de: {
    nav: {
      how: 'Wie',
      price: 'Preise',
      contact: 'Kontakt',
      faq: 'FAQ',
      getStarted: 'Loslegen'
    },
    hero: {
      title: 'Websites zum Gewinnen. Unternehmen zum Skalieren.',
      subtitle:
        'Wir sind Ihr One-Stop-Shop für beste Websites, wunderschönes Markendesign und zuverlässiges Hosting. Gewinnen Sie mehr Kunden, heben Sie Ihre Marke ab und skalieren Sie Ihr Unternehmen - starten Sie jetzt!',
      seePackages: 'Pakete ansehen'
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      subtitle:
        'Wir sind Ihr One-Stop-Shop für hochwirksame Websites, wunderschönes Markendesign und zuverlässiges Hosting. Gewinnen Sie mehr Kunden, heben Sie Ihre Marke ab und skalieren Sie Ihr Unternehmen!',
      step1: {
        title: 'Strategie-Meeting',
        description:
          'Bei WebKarer beginnen wir unser Projekt mit einem Strategie-Meeting, bei dem die Basics des Projekts festgelegt werden, die alle wichtigen, einzigartigen Teile des Projekts entahlten, die das Endprodukt auszeichnen werden.'
      },
      step2: {
        title: 'Design & Entwicklung',
        description:
          'Mit allen Basics, die für einen geradlinigen Erfolg erforderlich sind, verwenden wir alle Ihre wichtigen, einzigartigen Teile, um eine Website zu erstellen, die der hellste Stern am Himmel der Websites sein wird.'
      },
      step3: {
        title: 'Launch',
        description:
          'Nach einigen möglichen Überarbeitungsrunden bleibt nur noch, Ihr Endprodukt zur Startrampe zu bringen und es in eine Welt voller wartender Kunden zu schießen.'
      },
      seePackages: 'Pakete ansehen'
    },
    packages: {
      title: 'Pakete',
      subtitle:
        'Einige Beispiele für Dienstleistungen, die wir anbieten. Individuelle Anfragen immer möglich per E-Mail und Anruf!',
      startingAt: 'Ab',
      eur: 'EUR',
      eurPerMonth: 'EUR/Monat',
      basic: {
        title: 'Basic',
        price: '500',
        features: [
          '5 hochkonvertierende Seiten',
          'Basis-Markendesign',
          'Website-Nutzungstraining',
          'Post-Launch Support'
        ]
      },
      premium: {
        title: 'Premium',
        price: '5000',
        features: [
          'Individuelle interaktive Webapp',
          'Individuelles Copywriting',
          'Vorlagen & Checklisten',
          'Erweitertes Markendesign'
        ]
      },
      hosting: {
        title: 'Hosting',
        price: '50',
        features: [
          'Zuverlässiges & sicheres Hosting',
          'Laufende Wartung',
          'Basis-SEO-Optimierung',
          'Analytics (in Arbeit)'
        ]
      },
      getStarted: 'Loslegen',
      bookCall: 'Anruf buchen'
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle:
        'Bereit, Ihre Online-Präsenz zu transformieren? Lassen Sie uns über Ihr Projekt sprechen und gemeinsam etwas Großartiges schaffen. Schicken Sie uns eine Nachricht und wir melden uns innerhalb von 24 Stunden bei Ihnen!',
      form: {
        name: 'Name oder Unternehmen',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail-Adresse',
        emailPlaceholder: 'email@beispiel.com',
        phone: 'Telefonnummer (optional)',
        phonePlaceholder: '+43 660 1234567',
        service: 'Dienstleistung',
        servicePlaceholder: 'Dienstleistung auswählen',
        services: {
          website: 'Website-Entwicklung',
          branding: 'Markendesign',
          hosting: 'Web-Hosting',
          consultation: 'Beratung',
          other: 'Andere'
        },
        budget: 'Budget-Bereich',
        budgetPlaceholder: 'Budget-Bereich auswählen',
        budgets: {
          under1000: 'Unter €1000',
          '1000-3000': '€1000 - €3000',
          '3000-5000': '€3000 - €5000',
          '5000-10000': '€5000 - €10000',
          over10000: 'Über €10000'
        },
        message: 'Projektdetails',
        messagePlaceholder:
          'Erzählen Sie uns kurz über Ihr Projekt und Ihre Ziele, spezifische Anforderungen können später besprochen werden...',
        sendMessage: 'Nachricht senden'
      },
      validation: {
        requiredFields:
          'Bitte füllen Sie alle Pflichtfelder aus (Name, E-Mail, Dienstleistungsinteresse und Projektdetails)'
      },
      email: {
        subject: 'Neue Projektanfrage - {service}',
        greeting: 'Hallo WebKarer Team,',
        interest:
          'Ich interessiere mich für Ihre Dienstleistungen und möchte über ein Projekt sprechen.',
        contactInfo: 'Kontaktinformationen:',
        projectDetails: 'Projektdetails:',
        serviceInterest: 'Dienstleistungsinteresse:',
        budgetRange: 'Budget-Bereich:',
        projectDescription: 'Projektbeschreibung:',
        notProvided: 'Nicht angegeben',
        notSpecified: 'Nicht angegeben',
        closing: 'Ich freue mich darauf, von Ihnen zu hören!',
        bestRegards: 'Mit freundlichen Grüßen,'
      }
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      questions: [
        {
          id: 1,
          text: 'Wie lange dauert die Entwicklung einer Website?',
          answer:
            'Die Entwicklungszeit hängt von der Komplexität Ihres Projekts ab. Einfache Websites können in 4-6 Wochen fertiggestellt werden, während komplexere Projekte 8-16 Wochen benötigen können.'
        },
        {
          id: 2,
          text: 'Wie funktioniert der Entwicklungs-Prozess?',
          answer:
            'Wir beginnen mit einem Strategie-Meeting, um Ihre Ziele zu verstehen, erstellen dann Konzepte und arbeiten eng mit Ihnen zusammen, bis Sie vollständig zufrieden sind.'
        },
        {
          id: 3,
          text: 'Können Sie bestehende Websites überarbeiten?',
          answer:
            'Absolut! Wir können bestehende Websites überarbeiten, um deren Performance, Design und Conversion-Raten zu verbessern.'
        },
        {
          id: 4,
          text: 'Bieten Sie auch Hosting-Dienstleistungen an?',
          answer:
            'Ja, wir bieten zuverlässiges und sicheres Hosting mit laufender Wartung und Basis-SEO-Optimierung an.'
        },
        {
          id: 5,
          text: 'Bieten Sie Support nach dem Launch?',
          answer:
            'Ja, alle unsere Pakete beinhalten Post-Launch Support, um sicherzustellen, dass Ihre Website optimal funktioniert.'
        }
      ]
    },
    testimonials: {
      leadMagnet: {
        title: 'Lead Magnet aktiviert',
        message:
          'Meine Website sah gut aus, aber sie brachte mir keine Kunden. WebKarer optimierte sie für Lead-Generierung, und jetzt laufe ich mit Projekten über!',
        name: 'Peter'
      },
      growth: {
        title: 'Wachstum auf Autopilot',
        message:
          'Dieses Team hat eine Website gebaut, die Ergebnisse liefert! Mein Unternehmen hat einen massiven Anstieg neuer Kunden erlebt.',
        name: 'Thomas'
      }
    },
    problemSolving: {
      title: 'Wir kennen den Wert Ihrer Arbeit, es ist Zeit, dass Ihre Kunden es auch tun',
      subtitle:
        'Sie stecken Ihr Herz und Ihre Seele in Ihr Unternehmen. Aber harte Arbeit kann Sie nur so weit bringen und eine schlechte Onlinepräsenz lässt Sie Überstunden machen, ohne Ergebnisse zu sehen. Es ist also Zeit, sich als Branchenführer abzuheben, mit einer Marke, die Ihre Kunden wirklich lieben, und einer Website, die genauso hart arbeitet wie Sie.'
    },
    clientShowcase: {
      title: 'Kunden-Showcase',
      subtitle: 'Einige Beispiele für das, was wir können',
      brief: 'Das Briefing',
      description:
        'Unser Kunde wollte eine Website, die ihre Produkte und Dienstleistungen auf eine Weise präsentiert, die ihre Zielgruppe anspricht.'
    },
    footer: {
      copyright: '© 2025 WebKarer. Alle Rechte vorbehalten.',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz'
    }
  },
  en: {
    nav: {
      how: 'How',
      price: 'Price',
      contact: 'Contact',
      faq: 'FAQ',
      getStarted: 'Get Started'
    },
    hero: {
      title: 'Websites Built to Win. Businesses Built to Scale.',
      subtitle:
        "We're your one-stop shop for high-impact websites, gorgeous brand design and reliable hosting. Attract more clients, elevate your brand, and scale your business - get started now!",
      seePackages: 'See Packages'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle:
        "We're your one-stop shop for high-impact websites, gorgeous brand design and reliable hosting. Attract more clients, elevate your brand, and scale your business!",
      step1: {
        title: 'Strategy Meeting',
        description:
          'At WebKarer we kickoff our project with a strategy meeting, where a outline of the project will be written down, containing integral, unique parts that the endproduct will feature'
      },
      step2: {
        title: 'Design & Development',
        description:
          'With all outlines setup for straightup success, we use all your integral, unique parts to craft a website that will become the brigthest star in an starlit sky of websites'
      },
      step3: {
        title: 'Launch',
        description:
          'After some possible rounds of revisions, the only thing left to do is to take your endproduct to the launchpad and shoot it into a world full of eagerly waiting customers'
      },
      seePackages: 'See Packages'
    },
    packages: {
      title: 'Packages',
      subtitle:
        'A few examples of services we are providing. Custom requests always possible via email and call!',
      startingAt: 'Starting at',
      eur: 'EUR',
      eurPerMonth: 'EUR/month',
      basic: {
        title: 'Basic',
        price: '500',
        features: [
          '5 high-converting pages',
          'Basic brand design',
          'Website usage training',
          'Post launch support'
        ]
      },
      premium: {
        title: 'Premium',
        price: '5000',
        features: [
          'Custom interactive webapp',
          'Custom copywriting',
          'Templates & checklists',
          'Advanced brand design'
        ]
      },
      hosting: {
        title: 'Hosting',
        price: '50',
        features: [
          'Reliable & secure hosting',
          'Ongoing maintenance',
          'Basic SEO optimization',
          'Analytics (work in progress)'
        ]
      },
      getStarted: 'Get Started',
      bookCall: 'Book a call'
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        "Ready to transform your online presence? Let's discuss your project and create something amazing together. Drop us a message and we'll get back to you within 24 hours!",
      form: {
        name: 'Full Name or Company',
        namePlaceholder: 'Your name',
        email: 'Email Address',
        emailPlaceholder: 'email@example.com',
        phone: 'Phone Number (optional)',
        phonePlaceholder: '+43 660 1234567',
        service: 'Service Interest',
        servicePlaceholder: 'Select a service',
        services: {
          website: 'Website Development',
          branding: 'Brand Design',
          hosting: 'Web Hosting',
          consultation: 'Consultation',
          other: 'Other'
        },
        budget: 'Budget Range',
        budgetPlaceholder: 'Select budget range',
        budgets: {
          under1000: 'Under €1000',
          '1000-3000': '€1000 - €3000',
          '3000-5000': '€3000 - €5000',
          '5000-10000': '€5000 - €10000',
          over10000: 'Over €10000'
        },
        message: 'Project Details',
        messagePlaceholder:
          'Tell us briefly about your project and goals, any specific requirements can be discussed afterwards...',
        sendMessage: 'Send Message'
      },
      validation: {
        requiredFields:
          'Please fill in all required fields (Name, Email, Service Interest, and Project Details)'
      },
      email: {
        subject: 'New Project Inquiry - {service}',
        greeting: 'Hello WebKarer Team,',
        interest: "I'm interested in your services and would like to discuss a project.",
        contactInfo: 'Contact Information:',
        projectDetails: 'Project Details:',
        serviceInterest: 'Service Interest:',
        budgetRange: 'Budget Range:',
        projectDescription: 'Project Description:',
        notProvided: 'Not provided',
        notSpecified: 'Not specified',
        closing: 'I look forward to hearing from you!',
        bestRegards: 'Best regards,'
      }
    },
    faq: {
      title: 'Frequently asked questions',
      questions: [
        {
          id: 1,
          text: 'How long does it take to develop a website?',
          answer:
            'Development time depends on the complexity of your project. Simple websites can be completed in 4-6 weeks, while more complex projects may take 8-16 weeks.'
        },
        {
          id: 2,
          text: 'How does the development process work?',
          answer:
            "We start with a strategy meeting to understand your goals, then create concepts and work closely with you until you're completely satisfied."
        },
        {
          id: 3,
          text: 'Can you redesign existing websites?',
          answer:
            'Absolutely! We can redesign existing websites to improve their performance, design, and conversion rates.'
        },
        {
          id: 4,
          text: 'Do you also offer hosting services?',
          answer:
            'Yes, we offer reliable and secure hosting with ongoing maintenance and basic SEO optimization.'
        },
        {
          id: 5,
          text: 'Do you offer support after launch?',
          answer:
            'Yes, all our packages include post-launch support to ensure your website functions optimally.'
        }
      ]
    },
    testimonials: {
      leadMagnet: {
        title: 'Lead Magnet Activated',
        message:
          "My website was pretty, but it wasn't converting visitors. WebKarer optimized it for lead capture, and now my sales funnel is overflowing!",
        name: 'Peter'
      },
      growth: {
        title: 'Growth on Autopilot',
        message:
          'This team built a website that gets results! My business has seen a surge in new customers.',
        name: 'Thomas'
      }
    },
    problemSolving: {
      title: "We know the value of your work, it's time your customers do so too",
      subtitle:
        "You put your heart and soul into your business. But hard work can only get you so far and a poor brand presence will have you working overtime and not seeing results. So it's time to set yourself apart as the industry leader with a kick-ass brand your customers genuinely love and a website that works as hard as you do."
    },
    clientShowcase: {
      title: 'Client Showcase',
      subtitle: 'A few examples of what we are able to do',
      brief: 'The Brief',
      description:
        'Our client wanted a website that would showcase their products and services in a way that would appeal to their target audience.'
    },
    footer: {
      copyright: '© 2025 WebKarer. All rights reserved.',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz'
    }
  }
}

// Get user's preferred language from localStorage or default to 'en'
const getInitialLocale = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('preferred-language') || import.meta.env.VITE_DEFAULT_LOCALE || 'en'
  }
  return import.meta.env.VITE_DEFAULT_LOCALE || 'en'
}

export default createI18n({
  locale: getInitialLocale(),
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE || 'en',
  legacy: false,
  globalInjection: true,
  messages
})

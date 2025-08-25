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
      title: 'Websites, die konvertieren. KI-Agenten, die automatisieren.',
      subtitle:
        'Wir bauen nicht nur Webseiten – wir liefern KI-Automatisierung. Von leistungsstarken Websites bis zu KI-Agenten, die Leads qualifizieren, Nachrichten beantworten, Prozesse ausführen und Daten synchronisieren. Mehr Umsatz, weniger manuelle Arbeit.',
      seePackages: 'Pakete ansehen'
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      subtitle:
        'Strategie, Umsetzung, Skalierung – für Websites und KI-Automatisierung. Wir verbinden klare Nutzerführung mit Agenten, die Routinearbeit übernehmen.',
      step1: {
        title: 'Strategie-Meeting',
        description:
          'Ziele klären, Kernprozesse identifizieren, Datenquellen erfassen. Wir definieren, wo Website-Conversion und KI-Agenten den größten Hebel haben.'
      },
      step2: {
        title: 'Design & Entwicklung',
        description:
          'UX, Copy und Komponenten für Ihre Website – plus Aufbau Ihrer KI-Agenten (z. B. Support-, Sales- oder Operations-Agent) inkl. Integrationen.'
      },
      step3: {
        title: 'Launch',
        description:
          'Go-Live, Monitoring und feingranulares Tuning. Wir messen Conversion, Lernfortschritt der Agenten und optimieren kontinuierlich.'
      },
      seePackages: 'Pakete ansehen'
    },
    packages: {
      title: 'Pakete',
      subtitle:
        'Von Conversion-starken Websites bis zu produktionsreifen KI-Agenten. Alle Pakete sind individuell erweiterbar – sprechen wir über Ihren Use Case!',
      startingAt: 'Ab',
      eur: 'EUR',
      eurPerMonth: 'EUR/Monat',
      basic: {
        title: 'Basic',
        price: '500',
        features: [
          '5 hochkonvertierende Seiten',
          'Klares Messaging & Basis-Branding',
          'Lead-Formulare & Tracking',
          'Optional: einfacher KI-FAQ-Bot'
        ]
      },
      premium: {
        title: 'Premium',
        price: '5000',
        features: [
          'Custom Webapp oder Funnel',
          'Individuelles Copywriting & UX',
          'API-Integrationen (CRM, E-Mail, DB)',
          '1 produktionsreifer KI-Agent (Sales/Support)'
        ]
      },
      hosting: {
        title: 'Betrieb & Betreuung',
        price: '50',
        features: [
          'Zuverlässiges & sicheres Hosting',
          'Laufende Wartung & Updates',
          'Analytics & Conversion-Tracking',
          'Agent Monitoring & Retraining-Loop'
        ]
      },
      getStarted: 'Loslegen',
      bookCall: 'Anruf buchen'
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle:
        'Bereit für mehr Umsatz und weniger Handarbeit? Schreiben Sie uns zu Website, KI-Automatisierung oder einem konkreten Agent-Use-Case – wir melden uns innerhalb von 24 Stunden.',
      form: {
        name: 'Name oder Unternehmen',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail-Adresse',
        emailPlaceholder: '',
        phone: 'Telefonnummer (optional)',
        phonePlaceholder: '+43 660 1234567',
        service: 'Interesse',
        servicePlaceholder: 'Dienstleistung auswählen',
        services: {
          website: 'Website-Entwicklung',
          branding: 'Markendesign',
          hosting: 'Web-Hosting',
          consultation: 'Beratung',
          aiAgents: 'KI-Agenten & Automatisierung',
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
          text: 'Was können Ihre KI-Agenten konkret übernehmen?',
          answer:
            'Lead-Qualifizierung, Terminvereinbarung, Support-Responses, Datenabgleich mit CRM/ERP, interne Prozessautomation (z. B. Bestellungen, Reporting) – immer mit klaren Regeln und Eskalationen.'
        },
        {
          id: 2,
          text: 'Wie integrieren sich die Agenten in meine Systeme?',
          answer:
            'Über APIs und Konnektoren (z. B. HubSpot, Pipedrive, Slack, E-Mail, Datenbanken). Wir richten sichere Verbindungen und Rollenrechte ein.'
        },
        {
          id: 3,
          text: 'Wie sieht die Timeline aus?',
          answer:
            'Website-Launch: 3–6 Wochen je nach Umfang. Ein produktionsreifer KI-Agent: meist 2–4 Wochen inkl. Tests und Monitoring.'
        },
        {
          id: 4,
          text: 'Was kostet ein KI-Agent?',
          answer:
            'Das hängt von Use Case, Integrationen und Volumen ab. Einstieg häufig im mittleren vierstelligen Bereich plus geringe Laufkosten für Betrieb/Monitoring.'
        },
        {
          id: 5,
          text: 'Wie stellen Sie Sicherheit und Datenschutz sicher?',
          answer:
            'Datensparsamkeit, Zugriff nur nach Bedarf, Protokollierung, optionale Datenmaskierung, EU-konforme Anbieter und getrennte Umgebungen (Dev/Staging/Prod).'
        }
      ]
    },
    testimonials: {
      leadMagnet: {
        title: 'KI-Agent übernimmt Lead-Qualifizierung',
        message:
          'Meine Website generierte Leads, aber ich verbrachte Stunden mit der Qualifizierung. Der KI-Agent übernimmt das jetzt automatisch und übergibt mir überprüfte Anfragen.',
        name: 'Peter'
      },
      growth: {
        title: 'Support-Agent reduziert Ticket-Volumen um 70%',
        message:
          'Unser Support war überlastet mit Routine-Fragen. Der KI-Agent beantwortet jetzt 70% aller Anfragen automatisch und leitet nur komplexe Fälle weiter.',
        name: 'Thomas'
      }
    },
    problemSolving: {
      title: 'Mehr Umsatz. Weniger Handarbeit. Website + KI-Agenten im Tandem.',
      subtitle:
        'Ihre Website zieht an und konvertiert – Ihre Agenten übernehmen Routine. Vom ersten Kontakt bis zur Übergabe an Sales oder Fulfillment. Transparente Metriken, kontinuierliches Tuning.'
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
      title: 'Websites that convert. AI agents that automate.',
      subtitle:
        "We don't just build websites – we ship automation. From high-converting sites to AI agents that qualify leads, answer inquiries, run processes and sync data. More revenue, less manual work.",
      seePackages: 'See Packages'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle:
        'Strategy, build, scale – for websites and AI automation. We combine clear UX with agents that take over repetitive work.',
      step1: {
        title: 'Strategy Meeting',
        description:
          'Clarify goals, map key processes, inventory data sources. We define where website conversion and AI agents have the biggest leverage.'
      },
      step2: {
        title: 'Design & Development',
        description:
          'UX, copy and components for your site – plus building your AI agents (e.g. support, sales or ops) including integrations.'
      },
      step3: {
        title: 'Launch',
        description:
          'Go-live, monitoring and tight tuning. We track conversion, agent performance and iterate continuously.'
      },
      seePackages: 'See Packages'
    },
    packages: {
      title: 'Packages',
      subtitle:
        'From conversion-focused websites to production-grade AI agents. All packages are expandable – let’s discuss your use case!',
      startingAt: 'Starting at',
      eur: 'EUR',
      eurPerMonth: 'EUR/month',
      basic: {
        title: 'Basic',
        price: '500',
        features: [
          '5 high-converting pages',
          'Clear messaging & basic branding',
          'Lead forms & tracking',
          'Optional: simple AI FAQ bot'
        ]
      },
      premium: {
        title: 'Premium',
        price: '5000',
        features: [
          'Custom webapp or funnel',
          'Custom copywriting & UX',
          'API integrations (CRM, email, DB)',
          '1 production-grade AI agent (sales/support)'
        ]
      },
      hosting: {
        title: 'Ops & Care',
        price: '50',
        features: [
          'Reliable & secure hosting',
          'Ongoing maintenance & updates',
          'Analytics & conversion tracking',
          'Agent monitoring & retraining loop'
        ]
      },
      getStarted: 'Get Started',
      bookCall: 'Book a call'
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        "Ready for more revenue with less manual work? Message us about your website, AI automation, or a specific agent use case – we'll reply within 24 hours.",
      form: {
        name: 'Full Name or Company',
        namePlaceholder: 'Your name',
        email: 'Email Address',
        emailPlaceholder: '',
        phone: 'Phone Number (optional)',
        phonePlaceholder: '+43 660 1234567',
        service: 'Interest',
        servicePlaceholder: 'Select a service',
        services: {
          website: 'Website Development',
          branding: 'Brand Design',
          hosting: 'Web Hosting',
          consultation: 'Consultation',
          aiAgents: 'AI Agents & Automation',
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
          text: 'What can your AI agents handle?',
          answer:
            'Lead qualification, scheduling, support responses, syncing with CRM/ERP, and internal process automation (orders, reporting) – with rules and escalation paths.'
        },
        {
          id: 2,
          text: 'How do the agents integrate with my stack?',
          answer:
            'Via APIs and connectors (e.g., HubSpot, Pipedrive, Slack, email, databases). We set up secure connections and role-based access.'
        },
        {
          id: 3,
          text: 'What does the typical timeline look like?',
          answer:
            'Site launch: 3–6 weeks depending on scope. One production-grade AI agent: usually 2–4 weeks including testing and monitoring.'
        },
        {
          id: 4,
          text: 'How much does an AI agent cost?',
          answer:
            'Depends on use case, integrations and volume. Many engagements start in the mid four-figure range plus low ongoing ops/monitoring costs.'
        },
        {
          id: 5,
          text: 'How do you ensure security and privacy?',
          answer:
            'Data minimization, least-privilege access, auditing, optional data masking, EU-compliant providers and separate environments (dev/staging/prod).'
        }
      ]
    },
    testimonials: {
      leadMagnet: {
        title: 'AI Agent Takes Over Lead Qualification',
        message:
          'My website generated leads, but I spent hours qualifying them. The AI agent now handles this automatically and only hands me qualified contacts.',
        name: 'Peter'
      },
      growth: {
        title: 'Support Agent Reduces Ticket Volume by 70%',
        message:
          'Our support was overwhelmed with routine questions. The AI agent now answers 70% of all inquiries automatically and only escalates complex cases.',
        name: 'Thomas'
      }
    },
    problemSolving: {
      title: 'More revenue. Less manual work. Website + AI agents, together.',
      subtitle:
        'Your website attracts and converts – your agents take over the routine. From first touch to handoff to sales or fulfillment. Transparent metrics and continuous tuning.'
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

export function createI18nInstance(locale?: string) {
  return createI18n({
    locale: locale || getInitialLocale(),
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE || 'en',
    legacy: false,
    globalInjection: true,
    messages
  })
}

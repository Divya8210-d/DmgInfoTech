import ServiceBlock from "./Services/servicescomp";

type CardItem = {
  title: string;
  description: string;
};

type ServiceItem = {
  sectionNumber: string;
  title: string;
  image: string;
  cards: CardItem[];
};

export const services: ServiceItem[] = [
  {
    sectionNumber: "01",
    title: "Business Systems & ERP Solutions",
    image: "/images/erp.jpg",
    cards: [
      {
        title: "Microsoft Dynamics Implementation",
        description:
          "Seamless setup and deployment of Microsoft Dynamics solutions tailored to your business processes.",
      },
      {
        title: "LS Retail Solutions",
        description:
          "Integrated retail management systems designed to improve operations, POS performance, and customer experience.",
      },
      {
        title: "ERP Upgrade Services",
        description:
          "Smooth system upgrades that enhance performance, features, and long-term scalability.",
      },
      {
        title: "Support & Troubleshooting",
        description:
          "Reliable technical support to resolve issues quickly and keep your systems running efficiently.",
      },
    ],
  },

  {
    sectionNumber: "02",
    title: "Infrastructure & Cloud Services",
    image: "/images/infrastructure.jpg",
    cards: [
      {
        title: "IT Infrastructure",
        description:
          "Robust infrastructure solutions built for stability, performance, and business continuity.",
      },
      {
        title: "Cloud Services",
        description:
          "Scalable cloud environments that improve flexibility, collaboration, and data accessibility.",
      },
      {
        title: "Backup & Recovery",
        description:
          "Secure backup systems and fast recovery solutions to protect critical business data.",
      },
      {
        title: "IT Support",
        description:
          "Ongoing monitoring and technical assistance to ensure smooth day-to-day operations.",
      },
    ],
  },

  {
    sectionNumber: "03",
    title: "Security & Protection",
    image: "/images/security.jpg",
    cards: [
      {
        title: "Network Security",
        description:
          "Advanced security solutions to safeguard networks from cyber threats and vulnerabilities.",
      },
      {
        title: "Endpoint Protection",
        description:
          "Comprehensive endpoint security to defend devices across your organization.",
      },
      {
        title: "Firewall & Monitoring",
        description:
          "Real-time monitoring and firewall management to prevent unauthorized access.",
      },
      {
        title: "Risk Assessment",
        description:
          "Security audits and assessments to identify and mitigate potential risks.",
      },
    ],
  },

  {
    sectionNumber: "04",
    title: "Digital & Innovation Solutions",
    image: "/images/digital.jpg",
    cards: [
      {
        title: "Custom Software Development",
        description:
          "Tailored software solutions designed to meet your business objectives.",
      },
      {
        title: "Cloud Application Development",
        description:
          "Modern scalable applications built for cloud-native environments.",
      },
      {
        title: "Automation Solutions",
        description:
          "Workflow automation systems to increase efficiency and reduce manual processes.",
      },
      {
        title: "UI/UX & Experience Design",
        description:
          "User-focused digital experiences that improve engagement and usability.",
      },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-20 px-6" id="services">
      <div className="max-w-7xl mx-auto grid grid-rows-2 gap-16">

        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            OUR SERVICES
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology Solutions That Work
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg leading-relaxed">
            From infrastructure and security to digital development, we deliver
            technology services that solve real business challenges.
          </p>
        </div>

        {/* BOTTOM CARDS */}
        <div className="flex flex-wrap justify-center gap-8">

          {/* CARD 1 */}
          <div className="relative bg-[#86d4c8] rounded-3xl p-8 w-full sm:w-[45%] lg:w-[22%] min-h-[320px]">
            <div className="absolute -top-5 left-6 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold shadow">
              ↗
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Business Systems & ERP Solutions
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              End-to-end ERP implementation, upgrades, and support designed to
              streamline operations and improve business efficiency.
            </p>

            <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              LEARN MORE →
            </button>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-[#86d4c8] rounded-3xl p-8 w-full sm:w-[45%] lg:w-[22%] min-h-[320px]">
            <div className="absolute -top-5 left-6 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-600 font-bold shadow">
              ↗
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Network Security & Protection
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Advanced security services focused on protecting your systems,
              data, and digital operations from modern threats.
            </p>

            <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              LEARN MORE →
            </button>
          </div>

          {/* CARD 3 */}
          <div className="relative bg-[#86d4c8] rounded-3xl p-8 w-full sm:w-[45%] lg:w-[22%] min-h-[320px]">
            <div className="absolute -top-5 left-6 w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold shadow">
              ↗
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Infrastructure & Cloud Services
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Reliable infrastructure and cloud solutions that ensure
              performance, scalability, and seamless business continuity.
            </p>

            <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              LEARN MORE →
            </button>
          </div>

          {/* CARD 4 */}
          <div className="relative bg-[#86d4c8] rounded-3xl p-8 w-full sm:w-[45%] lg:w-[22%] min-h-[320px]">
            <div className="absolute -top-5 left-6 w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-600 font-bold shadow">
              ↗
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Digital & Innovation Solutions
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Modern digital solutions that enhance user experience, automate
              workflows, and drive long-term business growth.
            </p>

            <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              LEARN MORE →
            </button>
          </div>

        </div>
      </div>
      {services.map((service, idx) => (
        <ServiceBlock
          key={idx}
          sectionNumber={service.sectionNumber}
          title={service.title}
          image={service.image}
          cards={service.cards}
          reverse={idx % 2 !== 0}   // 🔥 automatic alternating layout
        />
      ))}
    </section>
  );
};

export default ServicesSection;

import Image from "next/image";

type CardItem = {
  title: string;
  description: string;
  icon: string; // 👈 Added icon field
};

type ServiceBlockProps = {
  sectionNumber: string;
  title: string;
  image: string;
  cards: CardItem[];
  reverse?: boolean;
};

const ServiceBlock = ({
  sectionNumber,
  title,
  image,
  cards,
  reverse = false,
}: ServiceBlockProps) => {
  return (
    <section className="w-full bg-[#f3f3f3] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 ${
            reverse ? "text-right" : "text-left"
          }`}
        >
          <span className="text-[#18c5a9] mr-3">{sectionNumber}</span>
          {title}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Image */}
          <div
            className={`relative w-full rounded-3xl overflow-hidden shadow-lg 
              h-[280px] sm:h-[380px] lg:h-auto
              ${reverse ? "lg:order-2" : ""}
            `}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ${
              reverse ? "lg:order-1" : ""
            }`}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition group"
              >
                {/* ICON IMAGE */}
                <div className="w-10 h-10 bg-[#c8f1ea] rounded-full flex items-center justify-center mb-4">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={18}
                    height={18}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceBlock;
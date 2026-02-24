import Image from "next/image";

type CardItem = {
  title: string;
  description: string;
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
    <section className="w-full bg-[#f3f3f3] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 mb-12 ${reverse ? "text-right" : "text-left"
            }`}
        >
          <span className="text-[#18c5a9] mr-3">{sectionNumber}</span>
          {title}
        </h2>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${reverse ? "lg:flex-row-reverse" : ""
            }`}
        >
          {/* Image */}
          <div className={`relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg ${reverse ? "order-2 lg:order-2" : ""}`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${reverse ? "order-1" : ""}`}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-[#c8f1ea] rounded-full flex items-center justify-center text-[#18c5a9] mb-4">
                  ↗
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
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
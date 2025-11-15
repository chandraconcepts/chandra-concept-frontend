import { Lightbulb, PencilRuler, Printer, Truck, PrinterIcon, Droplet, Ruler } from "lucide-react";

const OrderProcess = () => {
  const steps = [
    {
      icon: <i className="fas fa-lightbulb text-4xl text-red-800"></i>,
      title: "Concept",
      desc: "Share your ideas and requirements with our design team",
    },
    {
      icon: <i className="fas fa-pencil-ruler text-4xl text-red-800"></i>,
      title: "Design",
      desc: "We create custom designs based on your specifications",
    },
    {
      icon: <i className="fas fa-print text-4xl text-red-800"></i>,
      title: "Production",
      desc: "Your materials are printed using premium techniques",
    },
    {
      icon: <i className="fas fa-truck text-4xl text-red-800"></i>,
      title: "Delivery",
      desc: "Carefully packaged and shipped to your location",
    },
  ];

  const tech = [
    {
      icon: <i className="fas fa-print w-14 h-14 text-red-800 text-5xl"></i>,
      title: "Digital Presses",
      desc: "State-of-the-art digital presses for high-quality, fast, and accurate printing.",
    },
    {
      icon: <i className="fas fa-tint w-14 h-14 text-red-800 text-5xl"></i>,
      title: "UV Printing",
      desc: "Eco-friendly UV technology that dries instantly and produces vibrant results.",
    },
    {
      icon: <i className="fas fa-ruler-combined w-14 h-14 text-red-800 text-5xl"></i>,
      title: "Precision Cutting",
      desc: "Computer-controlled systems for perfect die-cutting and finishing.",
    },
  ];


  return (
    <>
      {/* ============================ */}
      {/*         ORDER PROCESS        */}
      {/* ============================ */}
      <section id="process" className="py-20 px-[5%] bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#2b2101] animate-fadeInUp">
            Our Order Process
            <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Simple steps from concept to delivery of your printed materials
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-14 md:gap-0">
          <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-[3px] bg-yellow-600 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center flex-1 group">
              <div
                className="
                w-20 h-20 mx-auto mb-5 rounded-full 
                bg-white border-4 border-yellow-400
                flex items-center justify-center
                text-yellow-700
                transition-all duration-300
                group-hover:bg-yellow-300 group-hover:text-white group-hover:scale-110
              "
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-red-800 mb-2">{step.title}</h3>

              <p className="text-gray-600 text-sm max-w-[200px] mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ */}
      {/*     TECHNOLOGY SECTION       */}
      {/* ============================ */}
      <section
        id="technology"
        className="py-20 px-[5%] bg-gradient-to-br from-[#f5f5f5] to-[#e9e9e9] text-gray-700"
      >
        <div className="text-center mb-14">
          <h2 className="section-title text-5xl font-bold text-[#1b1603] opacity-0 animate-fadeInUp">
            Cutting-Edge Printing Technology
            <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            We use the latest printing technology to deliver superior results
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {tech.map((item, index) => (
            <div
              key={index}
              className="
              bg-white backdrop-blur-md border border-yellow-400
              rounded-xl p-8 text-center
              transition-all duration-300
              hover:-translate-y-3 hover:bg-white/70
            "
            >
              <div className="mb-6 flex justify-center text-yellow-700">
                {item.icon}
              </div>

              <h3 className="text-2xl text-black font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OrderProcess;

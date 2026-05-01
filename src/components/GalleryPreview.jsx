import { motion } from "framer-motion";

export default function GalleryPreview() {
  const images = [
        {src: "/images/image-7.jpg", span: "col-span-2 sm:col-span-1" },
    { src: "/images/image-6.jpg", span: "sm:col-span-2 sm:row-span-2" }, // feature
    { src: "/images/image-2.jpg", span: "" },
    { src: "/images/image-3.jpg", span: "sm:row-span-2" }, // tall
    { src: "/images/image-4.jpg", span: "" },
    { src: "/images/image-5.jpg", span: "sm:col-span-2" }, // wide
    { src: "/images/image-1.jpg", span: "" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          School <span className="text-red-600">Gallery</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm sm:text-base">
          Moments from classrooms, events, and campus life
        </p>
      </div>

      {/* Grid */}
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-2 sm:grid-cols-4
          auto-rows-[140px] sm:auto-rows-[180px]
          gap-3 sm:gap-4
        "
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            className={`
              relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md group
              col-span-1 row-span-1
              ${item.span}
            `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
          >
            {/* Image */}
            <img
              src={item.src}
              alt="school gallery"
              className="
                w-full h-full object-cover
                transition duration-700
                group-hover:scale-110
                group-hover:brightness-110
              "
            />

            {/* Overlay */}
            <div className="
              absolute inset-0
              bg-black/0 group-hover:bg-black/10
              transition duration-500
            " />

            {/* Touch feedback */}
            <div className="
              absolute inset-0 opacity-0
              group-active:opacity-20
              bg-red-500 transition
            " />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
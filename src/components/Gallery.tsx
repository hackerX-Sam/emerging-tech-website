import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const images = [
    {
      url: 'https://ik.imagekit.io/logicsync/sih222.jpg?updatedAt=1759836292864',
      caption: 'SIH(smart india hackathon) 2025 internals - Team collaboration',
      category: 'Events',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-10-07%20at%2016.40.04_efbeb055.jpg?updatedAt=1759835587076',
      caption: 'SIH internals - The Team',
      category: 'Hackathon',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-10-07%20at%2016.40.46_0b6af5dc.jpg?updatedAt=1759835587072',
      caption: 'Winners',
      category: 'SIH internals 2025',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-10-07%20at%2016.40.42_dfe11458.jpg?updatedAt=1759835587174',
      caption: '1st position',
      category: 'SIH internals 2025',
    },
    {
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Code Rangers Community Meetup',
      category: 'Events',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-10-07%20at%2016.40.47_3c50c729.jpg?updatedAt=1759835587304',
      caption: '3rd position',
      category: 'SIH internals 2025',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/nk.jpg?updatedAt=1759836869416',
      caption: 'Code Nakshatra 2k25',
      category: 'Hackathon',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/nakshatra.jpg?updatedAt=1759836200474',
      caption: 'Code Nakshatra Organising Team',
      category: 'Hackathon',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/code%20nakshatra.jpg?updatedAt=1759836200406',
      caption: 'Team',
      category: 'Hackathon',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/the%20trio%202.jpg?updatedAt=1759836200462',
      caption: 'The TRIO',
      category: 'Leads-Code Nakshatra',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/hackloop.jpg?updatedAt=1759836199752',
      caption: 'Hackloop sponsored by Code Rangers',
      category: 'Event Sponsors',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/spnsr.jpg?updatedAt=1759836200123',
      caption: 'TechInertia Sponsored by Code Rangers',
      category: 'Event Sponsors ',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/spndor.jpg?updatedAt=1759836199687',
      caption: 'HackCentrix Sponsored by Code Rangers',
      category: 'Event Sponsors',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/banner.jpg?updatedAt=1759836200452',
      caption: 'Code Nakshatra Banner Prep',
      category: 'Hackathon preparation',
    },
    {
      url: 'https://ik.imagekit.io/logicsync/hosted.jpg?updatedAt=1759836200294',
      caption: 'Code Rangers Sponsorship session at IILM',
      category: 'Sponsorship session',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto cursive-text">
            Capturing moments from our journey of innovation and collaboration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>

              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 z-20"
              >
                <span className="inline-block px-3 py-1 bg-cyan-500/30 backdrop-blur-sm border border-cyan-500/50 rounded-full text-cyan-300 text-xs font-semibold mb-2">
                  {image.category}
                </span>
                <h3 className="text-white font-semibold text-lg">
                  {image.caption}
                </h3>
              </motion.div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-xl transition-all z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const images = [
    {
      url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Hackathon 2024 - Team Collaboration',
      category: 'Events',
    },
    {
      url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'AI Workshop - Hands-on Learning',
      category: 'Workshops',
    },
    {
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Team Brainstorming Session',
      category: 'Team',
    },
    {
      url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Blockchain Development Workshop',
      category: 'Workshops',
    },
    {
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Code Rangers Community Meetup',
      category: 'Events',
    },
    {
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Tech Talk Series',
      category: 'Events',
    },
    {
      url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Project Presentation Day',
      category: 'Projects',
    },
    {
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Cybersecurity CTF Competition',
      category: 'Events',
    },
    {
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Team Building Activities',
      category: 'Team',
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
          <p className="text-gray-400 text-lg max-w-3xl mx-auto cursive-text">
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

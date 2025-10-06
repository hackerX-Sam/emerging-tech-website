import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const workshops = [
    {
      title: 'Cybersecurity Workshop',
      description: 'Learn ethical hacking, penetration testing, and network security fundamentals. Master the tools and techniques used by security professionals.',
      location: 'To be announced',
      gradient: 'from-red-500 to-pink-600',
    },
    {
      title: 'AI & ML Workshop',
      description: 'Hands-on workshop covering neural networks, deep learning, and practical machine learning implementations with real-world projects.',
      location: 'To be announced',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Blockchain Workshop',
      description: 'Dive into blockchain technology, smart contract development, and decentralized application building on various blockchain platforms.',
      location: 'To be announced',
      gradient: 'from-violet-500 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="events" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-600/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Upcoming Workshops
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto cursive-text">
            Join us for exciting learning opportunities and networking events
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-violet-600/10 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Calendar className="text-cyan-400" size={20} />
            <span className="text-cyan-300 text-sm font-medium">Workshop dates will be declared soon</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${workshop.gradient} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500 blur-2xl`}></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <div className={`w-full h-2 bg-gradient-to-r ${workshop.gradient} rounded-t-lg mb-6`}></div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {workshop.title}
                </h3>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {workshop.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={18} className="text-cyan-400" />
                    <span className="text-sm">Date: To be announced</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin size={18} className="text-cyan-400" />
                    <span className="text-sm">{workshop.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const teamMembers = [
    {
      name: 'Alex Johnson',
      designation: 'Department Lead',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Sarah Chen',
      designation: 'Technical Lead',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      name: 'Michael Rodriguez',
      designation: 'Operations Lead',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-pink-500 to-red-600',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="team" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The brilliant minds behind Code Rangers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500 blur-2xl`}></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300">
                <div className={`w-full h-2 bg-gradient-to-r ${member.gradient}`}></div>

                <div className="p-8">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-50 rounded-full blur-xl`}></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {member.name}
                  </h3>

                  <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} font-semibold text-center mb-6`}>
                    {member.designation}
                  </p>

                  <div className="flex justify-center space-x-3 pt-4 border-t border-gray-700/50">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-9 h-9 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <Mail size={18} />
                    </motion.a>
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

export default Team;

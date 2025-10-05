import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Link2, Cloud, Target, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const focusDomains = [
    {
      icon: Brain,
      name: 'AI & ML',
      description: 'Machine Learning, Deep Learning, and Intelligent Systems',
      color: 'from-cyan-400 to-blue-500',
      available: true,
    },
    {
      icon: Shield,
      name: 'Cybersecurity',
      description: 'Ethical Hacking, Network Security, and Digital Forensics',
      color: 'from-red-400 to-pink-500',
      available: true,
    },
    {
      icon: Link2,
      name: 'Blockchain',
      description: 'Decentralized Systems, Smart Contracts, and DApps',
      color: 'from-violet-400 to-purple-500',
      available: true,
    },
    {
      icon: Link2,
      name: 'Web3',
      description: 'Decentralized Web, NFTs, and Crypto Technologies',
      color: 'from-green-400 to-emerald-500',
      available: true,
    },
    {
      icon: Cloud,
      name: 'Cloud Computing',
      description: 'AWS, Azure, and Scalable Infrastructure',
      color: 'from-orange-400 to-amber-500',
      available: false,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Our Department
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The Emerging Tech Department is the innovation hub of Code Rangers Tech Club
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  To empower students with cutting-edge technological knowledge and hands-on experience in emerging fields.
                  We bridge the gap between academic learning and industry requirements, fostering innovation, collaboration,
                  and a culture of continuous learning.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">What We Do</h3>
                <p className="text-gray-400 leading-relaxed">
                  We organize workshops, hackathons, and collaborative projects across various domains. Our members work on
                  real-world problems, participate in competitions, and build innovative solutions that make an impact.
                  We create a community where passionate tech enthusiasts can learn, grow, and innovate together.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Focus Domains
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${domain.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity blur-xl`}></div>

                  <div className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all h-full ${
                    !domain.available ? 'opacity-60' : ''
                  }`}>
                    {!domain.available && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Coming Soon
                      </div>
                    )}

                    <div className={`w-14 h-14 bg-gradient-to-r ${domain.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">{domain.name}</h4>
                    <p className="text-gray-400 text-sm">{domain.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

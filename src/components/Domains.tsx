import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Shield, Link2, Cpu, Database, Network, Lock, Coins } from 'lucide-react';

const Domains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const domains = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Exploring neural networks, deep learning algorithms, computer vision, natural language processing, and intelligent automation systems.',
      gradient: 'from-cyan-500 to-blue-600',
      features: ['Neural Networks', 'Computer Vision', 'NLP', 'Predictive Analytics'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Mastering ethical hacking, penetration testing, network security, cryptography, and digital forensics to protect digital assets.',
      gradient: 'from-red-500 to-pink-600',
      features: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Penetration Testing'],
    },
    {
      icon: Link2,
      title: 'Blockchain Technology',
      description: 'Building decentralized applications, smart contracts, and exploring consensus mechanisms on various blockchain platforms.',
      gradient: 'from-violet-500 to-purple-600',
      features: ['Smart Contracts', 'DApps', 'Consensus Protocols', 'Solidity'],
    },
    {
      icon: Coins,
      title: 'Web3 & DeFi',
      description: 'Diving into decentralized finance, NFTs, DAOs, and the future of the decentralized internet and digital ownership.',
      gradient: 'from-green-500 to-emerald-600',
      features: ['DeFi Protocols', 'NFTs', 'DAOs', 'Token Economics'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="domains" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technology Domains
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto cursive-text">
            Explore our specialized domains where innovation meets expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${domain.gradient} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500 blur-2xl`}></div>

                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-r ${domain.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{domain.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {domain.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {domain.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Icon className="w-full h-full text-cyan-400" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-gray-900/80 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Network className="text-white" size={24} />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-white">Cloud Computing</h4>
                <p className="text-gray-400 text-sm">Coming Soon - AWS, Azure & More</p>
              </div>
              <div className="ml-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg text-white font-semibold text-sm">
                Coming Soon
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Domains;

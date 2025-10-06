import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Users } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'AI & ML', 'Blockchain', 'Cybersecurity', 'Web3'];

  const projects = [
    {
      title: 'Smart Traffic Management',
      domain: 'AI & ML',
      description: 'AI-powered traffic prediction and optimization system using computer vision and deep learning.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'React'],
      github: '#',
      demo: '#',
      contributors: 5,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'SecureVault',
      domain: 'Cybersecurity',
      description: 'End-to-end encrypted file storage with advanced security features and biometric authentication.',
      techStack: ['Node.js', 'AES-256', 'MongoDB', 'React'],
      github: '#',
      demo: '#',
      contributors: 4,
      gradient: 'from-red-500 to-pink-600',
    },
    {
      title: 'DeFi Lending Platform',
      domain: 'Blockchain',
      description: 'Decentralized lending protocol with automated market making and yield farming capabilities.',
      techStack: ['Solidity', 'Hardhat', 'Web3.js', 'Next.js'],
      github: '#',
      demo: '#',
      contributors: 6,
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      title: 'NFT Marketplace',
      domain: 'Web3',
      description: 'Peer-to-peer NFT marketplace with lazy minting, royalties, and IPFS storage integration.',
      techStack: ['Solidity', 'IPFS', 'Ethers.js', 'React'],
      github: '#',
      demo: '#',
      contributors: 5,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Sentiment Analysis Bot',
      domain: 'AI & ML',
      description: 'Real-time social media sentiment analyzer using NLP and transformer models.',
      techStack: ['Python', 'BERT', 'FastAPI', 'PostgreSQL'],
      github: '#',
      demo: '#',
      contributors: 3,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Blockchain Voting System',
      domain: 'Blockchain',
      description: 'Transparent and tamper-proof voting system built on Ethereum blockchain.',
      techStack: ['Solidity', 'Truffle', 'Web3.js', 'Vue.js'],
      github: '#',
      demo: '#',
      contributors: 4,
      gradient: 'from-violet-500 to-purple-600',
    },
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((project) => project.domain === selectedFilter);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-violet-600/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto cursive-text">
            Innovative solutions built by our talented team members
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              layout
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500 blur-xl`}></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-t-lg mb-4`}></div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold mb-3">
                  {project.domain}
                </span>

                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-700/50 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Users size={16} />
                    <span>{project.contributors} contributors</span>
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
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

export default Projects;

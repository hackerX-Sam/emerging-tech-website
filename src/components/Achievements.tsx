import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Star, Target, Handshake, Zap } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Trophy,
      title: 'National Hackathon Winner',
      description: 'First place at TechFest 2024 with our AI-powered traffic management system',
      year: '2024',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Award,
      title: 'Best Innovation Award',
      description: 'Recognized for blockchain-based voting system at Innovation Summit',
      year: '2024',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Star,
      title: 'Top 10 in Smart India Hackathon',
      description: 'Secured position in top 10 teams with our cybersecurity solution',
      year: '2023',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      icon: Target,
      title: 'MLH League Champions',
      description: 'Won multiple hackathons in Major League Hacking season',
      year: '2023',
      gradient: 'from-pink-400 to-red-500',
    },
    {
      icon: Handshake,
      title: 'Industry Partnership',
      description: 'Collaboration with leading tech companies for student training programs',
      year: '2024',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Best Tech Community',
      description: 'Awarded as the most active and innovative tech club in the region',
      year: '2024',
      gradient: 'from-indigo-400 to-cyan-500',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '200+', label: 'Active Members' },
    { value: '30+', label: 'Workshops Conducted' },
    { value: '15+', label: 'Hackathons Won' },
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
    <section id="achievements" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-cyan-500/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto cursive-text">
            Celebrating our milestones and success stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500 blur-xl`}></div>

                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-r ${achievement.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>

                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

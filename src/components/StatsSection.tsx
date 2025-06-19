
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import CountUpAnimation from './CountUpAnimation';

const StatsSection = () => {
  const statsData = [
    { name: 'Mountains', value: 400, color: '#3B82F6' },
    { name: 'Oceans', value: 300, color: '#06B6D4' },
    { name: 'Forests', value: 250, color: '#10B981' },
    { name: 'Deserts', value: 180, color: '#F59E0B' },
  ];

  const lineData = [
    { month: 'Jan', discoveries: 20 },
    { month: 'Feb', discoveries: 35 },
    { month: 'Mar', discoveries: 45 },
    { month: 'Apr', discoveries: 30 },
    { month: 'May', discoveries: 55 },
    { month: 'Jun', discoveries: 40 },
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exploration <span className="text-blue-400">Metrics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the incredible statistics behind Earth's natural wonders
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { title: 'Locations Mapped', value: 1247, suffix: '+' },
            { title: 'Species Documented', value: 8934, suffix: '' },
            { title: 'Expeditions', value: 156, suffix: '+' },
            { title: 'Research Hours', value: 12500, suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <CountUpAnimation end={stat.value} duration={2000} />
              <span className="text-4xl font-bold text-blue-400">{stat.suffix}</span>
              <p className="text-gray-300 mt-2">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bar Chart */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Exploration Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={statsData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Line Chart */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Monthly Discoveries</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <Line type="monotone" dataKey="discoveries" stroke="#06B6D4" strokeWidth={3} dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

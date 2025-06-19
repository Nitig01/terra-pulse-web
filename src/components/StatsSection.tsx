
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import CountUpAnimation from './CountUpAnimation';
import { useTheme } from './ThemeProvider';

const StatsSection = () => {
  const { isDark } = useTheme();

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
    <section id="stats" className={`py-12 md:py-20 transition-all duration-500 ${isDark ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-100 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 md:mb-6`}>
            Exploration <span className="text-blue-400">Metrics</span>
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Discover the incredible statistics behind Earth's natural wonders
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16">
          {[
            { title: 'Locations Mapped', value: 1247, suffix: '+' },
            { title: 'Species Documented', value: 8934, suffix: '' },
            { title: 'Expeditions', value: 156, suffix: '+' },
            { title: 'Research Hours', value: 12500, suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              className={`${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10'} backdrop-blur-sm border rounded-lg p-4 md:p-8 text-center transition-all duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <CountUpAnimation end={stat.value} duration={2000} />
              <span className="text-2xl md:text-4xl font-bold text-blue-400">{stat.suffix}</span>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mt-2 text-sm md:text-base`}>{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Bar Chart */}
          <motion.div
            className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-sm border rounded-lg p-4 md:p-8`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 md:mb-6`}>Exploration Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={statsData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Line Chart */}
          <motion.div
            className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-sm border rounded-lg p-4 md:p-8`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 md:mb-6`}>Monthly Discoveries</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }} />
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

import React from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Jan', activity: 40 },
  { name: 'Feb', activity: 70 },
  { name: 'Mar', activity: 45 },
  { name: 'Apr', activity: 90 },
  { name: 'May', activity: 65 },
  { name: 'Jun', activity: 85 },
  { name: 'Jul', activity: 120 },
  { name: 'Aug', activity: 60 },
  { name: 'Sep', activity: 80 },
  { name: 'Oct', activity: 110 },
  { name: 'Nov', activity: 95 },
  { name: 'Dec', activity: 130 },
];

const subjectData = [
  { subject: 'Math', applications: 120 },
  { subject: 'Science', applications: 98 },
  { subject: 'English', applications: 86 },
  { subject: 'History', applications: 65 },
  { subject: 'Art', applications: 40 },
];

const roleData = [
  { name: 'Teachers', value: 2400 },
  { name: 'Schools', value: 456 },
  { name: 'Admins', value: 12 },
];

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export const DashboardOverview = () => {
  const { role, user } = useAuth();

  const getStats = () => {
    switch (role) {
      case 'admin':
        return [
          { label: 'Total Users', value: '2,845', icon: Users, change: '+12%' },
          { label: 'Active Jobs', value: '456', icon: Briefcase, change: '+5%' },
          { label: 'Total Schools', value: '189', icon: FileText, change: '+2%' },
          { label: 'Revenue', value: '$12,400', icon: TrendingUp, change: '+18%' },
        ];
      case 'teacher':
        return [
          { label: 'Applications', value: '12', icon: Briefcase, change: '+2' },
          { label: 'Profile Views', value: '145', icon: Users, change: '+24%' },
          { label: 'Saved Jobs', value: '8', icon: FileText, change: '' },
        ];
      case 'school':
        return [
          { label: 'Active Postings', value: '4', icon: Briefcase, change: '' },
          { label: 'Total Applicants', value: '48', icon: Users, change: '+12' },
          { label: 'Profile Views', value: '312', icon: TrendingUp, change: '+8%' },
        ];
      default:
        return [];
    }
  };

  const stats = getStats();

  const getChartData = () => {
    switch (role) {
      case 'teacher':
        return {
          areaTitle: 'Profile Views Over Time',
          areaData: data,
          barTitle: 'Skills Match with Active Jobs',
          barDataKey: 'score',
          barData: [
            { subject: 'Math', score: 95 },
            { subject: 'Science', score: 80 },
            { subject: 'English', score: 60 },
          ],
          pieTitle: 'Application Status',
          pieData: [
            { name: 'Under Review', value: 5 },
            { name: 'Interviewing', value: 2 },
            { name: 'Rejected', value: 1 },
          ]
        };
      case 'school':
        return {
          areaTitle: 'Job Views Over Time',
          areaData: data,
          barTitle: 'Applicants per Job Posting',
          barDataKey: 'applicants',
          barData: [
            { subject: 'Senior Math', applicants: 45 },
            { subject: 'Physics', applicants: 32 },
            { subject: 'Primary English', applicants: 15 },
          ],
          pieTitle: 'Applicant Status Breakdown',
          pieData: [
            { name: 'New', value: 40 },
            { name: 'Shortlisted', value: 15 },
            { name: 'Rejected', value: 10 },
          ]
        };
      default: // admin
        return {
          areaTitle: 'Platform Activity',
          areaData: data,
          barTitle: 'Applications by Subject',
          barDataKey: 'applications',
          barData: subjectData,
          pieTitle: 'User Distribution',
          pieData: roleData
        };
    }
  };

  const chartInfo = getChartData();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}</h2>
        <p className="text-gray-500 mt-1">Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6" />
              </div>
              {stat.change && (
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 font-medium mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Details: Charts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-2">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{chartInfo.areaTitle}</h3>
          <div className="h-64 mt-4 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartInfo.areaData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#ef4444', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="activity" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorActivity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-400" /> Recent Activity
          </h3>
          <div className="space-y-6">
            {[
              { title: 'New Teacher Registered', time: '10 mins ago', type: 'user' },
              { title: 'Job "Math Teacher" Posted', time: '1 hour ago', type: 'job' },
              { title: 'New Application Received', time: '3 hours ago', type: 'app' },
              { title: 'School Profile Updated', time: '5 hours ago', type: 'school' },
              { title: 'Subscription Renewed', time: '1 day ago', type: 'billing' }
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${
                  activity.type === 'job' ? 'bg-green-500' :
                  activity.type === 'app' ? 'bg-purple-500' :
                  activity.type === 'school' ? 'bg-orange-500' :
                  'bg-red-500'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{chartInfo.barTitle}</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartInfo.barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip 
                  cursor={{ fill: '#f9fafb' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey={chartInfo.barDataKey} fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">{chartInfo.pieTitle}</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartInfo.pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {roleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

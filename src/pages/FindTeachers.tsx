import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/motion';

const MOCK_TEACHERS = [
  { id: 1, name: 'Anita Thapa', subject: 'Mathematics', degree: 'M.Sc. Mathematics', expYears: 5, experienceStr: '5 Yrs Exp', location: 'Kathmandu', level: 'High School', rating: 4.9, avatar: 'https://i.pravatar.cc/150?img=32' },
  { id: 2, name: 'Sujan Shrestha', subject: 'Science', degree: 'B.Sc. Physics', expYears: 2, experienceStr: '2 Yrs Exp', location: 'Pokhara', level: 'Middle School', rating: 4.7, avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 3, name: 'Bishal Gurung', subject: 'English', degree: 'M.A. English', expYears: 8, experienceStr: '8 Yrs Exp', location: 'Lalitpur', level: 'Primary', rating: 4.8, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 4, name: 'Rina Magar', subject: 'Computer', degree: 'B.E. Computer', expYears: 1, experienceStr: '1 Yr Exp', location: 'Bhaktapur', level: 'High School', rating: 4.5, avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 5, name: 'Dipendra KC', subject: 'Social Studies', degree: 'M.A. Sociology', expYears: 12, experienceStr: '12 Yrs Exp', location: 'Kathmandu', level: 'Secondary', rating: 4.9, avatar: 'https://i.pravatar.cc/150?img=14' },
  { id: 6, name: 'Sabina Rai', subject: 'Science', degree: 'M.Sc. Chemistry', expYears: 6, experienceStr: '6 Yrs Exp', location: 'Pokhara', level: 'High School', rating: 4.6, avatar: 'https://i.pravatar.cc/150?img=20' },
  { id: 7, name: 'Rabin Shrestha', subject: 'Mathematics', degree: 'B.Ed. Mathematics', expYears: 4, experienceStr: '4 Yrs Exp', location: 'Kathmandu', level: 'Secondary', rating: 4.3, avatar: 'https://i.pravatar.cc/150?img=52' },
  { id: 8, name: 'Manish Thapa', subject: 'Primary', degree: 'B.Ed. Primary Ed', expYears: 1, experienceStr: '1 Yr Exp', location: 'Lalitpur', level: 'Primary', rating: 4.1, avatar: 'https://i.pravatar.cc/150?img=60' }
];

const SUBJECTS = ['Mathematics', 'Science', 'English', 'Computer', 'Social Studies', 'Primary'];
const EXPERIENCE_RANGES = [
  { label: '0-2 Years', min: 0, max: 2 },
  { label: '3-5 Years', min: 3, max: 5 },
  { label: '5-10 Years', min: 5, max: 10 },
  { label: '10+ Years', min: 10, max: 99 }
];

export function FindTeachers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const handleClearAll = () => {
    setSearchTerm('');
    setLocationSearch('');
    setSelectedSubjects([]);
    setSelectedExperience(null);
  };

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const togglePillSubject = (subject: string) => {
    if (subject === 'All') {
      setSelectedSubjects([]);
    } else {
      setSelectedSubjects([subject]); // Exclusive selection for pills to mimic tabs
    }
  };

  // Filter logic
  const filteredTeachers = useMemo(() => {
    return MOCK_TEACHERS.filter(teacher => {
      // 1. Keyword search (Name, Subject, Degree)
      const keywordMatch = !searchTerm || 
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.degree.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 2. Location search
      const locationMatch = !locationSearch || 
        teacher.location.toLowerCase().includes(locationSearch.toLowerCase());

      // 3. Subject checkboxes
      const subjectMatch = selectedSubjects.length === 0 || selectedSubjects.includes(teacher.subject);

      // 4. Experience radio
      let experienceMatch = true;
      if (selectedExperience) {
        const range = EXPERIENCE_RANGES.find(r => r.label === selectedExperience);
        if (range) {
          experienceMatch = teacher.expYears >= range.min && teacher.expYears <= range.max;
        }
      }

      return keywordMatch && locationMatch && subjectMatch && experienceMatch;
    });
  }, [searchTerm, locationSearch, selectedSubjects, selectedExperience]);

  return (
    <div className="pt-24 pb-20 bg-surface-muted min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-strong mb-4">
            Find Exceptional Teachers
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Browse our curated network of verified educators ready to join your
            institution.
          </p>
        </FadeIn>

        {/* Search & Filter Bar */}
        <FadeIn
          delay={0.2}
          className="bg-surface-base p-4 rounded-2xl shadow-2 border border-border-default mb-10 flex flex-col md:flex-row gap-4">
          
          <div className="flex-1 relative">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="h-5 w-5 text-text-tertiary" />}
              placeholder="Search by subject, name, or keyword..."
              className="h-12 bg-surface-muted/50 border-transparent focus-visible:bg-surface-base" 
            />
          </div>
          <div className="flex-1 relative">
            <Input
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              icon={<MapPin className="h-5 w-5 text-text-tertiary" />}
              placeholder="Location or District"
              className="h-12 bg-surface-muted/50 border-transparent focus-visible:bg-surface-base" 
            />
          </div>
          <Button variant="outline" className="h-12 px-4 md:hidden">
            <Filter className="h-5 w-5 mr-2" /> Filters
          </Button>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="bg-surface-base p-6 rounded-2xl shadow-1 border border-border-default sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-surface-strong">Filters</h3>
                <button onClick={handleClearAll} className="text-sm text-surface-accent hover:underline">
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Subject
                  </h4>
                  <div className="space-y-2">
                    {SUBJECTS.map((subj) => {
                      const isChecked = selectedSubjects.includes(subj);
                      return (
                        <label
                          key={subj}
                          className="flex items-center gap-3 cursor-pointer group">
                          
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-surface-accent border-surface-accent text-white' : 'border-border-default group-hover:border-surface-accent'}`}>
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <span className={`transition-colors ${isChecked ? 'text-surface-strong font-medium' : 'text-text-primary group-hover:text-surface-strong'}`}>
                            {subj}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Experience
                  </h4>
                  <div className="space-y-2">
                    {EXPERIENCE_RANGES.map((range) => {
                      const isChecked = selectedExperience === range.label;
                      return (
                        <label
                          key={range.label}
                          className="flex items-center gap-3 cursor-pointer group">
                          
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${isChecked ? 'border-surface-accent' : 'border-border-default group-hover:border-surface-accent'}`}>
                            {isChecked && <div className="w-2.5 h-2.5 rounded-full bg-surface-accent" />}
                          </div>
                          <span className={`transition-colors ${isChecked ? 'text-surface-strong font-medium' : 'text-text-primary group-hover:text-surface-strong'}`}>
                            {range.label}
                          </span>
                          <input 
                            type="radio" 
                            name="experience" 
                            value={range.label}
                            checked={isChecked}
                            onChange={(e) => setSelectedExperience(e.target.value)}
                            className="hidden"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => togglePillSubject('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedSubjects.length === 0 ? 'bg-surface-strong text-surface-base shadow-2' : 'bg-surface-base text-text-secondary border border-border-default hover:border-surface-strong hover:text-surface-strong'}`}>
                All
              </button>
              {['Mathematics', 'Science', 'English', 'Primary'].map((f) => {
                const isActive = selectedSubjects.length === 1 && selectedSubjects[0] === f;
                return (
                  <button
                    key={f}
                    onClick={() => togglePillSubject(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? 'bg-surface-strong text-surface-base shadow-2' : 'bg-surface-base text-text-secondary border border-border-default hover:border-surface-strong hover:text-surface-strong'}`}>
                    {f}
                  </button>
                );
              })}
            </div>

            {/* Teacher Grid */}
            {filteredTeachers.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTeachers.map((teacher, index) => (
                  <StaggerItem key={teacher.id}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-surface-base rounded-2xl p-6 shadow-1 border border-border-default hover:shadow-3 transition-all duration-300 flex flex-col h-full group">
                    
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-full bg-surface-muted border-2 border-surface-base shadow-sm flex items-center justify-center overflow-hidden">
                          <img
                            src={teacher.avatar}
                            alt={teacher.name}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="flex items-center gap-1 bg-surface-accent/10 text-surface-strong px-2 py-1 rounded-md text-xs font-bold">
                          <Star className="h-3 w-3 fill-surface-accent text-surface-accent" />{' '}
                          {teacher.rating}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-surface-strong mb-1 group-hover:text-surface-accent transition-colors">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-4">
                        {teacher.degree} • {teacher.experienceStr}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 py-1 bg-surface-muted rounded text-xs text-text-secondary border border-border-muted">
                          {teacher.level}
                        </span>
                        <span className="px-2 py-1 bg-surface-muted rounded text-xs text-text-secondary border border-border-muted">
                          {teacher.location}
                        </span>
                        <span className="px-2 py-1 bg-surface-muted rounded text-xs text-text-secondary border border-border-muted">
                          {teacher.subject}
                        </span>
                      </div>

                      <div className="mt-auto pt-4 border-t border-border-muted flex gap-3">
                        <Link to={`/teachers/${teacher.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View Profile
                          </Button>
                        </Link>
                        <Button variant="primary" className="flex-1">
                          Message
                        </Button>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <div className="bg-surface-base rounded-2xl p-12 text-center border border-border-default">
                <div className="w-16 h-16 bg-surface-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-text-tertiary" />
                </div>
                <h3 className="text-xl font-bold text-surface-strong mb-2">No teachers found</h3>
                <p className="text-text-secondary mb-6">We couldn't find any teachers matching your specific filters.</p>
                <Button variant="outline" onClick={handleClearAll}>
                  Clear all filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredTeachers.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="rounded-full px-8">
                  Load More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

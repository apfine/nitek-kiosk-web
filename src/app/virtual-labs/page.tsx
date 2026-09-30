import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Target, FlaskConical, CircleDot } from 'lucide-react';

const labs = [
  {
    title: 'Circuit Construction Kit',
    subtitle: 'Explore basic electricity relationships.',
    url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-100',
  },
  {
    title: 'Energy Skate Park',
    subtitle: 'Learn about conservation of energy.',
    url: 'https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_en.html',
    icon: Target,
    color: 'text-green-500',
    bg: 'bg-green-100',
  },
  {
    title: 'Balancing Chemical Equations',
    subtitle: 'Practice balancing chemical equations.',
    url: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html',
    icon: FlaskConical,
    color: 'text-purple-500',
    bg: 'bg-purple-100',
  },
  {
    title: 'Build an Atom',
    subtitle: 'Build atoms out of protons, neutrons, and electrons.',
    url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
    icon: CircleDot,
    color: 'text-blue-500',
    bg: 'bg-blue-100',
  }
];

export default function VirtualLabs() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#0F172A] p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center mb-12">
          <Link href="/" className="mr-6 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold">Virtual STEM Labs</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {labs.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <a 
                key={i} 
                href={lab.url} 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-[320px]"
              >
                <div className={`${lab.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-auto group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${lab.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{lab.title}</h3>
                  <p className="text-slate-500 mb-6 line-clamp-2">{lab.subtitle}</p>
                  <div className={`flex items-center justify-between ${lab.color} font-bold`}>
                    <span>Launch Lab</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

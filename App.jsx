import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionPipeline } from './components/SolutionPipeline';
import { SimulationContainer } from './components/simulation/SimulationContainer';
import { DecisionEngine } from './components/DecisionEngine';
import { RiskEngine } from './components/RiskEngine';
import { PathPlannerSection } from './components/PathPlannerSection';
import { CollisionAvoidance } from './components/CollisionAvoidance';
import { WhySafar } from './components/WhySafar';
import { IndianScenarios } from './components/IndianScenarios';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSimulation = () => {
    const simEl = document.getElementById('simulation');
    if (simEl) {
      simEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToArchitecture = () => {
    const archEl = document.getElementById('architecture');
    if (archEl) {
      archEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRunScenarioInSimulator = (scenarioId) => {
    scrollToSimulation();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* Top Navbar */}
      <Navbar onLaunchSimulation={scrollToSimulation} />

      {/* Hero Section */}
      <Hero
        onLaunchSimulation={scrollToSimulation}
        onExploreClick={scrollToArchitecture}
      />

      {/* Problem Challenge */}
      <ProblemSection />

      {/* Solution 5-Stage Pipeline */}
      <SolutionPipeline />

      {/* Core SAFAR LIVE Interactive Simulation */}
      <SimulationContainer />

      {/* Inside the SAFAR Decision Engine */}
      <DecisionEngine />

      {/* Dynamic Risk Engine & Interactive Calculator Sandbox */}
      <RiskEngine />

      {/* Adaptive Path Planning vs Fixed Path */}
      <PathPlannerSection />

      {/* Collision Avoidance Action Matrix */}
      <CollisionAvoidance />

      {/* Why SAFAR is Different */}
      <WhySafar />

      {/* Indian Road Scenarios Explorer */}
      <IndianScenarios onRunScenario={handleRunScenarioInSimulator} />

      {/* Performance & Simulation Benchmark Metrics */}
      <PerformanceDashboard />

      {/* Technical Architecture Block Diagram */}
      <ArchitectureDiagram />

      {/* Future Development Roadmap */}
      <Roadmap />

      {/* Footer */}
      <Footer />

    </div>
  );
}

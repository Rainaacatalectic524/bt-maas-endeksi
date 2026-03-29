import { HighlightProvider } from './HighlightContext';
import Hero from './Hero';
import TrendChart from './TrendChart';
import RoleBar from './RoleBar';
import AIAdoption from './AIAdoption';
import CompanyTypeSalary from './CompanyTypeSalary';
import RoleBump from './RoleBump';
import RoleRadar from './RoleRadar';

export default function Dashboard() {
  return (
    <HighlightProvider>
      <Hero />
      <TrendChart />
      <RoleBar />
      <AIAdoption />
      <CompanyTypeSalary />
      <RoleBump />
      <RoleRadar />
    </HighlightProvider>
  );
}

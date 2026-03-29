import { aiTools } from '../data/salaries';
import FadeIn from './FadeIn';

const ONCEKI_URL = 'https://github.com/nicatdursunlu/onceki-yazilimci-2026-anket-sonuclari';
const SO_URL = 'https://survey.stackoverflow.co/2024/ai';
const total = 67.8;

const globalComparison = [
  { label: 'GitHub Octoverse 2024', pct: 92, note: 'en az bir kez denemiş', color: '#333' },
  { label: 'Stack Overflow 2024', pct: 76, note: 'aktif kullanıyor', color: '#6366f1' },
  { label: 'Türkiye (bu anket)', pct: 67.8, note: '5.002 yazılımcı', color: '#10b981', highlight: true },
  { label: 'JetBrains 2024', pct: 50, note: 'düzenli kullanıyor', color: '#f59e0b' },
];

export default function AIAdoption() {
  return (
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="ai">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          Yazılımcıların %67,8'i yapay zeka araçları kullanıyor
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-[700px]">
          Ankete katılan 5.002 yazılımcının üçte ikisinden fazlası en az bir yapay zeka aracı kullanıyor.
          Claude, katılımcıların yarısından fazlasının tercih ettiği araç olarak öne çıkıyor.
          Dünya genelinde bu oran Stack Overflow 2024 anketine göre %76, GitHub verilerine göre ise %92 düzeyinde.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big number + global comparison */}
          <div className="bg-bg-white rounded-xl shadow-sm p-6">
            <div className="text-5xl font-black text-accent tracking-tight font-mono mb-1">
              %67,8
            </div>
            <p className="text-sm text-text-secondary mb-5">
              en az bir yapay zeka aracı kullanan yazılımcı oranı
            </p>

            <div className="border-t border-border pt-4">
              <p className="text-[10px] text-text-muted uppercase tracking-wide font-medium mb-3">Dünya ile karşılaştırma</p>
              <div className="space-y-2.5">
                {globalComparison.map(g => (
                  <div key={g.label}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className={`text-xs ${g.highlight ? 'font-semibold text-text' : 'text-text-secondary'}`}>{g.label}</span>
                      <span className="font-mono text-xs text-text-muted">%{g.pct}</span>
                    </div>
                    <div className="h-1.5 bg-bg-chart rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${(g.pct / 100) * 100}%`, backgroundColor: g.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tool breakdown */}
          <div className="bg-bg-white rounded-xl shadow-sm p-6">
            <p className="text-[10px] text-text-muted uppercase tracking-wide font-medium mb-4">Araç bazında kullanım</p>
            <div className="space-y-3">
              {aiTools.map(tool => (
                <div key={tool.name}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-semibold text-text">{tool.name}</span>
                    <span className="font-mono text-sm text-text-secondary">
                      %{tool.pct}
                      <span className="text-text-muted ml-2">
                        ({tool.count.toLocaleString('tr-TR')})
                      </span>
                    </span>
                  </div>
                  <div className="h-2 bg-bg-chart rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(tool.pct / total) * 100}%`,
                        backgroundColor: tool.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="source-text mt-4">
              Kaynak:{' '}
              <a href={ONCEKI_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                önceki yazılımcı
              </a>
              {' '}2026,{' '}
              <a href={SO_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Stack Overflow
              </a>
              {' '}2024. Birden fazla araç seçilebilir.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

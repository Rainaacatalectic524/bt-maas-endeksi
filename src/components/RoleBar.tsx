import { useState } from 'react';
import { roles, categories, type Category } from '../data/salaries';
import { useHighlight } from './HighlightContext';
import CategoryFilter from './CategoryFilter';
import FadeIn from './FadeIn';

const ONCEKI_URL = 'https://github.com/nicatdursunlu/onceki-yazilimci-2026-anket-sonuclari';
const INITIAL_COUNT = 16;

const sorted = [...roles].sort((a, b) => b.sr - a.sr);
const maxSr = sorted[0].sr;

export default function RoleBar() {
  const { isFiltered, isHighlighted, setActiveCategory } = useHighlight();
  const [showAll, setShowAll] = useState(false);

  const filtered = sorted.filter(r => isFiltered(r.cat as Category));
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="roles">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          En yüksek maaşı CTO ve Architect alıyor
        </h2>
        <p className="text-sm text-text-secondary mb-4 leading-relaxed max-w-[700px]">
          CTO pozisyonu aylık 280.000 TL medyan ile listenin zirvesinde yer alıyor.
          Yönetim ve veri/yapay zeka kategorileri, geliştirme rollerine kıyasla belirgin şekilde daha yüksek maaş sunuyor.
        </p>
        <div className="mb-6">
          <CategoryFilter />
        </div>

        <div className="bg-bg-white rounded-xl shadow-sm p-5">
          <div className="space-y-2">
            {visible.map((role, i) => {
              const catInfo = categories[role.cat as Category];
              const pct = (role.sr / maxSr) * 100;
              const highlighted = isHighlighted(role.cat as Category);
              return (
                <div
                  key={role.name}
                  className="group flex items-center gap-3 transition-opacity duration-200 cursor-pointer"
                  style={{ opacity: highlighted ? 1 : 0.2 }}
                  onMouseEnter={() => setActiveCategory(role.cat as Category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <span className="font-mono text-xs text-text-dim w-5 text-right">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-text-body w-[200px] shrink-0 truncate">
                    {role.name}
                  </span>
                  <div className="flex-1 h-7 bg-bg-chart rounded relative overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-500 ease-out"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: catInfo.color,
                        opacity: highlighted ? 0.8 : 0.25,
                      }}
                    />
                    <span
                      className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs font-semibold"
                      style={{ color: catInfo.color }}
                    >
                      ₺{role.sr}K
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-muted w-16 text-right">
                    {role.n.toLocaleString('tr-TR')}
                  </span>
                </div>
              );
            })}
          </div>

          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-4 w-full py-2.5 rounded-lg text-sm font-medium text-accent bg-accent/5 hover:bg-accent/10 transition cursor-pointer"
            >
              Tüm {filtered.length} pozisyonu göster
            </button>
          )}

          <p className="source-text mt-3">
            Kaynak:{' '}
            <a href={ONCEKI_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              önceki yazılımcı
            </a>
            {' '}2026, senior medyan aylık net TRY (bin)
          </p>
        </div>
      </section>
    </FadeIn>
  );
}

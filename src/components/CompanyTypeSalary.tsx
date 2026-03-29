import { companyTypes } from '../data/salaries';
import FadeIn from './FadeIn';

const ONCEKI_URL = 'https://github.com/nicatdursunlu/onceki-yazilimci-2026-anket-sonuclari';
const maxMedian = Math.max(...companyTypes.map(c => c.median));

export default function CompanyTypeSalary() {
  return (
    <FadeIn>
      <section className="max-w-[960px] mx-auto px-6 section" data-section="company">
        <h2 className="text-2xl font-bold text-text tracking-tight mb-1">
          En yüksek maaşı şans oyunları sektörü ödüyor
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-[700px]">
          Şirket türüne göre medyan maaşlarda dikkat çekici farklar var. Şans oyunları ve bahis şirketleri
          aylık 102.500 TL ile listenin zirvesinde yer alırken, savunma sanayii, bankalar ve sigorta
          şirketleri 92.500 TL ile ikinci sırayı paylaşıyor. Startup'lar ve yazılım evleri ise ortalamanın altında kalıyor.
        </p>

        <div className="bg-bg-white rounded-xl shadow-sm p-5">
          <div className="space-y-2.5">
            {companyTypes.map((ct, i) => {
              const pct = (ct.median / maxMedian) * 100;
              return (
                <div key={ct.name} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text-dim w-5 text-right">{i + 1}</span>
                  <span className="text-sm font-medium text-text-body w-[220px] shrink-0 truncate">
                    {ct.name}
                  </span>
                  <div className="flex-1 h-7 bg-bg-chart rounded relative overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-500 ease-out"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: ct.color,
                        opacity: 0.7,
                      }}
                    />
                    <span
                      className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs font-semibold"
                      style={{ color: ct.color }}
                    >
                      ₺{(ct.median / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-muted w-12 text-right">
                    {ct.count}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="source-text mt-3">
            Kaynak:{' '}
            <a href={ONCEKI_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              önceki yazılımcı
            </a>
            {' '}2026, orta seviye medyan aylık net TRY
          </p>
        </div>
      </section>
    </FadeIn>
  );
}

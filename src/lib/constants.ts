export const SITE = {
  name: "Asian Havacılık",
  tagline: "Aviation Supply Solutions",
  url: "https://asyaaviation.com",
  phoneDisplay: "+90 532 134 58 40",
  phoneIntl: "905321345840",
  email: null as string | null, // TBD — netleşince eklenecek
  address: null as string | null, // TBD — netleşince eklenecek
  hours: "Pazartesi – Cuma / 09:00 – 18:00",
  founder: "Ahmet Bulut",
};

export const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urun-gruplari", label: "Ürün Grupları" },
  { href: "/global-marka-kaynaklari", label: "Global Marka Kaynakları" },
  { href: "/hizmet-verdigimiz-pazarlar", label: "Hizmet Verdiğimiz Pazarlar" },
  { href: "/kalite-yaklasimi", label: "Kalite Yaklaşımı" },
  { href: "/iletisim", label: "İletişim" },
];

export const NAV_ITEMS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/product-groups", label: "Product Groups" },
  { href: "/en/global-brand-sources", label: "Global Brand Sources" },
  { href: "/en/markets", label: "Markets We Serve" },
  { href: "/en/quality-approach", label: "Quality Approach" },
  { href: "/en/contact", label: "Contact" },
];

// Maps each TR path to its EN equivalent and vice versa, for the language switcher.
export const LOCALE_PATH_MAP: Record<string, string> = {
  "/": "/en",
  "/hakkimizda": "/en/about",
  "/urun-gruplari": "/en/product-groups",
  "/global-marka-kaynaklari": "/en/global-brand-sources",
  "/hizmet-verdigimiz-pazarlar": "/en/markets",
  "/kalite-yaklasimi": "/en/quality-approach",
  "/iletisim": "/en/contact",
  "/gizlilik-politikasi": "/en/privacy-policy",
  "/en": "/",
  "/en/about": "/hakkimizda",
  "/en/product-groups": "/urun-gruplari",
  "/en/global-brand-sources": "/global-marka-kaynaklari",
  "/en/markets": "/hizmet-verdigimiz-pazarlar",
  "/en/quality-approach": "/kalite-yaklasimi",
  "/en/contact": "/iletisim",
  "/en/privacy-policy": "/gizlilik-politikasi",
};

function buildWaMessage(lines: string[]) {
  return encodeURIComponent(lines.join("\n"));
}

export const WA_MESSAGES = {
  general: buildWaMessage([
    "Merhaba Asian Havacılık,",
    "",
    "Havacılık malzemesi tedarik talebim var.",
    "",
    "Ürün / Parça No:",
    "Marka / Üretici:",
    "Adet:",
    "Uçak / Sistem Bilgisi:",
    "Teslimat Beklentisi:",
    "Sertifika / Belge Gereksinimi:",
    "Ek Not:",
  ]),
  productGroup: (group: string) =>
    buildWaMessage([
      "Merhaba Asian Havacılık,",
      "",
      `${group} kategorisinde tedarik talebim var.`,
      "",
      "Ürün / Parça No:",
      "Marka / Üretici:",
      "Adet:",
      "Teslimat Beklentisi:",
      "Sertifika / Belge Gereksinimi:",
      "Ek Not:",
    ]),
  brand: buildWaMessage([
    "Merhaba Asian Havacılık,",
    "",
    "Aşağıdaki marka / part number için tedarik talebim var.",
    "",
    "Marka:",
    "Part Number:",
    "Ürün Açıklaması:",
    "Adet:",
    "Belge Gereksinimi:",
  ]),
  quality: buildWaMessage([
    "Merhaba Asian Havacılık,",
    "",
    "Belge ve kalite süreciyle ilgili bir sorum var.",
    "",
    "Konu:",
    "Ek Not:",
  ]),
};

export const WA_MESSAGES_EN = {
  general: buildWaMessage([
    "Hello Asian Havacılık,",
    "",
    "I have an aviation parts / materials sourcing request.",
    "",
    "Product / Part Number:",
    "Brand / Manufacturer:",
    "Quantity:",
    "Aircraft / System Information:",
    "Required Delivery Time:",
    "Certificate / Document Requirement:",
    "Additional Notes:",
  ]),
  productGroup: (group: string) =>
    buildWaMessage([
      "Hello Asian Havacılık,",
      "",
      `I have a sourcing request in the ${group} category.`,
      "",
      "Product / Part Number:",
      "Brand / Manufacturer:",
      "Quantity:",
      "Required Delivery Time:",
      "Certificate / Document Requirement:",
      "Additional Notes:",
    ]),
  brand: buildWaMessage([
    "Hello Asian Havacılık,",
    "",
    "I have a sourcing request for the brand / part number below.",
    "",
    "Brand:",
    "Part Number:",
    "Product Description:",
    "Quantity:",
    "Document Requirement:",
  ]),
  quality: buildWaMessage([
    "Hello Asian Havacılık,",
    "",
    "I have a question about documentation and quality process.",
    "",
    "Topic:",
    "Additional Notes:",
  ]),
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneIntl}?text=${message}`;
}

export const PRODUCT_GROUPS = [
  {
    slug: "aircraft-spare-parts",
    name: "Aircraft Spare Parts",
    description:
      "Sivil havacılıkta kullanılan uçak yedek parçaları için talep bazlı tedarik desteği sağlıyoruz. Ürün adı, part number, marka ve adet bilgisiyle talebinizi iletebilirsiniz.",
  },
  {
    slug: "consumables",
    name: "Consumables",
    description:
      "Bakım ve operasyon süreçlerinde kullanılan sarf malzemeler için yurtdışı kaynaklı tedarik araştırması yapılmaktadır.",
  },
  {
    slug: "tools-maintenance-equipment",
    name: "Tools & Maintenance Equipment",
    description:
      "Bakım operasyonlarında kullanılan el aletleri, özel takımlar, ölçüm ekipmanları ve teknik bakım ürünleri için tedarik çözümleri sunuyoruz.",
  },
  {
    slug: "ground-support-equipment",
    name: "Ground Support Equipment",
    description:
      "Yer hizmetleri ve bakım operasyonlarında kullanılan destek ekipmanları için ürün ve kaynak araştırması yapılabilir.",
  },
  {
    slug: "electrical-components",
    name: "Electrical Components",
    description:
      "Havacılık operasyonlarında kullanılan elektriksel bileşenler, bağlantı elemanları ve ilgili teknik ürünler için talep bazlı tedarik desteği sağlıyoruz.",
  },
  {
    slug: "cabin-interior-parts",
    name: "Cabin & Interior Parts",
    description:
      "Kabin içi ekipman, parça ve tamamlayıcı ürün grupları için müşteri taleplerine göre tedarik araştırması yapılabilir.",
  },
  {
    slug: "fasteners-hardware",
    name: "Fasteners & Hardware",
    description:
      "Bağlantı elemanları, teknik donanım parçaları ve havacılıkta kullanılan özel hardware ürünleri için tedarik desteği sunuyoruz.",
  },
  {
    slug: "lubricants-chemicals",
    name: "Lubricants & Chemicals",
    description:
      "Bakım ve operasyon süreçlerinde kullanılan yağlayıcılar, kimyasallar, yapıştırıcılar ve temizlik ürünleri için kaynak araştırması yapılmaktadır.",
  },
  {
    slug: "safety-equipment",
    name: "Safety Equipment",
    description:
      "Operasyonel güvenlik, bakım güvenliği ve teknik kullanım alanlarına yönelik güvenlik ekipmanları için tedarik desteği sağlıyoruz.",
  },
];

export const PRODUCT_GROUPS_EN = [
  {
    slug: "aircraft-spare-parts",
    name: "Aircraft Spare Parts",
    description:
      "We provide request-based sourcing support for aircraft spare parts used in civil aviation. You can share your request with product name, part number, brand and quantity.",
  },
  {
    slug: "consumables",
    name: "Consumables",
    description:
      "Sourcing research is carried out from overseas sources for consumables used in maintenance and operation processes.",
  },
  {
    slug: "tools-maintenance-equipment",
    name: "Tools & Maintenance Equipment",
    description:
      "We offer sourcing solutions for hand tools, special tooling, measurement equipment and technical maintenance products used in maintenance operations.",
  },
  {
    slug: "ground-support-equipment",
    name: "Ground Support Equipment",
    description:
      "Product and source research can be carried out for support equipment used in ground handling and maintenance operations.",
  },
  {
    slug: "electrical-components",
    name: "Electrical Components",
    description:
      "We provide request-based sourcing support for electrical components, connectors and related technical products used in aviation operations.",
  },
  {
    slug: "cabin-interior-parts",
    name: "Cabin & Interior Parts",
    description:
      "Sourcing research can be carried out based on customer requests for cabin equipment, parts and complementary product groups.",
  },
  {
    slug: "fasteners-hardware",
    name: "Fasteners & Hardware",
    description:
      "We offer sourcing support for fasteners, technical hardware parts and special hardware products used in aviation.",
  },
  {
    slug: "lubricants-chemicals",
    name: "Lubricants & Chemicals",
    description:
      "Source research is carried out for lubricants, chemicals, adhesives and cleaning products used in maintenance and operation processes.",
  },
  {
    slug: "safety-equipment",
    name: "Safety Equipment",
    description:
      "We provide sourcing support for safety equipment for operational safety, maintenance safety and technical use areas.",
  },
];

export const BRAND_SOURCES = [
  { name: "Airbus", logo: "/images/brand-sources/airbus.svg" },
  { name: "Boeing", logo: "/images/brand-sources/boeing.svg" },
  { name: "Safran", logo: "/images/brand-sources/safran.svg" },
  { name: "Honeywell Aerospace", logo: "/images/brand-sources/honeywell-aerospace.svg" },
  { name: "Collins Aerospace", logo: "/images/brand-sources/collins-aerospace.svg" },
  { name: "GE Aerospace", logo: "/images/brand-sources/ge-aerospace.svg" },
  { name: "Pratt & Whitney", logo: "/images/brand-sources/pratt-whitney.svg" },
  { name: "Rolls-Royce", logo: "/images/brand-sources/rolls-royce.svg" },
  { name: "Parker Aerospace", logo: "/images/brand-sources/parker-aerospace.svg" },
  { name: "Liebherr Aerospace", logo: "/images/brand-sources/liebherr-aerospace.svg" },
];

export const BRAND_DISCLAIMER =
  "Marka isimleri yalnızca talep edilebilen ürün gruplarını ve global ürün kaynaklarını ifade etmek amacıyla kullanılmıştır. İlgili markalarla resmi distribütörlük, temsilcilik, yetkili satıcılık veya doğrudan iş ortaklığı ilişkisi bulunduğu anlamına gelmez.";

export const BRAND_DISCLAIMER_EN =
  "Brand names are used solely to indicate the product groups and global product sources that can be requested. This does not imply an official distributorship, agency, authorized dealership or direct business partnership with the relevant brands.";

export const MARKET_SEGMENTS = [
  "Havayolu Firmaları",
  "MRO Şirketleri",
  "Yer Hizmetleri Firmaları",
  "Özel Havacılık Firmaları",
  "Teknik Satın Alma Ekipleri",
  "Bakım Operasyon Birimleri",
];

export const MARKET_SEGMENTS_EN = [
  "Airlines",
  "MRO Companies",
  "Ground Handling Companies",
  "Private Aviation Companies",
  "Technical Procurement Teams",
  "Maintenance Operation Units",
];

export const MARKET_REGIONS = [
  { name: "Türkiye", description: "Sivil havacılık ve MRO ekosisteminin merkezinde yerel tedarik desteği." },
  { name: "Orta Asya", description: "Büyüyen filolar için global kaynaklardan hızlı tedarik araştırması." },
  { name: "Avrupa", description: "Sertifika ve izlenebilirlik hassasiyeti yüksek pazarlara uyumlu süreç." },
  { name: "Orta Doğu", description: "Geniş filo operasyonlarına teknik ürün ve parça desteği." },
];

export const MARKET_REGIONS_EN = [
  { name: "Turkey", description: "Local sourcing support at the heart of the civil aviation and MRO ecosystem." },
  { name: "Central Asia", description: "Fast sourcing research from global sources for growing fleets." },
  { name: "Europe", description: "A process aligned with markets that require high certification and traceability standards." },
  { name: "Middle East", description: "Technical product and parts support for large fleet operations." },
];

export const MARKET_DISCLAIMER =
  "Firma ve marka isimleri yalnızca sektör, pazar ve ürün kapsamını anlatmak amacıyla kullanılmıştır. Resmi referans, müşteri ilişkisi, distribütörlük, temsilcilik veya iş ortaklığı beyanı değildir.";

export const MARKET_DISCLAIMER_EN =
  "Company and brand names are used solely to describe the industry, market and product scope. This is not an official reference, customer relationship, distributorship, agency or business partnership statement.";

// Example civil aviation companies representing the markets/regions we target.
// Names/logos are illustrative of the sector and regions, not confirmed customers — see MARKET_DISCLAIMER.
export const MARKET_AIRLINES = [
  { name: "Turkish Airlines", logo: "/images/market-examples/turkish-airlines.svg" },
  { name: "Pegasus Airlines", logo: "/images/market-examples/pegasus-airlines.svg" },
  { name: "AJet", logo: "/images/market-examples/ajet.svg" },
  { name: "SunExpress", logo: "/images/market-examples/sunexpress.svg" },
  { name: "Air Astana", logo: "/images/market-examples/air-astana.png" },
  { name: "Azerbaijan Airlines", logo: "/images/market-examples/azerbaijan-airlines.svg" },
  { name: "SCAT Airlines", logo: "/images/market-examples/scat-airlines.svg" },
  { name: "flydubai", logo: "/images/market-examples/flydubai.svg" },
  { name: "Air Arabia", logo: "/images/market-examples/air-arabia.svg" },
  { name: "Wizz Air", logo: "/images/market-examples/wizz-air.svg" },
];

export const SUPPLY_STEPS = [
  {
    title: "Talebin İletilmesi",
    description: "Ürün adı, part number, adet ve varsa belge gereksinimi WhatsApp üzerinden paylaşılır.",
  },
  {
    title: "Kaynak Araştırması",
    description: "Talep edilen ürün için yurtdışı üretici, distribütör ve tedarikçi kaynakları araştırılır.",
  },
  {
    title: "Değerlendirme",
    description: "Uygunluk, teslim süresi, belge durumu ve fiyat bilgisi değerlendirilir.",
  },
  {
    title: "Netleştirme",
    description: "Müşteriyle WhatsApp veya telefon üzerinden detaylar netleştirilir.",
  },
  {
    title: "Sipariş ve Teslimat",
    description: "Sipariş, ithalat ve teslimat süreci başlatılır.",
  },
];

export const SUPPLY_STEPS_EN = [
  {
    title: "Request Submission",
    description: "Product name, part number, quantity and document requirements (if any) are shared via WhatsApp.",
  },
  {
    title: "Source Research",
    description: "Overseas manufacturer, distributor and supplier sources are researched for the requested product.",
  },
  {
    title: "Evaluation",
    description: "Suitability, delivery time, document status and pricing information are evaluated.",
  },
  {
    title: "Confirmation",
    description: "Details are confirmed with the customer via WhatsApp or phone.",
  },
  {
    title: "Order & Delivery",
    description: "The order, import and delivery process is initiated.",
  },
];

export const QUALITY_AVOID = [
  "EASA onaylıyız",
  "FAA sertifikalıyız",
  "SHGM onaylı tedarikçiyiz",
  "Tüm ürünler sertifikalıdır",
  "Her ürün orijinaldir garantisi veriyoruz",
  "En hızlı teslimatı garanti ediyoruz",
];

export const QUALITY_AVOID_EN = [
  "We are EASA approved",
  "We are FAA certified",
  "We are an SHGM-approved supplier",
  "All products are certified",
  "We guarantee every product is genuine",
  "We guarantee the fastest delivery",
];

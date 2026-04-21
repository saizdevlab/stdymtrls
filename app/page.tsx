const materials = [
  {
    id: "p13",
    title: "Paper 13",
    subject: "Corporate and Economic Laws",
    description:
      "Covers corporate laws, insolvency, corporate governance, SEBI regulations, FEMA, MSME, cyber security, banking, insurance, and anti-money laundering.",
    file: "/pdfs/P13_new.pdf",
    buttonLabel: "Download Paper 13",
  },
  {
    id: "p14",
    title: "Paper 14",
    subject: "Strategic Financial Management",
    description:
      "Includes investment decisions, portfolio management, financial risk management, international financial management, and digital finance.",
    file: "/pdfs/P14.pdf",
    buttonLabel: "Download Paper 14",
  },
  {
    id: "p15",
    title: "Paper 15",
    subject: "Direct Tax Laws and International Taxation",
    description:
      "Includes direct tax laws, return and assessment procedure, penalties, tax planning, ICDS, black money law, DTAA, transfer pricing, and GAAR.",
    file: "/pdfs/P15_Mar_26.pdf",
    buttonLabel: "Download Paper 15",
  },
  {
    id: "p16",
    title: "Paper 16",
    subject: "Strategic Cost Management",
    description:
      "Covers strategic cost management, quality cost management, decision-making techniques, ABM, JIT, performance evaluation, and quantitative techniques.",
    file: "/pdfs/Paper16_05.05.25_CP.pdf",
    buttonLabel: "Download Paper 16",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-white shadow-lg">
          <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
            Study Materials Portal
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Download Important Study Materials
          </h1>
          <p className="mt-4 max-w-3xl text-base text-blue-50 md:text-lg">
            Access all key papers in one place. Clean, simple, and easy for
            students to use.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Available Papers</h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Click on any paper below to download the study material PDF.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {materials.map((item) => (
            <article
              key={item.id}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    {item.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {item.subject}
                  </h3>
                </div>

                <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  PDF
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={item.file}
                  download
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  {item.buttonLabel}
                </a>

                <a
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Preview PDF
                </a>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 px-6 py-5 text-sm leading-6 text-amber-900">
          <strong>Note:</strong> Before making these PDFs publicly downloadable,
          make sure you have the legal right or permission to distribute them.
        </footer>
      </section>
    </main>
  );
}
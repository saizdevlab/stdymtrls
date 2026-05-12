const groups = [
  {
    id: "group-3",
    title: "Group 3",
    materials: [
      {
        paper: "Paper 13",
        subject: "Corporate and Economic Laws",
        file: "/pdfs/P13_new.pdf",
      },
      {
        paper: "Paper 14",
        subject: "Strategic Financial Management",
        file: "/pdfs/P14.pdf",
      },
      {
        paper: "Paper 15",
        subject: "Direct Tax Laws and International Taxation",
        file: "/pdfs/P15_Mar_26.pdf",
      },
      {
        paper: "Paper 16",
        subject: "Strategic Cost Management",
        file: "/pdfs/Paper16_05.05.25_CP.pdf",
      },
    ],
  },
  {
    id: "group-4",
    title: "Group 4",
    materials: [
      {
        paper: "Paper 17",
        subject: "Cost and Management Audit",
        file: "/pdfs/Paper17_Syll-2022_Rev_new.pdf",
      },
      {
        paper: "Paper 18",
        subject: "Corporate Financial Reporting",
        file: "/pdfs/P18_new.pdf",
      },
      {
        paper: "Paper 19",
        subject: "Indirect Tax Laws and Practice",
        file: "/pdfs/Paper19_Mar2026.pdf",
      },
      {
        paper: "Paper 20A",
        subject: "Strategic Performance Management and Business Valuation",
        file: "/pdfs/P20A_new.pdf",
      },
      {
        paper: "Paper 20B",
        subject: "Risk Management in Banking and Insurance",
        file: "/pdfs/P20B.pdf",
      },
      {
        paper: "Paper 20C",
        subject: "Entrepreneurship and Startup",
        file: "/pdfs/P20C_new.pdf",
      },
    ],
  },
    {
    id: "Others",
    title: "Other Materials",
    materials: [
      {
        paper: "Concept Book 2026",
        subject: "Concept Book 2026",
        file: "/pdfs/Concept_Book_2026.pdf",
      },
      {
        paper: "Work Book 2026",
        subject: "Work Book 2026",
        file: "/pdfs/Work_Book_2026.pdf",
      },
      {
        paper: "CMA HW MCQ PART 1",
        subject: "CMA HW MCQ PART 1",
        file: "/pdfs/MCQs_CMA_HW_Part1.pdf",
      },
      {
        paper: "CMA HW MCQ PART 2",
        subject: "CMA HW MCQ PART 2",
        file: "/pdfs/MCQs_CMA_HW_Part2.pdf",    
      },
      {
        paper: "CMA HW MCQ PART 3",
        subject: "CMA HW MCQ PART 3",
        file: "/pdfs/MCQs_CMA_HW_Part3.pdf",
      },
      {
        paper: "CMA HW MCQ PART 4",
        subject: "CMA HW MCQ PART 4",
        file: "/pdfs/MCQs_CMA_HW_Part4.pdf",
      }


    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
          <p className="text-sm font-medium text-slate-700">
            CMA Study Materials
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Simple download portal for Group 3 and Group 4 subjects
          </p>
        </div>

        <div className="space-y-6">
          {groups.map((group) => (
            <section key={group.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-800">
                  {group.title}
                </h2>
                <span className="text-xs text-slate-500">
                  {group.materials.length} subjects
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {group.materials.map((item) => (
                  <article
                    key={item.paper}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          {item.paper}
                        </p>
                        <h3 className="mt-1 text-sm font-semibold leading-5 text-slate-900">
                          {item.subject}
                        </h3>
                      </div>

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                        PDF
                      </span>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <a
                        href={item.file}
                        download
                        className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-800"
                      >
                        Download
                      </a>

                      <a
                        href={item.file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        Preview
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>


      </div>
    </main>
  );
}
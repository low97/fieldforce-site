export default function FieldForceWebsiteMockup() {
  const logoSrc = "/images/logo.jpg";

  const pages = ["Home", "About", "Services", "Industries", "Why Us", "Contact"];

  const serviceCards = [
    {
      title: "Foreign Worker Supply",
      desc: "Reliable worker sourcing and deployment support for manufacturing, logistics, and site operations.",
      tone: "from-blue-50 to-cyan-50 border-cyan-100",
    },
    {
      title: "Operations Support",
      desc: "Workers for packing, sorting, loading, unloading, handling, and daily operational activities.",
      tone: "from-orange-50 to-amber-50 border-orange-100",
    },
    {
      title: "Fast Deployment",
      desc: "Deployment can be arranged as fast as 5 days, subject to client requirements and confirmation.",
      tone: "from-sky-50 to-blue-50 border-sky-100",
    },
    {
      title: "Replacement Support",
      desc: "Worker replacement within 48 hours to help reduce disruption and maintain continuity.",
      tone: "from-slate-50 to-zinc-100 border-slate-200",
    },
    {
      title: "Factory & Warehouse Support",
      desc: "Practical manpower support for production lines, warehousing, logistics, and general labour needs.",
      tone: "from-blue-50 to-indigo-50 border-blue-100",
    },
    {
      title: "Flexible Staffing",
      desc: "Suitable for short-term, urgent, or ongoing manpower planning across multiple sectors.",
      tone: "from-orange-50 to-rose-50 border-orange-100",
    },
  ];

  const industries = [
    "Manufacturing",
    "Warehouse & Logistics",
    "Construction",
    "Food Processing",
    "Cleaning & Facility Support",
    "Plantation",
    "General Labour Support",
    "Operations Support",
  ];

  const reasons = [
    "Competitive rate as low as RM105/day",
    "Strong blue and orange corporate brand presence",
    "Fast deployment support",
    "Replacement within 48 hours",
    "Suitable for client presentations and online credibility",
    "Modern multi-page company website concept",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-sky-900 to-orange-600" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-16 right-0 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4 rounded-[2rem] border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-xl shadow-2xl w-fit">
              <img src={logoSrc} alt="Field Force Manpower Sdn Bhd logo" className="h-16 md:h-20 w-auto object-contain rounded-xl bg-white/90 p-2" />
              <div>
                <div className="text-xl md:text-2xl font-black tracking-wide">FIELD FORCE MANPOWER SDN BHD</div>
                <div className="text-sm text-cyan-100/80 tracking-[0.25em] uppercase">Empowering Your Workforce</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {pages.map((page) => (
                <button key={page} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold backdrop-blur">
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Multi-Page Corporate Website Concept
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Reduce,
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-orange-200 bg-clip-text text-transparent">
                Downtime 
              </span>
              Increase productivity with us
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
              We supply skilled and general workers with fast deployment, full compliance, and dependable service across Malaysia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-orange-500 px-7 py-3.5 text-base font-bold text-white shadow-2xl shadow-orange-500/30">
                Request Proposal
              </button>
              <button className="rounded-2xl border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur">
                Explore Services
              </button>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                ["RM105", "As low as per day"],
                ["5 Days", "Fast deployment"],
                ["48 Hours", "Replacement support"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-xl">
                  <div className="text-3xl font-black text-orange-300">{value}</div>
                  <div className="mt-1 text-sm text-white/75">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-orange-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl">
              <div className="rounded-[1.5rem] bg-slate-950/60 p-6 border border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Homepage Highlight</div>
                    <div className="mt-2 text-4xl font-black">As low as RM105/day</div>
                  </div>
                  <img src={logoSrc} alt="Field Force icon" className="h-16 w-auto rounded-2xl bg-white p-2" />
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Workers from Bangladesh, Nepal, and Myanmar",
                    "Suitable for factories, warehouse, logistics, and operations support",
                    "Fast deployment wihtin 3-5 days",
                    "Fully compliant with permit & regulations",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
                      <div className="mt-1 h-3 w-3 rounded-full bg-cyan-300" />
                      <div className="text-white/85">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Field Force Manpower</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-black">A complete solution provider</h2>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-600 font-medium">
              Pages: Home • About Us • Services • Industries • Why Choose Us • Contact
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceCards.map((service, index) => (
              <div key={service.title} className={`rounded-[2rem] p-6 shadow-xl border bg-gradient-to-br ${service.tone}`}>
                <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black shadow-lg">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sky-100 via-white to-orange-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">About Us Page</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">Professional branding with trust-focused messaging</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
              This section represents how the About page can introduce your company, showcase your market focus,
              and present your service promise in a cleaner, stronger way.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={reason} className={`rounded-3xl p-5 font-semibold shadow-lg border ${index % 2 === 0 ? "bg-white border-sky-200 text-sky-900" : "bg-orange-500 border-orange-400 text-white"}`}>
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl">
            <img src={logoSrc} alt="Field Force Manpower logo panel" className="h-24 w-auto object-contain" />
            <h3 className="mt-6 text-2xl font-black">FIELD FORCE MANPOWER SDN BHD</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We provide manpower solutions for companies that need responsive support, competitive rates, and a more professional presentation when clients review the business online.
            </p>
            <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Brand Direction</div>
              <div className="mt-2 text-3xl font-black">Blue + Orange + White</div>
              <div className="mt-2 text-white/75">A cleaner, energetic layout aligned with your actual logo colours.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">Industries Page</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">Industries we serve</h2>
            <p className="mt-4 text-white/75 text-lg">
              This page can be expanded with icons, examples, and stronger client-facing information later.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((item, index) => (
              <div key={item} className={`rounded-[2rem] p-6 border shadow-xl ${index % 2 === 0 ? "bg-white text-slate-900 border-slate-200" : "bg-gradient-to-br from-orange-500 to-orange-600 text-white border-orange-400"}`}>
                <div className="text-lg font-black">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Why Choose Us Page</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">Designed to convert attention into trust</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              This multi-page concept helps your website feel more established and gives clients more confidence before they contact you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Professional Visual Identity", "Uses your actual logo properly in the layout"],
              ["Sales-Driven Messaging", "Clear rates, deployment, and replacement points"],
              ["Premium Look", "Modern cards, gradients, and colour balance"],
              ["Expandable Structure", "Can grow into a real company site easily"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg">
                <div className="text-xl font-black">{title}</div>
                <div className="mt-2 text-slate-600">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-900 via-sky-800 to-orange-500 p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-100">Contact Page</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-black">Let’s power your workforce</h2>
                <p className="mt-4 text-lg text-white/85 max-w-xl">
                  Final call-to-action area for inquiries, quotations, and direct manpower discussions.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/10 p-6 border border-white/15 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <img src={logoSrc} alt="Field Force logo small" className="h-16 w-auto rounded-xl bg-white p-2" />
                  <div>
                    <div className="text-2xl font-black">FIELD FORCE MANPOWER SDN BHD</div>
                    <div className="text-white/70">Empowering Your Workforce</div>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-white/85 text-lg">
                  <div>Phone: 016-394 1757</div>
                  <div>Email: info@fieldforcemanpower.com</div>
                  <div>Coverage: Across Malaysia</div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="rounded-2xl bg-white px-6 py-3 font-bold text-sky-900 shadow-lg">
                    WhatsApp Now
                  </button>
                  <button className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white">
                    Request Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Navbar from "./components/Navbar";
import { useTheme } from "./providers";

const teamMembers = [
  {
    name: "Paul Angelo Derige",
    role: "Back-end Engineer · UI/UX Designer",
    bio: "Architects robust services and shapes intuitive flows so data, logic, and feel work as one.",
  },
  {
    name: "Alejandro Cerafica Jr.",
    role: "Front-end Engineer · UI/UX · Team Lead",
    bio: "Guides the squad while translating interfaces into performant web and mobile front-ends.",
  },
  {
    name: "Fortune Matthew Tamares",
    role: "Back-end Engineer · UI/UX · Lead Programmer",
    bio: "Owns mission-critical codebases, connecting product goals to ship-ready architecture.",
  },
];

export default function Home() {
  const { isDark } = useTheme();

  const heroSectionClasses = `${
    isDark
      ? "bg-gradient-to-br from-[#05010e] via-[#0b0b2c] to-[#03030e] text-white"
      : "bg-gradient-to-br from-[#f5f8ff] via-[#eef2ff] to-white text-slate-900"
  } relative overflow-hidden min-h-screen px-4 pt-28 pb-16 transition-colors sm:px-6 lg:px-8`;

  const accentTextClass = isDark ? "text-amber-300" : "text-amber-500";
  const bodyTextClass = isDark ? "text-white/70" : "text-slate-600";

  const contactCardClass = `mt-10 flex w-full max-w-5xl flex-col items-center gap-8 rounded-[999px] px-10 py-6 text-left sm:flex-row sm:justify-between`;

  const iconRingClass = isDark
    ? "border-white/30 text-white"
    : "border-slate-900/20 text-slate-900";

  const chatButtonClass = isDark
    ? "rounded-full border border-white/30 bg-white px-8 py-2.5 text-sm font-semibold text-[#0b0b2c] transition hover:bg-white/90"
    : "rounded-full border border-slate-900/20 bg-[#05010e] px-8 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#08051c] hover:shadow-lg";

  const heroGridOpacity = isDark ? "opacity-5" : "opacity-20";

  const teamSectionClasses = `${
    isDark ? "bg-[#040717] text-white" : "bg-[#f7f9ff] text-slate-900"
  } px-4 py-24 transition-colors sm:px-6 lg:px-8`;

  const teamDescriptionClass = isDark ? "text-white/70" : "text-slate-600";

  const teamCardClass = isDark
    ? "rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/20 backdrop-blur"
    : "rounded-3xl border border-slate-900/10 bg-white p-6 text-left shadow-xl shadow-slate-900/5";

  const teamRoleClass = isDark ? "text-white/60" : "text-slate-500";
  const teamBioClass = isDark ? "text-white/70" : "text-slate-600";

  return (
    <>
      <Navbar />
      <section className={heroSectionClasses}>
        <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-start space-y-8 px-4 pt-16 text-center sm:px-6 lg:px-8">
          <div className="space-y-4">
            <p className={`text-xs uppercase tracking-[0.5em] ${accentTextClass}`}>
              We are your Dev
            </p>
            <h1 className="text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              We Think. We Create. We Design. We Develop. Modern Websites &
              Systems.
            </h1>
          </div>
          <p className={`max-w-2xl text-lg ${bodyTextClass}`}>
            From concept to code—digital products built to perform and impress.
          </p>
          <div className={`${contactCardClass} w-full max-w-6xl`}>
            <p className="text-base font-medium">
              Get in contact
            </p>
            <div className="flex items-center gap-8">
              {[
                {
                  label: "Location",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s6-5.333 6-10a6 6 0 1 0-12 0c0 4.667 6 10 6 10Z"
                      />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  ),
                },
                {
                  label: "Phone",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.5 4.5 9 4l1.5 3-2 1.5a9.5 9.5 0 004 4l1.5-2L18 12l.5 2.5a2 2 0 01-1.9 2.5h-.6a11.5 11.5 0 01-8.5-8.5 2 2 0 012.5-1.9Z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 16.5v-9Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 8 7 4.5L19 8"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <span
                  key={item.label}
                  className={`flex h-14 w-14 items-center justify-center rounded-full border ${iconRingClass}`}
                  aria-label={item.label}
                >
                  {item.icon}
                </span>
              ))}
            </div>
            <button className={chatButtonClass}>Chat with us</button>
          </div>
        </div>
        <img
          src="/TopBg.svg"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-[-5%] mx-auto w-[75%] max-w-5xl ${heroGridOpacity}`}
        />
      </section>
      <section id="team" className={teamSectionClasses}>
          <div className="mx-auto w-full max-w-6xl space-y-12 px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-300">
              Our Team
            </p>
            <h2 className="text-3xl font-light sm:text-4xl">
              The trio crafting every WeDev build.
            </h2>
            <p className={teamDescriptionClass}>
              Three disciplines, one point of view. Strategy, engineering, and
              design working as a single crew you can rely on.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className={teamCardClass}
              >
                <p className={`text-sm uppercase tracking-[0.35em] ${teamRoleClass}`}>
                  {member.role}
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  {member.name}
                </h3>
                <p className={`mt-4 text-sm ${teamBioClass}`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

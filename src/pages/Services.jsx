import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { RevealMask } from "../components/motion.jsx";
import { SERVICES } from "../data/site.js";

export default function Services() {
  return (
    <main className="bg-[#F4EDDE] text-[#1F2C46] pt-28 md:pt-32" id="main" tabIndex={-1}>
      <div className="px-5 md:px-10 py-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-mega text-[#E76B46]">COMPLETE SOLUTIONS UNDER ONE ROOF</p>
          <h1 className="display text-6xl md:text-9xl leading-[0.95] mt-3">
            Our<br /><span className="italic text-[#E76B46]">services.</span>
          </h1>
        </div>
        <p className="max-w-sm text-[#1F2C46]/65 text-sm md:text-base self-end">
          We provide comprehensive, end-to-end solutions for every service we offer — from concept and planning to design, material selection, execution and final delivery.
        </p>
      </div>

      <div className="px-5 md:px-10 pb-20 grid md:grid-cols-2 gap-x-10 gap-y-0 border-t border-ink/10">
        {SERVICES.map((s, i) => (
          <RevealMask key={s.n} from={i % 2 ? "right" : "left"}>
            <div className="py-8 md:py-10 border-b border-ink/10 grid grid-cols-[4rem_1fr] md:grid-cols-[5rem_1fr] gap-x-5 items-baseline">
              <p className="display text-4xl md:text-5xl text-[#E76B46]/80 leading-none">{s.n}</p>
              <div>
                <h2 className="display text-2xl md:text-3xl leading-tight">{s.t}</h2>
                <p className="text-[#1F2C46]/65 mt-2 text-sm md:text-[15px] leading-relaxed max-w-md">{s.d}</p>
              </div>
            </div>
          </RevealMask>
        ))}
      </div>

      <section className="bg-[#1F2C46] text-[#F4EDDE] px-5 md:px-10 pt-16 md:pt-20 pb-20 md:pb-24 relative z-10 -mt-8 md:-mt-12 rounded-t-[24px] md:rounded-t-[32px]">
        <p className="text-[11px] tracking-mega text-[#E76B46] mb-2">OUR PROMISE</p>
        <h2 className="display text-4xl md:text-6xl leading-[1.05] max-w-4xl">
          From the first concept to the final completion, we provide <span className="italic text-[#E76B46]">comprehensive solutions</span> for every aspect of your project.
        </h2>
        <p className="mt-5 max-w-2xl text-sm md:text-base text-[#F4EDDE]/70">
          One team to understand your vision, plan your requirements, design your spaces and guide you through the complete process.
        </p>
        <p className="mt-8 text-xs md:text-sm tracking-[0.25em] text-[#F4EDDE]/85">ONE TEAM · ONE ROOF · COMPLETE SOLUTIONS</p>
        <Link to="/begin" className="inline-block mt-8 bg-[#E76B46] text-[#1F2C46] px-7 py-3 text-sm tracking-widest hover:bg-[#F4EDDE] transition-colors">START A PROJECT →</Link>
      </section>
      <Footer dark />
    </main>
  );
}

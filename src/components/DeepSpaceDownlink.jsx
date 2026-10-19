import React from 'react';
import { ArrowRight, Download, ExternalLink, FileText, Radio } from 'lucide-react';

export default function DeepSpaceDownlink() {
  const telemetryPackets = [
    {
      id: "TX-001",
      name: "Patrishi Sports — Athletic Event & Hardware Telemetry",
      desc: "Live platform in Aruba: Dymo hardware BIB integration, live registration APIs, athlete ranking syndication.",
      link: "https://patrishisports.com/",
      format: "LIVE · ARUBA",
      signal: "98%",
      isExternal: true
    },
    {
      id: "TX-002",
      name: "WSMode — Automated Trading Engine & Financial Ledger",
      desc: "Algorithmic trading bots, live Bitvavo/Coinbase data feeds, Apple Pay subscription checkout flows.",
      link: "https://wsmode.com/",
      format: "FINTECH · BOT",
      signal: "94%",
      isExternal: true
    },
    {
      id: "TX-003",
      name: "AudioAdvisor & Kindtokidz — High-Scale eCommerce Stores",
      desc: "BigCommerce Stencil themes, custom Handlebars matrices, Australia Post freight calculators.",
      link: "https://www.audioadvisor.com/",
      format: "BIGCOMMERCE",
      signal: "92%",
      isExternal: true
    },
    {
      id: "TX-004",
      name: "Decoupled Headless WooCommerce + FastAPI Middleware",
      desc: "React/Next.js decoupled frontend with high-throughput Python/FastAPI middleware layer and Docker containerization.",
      link: "https://ajay-chandani-portfolio.vercel.app/",
      format: "FASTAPI · RAG",
      signal: "100%",
      isExternal: true
    },
    {
      id: "TX-005",
      name: "Official Resume & Technical Leadership Dossier",
      desc: "Comprehensive career dossier covering 13+ years of engineering leadership, client scoping, and MCA credentials.",
      link: "/resume.pdf",
      format: "PDF · DOSSIER",
      signal: "100%",
      isDownload: true
    }
  ];

  return (
    <section className="section" id="reports">
      <div className="section-eyebrow">
        <span>[ DEEP SPACE NETWORK · TELEMETRY DOWNLINK ]</span>
      </div>

      <h2 className="section-title">
        Production <em>Downlinks</em>
      </h2>

      <div className="dsn">
        <div className="dsn-head">
          <span className="dsn-tag">Deep Space Network</span>
          <span className="dsn-head-rule" />
          <span className="dsn-status">
            <i className="dsn-led" />
            Signal lock &middot; 05 verified packets
          </span>
        </div>

        <div className="dsn-list">
          {telemetryPackets.map((pkt) => (
            <a
              key={pkt.id}
              className="dsn-row interactive-target"
              href={pkt.link}
              target={pkt.isExternal ? "_blank" : undefined}
              rel={pkt.isExternal ? "noopener noreferrer" : undefined}
              download={pkt.isDownload ? "Resume_Ajay_Chandani.pdf" : undefined}
              style={{ '--sig': pkt.signal }}
            >
              <span className="dsn-id">{pkt.id}</span>

              <span className="dsn-body">
                <span className="dsn-name">{pkt.name}</span>
                <span className="dsn-desc">
                  <span>{pkt.desc}</span>
                </span>
              </span>

              <span className="dsn-wave" aria-hidden="true" />

              <span className="dsn-meta">
                <span className="dsn-sig" aria-hidden="true">
                  <i />
                </span>
                <span className="dsn-fmt">{pkt.format}</span>
              </span>

              <span className="dsn-cta">
                <span>Downlink</span>
                <i>&rarr;</i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

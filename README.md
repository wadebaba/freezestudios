<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FreezeMC — Faction Survival Sunucusu</title>
<meta name="description" content="FreezeMC: Türkçe faction survival sunucusu. Topraklarını kur, ittifak yap, savaş. <%= site.serverIp %>">
<link rel="stylesheet" href="/css/main.css">
</head>
<body>

<%- include('partials/header', { active: 'home' }) %>

<section class="hero">
  <div class="hero-bg" aria-hidden="true">
    <svg viewBox="0 0 1400 700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crackGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3DD9F0" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#3DD9F0" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3DD9F0" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#3DD9F0" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="700" cy="350" r="160" fill="url(#coreGlow)" class="pulse-core"/>
      <g stroke="url(#crackGrad)" stroke-width="1.2" fill="none" class="crack-lines">
        <path d="M700 350 L820 250 L920 270 L1040 200" class="crack" style="animation-delay:0s"/>
        <path d="M700 350 L840 400 L960 380 L1100 440" class="crack" style="animation-delay:0.15s"/>
        <path d="M700 350 L580 240 L470 260 L340 190" class="crack" style="animation-delay:0.3s"/>
        <path d="M700 350 L560 420 L450 400 L300 460" class="crack" style="animation-delay:0.45s"/>
        <path d="M700 350 L700 180 L660 90" class="crack" style="animation-delay:0.6s"/>
        <path d="M700 350 L700 520 L740 610" class="crack" style="animation-delay:0.75s"/>
        <path d="M700 350 L900 330 L1080 360" class="crack" style="animation-delay:0.2s"/>
        <path d="M700 350 L500 365 L320 340" class="crack" style="animation-delay:0.5s"/>
      </g>
      <g fill="#3DD9F0" class="crack-nodes">
        <circle cx="1040" cy="200" r="2.5"/>
        <circle cx="1100" cy="440" r="2.5"/>
        <circle cx="340" cy="190" r="2.5"/>
        <circle cx="300" cy="460" r="2.5"/>
        <circle cx="660" cy="90" r="2.5"/>
        <circle cx="740" cy="610" r="2.5"/>
        <circle cx="1080" cy="360" r="2.5"/>
        <circle cx="320" cy="340" r="2.5"/>
      </g>
    </svg>
  </div>

  <div class="wrap hero-content">
    <span class="hero-tag"><%= site.heroTag %></span>
    <h1>FREEZE<span class="accent">MC</span></h1>
    <p class="hero-sub"><%= site.heroSubtitle %></p>

    <div class="ip-box">
      <span class="ip-label">Sunucu IP</span>
      <span class="ip-value" id="server-ip"><%= site.serverIp %></span>
      <button class="ip-copy" onclick="copyServerIP(this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Kopyala
      </button>
    </div>

    <div class="hero-meta">
      <span><span class="dot-online"></span> Sunucu Aktif</span>
      <span><%= site.serverVersion %></span>
      <span><%= site.serverType %></span>
    </div>
  </div>
</section>

<div class="stat-strip">
  <div class="wrap">
    <% site.stats.forEach(function(s) { %>
      <div class="stat"><div class="num"><%= s.num %></div><div class="label"><%= s.label %></div></div>
    <% }) %>
  </div>
</div>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Toprak Düzeni</span>
      <h2>Üç bölge, tek savaş alanı</h2>
      <p>Harita üç ana bölgeye ayrılır. Her bölgenin kendi riski, kendi ödülü var — nereye toprak süreceğine sen karar verirsin.</p>
    </div>
    <div class="faction-grid">
      <% site.regions.forEach(function(r) { %>
        <div class="faction-card">
          <span class="ftag"><%= r.tag %></span>
          <h3><%= r.name %></h3>
          <p><%= r.desc %></p>
          <div class="fmeta"><span>PvP: <%= r.pvp %></span><span>Claim: <%= r.claim %></span></div>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Neden FreezeMC</span>
      <h2>Sunucunun omurgası</h2>
      <p>Custom geliştirilen sistemler ve sürekli güncellenen içerikle, tipik bir faction sunucusunun ötesine geçiyoruz.</p>
    </div>
    <div class="feature-grid">
      <% site.features.forEach(function(f) { %>
        <div class="feature-card">
          <%- featureIcon(f.icon) %>
          <h3><%= f.title %></h3>
          <p><%= f.desc %></p>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="wrap">
    <h2>Toprağını kurmaya hazır mısın?</h2>
    <p>Sunucu IP'sini kopyala, Minecraft'ı aç ve ilk faction'ını kur.</p>
    <div class="cta-actions">
      <button class="btn btn-primary" onclick="copyServerIP(this)">IP'yi Kopyala</button>
      <a href="<%= site.discordUrl %>" class="btn btn-ghost">Discord'a Katıl</a>
    </div>
  </div>
</section>

<%- include('partials/footer') %>

<style>
.crack { 
  opacity: 0; 
  stroke-dasharray: 240; 
  stroke-dashoffset: 240; 
  animation: drawCrack 1.4s ease-out forwards, fadeCrack 6s ease-in-out 1.4s infinite;
}
@keyframes drawCrack { to { opacity: 1; stroke-dashoffset: 0; } }
@keyframes fadeCrack { 0%, 100% { opacity: 0.85; } 50% { opacity: 0.4; } }
.pulse-core { animation: pulseCore 4s ease-in-out infinite; }
@keyframes pulseCore { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
.crack-nodes circle { animation: nodeIn 0.4s ease-out 1.4s forwards; opacity: 0; }
@keyframes nodeIn { to { opacity: 1; } }
</style>

</body>
</html>

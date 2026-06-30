<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kurallar — FreezeMC</title>
<meta name="description" content="FreezeMC sunucu kuralları: genel davranış, PvP, faction ve mağaza kuralları.">
<link rel="stylesheet" href="/css/main.css">
<link rel="stylesheet" href="/css/pages.css">
</head>
<body>

<%- include('partials/header', { active: 'kurallar' }) %>

<section class="page-hero">
  <div class="wrap">
    <div class="breadcrumb">FREEZEMC <span class="sep">/</span> <span class="current">Kurallar</span></div>
    <h1>Sunucu Kuralları</h1>
    <p>Herkes için adil ve sürdürülebilir bir oyun ortamı için bu kurallar geçerlidir. Kuralları bilmemek ceza almanı engellemez.</p>
  </div>
</section>

<section class="section">
  <div class="wrap rules-layout">

    <aside class="rules-toc">
      <div class="toc-label">Bu Sayfada</div>
      <% rules.sections.forEach(function(sec) { %>
        <a href="#<%= sec.id %>"><%= sec.num %> — <%= sec.title %></a>
      <% }) %>
    </aside>

    <div class="rules-content">
      <% rules.sections.forEach(function(sec) { %>
        <div class="rule-block" id="<%= sec.id %>">
          <span class="rnum"><%= sec.num %></span>
          <h2><%= sec.title %></h2>

          <% sec.items.forEach(function(item) { %>
            <div class="rule-item">
              <span class="rcode"><%= item.code %></span>
              <div class="rtext">
                <h4><%= item.title %></h4>
                <p><%= item.desc %></p>
                <% if (item.penalty) { %>
                  <span class="penalty-tag penalty-<%= item.penaltyLevel %>"><%= item.penalty %></span>
                <% } %>
              </div>
            </div>
          <% }) %>
        </div>
      <% }) %>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="wrap">
    <h2>Bir kuralla ilgili itirazın mı var?</h2>
    <p>Ban itirazları ve şikayetler için Discord destek kanalını kullan.</p>
    <div class="cta-actions">
      <a href="<%= site.discordUrl %>" class="btn btn-primary">Discord'a Katıl</a>
      <a href="/forum" class="btn btn-ghost">Forumu Gez</a>
    </div>
  </div>
</section>

<%- include('partials/footer') %>
</body>
</html>

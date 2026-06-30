{
  "site": {
    "serverIp": "play.freezemc.net",
    "serverVersion": "Java 1.20+",
    "serverType": "Vanilla + Custom Plugin",
    "discordUrl": "#",
    "youtubeUrl": "#",
    "twitterUrl": "#",
    "heroTag": "FACTION SURVIVAL · MMORPG · TÜRKÇE",
    "heroSubtitle": "Buzla kaplı topraklarda kendi faction'ını kur, ittifaklar yap, düşmanlarını alt et. Ekonomi, custom enchant ve sınırsız savaş bir arada.",
    "stats": [
      {
        "num": "240+",
        "label": "AKTİF OYUNCU"
      },
      {
        "num": "38",
        "label": "AKTİF FACTION"
      },
      {
        "num": "%99.9",
        "label": "UPTIME"
      },
      {
        "num": "7/24",
        "label": "CANLI YAYINDA"
      }
    ],
    "regions": [
      {
        "tag": "BÖLGE 01",
        "name": "Safe Zone",
        "desc": "Spawn çevresi. PvP kapalı, ticaret ve hazırlık için güvenli alan.",
        "pvp": "Kapalı",
        "claim": "Açık"
      },
      {
        "tag": "BÖLGE 02",
        "name": "Frontier",
        "desc": "Orta risk bölgesi. Faction savaşları ve toprak ele geçirme burada yoğunlaşır.",
        "pvp": "Açık",
        "claim": "Açık"
      },
      {
        "tag": "BÖLGE 03",
        "name": "Frostlands",
        "desc": "Wilderness. Claim yok, en yüksek loot ve en yüksek risk. Hayatta kalan kazanır.",
        "pvp": "Açık",
        "claim": "Yok"
      }
    ],
    "features": [
      {
        "icon": "layers",
        "title": "Custom Enchant",
        "desc": "Vanilla'da bulunmayan, dengeyi bozmadan tasarlanmış 20+ özel enchant."
      },
      {
        "icon": "shield",
        "title": "Toprak Koruması",
        "desc": "Claim sistemi ile üssünü koru; faction üyelerinle yetkileri detaylı yönet."
      },
      {
        "icon": "trending",
        "title": "Dinamik Ekonomi",
        "desc": "Piyasa fiyatları oyuncu arz/talebine göre değişir; spekülasyon yapmak mümkün."
      },
      {
        "icon": "star",
        "title": "Sıralı Sezonlar",
        "desc": "Her sezon haritası sıfırlanır, en güçlü faction'lar sezon ödülü kazanır."
      },
      {
        "icon": "lock",
        "title": "Aktif Moderasyon",
        "desc": "Hile ve exploit'lere karşı 7/24 aktif yetkili ve otomatik anti-cheat sistemi."
      },
      {
        "icon": "clock",
        "title": "Düzenli Etkinlik",
        "desc": "Haftalık KOTH, event war ve özel görevlerle sürekli yeni hedefler."
      }
    ]
  },
  "store": {
    "note": "Mağazadaki hiçbir ürün savaş gücü, hasar, zırh veya enchant gücü satmaz. Tüm avantajlar kozmetik, kolaylık veya ekonomi hızlandırma amaçlıdır.",
    "products": [
      {
        "id": "frost",
        "tier": "Rütbe",
        "name": "Frost",
        "price": "₺49",
        "priceNote": "/tek seferlik",
        "featured": false,
        "perks": [
          "Özel /nick komutu",
          "2 ekstra ev (/sethome)",
          "Chat'te renkli rütbe etiketi",
          "Discord'da özel rol"
        ]
      },
      {
        "id": "glacier",
        "tier": "Rütbe",
        "name": "Glacier",
        "price": "₺149",
        "priceNote": "/tek seferlik",
        "featured": true,
        "ribbon": "En Popüler",
        "perks": [
          "Frost rütbesinin tüm ayrıcalıkları",
          "5 ekstra ev (/sethome)",
          "Özel parçacık efektleri (kozmetik)",
          "Haftalık 1 adet özel kristal kasası",
          "Öncelikli destek kanalı"
        ]
      },
      {
        "id": "aether",
        "tier": "Rütbe",
        "name": "Aether",
        "price": "₺299",
        "priceNote": "/tek seferlik",
        "featured": false,
        "perks": [
          "Glacier rütbesinin tüm ayrıcalıkları",
          "10 ekstra ev (/sethome)",
          "Aylık 1 adet kozmetik silah skin'i",
          "Forumda özel rütbe rengi",
          "Yeni sezon başlangıcında 24 saat erken giriş"
        ]
      }
    ]
  },
  "rules": {
    "sections": [
      {
        "id": "genel",
        "num": "01",
        "title": "Genel Davranış",
        "items": [
          {
            "code": "1.1",
            "title": "Saygılı iletişim",
            "desc": "Irkçılık, cinsiyetçilik, ayrımcılık veya nefret söylemi içeren hiçbir paylaşım kabul edilmez.",
            "penalty": "Kalıcı ban",
            "penaltyLevel": "high"
          },
          {
            "code": "1.2",
            "title": "Spam ve reklam",
            "desc": "Chat'te spam yapmak, başka sunucuların reklamını yapmak veya bağlantı paylaşmak yasaktır.",
            "penalty": "Mute (2 saat)",
            "penaltyLevel": "low"
          },
          {
            "code": "1.3",
            "title": "Yetkili taklidi",
            "desc": "Kendini yetkili gibi tanıtmak veya yetkili yetkisi olmadan ceza vermeye çalışmak yasaktır.",
            "penalty": "Kalıcı ban",
            "penaltyLevel": "high"
          },
          {
            "code": "1.4",
            "title": "Ticket sistemi suistimali",
            "desc": "Asılsız şikayet açmak veya destek sistemini kötüye kullanmak yasaktır.",
            "penalty": "Uyarı",
            "penaltyLevel": "low"
          }
        ]
      },
      {
        "id": "hesap",
        "num": "02",
        "title": "Hesap & Güvenlik",
        "items": [
          {
            "code": "2.1",
            "title": "Hesap paylaşımı",
            "desc": "Hesabını başka biriyle paylaşmaktan tamamen sen sorumlusun; çalınma durumunda destek ekibi yalnızca makul ölçüde yardımcı olabilir.",
            "penalty": "",
            "penaltyLevel": ""
          },
          {
            "code": "2.2",
            "title": "Alt hesap (multi-account) kullanımı",
            "desc": "Faction başına izin verilen alt hesap sayısı 1'dir; bu sınırı aşan kullanım faction'ın toprak hakkını etkiler.",
            "penalty": "Faction'a uyarı",
            "penaltyLevel": "low"
          },
          {
            "code": "2.3",
            "title": "Hile, mod ve exploit",
            "desc": "X-ray, fly, auto-clicker, hız hilesi veya herhangi bir oyun-içi hata istismarı kesinlikle yasaktır.",
            "penalty": "Kalıcı ban",
            "penaltyLevel": "high"
          }
        ]
      },
      {
        "id": "pvp",
        "num": "03",
        "title": "PvP & Savaş",
        "items": [
          {
            "code": "3.1",
            "title": "Safe zone içinde PvP",
            "desc": "Spawn ve safe zone alanlarında saldırı denemesi (combat tag dahil) yasaktır.",
            "penalty": "Mute + eşya iadesi",
            "penaltyLevel": "low"
          },
          {
            "code": "3.2",
            "title": "Combat-logging",
            "desc": "Savaş ortasında bilerek bağlantıyı kesmek (combat log) yasaktır; tespit edilen oyuncu öldürülmüş sayılır.",
            "penalty": "Otomatik ceza (eşya kaybı)",
            "penaltyLevel": "low"
          },
          {
            "code": "3.3",
            "title": "Taciz amaçlı takip (spawn-camping)",
            "desc": "Bir oyuncuyu sürekli respawn noktasında bekleyip art arda öldürmek (spawn-camp) yasaktır.",
            "penalty": "Uyarı + geçici PvP yasağı",
            "penaltyLevel": "low"
          }
        ]
      },
      {
        "id": "faction",
        "num": "04",
        "title": "Faction Kuralları",
        "items": [
          {
            "code": "4.1",
            "title": "Toprak sınırı ihlali",
            "desc": "Başka bir faction'ın claim sınırına bitişik inşa yaparak toprak genişlemesini kasıtlı engellemek (toprak hapsi) yasaktır.",
            "penalty": "Yapı kaldırma",
            "penaltyLevel": "low"
          },
          {
            "code": "4.2",
            "title": "İttifak ve ihanet",
            "desc": "Faction'lar arası ittifaklar serbesttir; oyun-içi ihanet bir kural ihlali değildir, stratejinin parçasıdır.",
            "penalty": "",
            "penaltyLevel": ""
          },
          {
            "code": "4.3",
            "title": "Liderlik anlaşmazlıkları",
            "desc": "Faction içi lider/eşya anlaşmazlıkları staff tarafından çözülmez; faction'a katılmadan önce güven inşa et.",
            "penalty": "",
            "penaltyLevel": ""
          }
        ]
      },
      {
        "id": "ekonomi",
        "num": "05",
        "title": "Ekonomi & Mağaza",
        "items": [
          {
            "code": "5.1",
            "title": "Gerçek para ile eşya/coin ticareti",
            "desc": "Oyun-içi para, eşya veya hesapların sunucu mağazası dışında gerçek parayla satılması/alınması yasaktır.",
            "penalty": "Kalıcı ban",
            "penaltyLevel": "high"
          },
          {
            "code": "5.2",
            "title": "Ödeme itirazı (chargeback)",
            "desc": "Mağazadan yapılan satın alımlara haksız yere itiraz açmak (chargeback) hesabın kalıcı olarak yasaklanmasına yol açar.",
            "penalty": "Kalıcı ban",
            "penaltyLevel": "high"
          },
          {
            "code": "5.3",
            "title": "Dupe (eşya çoğaltma)",
            "desc": "Herhangi bir dupe yöntemi kullanmak veya bilerek paylaşmak en ağır ceza kategorisindedir.",
            "penalty": "Kalıcı ban + IP ban",
            "penaltyLevel": "high"
          }
        ]
      }
    ]
  },
  "forum": {
    "categories": [
      {
        "icon": "announce",
        "name": "Duyurular",
        "desc": "Güncellemeler, sezon bilgileri, resmî açıklamalar",
        "count": "128"
      },
      {
        "icon": "chat",
        "name": "Genel Sohbet",
        "desc": "Sunucuyla ilgili her şey, tanışma ve sohbet",
        "count": "2.4K"
      },
      {
        "icon": "star",
        "name": "Faction İlanları",
        "desc": "Üye arayan ve katılmak isteyen faction'lar",
        "count": "340"
      },
      {
        "icon": "support",
        "name": "Destek & Şikayet",
        "desc": "Ban itirazları, hata bildirimleri, teknik destek",
        "count": "897"
      }
    ],
    "threads": [
      {
        "id": 1,
        "tag": "pinned",
        "tagLabel": "Sabit",
        "title": "Sezon 4 başlangıç tarihi ve harita değişiklikleri",
        "author": "FreezeMC_Yonetim",
        "time": "2 gün önce",
        "replies": 86
      },
      {
        "id": 2,
        "tag": "duyuru",
        "tagLabel": "Duyuru",
        "title": "Yeni custom enchant sistemi yayında: Frostbite & Shatter",
        "author": "FreezeMC_Dev",
        "time": "5 gün önce",
        "replies": 142
      },
      {
        "id": 3,
        "tag": "pvp",
        "tagLabel": "PvP",
        "title": "Frostlands bölgesinde KOTH event'i bu hafta sonu",
        "author": "EisigeWolf",
        "time": "6 saat önce",
        "replies": 23
      },
      {
        "id": 4,
        "tag": "genel",
        "tagLabel": "Genel",
        "title": "Yeni başlayanlar için faction kurma rehberi",
        "author": "KristalAv",
        "time": "1 gün önce",
        "replies": 57
      },
      {
        "id": 5,
        "tag": "genel",
        "tagLabel": "Genel",
        "title": "[İlan] GlacierGuard faction'ı aktif üye arıyor",
        "author": "GlacierGuard_Lider",
        "time": "1 gün önce",
        "replies": 14
      },
      {
        "id": 6,
        "tag": "pvp",
        "tagLabel": "PvP",
        "title": "Frontier bölgesi denge önerisi: spawn'a yakın claim sınırı",
        "author": "TundraReis",
        "time": "",
        "replies": 31
      },
      {
        "id": 7,
        "tag": "genel",
        "tagLabel": "Genel",
        "title": "Mağazadan aldığım Glacier rütbesi gelmedi, ne yapmalıyım?",
        "author": "PolarKurt",
        "time": "3 gün önce",
        "replies": 8
      }
    ]
  }
}
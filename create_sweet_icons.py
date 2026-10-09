import os

icons = {
    "sweet-laddu-icon.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <radialGradient id="ladduGlow" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="35%" stop-color="#F59E0B" />
      <stop offset="75%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </radialGradient>
    <filter id="ladduShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#78350F" flood-opacity="0.3" />
    </filter>
  </defs>
  <!-- Main Laddu Sphere -->
  <circle cx="50" cy="50" r="40" fill="url(#ladduGlow)" filter="url(#ladduShadow)" />
  <!-- Motichoor Bundi Texture Elements -->
  <g fill="#FBBF24" opacity="0.85">
    <circle cx="36" cy="32" r="5.5" />
    <circle cx="48" cy="26" r="4.5" />
    <circle cx="62" cy="35" r="5" />
    <circle cx="30" cy="46" r="5" />
    <circle cx="44" cy="44" r="6" />
    <circle cx="58" cy="48" r="5.5" />
    <circle cx="38" cy="60" r="5" />
    <circle cx="52" cy="62" r="5.5" />
    <circle cx="66" cy="58" r="4" />
  </g>
  <g fill="#FEF08A" opacity="0.9">
    <circle cx="40" cy="28" r="3.5" />
    <circle cx="54" cy="30" r="3" />
    <circle cx="32" cy="38" r="3" />
    <circle cx="46" cy="38" r="4" />
  </g>
  <!-- Pistachio & Almond bits -->
  <ellipse cx="44" cy="24" rx="4" ry="2" transform="rotate(-25 44 24)" fill="#15803D" />
  <ellipse cx="60" cy="42" rx="3.5" ry="1.8" transform="rotate(35 60 42)" fill="#16A34A" />
  <ellipse cx="34" cy="52" rx="4" ry="2" transform="rotate(15 34 52)" fill="#15803D" />
  <!-- Silver Vark (Edible Foil) accents -->
  <path d="M 38 22 Q 45 20 48 24 Q 42 27 38 22 Z" fill="#F8FAFC" opacity="0.9" />
  <path d="M 50 36 Q 56 34 58 39 Q 52 41 50 36 Z" fill="#FFFFFF" opacity="0.85" />
</svg>''',

    "sweet-jalebi-icon.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <radialGradient id="jalebiGlow" cx="40%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="25%" stop-color="#FB923C" />
      <stop offset="60%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#9A3412" />
    </radialGradient>
    <filter id="jalebiShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#7C2D12" flood-opacity="0.35" />
    </filter>
  </defs>
  <g filter="url(#jalebiShadow)">
    <!-- Intertwined spiral coils of Jalebi / Jangri -->
    <path d="M 50 20 
             C 68 18 82 32 82 50 
             C 82 68 68 82 50 82 
             C 32 82 18 68 18 50 
             C 18 34 30 22 46 22
             C 60 22 72 32 72 46
             C 72 60 62 70 50 70
             C 38 70 30 62 30 50
             C 30 40 38 32 48 32
             C 58 32 64 40 64 48
             C 64 56 56 60 50 60
             C 44 60 40 56 40 50
             C 40 46 44 42 48 44
             C 52 44 54 48 52 50" 
          fill="none" 
          stroke="url(#jalebiGlow)" 
          stroke-width="9" 
          stroke-linecap="round" 
          stroke-linejoin="round" />
    <!-- Glossy Sugar Syrup Highlight -->
    <path d="M 50 18 
             C 66 16 80 29 80 48 
             C 80 58 76 66 70 72
             M 46 24
             C 58 24 68 33 68 46" 
          fill="none" 
          stroke="#FEF9C3" 
          stroke-width="2.5" 
          stroke-linecap="round" 
          opacity="0.75" />
  </g>
  <!-- Glistening Saffron / Sugar Drops -->
  <circle cx="52" cy="35" r="2.5" fill="#FEF08A" opacity="0.9" />
  <circle cx="68" cy="54" r="2" fill="#FEF08A" opacity="0.8" />
  <circle cx="36" cy="62" r="2.2" fill="#FEF08A" opacity="0.85" />
</svg>''',

    "sweet-kaja-icon.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="kajaGrad" x1="0%" y1="20%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="30%" stop-color="#F59E0B" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <filter id="kajaShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#78350F" flood-opacity="0.35" />
    </filter>
  </defs>
  <!-- Flaky Andhra Madatha Kaja Diamond/Roll -->
  <g filter="url(#kajaShadow)">
    <rect x="20" y="32" width="60" height="36" rx="14" transform="rotate(-12 50 50)" fill="url(#kajaGrad)" />
    <!-- Flaky interior ribbons & pastry folds -->
    <path d="M 28 44 Q 50 36 72 40" stroke="#92400E" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7" transform="rotate(-12 50 50)" />
    <path d="M 26 50 Q 50 43 74 47" stroke="#78350F" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.75" transform="rotate(-12 50 50)" />
    <path d="M 28 56 Q 50 49 72 53" stroke="#92400E" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.65" transform="rotate(-12 50 50)" />
    <!-- Syrup gloss highlight -->
    <path d="M 32 38 Q 50 34 68 36" stroke="#FEF3C7" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.85" transform="rotate(-12 50 50)" />
  </g>
</svg>''',

    "sweet-modak-icon.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <radialGradient id="modakGrad" cx="45%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#FFFBEB" />
      <stop offset="45%" stop-color="#FDE68A" />
      <stop offset="85%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </radialGradient>
    <filter id="modakShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#78350F" flood-opacity="0.35" />
    </filter>
  </defs>
  <!-- Sacred Ganapati Modak -->
  <g filter="url(#modakShadow)">
    <path d="M 50 14 
             C 54 22 66 38 74 54 
             C 80 66 76 82 50 82 
             C 24 82 20 66 26 54 
             C 34 38 46 22 50 14 Z" 
          fill="url(#modakGrad)" />
    <!-- Fluted Modak Ridges (Kalis) -->
    <path d="M 50 16 Q 44 46 34 78" stroke="#D97706" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round" />
    <path d="M 50 16 Q 48 48 44 81" stroke="#D97706" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round" />
    <path d="M 50 16 Q 52 48 56 81" stroke="#D97706" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round" />
    <path d="M 50 16 Q 56 46 66 78" stroke="#D97706" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round" />
    <!-- Golden Apex Tip -->
    <circle cx="50" cy="15" r="3" fill="#F59E0B" />
    <!-- Saffron Tilak line on Modak -->
    <path d="M 50 36 L 50 48" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round" opacity="0.8" />
    <circle cx="50" cy="52" r="1.5" fill="#EF4444" opacity="0.8" />
  </g>
</svg>''',

    "sweet-kaju-katli-icon.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="kajuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="35%" stop-color="#FEF3C7" />
      <stop offset="70%" stop-color="#FDE68A" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <filter id="kajuShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#475569" flood-opacity="0.25" />
    </filter>
  </defs>
  <!-- Diamond Kaju Katli with Silver Vark -->
  <g filter="url(#kajuShadow)">
    <polygon points="50,18 84,50 50,82 16,50" fill="url(#kajuGrad)" stroke="#E2E8F0" stroke-width="1.5" />
    <!-- Silver Foil Texture -->
    <polygon points="42,28 65,40 52,65 30,52" fill="#F1F5F9" opacity="0.75" />
    <polygon points="56,32 74,48 62,60 48,46" fill="#FFFFFF" opacity="0.8" />
    <!-- Edge gleam -->
    <line x1="50" y1="18" x2="84" y2="50" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
  </g>
</svg>''',

    "sweet-gulab-jamun-icon.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <radialGradient id="jamunGrad" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="25%" stop-color="#92400E" />
      <stop offset="65%" stop-color="#78350F" />
      <stop offset="90%" stop-color="#451A03" />
      <stop offset="100%" stop-color="#2D1102" />
    </radialGradient>
    <filter id="jamunShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#2D1102" flood-opacity="0.4" />
    </filter>
  </defs>
  <g filter="url(#jamunShadow)">
    <!-- Spherical Gulab Jamun -->
    <circle cx="50" cy="50" r="38" fill="url(#jamunGrad)" />
    <!-- Glossy Sugar Syrup Highlight -->
    <ellipse cx="40" cy="36" rx="14" ry="8" transform="rotate(-25 40 36)" fill="#FBBF24" opacity="0.45" />
    <ellipse cx="37" cy="33" rx="7" ry="4" transform="rotate(-25 37 33)" fill="#FEF08A" opacity="0.7" />
    <!-- Pistachio sliver garnish -->
    <ellipse cx="48" cy="24" rx="4" ry="1.8" transform="rotate(20 48 24)" fill="#15803D" />
    <!-- Saffron strand -->
    <path d="M 52 28 Q 58 30 55 36" stroke="#DC2626" stroke-width="1.2" fill="none" stroke-linecap="round" />
  </g>
  <!-- Drip of rose sugar syrup -->
  <path d="M 50 88 C 47 88 45 91 45 93 C 45 96 50 99 50 99 C 50 99 55 96 55 93 C 55 91 53 88 50 88 Z" fill="#D97706" opacity="0.8" />
</svg>''',

    "petal-marigold.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <defs>
    <linearGradient id="marigoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="40%" stop-color="#FBBF24" />
      <stop offset="85%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#EA580C" />
    </linearGradient>
  </defs>
  <!-- Curled Marigold (Banthi Poola) Petal -->
  <path d="M 30 6 
           C 42 12 50 26 48 38 
           C 46 48 38 54 30 54 
           C 22 54 14 48 12 38 
           C 10 26 18 12 30 6 Z" 
        fill="url(#marigoldGrad)" />
  <path d="M 30 12 L 30 48" stroke="#D97706" stroke-width="1.2" opacity="0.5" stroke-linecap="round" />
</svg>''',

    "petal-rose.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <defs>
    <radialGradient id="roseGrad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FDF2F8" />
      <stop offset="40%" stop-color="#F472B6" />
      <stop offset="85%" stop-color="#DB2777" />
      <stop offset="100%" stop-color="#9D174D" />
    </radialGradient>
  </defs>
  <!-- Delicate Soft Rose Petal -->
  <path d="M 30 8 
           C 44 14 52 28 46 42 
           C 40 52 32 54 30 54 
           C 28 54 20 52 14 42 
           C 8 28 16 14 30 8 Z" 
        fill="url(#roseGrad)" />
</svg>''',

    "sparkle-star.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
  <defs>
    <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="40%" stop-color="#FEF08A" />
      <stop offset="70%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" stop-opacity="0" />
    </radialGradient>
  </defs>
  <!-- 4-pointed radiant sparkle star -->
  <path d="M 20 2 Q 20 20 38 20 Q 20 20 20 38 Q 20 20 2 20 Q 20 20 20 2 Z" fill="url(#starGlow)" />
  <circle cx="20" cy="20" r="3" fill="#FFFFFF" />
</svg>'''
}

dest_dir = r"c:\Users\PHANINDRA\Downloads\Ganapathi Sweet House\assets\icons"
for fname, content in icons.items():
    fpath = os.path.join(dest_dir, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Created {fname} successfully")

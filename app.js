const defaultData = {
  site: {
    name: 'عبدالرحمن عبدالعزيز الجابري',
    title: 'مستشار تربوي وأسري',
    description: 'أقدم الاستشارات التربوية والأسرية والإرشادية بشكل مهني ومرن، مع دعم عملي قائم على الخبرة العملية، التحليل العميق، والتوجيه الهادف.',
    email: 'info@abdulrahman-jabri.com',
    phone: '+966500000000',
    xHandle: '@abdulrahman_jabri',
    xUrl: 'https://x.com/abdulrahman_jabri',
    instagram: 'https://instagram.com',
    address: 'المملكة العربية السعودية',
    primaryColor: '#102a43',
    secondaryColor: '#dfeaf4',
    accentColor: '#4a90e2',
    fontFamily: 'Cairo',
    heroImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
  },
  nav: [
    { label: 'الرئيسية', href: '#home', section: 'home' },
    { label: 'نبذة عني', href: '#about', section: 'about' },
    { label: 'خبراتي', href: '#experience', section: 'experience' },
    { label: 'خدماتي', href: '#services', section: 'services' },
    { label: 'المحتوى', href: '#articles', section: 'articles' },
    { label: 'تواصل', href: '#contact', section: 'contact' }
  ],
  heroMetrics: [
    { value: '7+', label: 'سنوات خبرة' },
    { value: '500+', label: 'جلسة استشارية' },
    { value: '90%', label: 'رضا العملاء' }
  ],
  features: [
    { title: 'التقييم والتشخيص', text: 'تحليل مشكلات الطلاب والأسرة والمؤسسات التعليمية لتحديد أولويات الدعم وبناء الحلول المناسبة.' },
    { title: 'الاستشارات التربوية', text: 'توجيه تربوي مخصص للطلاب، الأسر، المؤسسات التعليمية، ومعالجة التحديات السلوكية والنفسية.' },
    { title: 'إدارة الحالات', text: 'دعم مستمر لمتابعة المشكلات المعقدة عبر خطة عملية ومؤشرات واضحة للتقييم والمتابعة.' }
  ],
  about: {
    title: 'نبذة عني',
    text: 'أنا عبدالرحمن عبدالعزيز الجابري، مستشار تربوي وأسري متخصص في تقديم الدعم الإرشادي والتحليلي للأسر والطلاب والمؤسسات التعليمية. أعمل على بناء حلول عملية قائمة على الخبرة، التحليل، والفهم العميق للسياق النفسي والتربوي.',
    bullets: [
      'خبرة عملية تتجاوز سبع سنوات في المجال التربوي والإرشادي.',
      'خبرة في التوجيه المدرسي، التعامل مع المشكلات السلوكية والتربوية.',
      'عمل مع الأسر والطلاب في تحليل المشكلات وتحديد المتطلبات الفردية.',
      'خبرة في إدارة الخدمات التعليمية والبرامج التوعوية والمهارية.'
    ]
  },
  services: [
    {
      id: 's1',
      title: 'الاستشارات التربوية',
      badge: 'بالأخص للأطفال والطلاب',
      points: ['دعم الطلاب في الأداء الأكاديمي والتكيف', 'تحديد المشكلات التعلمية والسلوكية', 'توصيات عملية للوالدين والمعلمين'],
      button: 'احجز استشارة'
    },
    {
      id: 's2',
      title: 'الاستشارات الأسرية',
      badge: 'موجهة للأسرة',
      points: ['حل النزاعات الأسرية', 'تطوير مهارات التواصل', 'تسوية التحديات السلوكية'],
      button: 'احجز استشارة'
    },
    {
      id: 's3',
      title: 'الإرشاد النفسي والتوجيه',
      badge: 'معالجة معتمدة',
      points: ['تحليل المشكلات النفسية', 'إرشاد نفسي وفق الاختصاص', 'خطة دعم متكاملة'],
      button: 'احجز استشارة'
    }
  ],
  experiences: [
    {
      role: 'مستشار تربوي وأسري',
      employer: 'ممارسات مستقلة',
      period: '2021 - حتى الآن',
      description: 'تقديم الاستشارات التربوية والأسرية، دعم الطلاب والأسرة في التعامل مع المشكلات النفسية والتربوية، ووضع خطط تعزيز الأداء.',
      achievements: ['مراجعة الحالات الفردية', 'توجيهات عملية مع الأسر', 'حلول مخصصة للطلاب']
    },
    {
      role: 'رئيس تنفيذي',
      employer: 'منصة إسناد للخدمات البحثية والأكاديمية',
      period: '2022 - حتى الآن',
      description: 'إدارة الأعمال، تطوير الخدمات، متابعة العمليات التشغيلية، وتحسين جودة تقديم الخدمات للمتعاملين.',
      achievements: ['تطوير الخدمات', 'إدارة العمليات', 'تحسين الجودة']
    },
    {
      role: 'مدرس / مرشد تربوي',
      employer: 'قطاع تعليمي',
      period: '2018 - 2022',
      description: 'إدارة الصفوف، متابعة الطلاب، دعم السلوك الإيجابي، وتطوير خطط دعم تربوية داخل المدرسة.',
      achievements: ['إرشاد الطلاب', 'إدارة الفصول', 'تطوير مهارات التفاعل']
    }
  ],
  articles: [
    {
      id: 'a1',
      title: 'كيف تنشئ بيئة تعليمية داعمة للطلاب؟',
      category: 'تربوي',
      date: '16 سبتمبر 2026',
      excerpt: 'نستعرض العناصر الأساسية للبيئة التعليمية المثالية وكيف يمكن للأسرة والمعلم أن يساهموا في دعم الطالب.'
    },
    {
      id: 'a2',
      title: 'استراتيجيات التعامل مع التحديات السلوكية في المدرسة',
      category: 'إرشادي',
      date: '02 أكتوبر 2026',
      excerpt: 'طرق عملية ومهنية للتعامل مع المشكلات السلوكية وتنظيم استجابة مناسبة ومنسقة للأزمات الصغيرة.'
    },
    {
      id: 'a3',
      title: 'كيف يساهم التواصل الأسري في نجاح الطالب؟',
      category: 'أسري',
      date: '11 أكتوبر 2026',
      excerpt: 'التواصل الفعّال بين الأسرة والمدرسة يعزز الثقة والالتزام والنجاح النفسي والاكاديمي للطفل.'
    }
  ],
  xTweets: [
    'الاهتمام بالبيئة النفسية للطالب يفتح الطريق للنجاح الأكاديمي والسلوكي في نفس الوقت.',
    'الاستشارة الأسرية ليست تقييماً، بل هي خطة فاعلة لبناء تواصل صحي وتعزيز الاستقرار.',
    'التحليل المبدئي للمشكلة يساعد على تحديد الطريق الصحيح للتدخل المبكر والفعال.'
  ],
  contact: {
    intro: 'تواصل معي لاستشارة تربوية أو أسرية أو إرشادية مناسبة لطبيعة حالتك.',
    email: 'info@abdulrahman-jabri.com',
    phone: '+966500000000',
    whatsapp: 'https://wa.me/966500000000'
  },
  pages: [
    { slug: 'home', title: 'الرئيسية', visible: true },
    { slug: 'about', title: 'نبذة عني', visible: true },
    { slug: 'services', title: 'الخدمات', visible: true },
    { slug: 'experience', title: 'الخبرات', visible: true },
    { slug: 'articles', title: 'المحتوى', visible: true },
    { slug: 'contact', title: 'تواصل', visible: true }
  ],
  bookings: [],
  users: [
    { name: 'مدير الموقع', role: 'مدير كامل', email: 'admin@site.com' },
    { name: 'محرر المحتوى', role: 'محرر صفحات', email: 'editor@site.com' },
    { name: 'إدارة المواعيد', role: 'مدير حجوزات', email: 'booking@site.com' }
  ],
  media: [
    { name: 'ملف تعريفي', type: 'pdf', src: '#', featured: false },
    { name: 'صورة شخصية', type: 'image', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80', featured: true }
  ],
  customSections: [
    { title: 'تحليل الحالات', text: 'تقييم مبكر للمشكلة وتحديد أولويات التدخل.' },
    { title: 'خيارات الدعم', text: 'خطط عملية ومتابعة مستمرة وتقييم دوري.' }
  ],
  buttons: [
    { label: 'تعرف علي', href: '#about' },
    { label: 'خدماتي', href: '#services' },
    { label: 'احجز موعدًا', href: '#contact' }
  ]
};

const STORAGE_KEY = 'abdulrahman-site-data';

function readData() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  if (!storageData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return structuredClone(defaultData);
  }
  try {
    return JSON.parse(storageData);
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    return structuredClone(defaultData);
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function renderHeader(data) {
  const navItems = (data.nav || []).map((item) => {
    return `<a href="${item.href}" class="${item.section === 'home' ? 'active' : ''}">${item.label}</a>`;
  }).join('');

  return `
    <header class="site-header">
      <div class="container">
        <div class="brand" aria-label="brand">
          <div class="brand-mark">ع</div>
          <span>${data.site.name}</span>
        </div>
        <nav class="main-nav" aria-label="القائمة الرئيسية">${navItems}</nav>
        <div class="header-actions">
          <a href="#contact" class="btn btn-secondary">تواصل معي</a>
          <a href="admin.html" class="btn btn-outline" target="_blank">لوحة التحكم</a>
        </div>
      </div>
    </header>
  `;
}

function renderHero(data) {
  const metrics = (data.heroMetrics || []).map((item) => `
    <div class="metric-card">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join('');

  const buttons = (data.buttons || []).map((button) => {
    return `<a href="${button.href}" class="btn ${button.label === 'احجز موعدًا' ? 'btn-primary' : 'btn-secondary'}">${button.label}</a>`;
  }).join('');

  return `
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">مستشار تربوي وأسري</div>
          <h1>${data.site.name}</h1>
          <p>${data.site.description}</p>
          <div class="hero-actions">${buttons}</div>
          <div class="hero-metrics">${metrics}</div>
        </div>
        <div class="hero-visual">
          <div class="profile-frame">
            <div class="profile-card">
              <img src="${data.site.heroImage}" alt="عبدالرحمن عبدالعزيز الجابري" />
            </div>
          </div>
          <div class="badge-box">
            <strong>${data.site.title}</strong>
            <span>التوجيه والإرشاد والاستشارات المهنية</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFeatures(data) {
  const cards = (data.features || []).map((feature) => `
    <article class="card">
      <div class="feature-icon">✦</div>
      <h3>${feature.title}</h3>
      <p>${feature.text}</p>
    </article>
  `).join('');

  return `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="eyebrow">أماكن التركيز</div>
            <h2>أبرز المجالات المهنية</h2>
          </div>
        </div>
        <div class="grid-3">${cards}</div>
      </div>
    </section>
  `;
}

function renderAbout(data) {
  const bullets = (data.about.bullets || []).map((item) => `<li>${item}</li>`).join('');

  return `
    <section class="section" id="about">
      <div class="container about-layout">
        <div class="about-box">
          <h3>${data.about.title}</h3>
          <p>${data.about.text}</p>
          <ul class="about-list">${bullets}</ul>
        </div>
        <div class="card">
          <div class="feature-icon">✓</div>
          <h3>الخبرات والمؤهلات</h3>
          <p>أمتلك خبرة عملية متراكمة في مجالات التعليم، الإدارة المدرسية، التوجيه، والاستشارات الأسرية. أركز على تقديم حلول عملية ومهنية ترتكز على التحليل والتقييم، مع مراعاة الخصائص الفردية لكل حالة.</p>
          <div class="section" style="padding: 0; margin-top: 18px;">
            <div class="grid-3">
              <div class="card">
                <strong style="display:block; font-size:1.5rem; color: var(--primary);">7+</strong>
                <span style="color: var(--muted);">سنوات في المجال</span>
              </div>
              <div class="card">
                <strong style="display:block; font-size:1.5rem; color: var(--primary);">15+</strong>
                <span style="color: var(--muted);">مؤسسة وعملية</span>
              </div>
              <div class="card">
                <strong style="display:block; font-size:1.5rem; color: var(--primary);">500+</strong>
                <span style="color: var(--muted);">جلسات موجهة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServices(data) {
  const cards = (data.services || []).map((service) => `
    <article class="card service-card">
      <span class="service-tag">${service.badge}</span>
      <h3>${service.title}</h3>
      <ul>
        ${(service.points || []).map((point) => `<li>${point}</li>`).join('')}
      </ul>
      <div style="margin-top: 18px;">
        <a href="#contact" class="btn btn-primary">${service.button}</a>
      </div>
    </article>
  `).join('');

  return `
    <section class="section" id="services">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="eyebrow">خدماتي الاستشارية</div>
            <h2>خدمات مخصصة حسب احتياج كل حالة</h2>
          </div>
        </div>
        <div class="grid-3">${cards}</div>
      </div>
    </section>
  `;
}

function renderExperience(data) {
  const cards = (data.experiences || []).map((exp) => `
    <article class="card experience-card">
      <div class="experience-top">
        <strong>${exp.role}</strong>
        <span>${exp.period}</span>
      </div>
      <div class="experience-meta">${exp.employer}</div>
      <p>${exp.description}</p>
      <ul class="about-list">${(exp.achievements || []).map((a) => `<li>${a}</li>`).join('')}</ul>
    </article>
  `).join('');

  return `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="eyebrow">خبراتي المهنية</div>
            <h2>الخبرات والإنجازات</h2>
          </div>
        </div>
        <div class="timeline">${cards}</div>
      </div>
    </section>
  `;
}

function renderArticles(data) {
  const cards = (data.articles || []).map((article) => `
    <article class="card article-card">
      <div class="article-image">✍️</div>
      <div class="article-meta">
        <span>${article.category}</span>
        <span>${article.date}</span>
      </div>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
    </article>
  `).join('');

  return `
    <section class="section" id="articles">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="eyebrow">المحتوى المهني</div>
            <h2>مقالات وأفكار تربوية وإرشادية</h2>
          </div>
        </div>
        <div class="article-grid">${cards}</div>
      </div>
    </section>
  `;
}

function renderXSection(data) {
  const tweets = (data.xTweets || []).map((tweet) => `<div class="tweet">${tweet}</div>`).join('');

  return `
    <section class="section">
      <div class="container x-box">
        <div class="x-header">
          <strong>تغريدات X</strong>
          <a href="${data.site.xUrl}" class="btn btn-secondary" target="_blank">عرض الحساب</a>
        </div>
        <div class="x-tweets">${tweets}</div>
      </div>
    </section>
  `;
}

function renderContact(data) {
  return `
    <section class="section" id="contact">
      <div class="container contact-wrap">
        <div class="contact-panel">
          <h3>تواصل معي مباشرة</h3>
          <p>${data.contact.intro}</p>
          <ul class="contact-list">
            <li>📧 ${data.contact.email}</li>
            <li>📱 ${data.contact.phone}</li>
            <li>💬 ${data.site.xHandle}</li>
          </ul>
        </div>
        <div class="contact-form">
          <form>
            <div class="input-row">
              <div class="field">
                <label>الاسم</label>
                <input type="text" placeholder="اكتب اسمك" />
              </div>
              <div class="field">
                <label>البريد الإلكتروني</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div class="input-row">
              <div class="field">
                <label>نوع الاستشارة</label>
                <select>
                  <option>استشارة تربوية</option>
                  <option>استشارة أسرية</option>
                  <option>إرشاد نفسي</option>
                  <option>دراسة حالة</option>
                </select>
              </div>
              <div class="field">
                <label>تاريخ الموعد</label>
                <input type="date" />
              </div>
            </div>
            <div class="field">
              <label>ملاحظاتك</label>
              <textarea placeholder="اكتب وصفًا مختصرًا للحالة أو طلب الاستشارة"></textarea>
            </div>
            <button type="button" class="btn btn-primary">إرسال الطلب</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(data) {
  return `
    <footer class="site-footer">
      <div class="container">
        <div>© 2026 ${data.site.name}</div>
        <div>كل الحقوق محفوظة</div>
      </div>
    </footer>
  `;
}

function renderSite() {
  const data = readData();
  const root = document.getElementById('app');

  root.innerHTML = `
    ${renderHeader(data)}
    ${renderHero(data)}
    ${renderFeatures(data)}
    ${renderAbout(data)}
    ${renderServices(data)}
    ${renderExperience(data)}
    ${renderArticles(data)}
    ${renderXSection(data)}
    ${renderContact(data)}
    ${renderFooter(data)}
  `;
}

renderSite();

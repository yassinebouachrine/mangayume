/* ══════════════════════════════════════
   MANGA YUME — App + i18n
   ══════════════════════════════════════ */
const API = '/api';
const PH = 'https://placehold.co';

// ══════════════════════════════════════
// TRANSLATIONS
// ══════════════════════════════════════
const I18N = {
  fr: {
    // Nav
    nav_home: 'Accueil', nav_browse: 'Explorer', nav_latest: 'Récents',
    nav_navigation: 'Navigation', nav_favorites: 'Favoris', nav_admin: 'Admin',
    nav_logout: 'Déconnexion', nav_login: 'Connexion',
    // Search
    search_placeholder: 'Rechercher manga, manhwa, manhua...',
    search_no_result: 'Aucun résultat',
    // Auth
    auth_login: 'Connexion', auth_register: 'Inscription',
    auth_email: 'Email', auth_password: 'Mot de passe', auth_username: 'Pseudo',
    auth_login_btn: 'Se connecter', auth_register_btn: "S'inscrire",
    auth_login_prompt: 'Connectez-vous pour commenter',
    // Home
    home_popular: 'Populaire', home_latest: 'Dernières Mises à Jour',
    home_see_all: 'Tout', home_read: 'Lire', home_details: 'Détails',
    // Browse
    browse_filters: 'Filtres', browse_reset: 'Reset',
    browse_type: 'Type', browse_status: 'Statut', browse_sort: 'Trier',
    browse_search: 'Recherche', browse_genres: 'Genres',
    browse_all: 'Tous', browse_filter_btn: 'Filtrer',
    browse_results: 'résultat(s)', browse_no_result: 'Aucun résultat',
    // Types
    type_manga: 'Manga', type_manhwa: 'Manhwa', type_manhua: 'Manhua', type_webtoon: 'Webtoon',
    // Status
    status_ongoing: 'En cours', status_completed: 'Terminé', status_hiatus: 'En pause', status_cancelled: 'Annulé',
    status_all: 'Tous les statuts',
    // Sort
    sort_recent: 'Récent', sort_rating: 'Note', sort_popular: 'Populaire', sort_az: 'A-Z',
    // Detail
    detail_rating: 'Note', detail_status: 'Statut', detail_author: 'Auteur',
    detail_chapters: 'Chapitres', detail_views: 'Vues', detail_year: 'Année',
    detail_first_ch: 'Ch. 1', detail_last_ch: 'Dernier',
    detail_tab_chapters: 'Chapitres', detail_tab_comments: 'Commentaires',
    detail_reverse: 'Inverser', detail_no_chapters: 'Aucun chapitre',
    // Comments
    comment_write: 'Écrire un commentaire...', comment_publish: 'Publier',
    comment_spoiler: 'Spoiler', comment_reply: 'Répondre', comment_delete: 'Supprimer',
    comment_none: 'Aucun commentaire', comment_be_first: 'Soyez le premier!',
    comment_reply_ph: 'Réponse...', comment_cancel: 'Annuler',
    comment_deleted: '[Commentaire supprimé]', comment_edited: '(modifié)',
    // Reader
    reader_end: 'Fin du chapitre', reader_prev: 'Précédent', reader_next: 'Suivant',
    reader_chapter: 'Chapitre',
    // Admin
    admin_panel: 'Panel Admin', admin_add_manga: 'Ajouter Manga',
    admin_manage: 'Gérer', admin_edit: 'Modifier', admin_add_chapter: 'Ajouter Chapitre',
    admin_title: 'Titre', admin_alt_titles: 'Titres alt.', admin_author: 'Auteur',
    admin_artist: 'Artiste', admin_year: 'Année', admin_featured: 'En vedette',
    admin_description: 'Description', admin_cover: 'Couverture',
    admin_cover_hint: 'Image de couverture', admin_create: 'Créer',
    admin_save: 'Sauvegarder', admin_load: 'Charger', admin_manga_id: 'ID du Manga',
    admin_ch_number: 'N° Chapitre', admin_ch_title: 'Titre du chapitre',
    admin_pages_count: 'Nombre de pages', admin_page: 'Page',
    admin_upload: 'Uploader', admin_no_manga: 'Aucun manga',
    admin_edit_manga: 'Modifier un Manga', admin_new_manga: 'Nouveau Manga',
    admin_new_cover: 'Nouvelle couverture (optionnel)',
    admin_keep_current: 'Laisser vide pour garder l\'actuelle',
    admin_id_hint: 'Trouvez l\'ID dans "Gérer"',
    admin_pages_hint: 'Générer les champs d\'upload',
    admin_ch_pages: 'Pages du chapitre',
    // Favorites
    fav_title: 'Mes Favoris', fav_none: 'Aucun favori',
    fav_added: 'Favori ajouté!', fav_removed: 'Favori retiré',
    fav_login: 'Connectez-vous',
    // Footer
    footer_desc: 'Votre plateforme de lecture de manga, manhwa et manhua préférée.',
    footer_popular_genres: 'Genres Populaires',
    footer_copy: '© 2024 Manga Yume — Read Your Dreams. Tous droits réservés.',
    // Misc
    yes: 'Oui', no: 'Non', error: 'Erreur', retry: 'Réessayer',
    confirm_delete: 'Supprimer ?', loading: 'Chargement...',
    upload_progress: 'Upload en cours...', success_created: 'Créé avec succès!',
    success_modified: 'Modifié!', success_deleted: 'Supprimé',
    connected: 'Connecté!', disconnected: 'Déconnecté',
    welcome: 'Bienvenue sur Manga Yume!', empty_comment: 'Commentaire vide',
    image_required: 'Image requise', fill_required: 'Champs requis',
    at_least_1_page: 'Au moins 1 page', add_image: 'Ajoutez au moins une image',
    chapter_added: 'Chapitre ajouté!', published: 'Publié!',
    reply_published: 'Réponse publiée!', access_denied: 'Accès admin requis',
    not_found: 'Non trouvé',
    // Time
    time_just_now: "à l'instant", time_ago: 'il y a',
    time_year: 'année', time_years: 'années', time_month: 'mois',
    time_week: 'semaine', time_weeks: 'semaines',
    time_day: 'jour', time_days: 'jours',
    time_hour: 'heure', time_hours: 'heures',
    time_minute: 'minute', time_minutes: 'minutes',
  },

  en: {
    nav_home: 'Home', nav_browse: 'Browse', nav_latest: 'Latest',
    nav_navigation: 'Navigation', nav_favorites: 'Favorites', nav_admin: 'Admin',
    nav_logout: 'Logout', nav_login: 'Login',
    search_placeholder: 'Search manga, manhwa, manhua...',
    search_no_result: 'No results',
    auth_login: 'Login', auth_register: 'Register',
    auth_email: 'Email', auth_password: 'Password', auth_username: 'Username',
    auth_login_btn: 'Sign in', auth_register_btn: 'Sign up',
    auth_login_prompt: 'Login to comment',
    home_popular: 'Popular', home_latest: 'Latest Updates',
    home_see_all: 'All', home_read: 'Read', home_details: 'Details',
    browse_filters: 'Filters', browse_reset: 'Reset',
    browse_type: 'Type', browse_status: 'Status', browse_sort: 'Sort',
    browse_search: 'Search', browse_genres: 'Genres',
    browse_all: 'All', browse_filter_btn: 'Filter',
    browse_results: 'result(s)', browse_no_result: 'No results',
    type_manga: 'Manga', type_manhwa: 'Manhwa', type_manhua: 'Manhua', type_webtoon: 'Webtoon',
    status_ongoing: 'Ongoing', status_completed: 'Completed', status_hiatus: 'Hiatus', status_cancelled: 'Cancelled',
    status_all: 'All statuses',
    sort_recent: 'Recent', sort_rating: 'Rating', sort_popular: 'Popular', sort_az: 'A-Z',
    detail_rating: 'Rating', detail_status: 'Status', detail_author: 'Author',
    detail_chapters: 'Chapters', detail_views: 'Views', detail_year: 'Year',
    detail_first_ch: 'Ch. 1', detail_last_ch: 'Latest',
    detail_tab_chapters: 'Chapters', detail_tab_comments: 'Comments',
    detail_reverse: 'Reverse', detail_no_chapters: 'No chapters',
    comment_write: 'Write a comment...', comment_publish: 'Publish',
    comment_spoiler: 'Spoiler', comment_reply: 'Reply', comment_delete: 'Delete',
    comment_none: 'No comments', comment_be_first: 'Be the first!',
    comment_reply_ph: 'Reply...', comment_cancel: 'Cancel',
    comment_deleted: '[Comment deleted]', comment_edited: '(edited)',
    reader_end: 'End of chapter', reader_prev: 'Previous', reader_next: 'Next',
    reader_chapter: 'Chapter',
    admin_panel: 'Admin Panel', admin_add_manga: 'Add Manga',
    admin_manage: 'Manage', admin_edit: 'Edit', admin_add_chapter: 'Add Chapter',
    admin_title: 'Title', admin_alt_titles: 'Alt. titles', admin_author: 'Author',
    admin_artist: 'Artist', admin_year: 'Year', admin_featured: 'Featured',
    admin_description: 'Description', admin_cover: 'Cover',
    admin_cover_hint: 'Cover image', admin_create: 'Create',
    admin_save: 'Save', admin_load: 'Load', admin_manga_id: 'Manga ID',
    admin_ch_number: 'Chapter #', admin_ch_title: 'Chapter title',
    admin_pages_count: 'Number of pages', admin_page: 'Page',
    admin_upload: 'Upload', admin_no_manga: 'No manga',
    admin_edit_manga: 'Edit a Manga', admin_new_manga: 'New Manga',
    admin_new_cover: 'New cover (optional)',
    admin_keep_current: 'Leave empty to keep current',
    admin_id_hint: 'Find the ID in "Manage"',
    admin_pages_hint: 'Generate upload fields',
    admin_ch_pages: 'Chapter pages',
    fav_title: 'My Favorites', fav_none: 'No favorites',
    fav_added: 'Added to favorites!', fav_removed: 'Removed from favorites',
    fav_login: 'Sign in',
    footer_desc: 'Your favorite manga, manhwa, and manhua reading platform.',
    footer_popular_genres: 'Popular Genres',
    footer_copy: '© 2024 Manga Yume — Read Your Dreams. All rights reserved.',
    yes: 'Yes', no: 'No', error: 'Error', retry: 'Retry',
    confirm_delete: 'Delete?', loading: 'Loading...',
    upload_progress: 'Uploading...', success_created: 'Created!',
    success_modified: 'Modified!', success_deleted: 'Deleted',
    connected: 'Connected!', disconnected: 'Disconnected',
    welcome: 'Welcome to Manga Yume!', empty_comment: 'Empty comment',
    image_required: 'Image required', fill_required: 'Required fields',
    at_least_1_page: 'At least 1 page', add_image: 'Add at least one image',
    chapter_added: 'Chapter added!', published: 'Published!',
    reply_published: 'Reply published!', access_denied: 'Admin access required',
    not_found: 'Not found',
    time_just_now: 'just now', time_ago: '',
    time_year: 'year', time_years: 'years', time_month: 'month',
    time_week: 'week', time_weeks: 'weeks',
    time_day: 'day', time_days: 'days',
    time_hour: 'hour', time_hours: 'hours',
    time_minute: 'minute', time_minutes: 'minutes',
  },

  ar: {
    nav_home: 'الرئيسية', nav_browse: 'استكشاف', nav_latest: 'الأحدث',
    nav_navigation: 'التنقل', nav_favorites: 'المفضلة', nav_admin: 'الإدارة',
    nav_logout: 'تسجيل خروج', nav_login: 'تسجيل دخول',
    search_placeholder: 'البحث عن مانجا، مانهوا...',
    search_no_result: 'لا توجد نتائج',
    auth_login: 'تسجيل دخول', auth_register: 'إنشاء حساب',
    auth_email: 'البريد', auth_password: 'كلمة المرور', auth_username: 'اسم المستخدم',
    auth_login_btn: 'دخول', auth_register_btn: 'تسجيل',
    auth_login_prompt: 'سجل دخولك للتعليق',
    home_popular: 'الأكثر شعبية', home_latest: 'آخر التحديثات',
    home_see_all: 'الكل', home_read: 'قراءة', home_details: 'تفاصيل',
    browse_filters: 'التصفية', browse_reset: 'إعادة',
    browse_type: 'النوع', browse_status: 'الحالة', browse_sort: 'الترتيب',
    browse_search: 'بحث', browse_genres: 'الأنواع',
    browse_all: 'الكل', browse_filter_btn: 'تصفية',
    browse_results: 'نتيجة', browse_no_result: 'لا توجد نتائج',
    type_manga: 'مانجا', type_manhwa: 'مانهوا', type_manhua: 'مانهوا صينية', type_webtoon: 'ويبتون',
    status_ongoing: 'مستمر', status_completed: 'مكتمل', status_hiatus: 'متوقف', status_cancelled: 'ملغى',
    status_all: 'كل الحالات',
    sort_recent: 'الأحدث', sort_rating: 'التقييم', sort_popular: 'الأشهر', sort_az: 'أ-ي',
    detail_rating: 'التقييم', detail_status: 'الحالة', detail_author: 'المؤلف',
    detail_chapters: 'الفصول', detail_views: 'المشاهدات', detail_year: 'السنة',
    detail_first_ch: 'الفصل 1', detail_last_ch: 'الأخير',
    detail_tab_chapters: 'الفصول', detail_tab_comments: 'التعليقات',
    detail_reverse: 'عكس', detail_no_chapters: 'لا توجد فصول',
    comment_write: 'اكتب تعليقاً...', comment_publish: 'نشر',
    comment_spoiler: 'حرق أحداث', comment_reply: 'رد', comment_delete: 'حذف',
    comment_none: 'لا توجد تعليقات', comment_be_first: 'كن أول من يعلق!',
    comment_reply_ph: 'ردّ...', comment_cancel: 'إلغاء',
    comment_deleted: '[تم حذف التعليق]', comment_edited: '(معدّل)',
    reader_end: 'نهاية الفصل', reader_prev: 'السابق', reader_next: 'التالي',
    reader_chapter: 'فصل',
    admin_panel: 'لوحة الإدارة', admin_add_manga: 'إضافة مانجا',
    admin_manage: 'إدارة', admin_edit: 'تعديل', admin_add_chapter: 'إضافة فصل',
    admin_title: 'العنوان', admin_alt_titles: 'عناوين بديلة', admin_author: 'المؤلف',
    admin_artist: 'الرسام', admin_year: 'السنة', admin_featured: 'مميز',
    admin_description: 'الوصف', admin_cover: 'الغلاف',
    admin_cover_hint: 'صورة الغلاف', admin_create: 'إنشاء',
    admin_save: 'حفظ', admin_load: 'تحميل', admin_manga_id: 'رقم المانجا',
    admin_ch_number: 'رقم الفصل', admin_ch_title: 'عنوان الفصل',
    admin_pages_count: 'عدد الصفحات', admin_page: 'صفحة',
    admin_upload: 'رفع', admin_no_manga: 'لا توجد مانجا',
    admin_edit_manga: 'تعديل مانجا', admin_new_manga: 'مانجا جديدة',
    admin_new_cover: 'غلاف جديد (اختياري)',
    admin_keep_current: 'اتركه فارغاً للاحتفاظ بالحالي',
    admin_id_hint: 'ابحث عن الرقم في "إدارة"',
    admin_pages_hint: 'أنشئ حقول الرفع',
    admin_ch_pages: 'صفحات الفصل',
    fav_title: 'مفضلاتي', fav_none: 'لا توجد مفضلات',
    fav_added: 'أُضيف للمفضلة!', fav_removed: 'أُزيل من المفضلة',
    fav_login: 'سجل دخولك',
    footer_desc: 'منصتك المفضلة لقراءة المانجا والمانهوا.',
    footer_popular_genres: 'أنواع شائعة',
    footer_copy: '© 2024 Manga Yume — اقرأ أحلامك. جميع الحقوق محفوظة.',
    yes: 'نعم', no: 'لا', error: 'خطأ', retry: 'إعادة',
    confirm_delete: 'حذف؟', loading: 'جاري التحميل...',
    upload_progress: 'جاري الرفع...', success_created: 'تم الإنشاء!',
    success_modified: 'تم التعديل!', success_deleted: 'تم الحذف',
    connected: 'تم الاتصال!', disconnected: 'تم قطع الاتصال',
    welcome: 'مرحباً بك في Manga Yume!', empty_comment: 'تعليق فارغ',
    image_required: 'الصورة مطلوبة', fill_required: 'حقول مطلوبة',
    at_least_1_page: 'صفحة واحدة على الأقل', add_image: 'أضف صورة واحدة على الأقل',
    chapter_added: 'تم إضافة الفصل!', published: 'تم النشر!',
    reply_published: 'تم نشر الرد!', access_denied: 'مطلوب صلاحيات إدارية',
    not_found: 'غير موجود',
    time_just_now: 'الآن', time_ago: 'منذ',
    time_year: 'سنة', time_years: 'سنوات', time_month: 'شهر',
    time_week: 'أسبوع', time_weeks: 'أسابيع',
    time_day: 'يوم', time_days: 'أيام',
    time_hour: 'ساعة', time_hours: 'ساعات',
    time_minute: 'دقيقة', time_minutes: 'دقائق',
  }
};

const LANG_LABELS = { fr: 'FR', en: 'EN', ar: 'عربي' };

const App = {
  user: null, page: 'home', manga: null, ch: null, chNav: null,
  hIdx: 0, hTmr: null, sTmr: null, filters: {}, genres: [],
  lang: 'fr',

  // ══ INIT ══
  init() {
    this.loadTheme();
    this.loadLang();
    this.loadUser();
    this.events();
    this.loadGenres();
    this.go('home');
  },

  events() {
    const si = document.getElementById('searchInput');
    si.addEventListener('input', e => this.search(e.target.value));
    si.addEventListener('focus', () => { if (si.value.length >= 2) document.getElementById('searchDD').classList.add('open'); });
    document.addEventListener('click', e => {
      if (!e.target.closest('.search-wrap')) document.getElementById('searchDD').classList.remove('open');
      if (!e.target.closest('.user-menu')) document.querySelector('.u-dd')?.classList.remove('open');
      if (!e.target.closest('.lang-selector')) document.getElementById('langDD')?.classList.remove('open');
    });
    addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', scrollY > 50);
      document.getElementById('scrollTop').classList.toggle('show', scrollY > 300);
    });
    document.getElementById('mobBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.add('open');
      document.getElementById('sbOverlay').classList.add('open');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { this.closeAuth(); this.closeReader(); }
    });
    this.renderSB();
  },

  // ══ i18n ══
  t(key) { return (I18N[this.lang] || I18N.fr)[key] || (I18N.fr)[key] || key; },

  loadLang() {
    this.lang = localStorage.getItem('my_lang') || 'fr';
    this.applyLang();
  },

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('my_lang', lang);
    this.applyLang();
    this.renderSB();
    this.renderNav();
    // Re-render current page
    this.go(this.page, this.page === 'manga-detail' && this.manga ? { id: this.manga.id } : this.filters || {});
    document.getElementById('langDD').classList.remove('open');
  },

  applyLang() {
    // Direction
    const dir = this.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', this.lang);

    // Update label
    const lbl = document.getElementById('currentLangLabel');
    if (lbl) lbl.textContent = LANG_LABELS[this.lang] || 'FR';

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      el.placeholder = this.t(key);
    });

    // Mark active lang
    document.querySelectorAll('.lang-opt').forEach(opt => opt.classList.remove('active'));
  },

  toggleLangMenu() {
    document.getElementById('langDD').classList.toggle('open');
  },

  // ══ THEME ══
  loadTheme() {
    const t = localStorage.getItem('my_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
    this.updateThemeIcon(t);
  },
  toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme');
    const nxt = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nxt);
    localStorage.setItem('my_theme', nxt);
    this.updateThemeIcon(nxt);
  },
  updateThemeIcon(t) {
    const i = document.getElementById('themeIcon');
    if (i) i.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  },

  // ══ SIDEBAR ══
  renderSB() {
    document.getElementById('sbNav').innerHTML = `
      <a href="#" onclick="App.go('home');App.closeSB()"><i class="fas fa-home"></i> ${this.t('nav_home')}</a>
      <a href="#" onclick="App.go('browse');App.closeSB()"><i class="fas fa-compass"></i> ${this.t('nav_browse')}</a>
      <a href="#" onclick="App.go('latest');App.closeSB()"><i class="fas fa-bolt"></i> ${this.t('nav_latest')}</a>
      ${this.user ? `
        <a href="#" onclick="App.go('favorites');App.closeSB()"><i class="fas fa-heart"></i> ${this.t('nav_favorites')}</a>
        ${this.user.role === 'admin' ? `<a href="#" onclick="App.go('admin');App.closeSB()"><i class="fas fa-cog"></i> ${this.t('nav_admin')}</a>` : ''}
        <a href="#" onclick="App.toggleTheme();App.closeSB()"><i class="fas fa-palette"></i> Theme</a>
        <a href="#" onclick="App.logout();App.closeSB()" style="color:var(--err)"><i class="fas fa-sign-out-alt"></i> ${this.t('nav_logout')}</a>
      ` : `<a href="#" onclick="App.openAuth();App.closeSB()"><i class="fas fa-sign-in-alt"></i> ${this.t('nav_login')}</a>`}`;
  },
  closeSB() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sbOverlay').classList.remove('open'); },

  // ══ API ══
  async api(url, opts = {}) {
    const headers = {};
    if (this.user && this.user.token) headers['Authorization'] = 'Bearer ' + this.user.token;
    if (opts.body && !(opts.body instanceof FormData)) headers['Content-Type'] = 'application/json';
    const fetchOpts = { method: opts.method || 'GET', headers };
    if (opts.body) fetchOpts.body = opts.body;
    const res = await fetch(API + url, fetchOpts);
    let data;
    try { data = await res.json(); } catch (e) { throw new Error(`${this.t('error')} (${res.status})`); }
    if (!res.ok) throw new Error(data.error || data.message || `${this.t('error')} ${res.status}`);
    return data;
  },

  // ══ AUTH ══
  loadUser() { const d = localStorage.getItem('my_user'); if (d) { try { this.user = JSON.parse(d); this.renderNav(); } catch (e) { localStorage.removeItem('my_user'); } } },
  saveUser(u) { this.user = u; localStorage.setItem('my_user', JSON.stringify(u)); this.renderNav(); this.renderSB(); },
  renderNav() {
    const el = document.getElementById('navUser');
    if (this.user) {
      const i = this.user.username.charAt(0).toUpperCase();
      el.innerHTML = `<div class="user-menu"><button class="u-btn" onclick="App.tDD()"><div class="av">${i}</div><span>${this.user.username}</span>${this.user.role === 'admin' ? '<span class="admin-tag">ADMIN</span>' : ''}</button>
        <div class="u-dd"><a href="#" onclick="App.go('favorites')"><i class="fas fa-heart"></i> ${this.t('nav_favorites')}</a>
        ${this.user.role === 'admin' ? `<a href="#" onclick="App.go('admin')"><i class="fas fa-cog"></i> ${this.t('nav_admin')}</a>` : ''}
        <button class="lo" onclick="App.logout()"><i class="fas fa-sign-out-alt"></i> ${this.t('nav_logout')}</button></div></div>`;
    } else {
      el.innerHTML = `<button class="btn-auth" onclick="App.openAuth()"><i class="fas fa-sign-in-alt"></i> ${this.t('nav_login')}</button>`;
    }
  },
  tDD() { document.querySelector('.u-dd')?.classList.toggle('open'); },
  openAuth(t = 'login') { document.getElementById('authBg').classList.add('open'); this.authTab(t); },
  closeAuth() { document.getElementById('authBg').classList.remove('open'); document.getElementById('lErr').textContent = ''; document.getElementById('rErr').textContent = ''; },
  authTab(t) { document.querySelectorAll('.at').forEach(b => b.classList.toggle('active', b.dataset.t === t)); document.getElementById('loginForm').classList.toggle('hidden', t !== 'login'); document.getElementById('regForm').classList.toggle('hidden', t !== 'register'); },
  async login(e) { e.preventDefault(); try { const d = await this.api('/auth/login', { method: 'POST', body: JSON.stringify({ email: document.getElementById('lEmail').value, password: document.getElementById('lPass').value }) }); this.saveUser({ ...d.user, token: d.token }); this.closeAuth(); this.toast(this.t('connected'), 'ok'); if (this.page === 'manga-detail' && this.manga) this.rDetail(this.manga.id); } catch (er) { document.getElementById('lErr').textContent = er.message; } },
  async register(e) { e.preventDefault(); try { const d = await this.api('/auth/register', { method: 'POST', body: JSON.stringify({ username: document.getElementById('rUser').value, email: document.getElementById('rEmail').value, password: document.getElementById('rPass').value }) }); this.saveUser({ ...d.user, token: d.token }); this.closeAuth(); this.toast(this.t('welcome'), 'ok'); } catch (er) { document.getElementById('rErr').textContent = er.message; } },
  logout() { this.user = null; localStorage.removeItem('my_user'); this.renderNav(); this.renderSB(); this.toast(this.t('disconnected'), 'inf'); this.go('home'); },

  async loadGenres() { try { this.genres = await this.api('/manga/genres'); } catch (e) { this.genres = []; } },

  // ══ NAV ══
  go(p, params = {}) {
    this.page = p; scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.nav-links>a').forEach(a => a.classList.toggle('active', a.dataset.p === p));
    document.getElementById('footer').style.display = '';
    switch (p) {
      case 'home': this.rHome(); break;
      case 'browse': this.filters = params; this.rBrowse(); break;
      case 'latest': this.rLatest(); break;
      case 'manga-detail': this.rDetail(params.id); break;
      case 'favorites': this.rFavs(); break;
      case 'admin': this.rAdmin(); break;
      default: this.rHome();
    }
  },

  search(q) { clearTimeout(this.sTmr); const dd = document.getElementById('searchDD'); if (q.length < 2) { dd.classList.remove('open'); return; } this.sTmr = setTimeout(async () => { try { const d = await this.api(`/manga?search=${encodeURIComponent(q)}&limit=8`); dd.innerHTML = d.mangas.length ? d.mangas.map(m => `<div class="sd-item" onclick="App.go('manga-detail',{id:${m.id}})"><img src="${m.cover_image}" onerror="this.src='${PH}/40x56?text=?'"><div><h4>${m.title}</h4><span class="type-${m.type}">${m.type}</span> · ${m.chapters_count} ch.</div></div>`).join('') : `<div style="padding:16px;text-align:center;color:var(--t3)">${this.t('search_no_result')}</div>`; dd.classList.add('open'); } catch (e) {} }, 300); },

  // ══ HOME ══
  async rHome() {
    const a = document.getElementById('app'); a.innerHTML = `<div class="spin-w"><div class="spin"></div></div>`;
    try {
      const [ft, lt, pp] = await Promise.all([this.api('/manga/featured'), this.api('/manga/latest?limit=18'), this.api('/manga/popular?limit=10')]);
      a.innerHTML = `${this.heroHTML(ft)}
        <section class="sec"><div class="sec-h"><h2><i class="fas fa-fire"></i> ${this.t('home_popular')}</h2><a href="#" onclick="App.go('browse',{sort:'-views'})">${this.t('home_see_all')} <i class="fas fa-arrow-right"></i></a></div><div class="mgrid">${pp.map(m => this.cardHTML(m)).join('')}</div></section>
        <section class="sec"><div class="sec-h"><h2><i class="fas fa-clock"></i> ${this.t('home_latest')}</h2><a href="#" onclick="App.go('latest')">${this.t('home_see_all')} <i class="fas fa-arrow-right"></i></a></div><div class="ugrid">${lt.slice(0, 12).map(m => this.uHTML(m)).join('')}</div></section>`;
      this.startHero(ft.length);
    } catch (e) { a.innerHTML = `<div class="empty"><i class="fas fa-exclamation-triangle"></i><h3>${this.t('error')}</h3><p>${e.message}</p><button class="btn-pri" onclick="App.rHome()" style="margin-top:14px"><i class="fas fa-redo"></i> ${this.t('retry')}</button></div>`; }
  },

  heroHTML(ms) {
    if (!ms.length) return '';
    const sl = ms.slice(0, 5).map((m, i) => `<div class="h-slide${i === 0 ? ' active' : ''}"><div class="bg" style="background-image:url('${m.cover_image}')"></div><div class="cnt"><div class="h-cover"><img src="${m.cover_image}" onerror="this.src='${PH}/200x300?text=Cover'"></div><div class="h-info"><span class="ttag type-${m.type}">${m.type}</span><h1>${m.title}</h1><div class="h-meta"><span><i class="fas fa-star star"></i> ${m.rating.average}</span><span><i class="fas fa-eye"></i> ${this.fN(m.views)}</span><span><i class="fas fa-book"></i> ${m.chapters_count} ch.</span></div><p class="h-desc">${m.description}</p><div class="h-genres">${m.genres.slice(0, 5).map(g => `<span class="gtag" onclick="event.stopPropagation();App.go('browse',{genres:'${g.slug}'})">${g.name}</span>`).join('')}</div><div class="h-acts"><button class="btn-pri" onclick="App.go('manga-detail',{id:${m.id}})"><i class="fas fa-book-reader"></i> ${this.t('home_read')}</button><button class="btn-sec" onclick="App.go('manga-detail',{id:${m.id}})"><i class="fas fa-info-circle"></i> ${this.t('home_details')}</button></div></div></div></div>`).join('');
    const dots = ms.slice(0, 5).map((_, i) => `<div class="h-dot${i === 0 ? ' active' : ''}" onclick="App.goSlide(${i})"></div>`).join('');
    return `<div class="hero">${sl}<div class="h-dots">${dots}</div></div>`;
  },
  startHero(n) { clearInterval(this.hTmr); const t = Math.min(n, 5); if (t <= 1) return; this.hTmr = setInterval(() => { this.hIdx = (this.hIdx + 1) % t; this.goSlide(this.hIdx); }, 5000); },
  goSlide(i) { this.hIdx = i; document.querySelectorAll('.h-slide').forEach((s, j) => s.classList.toggle('active', j === i)); document.querySelectorAll('.h-dot').forEach((d, j) => d.classList.toggle('active', j === i)); },

  cardHTML(m) { const nw = m.latest_chapter?.released_at && (Date.now() - new Date(m.latest_chapter.released_at)) < 7 * 864e5; return `<div class="mc" onclick="App.go('manga-detail',{id:${m.id}})"><div class="mc-cv"><img src="${m.cover_image}" loading="lazy" onerror="this.src='${PH}/170x242?text=Cover'"><span class="mc-type type-${m.type}">${m.type}</span>${m.rating > 0 ? `<span class="mc-rat"><i class="fas fa-star"></i> ${m.rating}</span>` : ''}<div class="mc-ch">Ch. ${m.latest_chapter?.number || m.chapters_count}${nw ? '<span class="new">NEW</span>' : ''}</div></div><div class="mc-body"><h3 title="${m.title}">${m.title}</h3><div class="gs">${(m.genres || []).slice(0, 2).map(g => `<span>${this.fG(g)}</span>`).join('')}</div></div></div>`; },
  uHTML(m) { return `<div class="ui" onclick="App.go('manga-detail',{id:${m.id}})"><img src="${m.cover_image}" onerror="this.src='${PH}/46x66?text=?'"><div class="info"><h4>${m.title}</h4><div class="cl"><span>Ch. ${m.latest_chapter?.number || m.chapters_count}</span><span class="tm">${this.tAgo(m.latest_chapter?.released_at || m.updated_at)}</span></div></div><span class="mc-type type-${m.type}" style="font-size:.6rem;padding:2px 8px">${m.type}</span></div>`; },

  // ══ BROWSE ══
  async rBrowse() {
    const a = document.getElementById('app'); const sel = this.filters.genres ? this.filters.genres.split(',') : [];
    a.innerHTML = `<div class="browse"><div class="fbox"><div class="fbox-h"><h3><i class="fas fa-filter"></i> ${this.t('browse_filters')}</h3><button class="btn-sm btn-sec" onclick="App.filters={};App.rBrowse()"><i class="fas fa-redo"></i> ${this.t('browse_reset')}</button></div><div class="frow"><div class="fg"><label>${this.t('browse_type')}</label><select id="fT"><option value="">${this.t('browse_all')}</option><option value="manga"${this.filters.type === 'manga' ? ' selected' : ''}>${this.t('type_manga')}</option><option value="manhwa"${this.filters.type === 'manhwa' ? ' selected' : ''}>${this.t('type_manhwa')}</option><option value="manhua"${this.filters.type === 'manhua' ? ' selected' : ''}>${this.t('type_manhua')}</option></select></div><div class="fg"><label>${this.t('browse_status')}</label><select id="fS"><option value="">${this.t('browse_all')}</option><option value="ongoing"${this.filters.status === 'ongoing' ? ' selected' : ''}>${this.t('status_ongoing')}</option><option value="completed"${this.filters.status === 'completed' ? ' selected' : ''}>${this.t('status_completed')}</option><option value="hiatus"${this.filters.status === 'hiatus' ? ' selected' : ''}>${this.t('status_hiatus')}</option></select></div><div class="fg"><label>${this.t('browse_sort')}</label><select id="fO"><option value="-updated_at">${this.t('sort_recent')}</option><option value="-rating"${this.filters.sort === '-rating' ? ' selected' : ''}>${this.t('sort_rating')}</option><option value="-views"${this.filters.sort === '-views' ? ' selected' : ''}>${this.t('sort_popular')}</option><option value="title"${this.filters.sort === 'title' ? ' selected' : ''}>${this.t('sort_az')}</option></select></div><div class="fg"><label>${this.t('browse_search')}</label><input type="text" id="fQ" value="${this.filters.search || ''}" placeholder="..."></div></div><div style="margin-bottom:8px"><label style="font-size:.8rem;font-weight:600;color:var(--t2)">${this.t('browse_genres')}</label></div><div class="gchips">${this.genres.map(g => `<span class="gc${sel.includes(g.slug) ? ' on' : ''}" data-g="${g.slug}" onclick="this.classList.toggle('on')">${g.name}</span>`).join('')}</div><div class="fbtns"><button class="btn-pri" onclick="App.applyF()"><i class="fas fa-search"></i> ${this.t('browse_filter_btn')}</button></div></div><div id="bRes"><div class="spin-w"><div class="spin"></div></div></div></div>`;
    await this.loadB(1);
  },
  async loadB(pg = 1) { const c = document.getElementById('bRes'); try { const p = new URLSearchParams({ page: pg, limit: 24 }); if (this.filters.type) p.set('type', this.filters.type); if (this.filters.status) p.set('status', this.filters.status); if (this.filters.sort) p.set('sort', this.filters.sort); if (this.filters.genres) p.set('genres', this.filters.genres); if (this.filters.search) p.set('search', this.filters.search); const d = await this.api(`/manga?${p}`); c.innerHTML = d.mangas.length ? `<div class="resbar"><span>${d.pagination.total} ${this.t('browse_results')}</span></div><div class="mgrid">${d.mangas.map(m => this.cardHTML(m)).join('')}</div>${this.pagHTML(d.pagination, 'loadB')}` : `<div class="empty"><i class="fas fa-search"></i><h3>${this.t('browse_no_result')}</h3></div>`; } catch (e) { c.innerHTML = `<div class="empty"><p>${e.message}</p></div>`; } },
  applyF() { this.filters = { type: document.getElementById('fT').value, status: document.getElementById('fS').value, sort: document.getElementById('fO').value, search: document.getElementById('fQ').value, genres: [...document.querySelectorAll('.gc.on')].map(c => c.dataset.g).join(',') }; this.loadB(1); },

  async rLatest() { const a = document.getElementById('app'); a.innerHTML = `<div class="spin-w"><div class="spin"></div></div>`; try { const d = await this.api('/manga?sort=-updated_at&limit=30'); a.innerHTML = `<section class="sec"><div class="sec-h"><h2><i class="fas fa-bolt"></i> ${this.t('home_latest')}</h2></div><div class="ugrid">${d.mangas.map(m => this.uHTML(m)).join('')}</div>${this.pagHTML(d.pagination, 'loadLP')}</section>`; } catch (e) { a.innerHTML = `<div class="empty"><p>${e.message}</p></div>`; } },
  async loadLP(pg) { try { const d = await this.api(`/manga?sort=-updated_at&limit=30&page=${pg}`); const s = document.querySelector('.sec'); s.innerHTML = `<div class="sec-h"><h2><i class="fas fa-bolt"></i> ${this.t('home_latest')}</h2></div><div class="ugrid">${d.mangas.map(m => this.uHTML(m)).join('')}</div>${this.pagHTML(d.pagination, 'loadLP')}`; scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { this.toast(e.message, 'err'); } },

  // ══ DETAIL ══
  async rDetail(id) {
    const a = document.getElementById('app'); a.innerHTML = `<div class="spin-w"><div class="spin"></div></div>`;
    try {
      const d = await this.api(`/manga/${id}`); this.manga = d.manga; const m = d.manga, chs = d.chapters, fav = d.is_favorite;
      a.innerHTML = `<div class="det-hd"><div class="det-bg" style="background-image:url('${m.cover_image}')"></div><div class="det-cnt"><div class="det-cv"><img src="${m.cover_image}" onerror="this.src='${PH}/230x340?text=Cover'"></div><div class="det-info"><span class="ttag type-${m.type}">${m.type}</span><h1>${m.title}</h1>${m.alternative_titles ? `<p class="alt">${m.alternative_titles}</p>` : ''}<div class="det-meta"><div class="mb"><span class="lbl">${this.t('detail_rating')}</span><span class="val star"><i class="fas fa-star"></i> ${m.rating.average} (${m.rating.count})</span></div><div class="mb"><span class="lbl">${this.t('detail_status')}</span><span class="val"><span class="stag s-${m.status}">${this.t('status_' + m.status)}</span></span></div><div class="mb"><span class="lbl">${this.t('detail_author')}</span><span class="val">${m.author}</span></div><div class="mb"><span class="lbl">${this.t('detail_chapters')}</span><span class="val">${m.chapters_count}</span></div><div class="mb"><span class="lbl">${this.t('detail_views')}</span><span class="val"><i class="fas fa-eye"></i> ${this.fN(m.views)}</span></div>${m.year ? `<div class="mb"><span class="lbl">${this.t('detail_year')}</span><span class="val">${m.year}</span></div>` : ''}</div><p class="det-desc">${m.description}</p><div class="det-genres">${m.genres.map(g => `<span class="gtag" onclick="App.go('browse',{genres:'${g.slug}'})">${g.name}</span>`).join('')}</div><div class="det-acts">${chs.length ? `<button class="btn-pri" onclick="App.openReader(${chs[chs.length - 1].id})"><i class="fas fa-book-reader"></i> ${this.t('detail_first_ch')}</button><button class="btn-sec" onclick="App.openReader(${chs[0].id})"><i class="fas fa-forward"></i> ${this.t('detail_last_ch')}</button>` : ''}<button class="btn-icon" onclick="App.tFav(${m.id})" style="${fav ? 'background:var(--accentL);color:var(--accent);border-color:var(--accent)' : ''}"><i class="fas fa-heart"></i></button></div></div></div></div>
      <div class="tabs"><div class="tabs-h"><button class="tb active" onclick="App.sTab('chapters',this)"><i class="fas fa-list"></i> ${this.t('detail_tab_chapters')} (${chs.length})</button><button class="tb" onclick="App.sTab('comments',this)"><i class="fas fa-comments"></i> ${this.t('detail_tab_comments')}</button></div>
      <div class="tp active" id="tp-chapters">${chs.length ? `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><span style="color:var(--t3);font-size:.86rem">${chs.length} ${this.t('detail_chapters').toLowerCase()}</span><button class="btn-sm btn-sec" onclick="App.revCh()"><i class="fas fa-sort"></i> ${this.t('detail_reverse')}</button></div><div class="chl" id="chL">${chs.map(c => `<div class="chi" onclick="App.openReader(${c.id})"><div style="display:flex;align-items:center;gap:12px"><span class="cn">Ch. ${c.number}</span><span class="ct">${c.title || ''}</span></div><div class="cm"><span><i class="fas fa-eye"></i> ${this.fN(c.views)}</span><span>${this.tAgo(c.released_at)}</span></div></div>`).join('')}</div>` : `<div class="empty"><p>${this.t('detail_no_chapters')}</p></div>`}</div>
      <div class="tp" id="tp-comments"><div class="spin-w"><div class="spin"></div></div></div></div>`;
    } catch (e) { a.innerHTML = `<div class="empty"><i class="fas fa-exclamation-triangle"></i><h3>${this.t('not_found')}</h3><p>${e.message}</p><button class="btn-pri" onclick="App.go('home')" style="margin-top:14px">${this.t('nav_home')}</button></div>`; }
  },
  sTab(t, btn) { document.querySelectorAll('.tb').forEach(b => b.classList.remove('active')); document.querySelectorAll('.tp').forEach(p => p.classList.remove('active')); btn.classList.add('active'); document.getElementById(`tp-${t}`).classList.add('active'); if (t === 'comments') this.loadComs(); },
  revCh() { const l = document.getElementById('chL'); if (l) { const it = [...l.children]; it.reverse().forEach(i => l.appendChild(i)); } },
  async tFav(id) { if (!this.user) return this.openAuth(); try { const d = await this.api(`/auth/favorites/${id}`, { method: 'POST' }); this.user.favorites = d.favorites; localStorage.setItem('my_user', JSON.stringify(this.user)); this.toast(d.is_favorite ? this.t('fav_added') : this.t('fav_removed'), d.is_favorite ? 'ok' : 'inf'); this.rDetail(id); } catch (e) { this.toast(e.message, 'err'); } },

  async rFavs() { const a = document.getElementById('app'); if (!this.user) { a.innerHTML = `<div class="empty"><i class="fas fa-heart"></i><h3>${this.t('fav_login')}</h3><button class="btn-pri" onclick="App.openAuth()" style="margin-top:14px">${this.t('nav_login')}</button></div>`; return; } a.innerHTML = `<div class="spin-w"><div class="spin"></div></div>`; try { const d = await this.api('/auth/favorites'); a.innerHTML = `<section class="sec"><div class="sec-h"><h2><i class="fas fa-heart"></i> ${this.t('fav_title')} (${d.favorites.length})</h2></div>${d.favorites.length ? `<div class="mgrid">${d.favorites.map(m => this.cardHTML(m)).join('')}</div>` : `<div class="empty"><i class="fas fa-heart-broken"></i><h3>${this.t('fav_none')}</h3></div>`}</section>`; } catch (e) { a.innerHTML = `<div class="empty"><p>${e.message}</p></div>`; } },

  // ══ COMMENTS ══
  async loadComs(pg = 1) {
    const pane = document.getElementById('tp-comments');
    const fm = this.user ? `<div class="com-form"><div class="com-row"><div class="com-av">${this.user.username.charAt(0).toUpperCase()}</div><div class="com-inp"><textarea id="cTxt" placeholder="${this.t('comment_write')}" maxlength="2000"></textarea><div class="com-bar"><label><input type="checkbox" id="cSp"> ${this.t('comment_spoiler')}</label><button class="btn-pri btn-sm" onclick="App.postCom()"><i class="fas fa-paper-plane"></i> ${this.t('comment_publish')}</button></div></div></div></div>` : `<div style="text-align:center;padding:18px;background:var(--bgc);border-radius:var(--r-md);margin-bottom:20px;border:1px solid var(--border)"><p style="color:var(--t3);margin-bottom:8px">${this.t('auth_login_prompt')}</p><button class="btn-pri btn-sm" onclick="App.openAuth()">${this.t('nav_login')}</button></div>`;
    try { const d = await this.api(`/comments/manga/${this.manga.id}?page=${pg}`); pane.innerHTML = `<div class="coms">${fm}<div class="cl">${d.comments.length ? d.comments.map(c => this.comHTML(c)).join('') : `<div class="empty" style="padding:24px"><i class="fas fa-comments"></i><h3>${this.t('comment_none')}</h3><p>${this.t('comment_be_first')}</p></div>`}</div>${d.pagination.pages > 1 ? this.pagHTML(d.pagination, 'loadComs') : ''}</div>`; } catch (e) { pane.innerHTML = `${fm}<p style="color:var(--t3);text-align:center">${e.message}</p>`; }
  },
  comHTML(c, rep = false) { const own = this.user && c.user?.id === this.user.id; return `<div class="ci${rep ? ' reply' : ''}"><div class="com-av" style="width:${rep ? 30 : 40}px;height:${rep ? 30 : 40}px;font-size:${rep ? '.7' : '.82'}rem">${c.user?.username?.charAt(0).toUpperCase() || '?'}</div><div class="cb"><div class="ci-h"><div><span class="nm">${c.user?.username || '?'}</span>${c.is_edited ? ` <span class="ed">${this.t('comment_edited')}</span>` : ''}</div><span class="dt">${this.tAgo(c.created_at)}</span></div><div class="ci-t${c.is_spoiler ? ' sp' : ''}" onclick="this.classList.toggle('show')">${c.is_spoiler ? '<small style="color:var(--warn)">[SPOILER]</small> ' : ''}${c.content}</div><div class="ci-a"><button class="ca" onclick="App.likeCom(${c.id})"><i class="fas fa-thumbs-up"></i> ${c.likes_count || 0}</button>${!rep ? `<button class="ca" onclick="App.showRep(${c.id})"><i class="fas fa-reply"></i> ${this.t('comment_reply')}</button>` : ''}${own ? `<button class="ca" onclick="App.delCom(${c.id})"><i class="fas fa-trash"></i></button>` : ''}</div><div class="hidden" id="rf-${c.id}" style="margin-top:8px"><textarea id="rt-${c.id}" placeholder="${this.t('comment_reply_ph')}" style="width:100%;min-height:50px;padding:8px;background:var(--bgi);border:1px solid var(--border);border-radius:var(--r-md);color:var(--t1);outline:none"></textarea><div style="display:flex;gap:6px;margin-top:6px;justify-content:flex-end"><button class="btn-sm btn-sec" onclick="document.getElementById('rf-${c.id}').classList.add('hidden')">${this.t('comment_cancel')}</button><button class="btn-sm btn-pri" onclick="App.postRep(${c.id})"><i class="fas fa-paper-plane"></i></button></div></div>${c.replies?.length ? `<div class="ci-reps">${c.replies.map(r => this.comHTML(r, true)).join('')}</div>` : ''}</div></div>`; },
  showRep(id) { if (!this.user) return this.openAuth(); const el = document.getElementById(`rf-${id}`); el.classList.toggle('hidden'); if (!el.classList.contains('hidden')) el.querySelector('textarea').focus(); },
  async postCom() { const txt = document.getElementById('cTxt').value.trim(); if (!txt) return this.toast(this.t('empty_comment'), 'wrn'); try { await this.api('/comments', { method: 'POST', body: JSON.stringify({ manga_id: this.manga.id, content: txt, is_spoiler: document.getElementById('cSp').checked }) }); this.toast(this.t('published'), 'ok'); this.loadComs(); } catch (e) { this.toast(e.message, 'err'); } },
  async postRep(pid) { const txt = document.getElementById(`rt-${pid}`).value.trim(); if (!txt) return this.toast(this.t('empty_comment'), 'wrn'); try { await this.api('/comments', { method: 'POST', body: JSON.stringify({ manga_id: this.manga.id, content: txt, parent_id: pid }) }); this.toast(this.t('reply_published'), 'ok'); this.loadComs(); } catch (e) { this.toast(e.message, 'err'); } },
  async likeCom(id) { if (!this.user) return this.openAuth(); try { await this.api(`/comments/${id}/like`, { method: 'POST' }); this.loadComs(); } catch (e) { this.toast(e.message, 'err'); } },
  async delCom(id) { if (!confirm(this.t('confirm_delete'))) return; try { await this.api(`/comments/${id}`, { method: 'DELETE' }); this.toast(this.t('success_deleted'), 'inf'); this.loadComs(); } catch (e) { this.toast(e.message, 'err'); } },

  // ══ READER ══
  async openReader(chId) { const r = document.getElementById('reader'), b = document.getElementById('rBody'); r.classList.add('open'); document.body.style.overflow = 'hidden'; b.innerHTML = `<div class="spin-w" style="padding:100px"><div class="spin"></div></div>`; try { const d = await this.api(`/chapters/${chId}`); this.ch = d.chapter; this.chNav = d.navigation; document.getElementById('rManga').textContent = d.manga?.title || ''; document.getElementById('rCh').textContent = `${this.t('reader_chapter')} ${d.chapter.number}`; document.getElementById('rPrev').disabled = !d.navigation.prev; document.getElementById('rNext').disabled = !d.navigation.next; this.renderPages(); } catch (e) { b.innerHTML = `<div class="empty" style="padding:100px"><p>${e.message}</p></div>`; } },
  renderPages() { const b = document.getElementById('rBody'); const ps = this.ch.pages || []; b.innerHTML = ps.map((p, i) => `<img src="${p}" alt="Page ${i + 1}" loading="lazy" onerror="this.outerHTML='<div style=\\'padding:20px;text-align:center;color:#888\\'>Page ${i + 1}</div>'">`).join('') + `<div class="r-end"><p>${this.t('reader_end')} ${this.ch.number}</p><div class="r-end-b">${this.chNav.prev ? `<button class="btn-sec" onclick="App.openReader(${this.chNav.prev.id})"><i class="fas fa-chevron-left"></i> ${this.t('reader_prev')}</button>` : ''}${this.chNav.next ? `<button class="btn-pri" onclick="App.openReader(${this.chNav.next.id})">${this.t('reader_next')} <i class="fas fa-chevron-right"></i></button>` : ''}</div></div>`; b.scrollTop = 0; b.onscroll = () => { const imgs = b.querySelectorAll('img'); let c = 0; imgs.forEach((im, i) => { if (im.getBoundingClientRect().top < b.clientHeight / 2) c = i; }); document.getElementById('rPage').textContent = `${c + 1}/${ps.length}`; }; document.getElementById('rPage').textContent = `1/${ps.length}`; },
  prevCh() { if (this.chNav?.prev) this.openReader(this.chNav.prev.id); },
  nextCh() { if (this.chNav?.next) this.openReader(this.chNav.next.id); },
  closeReader() { document.getElementById('reader').classList.remove('open'); document.body.style.overflow = ''; },

  // ══ ADMIN ══
  async rAdmin() {
    const a = document.getElementById('app');
    if (!this.user || this.user.role !== 'admin') { a.innerHTML = `<div class="empty"><i class="fas fa-lock"></i><h3>${this.t('access_denied')}</h3></div>`; return; }
    a.innerHTML = `<div class="admin"><div class="adm-h"><div class="adm-logo"><img src="assets/logo.png" alt=""><span>MANGA YUME</span></div><h1><i class="fas fa-cog"></i> ${this.t('admin_panel')}</h1></div>
    <div class="adm-tabs"><button class="adm-tab active" onclick="App.aTab('add',this)"><i class="fas fa-plus"></i> ${this.t('admin_add_manga')}</button><button class="adm-tab" onclick="App.aTab('manage',this)"><i class="fas fa-list"></i> ${this.t('admin_manage')}</button><button class="adm-tab" onclick="App.aTab('edit',this)"><i class="fas fa-edit"></i> ${this.t('admin_edit')}</button><button class="adm-tab" onclick="App.aTab('chap',this)"><i class="fas fa-file-image"></i> ${this.t('admin_add_chapter')}</button></div>
    <div class="adm-pane active" id="ap-add">${this.addMHTML()}</div><div class="adm-pane" id="ap-manage"><div class="spin-w"><div class="spin"></div></div></div><div class="adm-pane" id="ap-edit">${this.editMHTML()}</div><div class="adm-pane" id="ap-chap">${this.addChHTML()}</div></div>`;
    this.loadAdmList();
  },
  aTab(t, btn) { document.querySelectorAll('.adm-tab').forEach(b => b.classList.remove('active')); document.querySelectorAll('.adm-pane').forEach(p => p.classList.remove('active')); btn.classList.add('active'); document.getElementById(`ap-${t}`).classList.add('active'); if (t === 'manage') this.loadAdmList(); },

  addMHTML() { return `<div class="adm-form"><h3><i class="fas fa-plus-circle"></i> ${this.t('admin_new_manga')}</h3><form id="amF" onsubmit="App.addManga(event)"><div class="fgrid"><div class="fi"><label>${this.t('admin_title')} *</label><input type="text" id="amT" required></div><div class="fi"><label>${this.t('admin_alt_titles')}</label><input type="text" id="amA"></div><div class="fi"><label>${this.t('browse_type')} *</label><select id="amTy"><option value="manga">${this.t('type_manga')}</option><option value="manhwa">${this.t('type_manhwa')}</option><option value="manhua">${this.t('type_manhua')}</option><option value="webtoon">${this.t('type_webtoon')}</option></select></div><div class="fi"><label>${this.t('browse_status')}</label><select id="amSt"><option value="ongoing">${this.t('status_ongoing')}</option><option value="completed">${this.t('status_completed')}</option><option value="hiatus">${this.t('status_hiatus')}</option></select></div><div class="fi"><label>${this.t('admin_author')} *</label><input type="text" id="amAu" required></div><div class="fi"><label>${this.t('admin_artist')}</label><input type="text" id="amAr"></div><div class="fi"><label>${this.t('admin_year')}</label><input type="number" id="amY" value="2024"></div><div class="fi"><label>${this.t('admin_featured')}</label><select id="amFe"><option value="false">${this.t('no')}</option><option value="true">${this.t('yes')}</option></select></div></div><div class="fi fi-full"><label>${this.t('admin_description')} *</label><textarea id="amD" required rows="4"></textarea></div><div style="margin:12px 0"><label style="font-size:.8rem;font-weight:600;color:var(--t2)">${this.t('browse_genres')}</label></div><div class="gchips" id="amG">${this.genres.map(g => `<span class="gc" data-id="${g.id}" onclick="this.classList.toggle('on')">${g.name}</span>`).join('')}</div><div class="fi" style="margin-top:14px"><label>${this.t('admin_cover')} *</label><div class="fup"><input type="file" id="amC" accept="image/*"><i class="fas fa-cloud-upload-alt"></i><p>${this.t('admin_cover_hint')}</p></div></div><div style="margin-top:16px"><button type="submit" class="btn-pri"><i class="fas fa-save"></i> ${this.t('admin_create')}</button></div></form></div>`; },
  async addManga(e) { e.preventDefault(); const fd = new FormData(); fd.append('title', document.getElementById('amT').value); fd.append('alternative_titles', document.getElementById('amA').value); fd.append('type', document.getElementById('amTy').value); fd.append('status', document.getElementById('amSt').value); fd.append('author', document.getElementById('amAu').value); fd.append('artist', document.getElementById('amAr').value); fd.append('year', document.getElementById('amY').value); fd.append('description', document.getElementById('amD').value); fd.append('is_featured', document.getElementById('amFe').value); document.querySelectorAll('#amG .gc.on').forEach(c => fd.append('genres', c.dataset.id)); const f = document.getElementById('amC').files[0]; if (f) fd.append('cover', f); else return this.toast(this.t('image_required'), 'wrn'); try { await this.api('/manga', { method: 'POST', body: fd }); this.toast(this.t('success_created'), 'ok'); document.getElementById('amF').reset(); document.querySelectorAll('#amG .gc').forEach(c => c.classList.remove('on')); } catch (er) { this.toast(er.message, 'err'); } },

  editMHTML() { return `<div class="adm-form"><h3><i class="fas fa-edit"></i> ${this.t('admin_edit_manga')}</h3><div class="fi" style="margin-bottom:16px"><label>${this.t('admin_manga_id')}</label><div style="display:flex;gap:8px"><input type="number" id="emId" placeholder="ID"><button type="button" class="btn-pri btn-sm" onclick="App.loadEM()"><i class="fas fa-search"></i> ${this.t('admin_load')}</button></div></div><div id="editWrap"></div></div>`; },
  async loadEM() { const id = document.getElementById('emId').value; if (!id) return this.toast(this.t('fill_required'), 'wrn'); const w = document.getElementById('editWrap'); try { const d = await this.api(`/manga/${id}`); const m = d.manga; w.innerHTML = `<form id="emF" onsubmit="App.saveM(event,${m.id})"><div class="fgrid"><div class="fi"><label>${this.t('admin_title')}</label><input type="text" id="emT" value="${this.esc(m.title)}"></div><div class="fi"><label>${this.t('admin_alt_titles')}</label><input type="text" id="emA" value="${this.esc(m.alternative_titles || '')}"></div><div class="fi"><label>${this.t('browse_type')}</label><select id="emTy">${['manga', 'manhwa', 'manhua', 'webtoon'].map(t => `<option value="${t}"${m.type === t ? ' selected' : ''}>${this.t('type_' + t)}</option>`).join('')}</select></div><div class="fi"><label>${this.t('browse_status')}</label><select id="emSt">${['ongoing', 'completed', 'hiatus', 'cancelled'].map(s => `<option value="${s}"${m.status === s ? ' selected' : ''}>${this.t('status_' + s)}</option>`).join('')}</select></div><div class="fi"><label>${this.t('admin_author')}</label><input type="text" id="emAu" value="${this.esc(m.author)}"></div><div class="fi"><label>${this.t('admin_artist')}</label><input type="text" id="emAr" value="${this.esc(m.artist || '')}"></div><div class="fi"><label>${this.t('admin_year')}</label><input type="number" id="emY" value="${m.year || 2024}"></div><div class="fi"><label>${this.t('admin_featured')}</label><select id="emFe"><option value="false"${!m.is_featured ? ' selected' : ''}>${this.t('no')}</option><option value="true"${m.is_featured ? ' selected' : ''}>${this.t('yes')}</option></select></div></div><div class="fi fi-full"><label>${this.t('admin_description')}</label><textarea id="emD" rows="4">${this.esc(m.description)}</textarea></div><div style="margin:12px 0"><label style="font-size:.8rem;font-weight:600;color:var(--t2)">${this.t('browse_genres')}</label></div><div class="gchips" id="emG">${this.genres.map(g => `<span class="gc${m.genres.some(mg => mg.slug === g.slug) ? ' on' : ''}" data-id="${g.id}" onclick="this.classList.toggle('on')">${g.name}</span>`).join('')}</div><div class="fi" style="margin-top:14px"><label>${this.t('admin_new_cover')}</label><div class="fup"><input type="file" id="emC" accept="image/*"><i class="fas fa-image"></i><p>${this.t('admin_keep_current')}</p></div></div><div style="margin-top:16px"><button type="submit" class="btn-pri"><i class="fas fa-save"></i> ${this.t('admin_save')}</button></div></form>`; } catch (e) { w.innerHTML = `<div class="empty"><p>${e.message}</p></div>`; } },
  async saveM(e, id) { e.preventDefault(); const fd = new FormData(); fd.append('title', document.getElementById('emT').value); fd.append('alternative_titles', document.getElementById('emA').value); fd.append('type', document.getElementById('emTy').value); fd.append('status', document.getElementById('emSt').value); fd.append('author', document.getElementById('emAu').value); fd.append('artist', document.getElementById('emAr').value); fd.append('year', document.getElementById('emY').value); fd.append('description', document.getElementById('emD').value); fd.append('is_featured', document.getElementById('emFe').value); document.querySelectorAll('#emG .gc.on').forEach(c => fd.append('genres', c.dataset.id)); const f = document.getElementById('emC').files[0]; if (f) fd.append('cover', f); try { await this.api(`/manga/${id}`, { method: 'PUT', body: fd }); this.toast(this.t('success_modified'), 'ok'); } catch (er) { this.toast(er.message, 'err'); } },

  async loadAdmList() { const p = document.getElementById('ap-manage'); try { const d = await this.api('/manga?limit=100'); p.innerHTML = d.mangas.length ? `<div style="overflow-x:auto"><table class="atbl"><thead><tr><th></th><th>ID</th><th>${this.t('admin_title')}</th><th>${this.t('browse_type')}</th><th>${this.t('browse_status')}</th><th>Ch.</th><th>${this.t('detail_views')}</th><th>Actions</th></tr></thead><tbody>${d.mangas.map(m => `<tr><td><img class="thb" src="${m.cover_image}" onerror="this.src='${PH}/40x56'"></td><td><strong>${m.id}</strong></td><td>${m.title}</td><td><span class="mc-type type-${m.type}" style="font-size:.6rem;padding:2px 8px">${m.type}</span></td><td><span class="stag s-${m.status}">${this.t('status_' + m.status)}</span></td><td>${m.chapters_count}</td><td>${this.fN(m.views)}</td><td><div class="acts"><button class="btn-sm btn-sec" onclick="App.go('manga-detail',{id:${m.id}})"><i class="fas fa-eye"></i></button><button class="btn-sm btn-sec" onclick="document.getElementById('emId').value=${m.id};App.aTab('edit',document.querySelectorAll('.adm-tab')[2]);App.loadEM()"><i class="fas fa-edit"></i></button><button class="btn-sm btn-dan" onclick="App.delManga(${m.id})"><i class="fas fa-trash"></i></button></div></td></tr>`).join('')}</tbody></table></div>` : `<div class="empty"><p>${this.t('admin_no_manga')}</p></div>`; } catch (e) { p.innerHTML = `<div class="empty"><p>${e.message}</p></div>`; } },
  async delManga(id) { if (!confirm(this.t('confirm_delete'))) return; try { await this.api(`/manga/${id}`, { method: 'DELETE' }); this.toast(this.t('success_deleted'), 'ok'); this.loadAdmList(); } catch (e) { this.toast(e.message, 'err'); } },

  addChHTML() { return `<div class="adm-form"><h3><i class="fas fa-file-image"></i> ${this.t('admin_add_chapter')}</h3><form id="acF" onsubmit="App.addCh(event)"><div class="fgrid"><div class="fi"><label>${this.t('admin_manga_id')} *</label><input type="number" id="acM" required><span class="help">${this.t('admin_id_hint')}</span></div><div class="fi"><label>${this.t('admin_ch_number')} *</label><input type="number" id="acN" required step="0.5" min="0"></div><div class="fi"><label>${this.t('admin_ch_title')}</label><input type="text" id="acT"></div><div class="fi"><label>${this.t('admin_pages_count')} *</label><input type="number" id="acPC" min="1" max="200" value="1" onchange="App.genPI()" oninput="App.genPI()"><span class="help">${this.t('admin_pages_hint')}</span></div></div><div style="margin-top:16px"><h4 style="margin-bottom:8px;color:var(--t2)"><i class="fas fa-images" style="color:var(--accent)"></i> ${this.t('admin_ch_pages')}</h4><div class="pages-inputs" id="piWrap"></div></div><div style="margin-top:18px"><button type="submit" class="btn-pri"><i class="fas fa-upload"></i> ${this.t('admin_upload')}</button></div></form></div>`; },
  genPI() { const n = parseInt(document.getElementById('acPC').value) || 0; const c = document.getElementById('piWrap'); if (n < 1 || n > 200) { c.innerHTML = ''; return; } let h = ''; for (let i = 1; i <= n; i++) { h += `<div class="page-input-item"><label><i class="fas fa-image"></i> ${this.t('admin_page')} ${i}</label><input type="file" id="pg_${i}" accept="image/*" onchange="App.prevPg(this,${i})"><img class="page-preview hidden" id="pv_${i}"></div>`; } c.innerHTML = h; },
  prevPg(inp, num) { const pv = document.getElementById(`pv_${num}`); if (inp.files && inp.files[0]) { const r = new FileReader(); r.onload = e => { pv.src = e.target.result; pv.classList.remove('hidden'); }; r.readAsDataURL(inp.files[0]); } },
  async addCh(e) { e.preventDefault(); const mangaId = document.getElementById('acM').value; const number = document.getElementById('acN').value; const title = document.getElementById('acT').value; const pc = parseInt(document.getElementById('acPC').value) || 0; if (!mangaId || !number) return this.toast(this.t('fill_required'), 'wrn'); if (pc < 1) return this.toast(this.t('at_least_1_page'), 'wrn'); const fd = new FormData(); fd.append('manga_id', mangaId); fd.append('number', number); fd.append('title', title); fd.append('pages_count', pc); let has = false; for (let i = 1; i <= pc; i++) { const inp = document.getElementById(`pg_${i}`); if (inp && inp.files && inp.files[0]) { fd.append(`page_${i}`, inp.files[0]); has = true; } } if (!has) return this.toast(this.t('add_image'), 'wrn'); try { this.toast(this.t('upload_progress'), 'inf'); await this.api('/chapters', { method: 'POST', body: fd }); this.toast(this.t('chapter_added'), 'ok'); document.getElementById('acF').reset(); document.getElementById('piWrap').innerHTML = ''; } catch (er) { this.toast(er.message, 'err'); } },

  // ══ UTILS ══
  pagHTML(pg, cb) { if (pg.pages <= 1) return ''; const { current: c, pages: p } = pg; let b = []; b.push(`<button ${c === 1 ? 'disabled' : ''} onclick="App.${cb}(${c - 1})"><i class="fas fa-chevron-left"></i></button>`); let s = Math.max(1, c - 2), e = Math.min(p, c + 2); if (s > 1) { b.push(`<button onclick="App.${cb}(1)">1</button>`); if (s > 2) b.push(`<button disabled>…</button>`); } for (let i = s; i <= e; i++) b.push(`<button class="${i === c ? 'on' : ''}" onclick="App.${cb}(${i})">${i}</button>`); if (e < p) { if (e < p - 1) b.push(`<button disabled>…</button>`); b.push(`<button onclick="App.${cb}(${p})">${p}</button>`); } b.push(`<button ${c === p ? 'disabled' : ''} onclick="App.${cb}(${c + 1})"><i class="fas fa-chevron-right"></i></button>`); return `<div class="pag">${b.join('')}</div>`; },
  esc(s) { return (s || '').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;'); },
  fN(n) { if (!n) return '0'; if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M'; if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K'; return n.toString(); },
  fG(s) { const m = { action: 'Action', adventure: this.lang === 'fr' ? 'Aventure' : this.lang === 'ar' ? 'مغامرة' : 'Adventure', comedy: this.lang === 'fr' ? 'Comédie' : this.lang === 'ar' ? 'كوميديا' : 'Comedy', drama: this.lang === 'fr' ? 'Drame' : this.lang === 'ar' ? 'دراما' : 'Drama', fantasy: 'Fantasy', horror: this.lang === 'fr' ? 'Horreur' : this.lang === 'ar' ? 'رعب' : 'Horror', mystery: this.lang === 'fr' ? 'Mystère' : this.lang === 'ar' ? 'غموض' : 'Mystery', psychological: this.lang === 'fr' ? 'Psychologique' : this.lang === 'ar' ? 'نفسي' : 'Psychological', romance: this.lang === 'fr' ? 'Romance' : this.lang === 'ar' ? 'رومانسي' : 'Romance', 'sci-fi': 'Sci-Fi', 'slice-of-life': this.lang === 'fr' ? 'Tranche de vie' : this.lang === 'ar' ? 'حياة يومية' : 'Slice of Life', sports: this.lang === 'fr' ? 'Sports' : this.lang === 'ar' ? 'رياضة' : 'Sports', supernatural: this.lang === 'fr' ? 'Surnaturel' : this.lang === 'ar' ? 'خارق' : 'Supernatural', thriller: 'Thriller', historical: this.lang === 'fr' ? 'Historique' : this.lang === 'ar' ? 'تاريخي' : 'Historical', shounen: 'Shōnen', shoujo: 'Shōjo', seinen: 'Seinen', isekai: 'Isekai', 'martial-arts': this.lang === 'fr' ? 'Arts Martiaux' : this.lang === 'ar' ? 'فنون قتالية' : 'Martial Arts', 'super-power': this.lang === 'fr' ? 'Super Pouvoir' : this.lang === 'ar' ? 'قوة خارقة' : 'Super Power', demons: this.lang === 'fr' ? 'Démons' : this.lang === 'ar' ? 'شياطين' : 'Demons', magic: this.lang === 'fr' ? 'Magie' : this.lang === 'ar' ? 'سحر' : 'Magic', reincarnation: this.lang === 'fr' ? 'Réincarnation' : this.lang === 'ar' ? 'تناسخ' : 'Reincarnation', school: this.lang === 'fr' ? 'École' : this.lang === 'ar' ? 'مدرسة' : 'School' }; return m[s] || s; },
  fSt(s) { return this.t('status_' + s) || s; },
  tAgo(d) {
    if (!d) return '';
    const s = Math.floor((Date.now() - new Date(d)) / 1000);
    const units = [
      ['year', 'years', 31536000], ['month', 'month', 2592000], ['week', 'weeks', 604800],
      ['day', 'days', 86400], ['hour', 'hours', 3600], ['minute', 'minutes', 60]
    ];
    for (const [sing, plur, val] of units) {
      const i = Math.floor(s / val);
      if (i >= 1) {
        const unit = i > 1 ? this.t('time_' + plur) : this.t('time_' + sing);
        if (this.lang === 'en') return `${i} ${unit} ago`;
        if (this.lang === 'ar') return `${this.t('time_ago')} ${i} ${unit}`;
        return `${this.t('time_ago')} ${i} ${unit}`;
      }
    }
    return this.t('time_just_now');
  },
  toast(msg, type = 'inf') { const c = document.getElementById('toasts'); const ic = { ok: 'fa-check-circle', err: 'fa-exclamation-circle', wrn: 'fa-exclamation-triangle', inf: 'fa-info-circle' }; const t = document.createElement('div'); t.className = `toast ${type}`; t.innerHTML = `<i class="fas ${ic[type]}"></i><span class="msg">${msg}</span><button onclick="this.parentElement.remove()"><i class="fas fa-times" style="color:var(--t3)"></i></button>`; c.appendChild(t); setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(100%)'; t.style.transition = '.3s'; setTimeout(() => t.remove(), 300); }, 4000); }
};

document.addEventListener('DOMContentLoaded', () => App.init());
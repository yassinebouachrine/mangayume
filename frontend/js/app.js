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
    footer_copy: '© 2026 Manga Yume — Read Your Dreams. Tous droits réservés.',
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


    admin_upload_single: 'Fichier unique (ZIP/CBZ/multi-images)',
    admin_upload_pages: 'Pages individuelles',
    admin_upload_single_desc: 'Glissez ou sélectionnez votre(vos) fichier(s)',
    admin_upload_single_hint: 'Un seul fichier ou plusieurs images — ordonnées par nom',
  
        // Contact
    contact_title: 'Contactez-nous',
    contact_subject: 'Sujet',
    contact_message: 'Votre message',
    contact_send: 'Envoyer',
    contact_sent: 'Message envoyé!',
    contact_my_messages: 'Mes messages',
    contact_no_messages: 'Aucun message',
    contact_login_required: 'Connectez-vous pour nous contacter',
    contact_subject_ph: 'Sujet de votre message...',
    contact_message_ph: 'Décrivez votre demande en détail...',
    contact_admin_reply: 'Réponse de l\'admin',
    contact_pending: 'En attente de réponse',
    contact_replied: 'Répondu',
    // Admin messages
    admin_messages: 'Messages',
    admin_dashboard: 'Dashboard',
    admin_unread: 'Non lu',
    admin_reply: 'Répondre',
    admin_reply_ph: 'Écrire une réponse...',
    admin_mark_read: 'Marquer lu',
    admin_all: 'Tous',
    admin_filter_unread: 'Non lus',
    admin_filter_replied: 'Répondus',
    admin_filter_unreplied: 'Sans réponse',
    // Dashboard
    dash_total_users: 'Utilisateurs',
    dash_total_mangas: 'Mangas',
    dash_total_chapters: 'Chapitres',
    dash_total_comments: 'Commentaires',
    dash_total_views: 'Vues totales',
    dash_messages: 'Messages',
    dash_unread: 'non lus',
    dash_by_type: 'Par type',
    dash_by_status: 'Par statut',
    dash_by_genre: 'Par genre (Top 15)',
    dash_top_mangas: 'Top 5 — Plus vus',
    dash_recent_users: 'Derniers inscrits',
  
    // Profile
    profile_title: 'Mon Profil',
    profile_change_username: 'Changer le pseudo',
    profile_change_password: 'Changer le mot de passe',
    profile_current_password: 'Mot de passe actuel',
    profile_new_password: 'Nouveau mot de passe',
    profile_new_username: 'Nouveau pseudo',
    profile_save: 'Enregistrer',
    profile_updated: 'Profil mis à jour!',
    profile_relogin: 'Reconnectez-vous pour appliquer',
    // Admin users
    admin_users: 'Utilisateurs',
    admin_user_count: 'utilisateurs',
    admin_edit_user: 'Modifier l\'utilisateur',
    admin_delete_user: 'Supprimer l\'utilisateur',
    admin_role: 'Rôle',
    admin_comments_count: 'Commentaires',
    admin_new_password: 'Nouveau mot de passe',
    admin_user_updated: 'Utilisateur modifié!',
    admin_user_deleted: 'Utilisateur supprimé!',
    admin_cannot_delete_self: 'Impossible de vous supprimer',
    // Stats
    dash_avg_rating: 'Note moyenne',
    dash_total_favorites: 'Total favoris',
    dash_admins: 'Admins',
    dash_normal_users: 'Utilisateurs',

    // Cookies
    cookies_title: '🍪 Cookies',
    cookies_text: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre utilisation des cookies.',
    cookies_accept: 'Accepter',
    cookies_decline: 'Refuser',
    cookies_settings: 'Paramètres',
    cookies_necessary: 'Cookies nécessaires',
    cookies_necessary_desc: 'Requis pour le fonctionnement du site (connexion, préférences).',
    cookies_analytics: 'Cookies analytiques',
    cookies_analytics_desc: 'Nous aident à comprendre comment vous utilisez le site.',
    cookies_preferences: 'Cookies de préférences',
    cookies_preferences_desc: 'Mémorisent vos paramètres (thème, langue).',
    cookies_policy: 'Politique de cookies',
    cookies_save: 'Sauvegarder mes choix',
    // About
    about_title: 'À propos de nous',
    about_subtitle: 'L\'équipe derrière Manga Yume',
    about_mission_title: 'Notre Mission',
    about_mission: 'Manga Yume est né de la passion pour les mangas, manhwas et manhuas. Notre mission est de créer la meilleure plateforme de lecture pour les fans francophones, anglophones et arabophones du monde entier.',
    about_story_title: 'Notre Histoire',
    about_story: 'Fondé en 2024, Manga Yume (夢 = rêve en japonais) est le fruit d\'une équipe de passionnés qui croient que chaque histoire mérite d\'être lue. Nous travaillons chaque jour pour vous offrir une expérience de lecture exceptionnelle.',
    about_values_title: 'Nos Valeurs',
    about_val_passion: 'Passion',
    about_val_passion_desc: 'Animés par l\'amour du manga et de la culture japonaise.',
    about_val_quality: 'Qualité',
    about_val_quality_desc: 'Une plateforme rapide, belle et facile à utiliser.',
    about_val_community: 'Communauté',
    about_val_community_desc: 'Construire un espace pour les fans du monde entier.',
    about_val_access: 'Accessibilité',
    about_val_access_desc: 'Disponible en français, anglais et arabe.',
    about_team_title: 'Notre Équipe',
    about_stats_title: 'Manga Yume en chiffres',
    about_features_title: 'Ce que nous offrons',
    about_feat_catalog: 'Catalogue riche',
    about_feat_catalog_desc: 'Manga, Manhwa, Manhua et Webtoon',
    about_feat_reader: 'Lecteur puissant',
    about_feat_reader_desc: 'Lecture fluide et agréable',
    about_feat_community: 'Communauté active',
    about_feat_community_desc: 'Commentaires et favoris',
    about_feat_multilang: 'Multilingue',
    about_feat_multilang_desc: 'FR, EN, العربية',
    about_feat_themes: 'Thèmes',
    about_feat_themes_desc: 'Mode sombre et clair',
    about_feat_mobile: 'Mobile friendly',
    about_feat_mobile_desc: 'Responsive sur tous les écrans',
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
    footer_copy: '© 2026 Manga Yume — Read Your Dreams. All rights reserved.',
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

    admin_upload_single: 'Single file (ZIP/CBZ/multi-images)',
    admin_upload_pages: 'Individual pages',
    admin_upload_single_desc: 'Drop or select your file(s)',
    admin_upload_single_hint: 'Single file or multiple images — sorted by name',
  
      contact_title: 'Contact Us',
    contact_subject: 'Subject',
    contact_message: 'Your message',
    contact_send: 'Send',
    contact_sent: 'Message sent!',
    contact_my_messages: 'My messages',
    contact_no_messages: 'No messages',
    contact_login_required: 'Login to contact us',
    contact_subject_ph: 'Message subject...',
    contact_message_ph: 'Describe your request in detail...',
    contact_admin_reply: 'Admin reply',
    contact_pending: 'Pending reply',
    contact_replied: 'Replied',
    admin_messages: 'Messages',
    admin_dashboard: 'Dashboard',
    admin_unread: 'Unread',
    admin_reply: 'Reply',
    admin_reply_ph: 'Write a reply...',
    admin_mark_read: 'Mark read',
    admin_all: 'All',
    admin_filter_unread: 'Unread',
    admin_filter_replied: 'Replied',
    admin_filter_unreplied: 'Unreplied',
    dash_total_users: 'Users',
    dash_total_mangas: 'Mangas',
    dash_total_chapters: 'Chapters',
    dash_total_comments: 'Comments',
    dash_total_views: 'Total views',
    dash_messages: 'Messages',
    dash_unread: 'unread',
    dash_by_type: 'By type',
    dash_by_status: 'By status',
    dash_by_genre: 'By genre (Top 15)',
    dash_top_mangas: 'Top 5 — Most viewed',
    dash_recent_users: 'Recent users',

    profile_title: 'My Profile',
    profile_change_username: 'Change username',
    profile_change_password: 'Change password',
    profile_current_password: 'Current password',
    profile_new_password: 'New password',
    profile_new_username: 'New username',
    profile_save: 'Save',
    profile_updated: 'Profile updated!',
    profile_relogin: 'Re-login to apply',
    admin_users: 'Users',
    admin_user_count: 'users',
    admin_edit_user: 'Edit user',
    admin_delete_user: 'Delete user',
    admin_role: 'Role',
    admin_comments_count: 'Comments',
    admin_new_password: 'New password',
    admin_user_updated: 'User updated!',
    admin_user_deleted: 'User deleted!',
    admin_cannot_delete_self: 'Cannot delete yourself',
    dash_avg_rating: 'Average rating',
    dash_total_favorites: 'Total favorites',
    dash_admins: 'Admins',
    dash_normal_users: 'Users',

        cookies_title: '🍪 Cookies',
    cookies_text: 'We use cookies to improve your experience. By continuing to browse, you accept our use of cookies.',
    cookies_accept: 'Accept',
    cookies_decline: 'Decline',
    cookies_settings: 'Settings',
    cookies_necessary: 'Necessary cookies',
    cookies_necessary_desc: 'Required for the site to function (login, preferences).',
    cookies_analytics: 'Analytics cookies',
    cookies_analytics_desc: 'Help us understand how you use the site.',
    cookies_preferences: 'Preference cookies',
    cookies_preferences_desc: 'Remember your settings (theme, language).',
    cookies_policy: 'Cookie policy',
    cookies_save: 'Save my choices',
    about_title: 'About Us',
    about_subtitle: 'The team behind Manga Yume',
    about_mission_title: 'Our Mission',
    about_mission: 'Manga Yume was born from a passion for manga, manhwa, and manhua. Our mission is to create the best reading platform for fans worldwide.',
    about_story_title: 'Our Story',
    about_story: 'Founded in 2024, Manga Yume (夢 = dream in Japanese) is the work of a passionate team who believe every story deserves to be read. We work daily to offer you an exceptional reading experience.',
    about_values_title: 'Our Values',
    about_val_passion: 'Passion',
    about_val_passion_desc: 'Driven by love for manga and Japanese culture.',
    about_val_quality: 'Quality',
    about_val_quality_desc: 'A fast, beautiful, and easy-to-use platform.',
    about_val_community: 'Community',
    about_val_community_desc: 'Building a space for fans worldwide.',
    about_val_access: 'Accessibility',
    about_val_access_desc: 'Available in French, English and Arabic.',
    about_team_title: 'Our Team',
    about_stats_title: 'Manga Yume in numbers',
    about_features_title: 'What we offer',
    about_feat_catalog: 'Rich catalog',
    about_feat_catalog_desc: 'Manga, Manhwa, Manhua & Webtoon',
    about_feat_reader: 'Powerful reader',
    about_feat_reader_desc: 'Smooth and pleasant reading',
    about_feat_community: 'Active community',
    about_feat_community_desc: 'Comments and favorites',
    about_feat_multilang: 'Multilingual',
    about_feat_multilang_desc: 'FR, EN, العربية',
    about_feat_themes: 'Themes',
    about_feat_themes_desc: 'Dark and light mode',
    about_feat_mobile: 'Mobile friendly',
    about_feat_mobile_desc: 'Responsive on all screens',
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
    footer_copy: '© 2026 Manga Yume — اقرأ أحلامك. جميع الحقوق محفوظة.',
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

    admin_upload_single: 'ملف واحد (ZIP/CBZ/صور متعددة)',
    admin_upload_pages: 'صفحات فردية',
    admin_upload_single_desc: 'اسحب أو اختر ملفاتك',
    admin_upload_single_hint: 'ملف واحد أو عدة صور — مرتبة بالاسم',
  
    contact_title: 'اتصل بنا',
    contact_subject: 'الموضوع',
    contact_message: 'رسالتك',
    contact_send: 'إرسال',
    contact_sent: 'تم إرسال الرسالة!',
    contact_my_messages: 'رسائلي',
    contact_no_messages: 'لا توجد رسائل',
    contact_login_required: 'سجل دخولك للتواصل معنا',
    contact_subject_ph: 'موضوع رسالتك...',
    contact_message_ph: 'اشرح طلبك بالتفصيل...',
    contact_admin_reply: 'رد المشرف',
    contact_pending: 'في انتظار الرد',
    contact_replied: 'تم الرد',
    admin_messages: 'الرسائل',
    admin_dashboard: 'لوحة القيادة',
    admin_unread: 'غير مقروء',
    admin_reply: 'رد',
    admin_reply_ph: 'اكتب ردّاً...',
    admin_mark_read: 'تعليم كمقروء',
    admin_all: 'الكل',
    admin_filter_unread: 'غير مقروءة',
    admin_filter_replied: 'مجاب عنها',
    admin_filter_unreplied: 'بدون رد',
    dash_total_users: 'المستخدمون',
    dash_total_mangas: 'المانجا',
    dash_total_chapters: 'الفصول',
    dash_total_comments: 'التعليقات',
    dash_total_views: 'إجمالي المشاهدات',
    dash_messages: 'الرسائل',
    dash_unread: 'غير مقروء',
    dash_by_type: 'حسب النوع',
    dash_by_status: 'حسب الحالة',
    dash_by_genre: 'حسب التصنيف (أعلى 15)',
    dash_top_mangas: 'أعلى 5 — الأكثر مشاهدة',
    dash_recent_users: 'آخر المسجلين',
  
    profile_title: 'ملفي الشخصي',
    profile_change_username: 'تغيير الاسم',
    profile_change_password: 'تغيير كلمة المرور',
    profile_current_password: 'كلمة المرور الحالية',
    profile_new_password: 'كلمة المرور الجديدة',
    profile_new_username: 'الاسم الجديد',
    profile_save: 'حفظ',
    profile_updated: 'تم تحديث الملف!',
    profile_relogin: 'أعد تسجيل الدخول للتطبيق',
    admin_users: 'المستخدمون',
    admin_user_count: 'مستخدم',
    admin_edit_user: 'تعديل المستخدم',
    admin_delete_user: 'حذف المستخدم',
    admin_role: 'الدور',
    admin_comments_count: 'التعليقات',
    admin_new_password: 'كلمة مرور جديدة',
    admin_user_updated: 'تم تعديل المستخدم!',
    admin_user_deleted: 'تم حذف المستخدم!',
    admin_cannot_delete_self: 'لا يمكنك حذف نفسك',
    dash_avg_rating: 'متوسط التقييم',
    dash_total_favorites: 'إجمالي المفضلات',
    dash_admins: 'المشرفون',
    dash_normal_users: 'المستخدمون',

    cookies_title: '🍪 ملفات تعريف الارتباط',
    cookies_text: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بمتابعة التصفح، فإنك توافق على استخدامنا لها.',
    cookies_accept: 'قبول',
    cookies_decline: 'رفض',
    cookies_settings: 'الإعدادات',
    cookies_necessary: 'ملفات ضرورية',
    cookies_necessary_desc: 'مطلوبة لعمل الموقع (تسجيل الدخول، التفضيلات).',
    cookies_analytics: 'ملفات تحليلية',
    cookies_analytics_desc: 'تساعدنا على فهم كيفية استخدامك للموقع.',
    cookies_preferences: 'ملفات التفضيلات',
    cookies_preferences_desc: 'تتذكر إعداداتك (المظهر، اللغة).',
    cookies_policy: 'سياسة ملفات تعريف الارتباط',
    cookies_save: 'حفظ خياراتي',
    about_title: 'من نحن',
    about_subtitle: 'الفريق وراء Manga Yume',
    about_mission_title: 'مهمتنا',
    about_mission: 'ولد Manga Yume من شغف بالمانجا والمانهوا. مهمتنا هي إنشاء أفضل منصة قراءة للمعجبين حول العالم.',
    about_story_title: 'قصتنا',
    about_story: 'تأسس في 2024، Manga Yume (夢 = حلم بالياباني) هو عمل فريق شغوف يؤمن بأن كل قصة تستحق أن تُقرأ.',
    about_values_title: 'قيمنا',
    about_val_passion: 'الشغف',
    about_val_passion_desc: 'مدفوعون بحب المانجا والثقافة اليابانية.',
    about_val_quality: 'الجودة',
    about_val_quality_desc: 'منصة سريعة وجميلة وسهلة الاستخدام.',
    about_val_community: 'المجتمع',
    about_val_community_desc: 'بناء مساحة للمعجبين حول العالم.',
    about_val_access: 'إمكانية الوصول',
    about_val_access_desc: 'متاح بالفرنسية والإنجليزية والعربية.',
    about_team_title: 'فريقنا',
    about_stats_title: 'Manga Yume بالأرقام',
    about_features_title: 'ما نقدمه',
    about_feat_catalog: 'كتالوج غني',
    about_feat_catalog_desc: 'مانجا، مانهوا، ويبتون',
    about_feat_reader: 'قارئ قوي',
    about_feat_reader_desc: 'قراءة سلسة وممتعة',
    about_feat_community: 'مجتمع نشط',
    about_feat_community_desc: 'تعليقات ومفضلات',
    about_feat_multilang: 'متعدد اللغات',
    about_feat_multilang_desc: 'FR, EN, العربية',
    about_feat_themes: 'المظاهر',
    about_feat_themes_desc: 'الوضع الداكن والفاتح',
    about_feat_mobile: 'متوافق مع الهواتف',
    about_feat_mobile_desc: 'تصميم متجاوب',
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
    this.showCookieBanner();

    // Lire l'URL initiale
    this.handleRoute();

    // Bouton retour du navigateur
    window.addEventListener('popstate', () => this.handleRoute());
  },

  handleRoute() {
    const path = window.location.pathname.replace(/^\//, '') || 'home';

    // manga/123
    if (path.startsWith('manga/')) {
      const id = parseInt(path.split('/')[1]);
      if (id) {
        this.page = 'manga-detail';
        this.updateActiveNav('manga-detail');
        this.rDetail(id);
        return;
      }
    }

    // reader/123
    if (path.startsWith('reader/')) {
      const id = parseInt(path.split('/')[1]);
      if (id) {
        this.openReader(id);
        return;
      }
    }

    // browse?genres=action&type=manga
    if (path.startsWith('browse')) {
      const params = {};
      const search = window.location.search;
      if (search) {
        new URLSearchParams(search).forEach((v, k) => {
          params[k] = v;
        });
      }
      this.page = 'browse';
      this.filters = params;
      this.updateActiveNav('browse');
      this.rBrowse(params);
      return;
    }

    // Pages simples
    const simplePages = ['home', 'latest', 'favorites', 'admin', 'contact', 'about', 'profile'];
    const page = simplePages.includes(path) ? path : 'home';
    this.page = page;
    this.updateActiveNav(page);

    switch (page) {
      case 'home': this.rHome(); break;
      case 'latest': this.rLatest(); break;
      case 'favorites': this.rFavorites(); break;
      case 'admin': this.rAdmin(); break;
      case 'contact': this.rContact(); break;
      case 'about': this.rAbout(); break;
      case 'profile': this.rProfile(); break;
      default: this.rHome();
    }
  },

  updateActiveNav(page) {
    document.querySelectorAll('.nav-links [data-p]').forEach(a => {
      a.classList.toggle('active', a.dataset.p === page);
    });
    const footer = document.getElementById('footer');
    if (footer) footer.style.display = (page === 'reader') ? 'none' : '';
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
    const isAdmin = this.user && this.user.role === 'admin';
    const isLogged = !!this.user;

    document.getElementById('sbNav').innerHTML = `
      <div class="sb-section">
        <div class="sb-section-title">${this.t('nav_navigation')}</div>
        <a href="/" onclick="App.go('home');App.closeSB();return false"><i class="fas fa-home"></i> ${this.t('nav_home')}</a>
        <a href="/browse" onclick="App.go('browse');App.closeSB();return false"><i class="fas fa-compass"></i> ${this.t('nav_browse')}</a>
        <a href="/latest" onclick="App.go('latest');App.closeSB();return false"><i class="fas fa-bolt"></i> ${this.t('nav_latest')}</a>
      </div>

      ${isLogged ? `
        <div class="sb-section">
          <div class="sb-section-title">${this.t('profile_title')}</div>
          <a href="/favorites" onclick="App.go('favorites');App.closeSB();return false"><i class="fas fa-heart"></i> ${this.t('nav_favorites')}</a>
          <a href="/profile" onclick="App.go('profile');App.closeSB();return false"><i class="fas fa-user-circle"></i> ${this.t('profile_title')}</a>
          ${isAdmin ? `<a href="/admin" onclick="App.go('admin');App.closeSB();return false"><i class="fas fa-cog"></i> ${this.t('nav_admin')}</a>` : ''}
        </div>
      ` : ''}

      <div class="sb-section">
        <div class="sb-section-title">${this.lang === 'ar' ? 'معلومات' : this.lang === 'en' ? 'Information' : 'Informations'}</div>
        <a href="/about" onclick="App.go('about');App.closeSB();return false"><i class="fas fa-info-circle"></i> ${this.t('about_title')}</a>
        ${!isAdmin ? `<a href="/contact" onclick="App.go('contact');App.closeSB();return false"><i class="fas fa-envelope"></i> ${this.t('contact_title')}</a>` : ''}
      </div>

      <div class="sb-section">
        <div class="sb-section-title">${this.lang === 'ar' ? 'إعدادات' : this.lang === 'en' ? 'Settings' : 'Paramètres'}</div>
        <a href="#" onclick="App.toggleTheme();App.closeSB();return false"><i class="fas ${document.documentElement.getAttribute('data-theme') === 'dark' ? 'fa-sun' : 'fa-moon'}"></i> Theme</a>
        <div class="sb-lang-wrap">
          <a href="#" onclick="App.setLang('fr');App.closeSB();return false" class="${this.lang === 'fr' ? 'active' : ''}">🇫🇷 FR</a>
          <a href="#" onclick="App.setLang('en');App.closeSB();return false" class="${this.lang === 'en' ? 'active' : ''}">🇬🇧 EN</a>
          <a href="#" onclick="App.setLang('ar');App.closeSB();return false" class="${this.lang === 'ar' ? 'active' : ''}">🇸🇦 عربي</a>
        </div>
      </div>

      <div class="sb-section sb-bottom">
        ${isLogged
          ? `<a href="#" onclick="App.logout();App.closeSB();return false" class="sb-logout"><i class="fas fa-sign-out-alt"></i> ${this.t('nav_logout')}</a>`
          : `<a href="#" onclick="App.openAuth();App.closeSB();return false" class="sb-login"><i class="fas fa-sign-in-alt"></i> ${this.t('nav_login')}</a>`
        }
      </div>
    `;
  },
  closeSB() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sbOverlay').classList.remove('open'); },

    // ══════════════════════════════════════
  // COOKIES BANNER
  // ══════════════════════════════════════
  showCookieBanner() {
    const accepted = localStorage.getItem('cookies_accepted');
    if (accepted) return;

    const banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-content">
        <div class="cookie-icon">🍪</div>
        <div class="cookie-text">
          <h4>${this.t('cookies_title')}</h4>
          <p>${this.t('cookies_text')}</p>
        </div>
        <div class="cookie-actions">
          <button class="btn-pri btn-sm" onclick="App.acceptCookies('all')">
            <i class="fas fa-check"></i> ${this.t('cookies_accept')}
          </button>
          <button class="btn-sec btn-sm" onclick="App.showCookieSettings()">
            <i class="fas fa-cog"></i> ${this.t('cookies_settings')}
          </button>
          <button class="btn-sec btn-sm" onclick="App.acceptCookies('necessary')">
            ${this.t('cookies_decline')}
          </button>
        </div>
      </div>
      <div class="cookie-settings hidden" id="cookieSettings">
        <div class="cookie-option">
          <label class="cookie-toggle">
            <input type="checkbox" checked disabled>
            <span class="cookie-slider"></span>
          </label>
          <div>
            <strong>${this.t('cookies_necessary')}</strong>
            <p>${this.t('cookies_necessary_desc')}</p>
          </div>
        </div>
        <div class="cookie-option">
          <label class="cookie-toggle">
            <input type="checkbox" id="cookieAnalytics" checked>
            <span class="cookie-slider"></span>
          </label>
          <div>
            <strong>${this.t('cookies_analytics')}</strong>
            <p>${this.t('cookies_analytics_desc')}</p>
          </div>
        </div>
        <div class="cookie-option">
          <label class="cookie-toggle">
            <input type="checkbox" id="cookiePreferences" checked>
            <span class="cookie-slider"></span>
          </label>
          <div>
            <strong>${this.t('cookies_preferences')}</strong>
            <p>${this.t('cookies_preferences_desc')}</p>
          </div>
        </div>
        <button class="btn-pri btn-sm" onclick="App.saveCookieSettings()" style="margin-top:12px">
          <i class="fas fa-save"></i> ${this.t('cookies_save')}
        </button>
      </div>
    `;
    document.body.appendChild(banner);

    // Animate in
    setTimeout(() => banner.classList.add('show'), 100);
  },

  showCookieSettings() {
    document.getElementById('cookieSettings')?.classList.toggle('hidden');
  },

  acceptCookies(level) {
    const consent = {
      necessary: true,
      analytics: level === 'all',
      preferences: level === 'all',
      accepted_at: new Date().toISOString()
    };
    localStorage.setItem('cookies_accepted', JSON.stringify(consent));
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    }
  },

  saveCookieSettings() {
    const consent = {
      necessary: true,
      analytics: document.getElementById('cookieAnalytics')?.checked || false,
      preferences: document.getElementById('cookiePreferences')?.checked || false,
      accepted_at: new Date().toISOString()
    };
    localStorage.setItem('cookies_accepted', JSON.stringify(consent));
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    }
    this.toast(this.t('cookies_save'), 'ok');
  },

  // ══════════════════════════════════════
  // ABOUT US PAGE — Simple blog style
  // ══════════════════════════════════════
  async rAbout() {
    const a = document.getElementById('app');

    a.innerHTML = `
      <div class="about-page">

        <!-- Title -->
        <h1 class="about-title">${this.t('about_title').toUpperCase()}</h1>
        <div class="about-divider"></div>

        <!-- Date -->
        <div class="about-date">
          <i class="far fa-calendar-alt"></i>
          <div>
            <span class="about-date-label">posted on</span>
            <span class="about-date-value">01.01.2024</span>
          </div>
        </div>

        <div class="about-divider"></div>

        <!-- Cover image -->
        <div class="about-cover">
          <img src="assets/SAKAMOTO DAYS.png" alt="Manga Yume Team">
        </div>

        <!-- Content -->
        <div class="about-content">
          <p>${this.t('about_mission')}</p>
          <p>${this.t('about_story')}</p>

          <div class="about-contact-box">
            <p>
              <i class="fas fa-envelope"></i>
              ${this.lang === 'fr' 
                ? 'Si vous voyez des erreurs sur le site, n\'hésitez pas à nous contacter via la page de contact.' 
                : this.lang === 'ar'
                ? 'إذا رأيت أي أخطاء على الموقع، لا تتردد في التواصل معنا عبر صفحة الاتصال.'
                : 'If you see any errors on the site, feel free to let us know through the contact page.'}
            </p>
            <button class="btn-pri" onclick="App.go('contact')">
              <i class="fas fa-paper-plane"></i> ${this.t('contact_title')}
            </button>
          </div>

        </div>
      </div>
    `;

    window.scrollTo({ top: 0 });
  },


    // ══ CONTACT PAGE ══
  async rContact() {
    const a = document.getElementById('app');

    if (!this.user) {
      a.innerHTML = `
        <section class="sec" style="max-width:700px;margin:0 auto">
          <div class="sec-h"><h2><i class="fas fa-envelope"></i> ${this.t('contact_title')}</h2></div>
          <div class="empty">
            <i class="fas fa-lock"></i>
            <h3>${this.t('contact_login_required')}</h3>
            <button class="btn-pri" onclick="App.openAuth()" style="margin-top:14px">
              <i class="fas fa-sign-in-alt"></i> ${this.t('nav_login')}
            </button>
          </div>
        </section>`;
      return;
    }

    a.innerHTML = `
      <section class="sec" style="max-width:800px;margin:0 auto">
        <div class="sec-h"><h2><i class="fas fa-envelope"></i> ${this.t('contact_title')}</h2></div>

        <!-- Contact form -->
        <div class="adm-form" style="margin-bottom:28px">
          <h3><i class="fas fa-paper-plane" style="color:var(--accent)"></i> ${this.t('contact_send')}</h3>
          <form onsubmit="App.sendMessage(event)">
            <div class="fi" style="margin-bottom:12px">
              <label>${this.t('contact_subject')} *</label>
              <input type="text" id="msgSubject" required minlength="3" placeholder="${this.t('contact_subject_ph')}">
            </div>
            <div class="fi" style="margin-bottom:12px">
              <label>${this.t('contact_message')} *</label>
              <textarea id="msgContent" required minlength="10" rows="5" placeholder="${this.t('contact_message_ph')}"></textarea>
            </div>
            <button type="submit" class="btn-pri">
              <i class="fas fa-paper-plane"></i> ${this.t('contact_send')}
            </button>
          </form>
        </div>

        <!-- My messages -->
        <h3 style="margin-bottom:14px;display:flex;align-items:center;gap:8px">
          <i class="fas fa-inbox" style="color:var(--accent)"></i> ${this.t('contact_my_messages')}
        </h3>
        <div id="myMessagesWrap">
          <div class="spin-w"><div class="spin"></div></div>
        </div>
      </section>`;

    this.loadMyMessages();
  },

  async sendMessage(e) {
    e.preventDefault();
    const subject = document.getElementById('msgSubject').value.trim();
    const content = document.getElementById('msgContent').value.trim();
    try {
      await this.api('/messages', {
        method: 'POST',
        body: JSON.stringify({ subject, content })
      });
      this.toast(this.t('contact_sent'), 'ok');
      document.getElementById('msgSubject').value = '';
      document.getElementById('msgContent').value = '';
      this.loadMyMessages();
    } catch (er) {
      this.toast(er.message, 'err');
    }
  },

  async loadMyMessages() {
    const wrap = document.getElementById('myMessagesWrap');
    try {
      const msgs = await this.api('/messages/my');
      if (!msgs.length) {
        wrap.innerHTML = `<div class="empty" style="padding:20px"><i class="fas fa-inbox"></i><p>${this.t('contact_no_messages')}</p></div>`;
        return;
      }
      wrap.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:12px">
          ${msgs.map(m => `
            <div style="background:var(--bgc);border:1px solid var(--border);border-radius:var(--r-md);padding:16px;
                        ${m.admin_reply ? 'border-left:3px solid var(--ok)' : 'border-left:3px solid var(--warn)'}">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px">
                <strong style="font-size:.95rem">${this.esc(m.subject)}</strong>
                <div style="display:flex;gap:8px;align-items:center">
                  <span style="font-size:.72rem;color:var(--t3)">${this.tAgo(m.created_at)}</span>
                  ${m.admin_reply
                    ? `<span style="background:rgba(16,185,129,.15);color:var(--ok);padding:2px 8px;border-radius:50px;font-size:.68rem;font-weight:600">${this.t('contact_replied')}</span>`
                    : `<span style="background:rgba(245,158,11,.15);color:var(--warn);padding:2px 8px;border-radius:50px;font-size:.68rem;font-weight:600">${this.t('contact_pending')}</span>`
                  }
                </div>
              </div>
              <p style="color:var(--t2);font-size:.88rem;line-height:1.6;margin-bottom:8px">${this.esc(m.content)}</p>
              ${m.admin_reply ? `
                <div style="background:var(--accentL);border-radius:var(--r-sm);padding:12px;margin-top:8px">
                  <div style="font-size:.78rem;font-weight:600;color:var(--accent);margin-bottom:4px">
                    <i class="fas fa-reply"></i> ${this.t('contact_admin_reply')}
                    <span style="color:var(--t3);font-weight:400;margin-left:8px">${this.tAgo(m.replied_at)}</span>
                  </div>
                  <p style="color:var(--t1);font-size:.88rem">${this.esc(m.admin_reply)}</p>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>`;
    } catch (e) {
      wrap.innerHTML = `<div class="empty"><p>${e.message}</p></div>`;
    }
  },

  
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
  loadUser() {
    const d = localStorage.getItem('my_user');
    if (d) {
      try {
        this.user = JSON.parse(d);
      } catch (e) {
        localStorage.removeItem('my_user');
        this.user = null;
      }
    }
    // Always render nav after loading user
    this.renderNav();
  },

  saveUser(u) {
    this.user = u;
    localStorage.setItem('my_user', JSON.stringify(u));
    this.renderNav();
    this.renderSB();
  },

  renderNav() {
    const nu = document.getElementById('navUser');
    if (!nu) return;
    if (!this.user) {
      nu.innerHTML = `<button class="btn-pri nav-login-btn" onclick="App.openAuth()"><i class="fas fa-sign-in-alt"></i> <span data-i18n="nav_login">${this.t('nav_login')}</span></button>`;
      return;
    }
    const isAdmin = this.user.role === 'admin';
    nu.innerHTML = `
      <div class="user-menu">
        <button class="u-btn" onclick="document.querySelector('.u-dd').classList.toggle('open')">
          <div class="u-avatar">${this.user.username[0].toUpperCase()}</div>
          <span class="u-name">${this.user.username}</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="u-dd">
          <div class="u-dd-header">
            <div class="u-dd-avatar">${this.user.username[0].toUpperCase()}</div>
            <div>
              <div class="u-dd-name">${this.user.username}</div>
              <div class="u-dd-role">${isAdmin ? 'Admin' : 'Member'}</div>
            </div>
          </div>
          <div class="u-dd-divider"></div>
          <a href="/favorites" onclick="App.go('favorites');document.querySelector('.u-dd').classList.remove('open');return false">
            <i class="fas fa-heart"></i> ${this.t('nav_favorites')}
          </a>
          <a href="/profile" onclick="App.go('profile');document.querySelector('.u-dd').classList.remove('open');return false">
            <i class="fas fa-user-circle"></i> ${this.t('profile_title')}
          </a>
          ${!isAdmin ? `
            <a href="/contact" onclick="App.go('contact');document.querySelector('.u-dd').classList.remove('open');return false">
              <i class="fas fa-envelope"></i> ${this.t('contact_title')}
            </a>
          ` : ''}
          ${isAdmin ? `
            <a href="/admin" onclick="App.go('admin');document.querySelector('.u-dd').classList.remove('open');return false">
              <i class="fas fa-cog"></i> ${this.t('nav_admin')}
            </a>
          ` : ''}
          <div class="u-dd-divider"></div>
          <a href="/about" onclick="App.go('about');document.querySelector('.u-dd').classList.remove('open');return false">
            <i class="fas fa-info-circle"></i> ${this.t('about_title')}
          </a>
          <div class="u-dd-divider"></div>
          <a href="#" onclick="App.logout();return false" class="u-dd-logout">
            <i class="fas fa-sign-out-alt"></i> ${this.t('nav_logout')}
          </a>
        </div>
      </div>
    `;
  },
  tDD() { document.querySelector('.u-dd')?.classList.toggle('open'); },
  openAuth(t = 'login') { document.getElementById('authBg').classList.add('open'); this.authTab(t); },
  closeAuth() { document.getElementById('authBg').classList.remove('open'); document.getElementById('lErr').textContent = ''; document.getElementById('rErr').textContent = ''; },
  authTab(t) { document.querySelectorAll('.at').forEach(b => b.classList.toggle('active', b.dataset.t === t)); document.getElementById('loginForm').classList.toggle('hidden', t !== 'login'); document.getElementById('regForm').classList.toggle('hidden', t !== 'register'); },
  async login(e) {
    e.preventDefault();
    try {
      const d = await this.api('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: document.getElementById('lEmail').value,
          password: document.getElementById('lPass').value
        })
      });
      this.saveUser({ ...d.user, token: d.token });
      this.closeAuth();
      this.toast(this.t('connected'), 'ok');

      // Force refresh the current page to update UI
      const currentPage = this.page;
      const currentManga = this.manga;
      if (currentPage === 'manga-detail' && currentManga) {
        this.rDetail(currentManga.id);
      } else {
        this.go(currentPage);
      }
    } catch (er) {
      document.getElementById('lErr').textContent = er.message;
    }
  },

  async register(e) {
    e.preventDefault();
    try {
      const d = await this.api('/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          username: document.getElementById('rUser').value,
          email: document.getElementById('rEmail').value,
          password: document.getElementById('rPass').value
        })
      });
      this.saveUser({ ...d.user, token: d.token });
      this.closeAuth();
      this.toast(this.t('welcome'), 'ok');

      // Refresh page
      this.go(this.page);
    } catch (er) {
      document.getElementById('rErr').textContent = er.message;
    }
  },

  logout() {
    this.user = null;
    localStorage.removeItem('my_user');
    this.renderNav();
    this.renderSB();
    this.toast(this.t('disconnected'), 'inf');
    this.go('home');
  },
  async register(e) { e.preventDefault(); try { const d = await this.api('/auth/register', { method: 'POST', body: JSON.stringify({ username: document.getElementById('rUser').value, email: document.getElementById('rEmail').value, password: document.getElementById('rPass').value }) }); this.saveUser({ ...d.user, token: d.token }); this.closeAuth(); this.toast(this.t('welcome'), 'ok'); } catch (er) { document.getElementById('rErr').textContent = er.message; } },
  logout() { this.user = null; localStorage.removeItem('my_user'); this.renderNav(); this.renderSB(); this.toast(this.t('disconnected'), 'inf'); this.go('home'); },

  async loadGenres() { try { this.genres = await this.api('/manga/genres'); } catch (e) { this.genres = []; } },

  // ══ NAV ══
  go(page, params = {}) {
    this.page = page;
    this.filters = params;

    // Construire l'URL
    let url = '/' + page;
    if (page === 'manga-detail' && params.id) {
      url = `/manga/${params.id}`;
    } else if (page === 'reader' && params.id) {
      url = `/reader/${params.id}`;
    } else if (page === 'home') {
      url = '/';
    } else if (page === 'browse') {
      const query = Object.entries(params)
        .filter(([k, v]) => v)
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        .join('&');
      url = query ? `/browse?${query}` : '/browse';
    }

    // Pousser dans l'historique
    history.pushState({ page, params }, '', url);

    // Navbar active
    this.updateActiveNav(page);

    // Scroll en haut
    window.scrollTo({ top: 0 });

    // Footer
    const footer = document.getElementById('footer');
    if (footer) footer.style.display = (page === 'reader') ? 'none' : '';

    // Render
    switch (page) {
      case 'home': this.rHome(); break;
      case 'browse': this.rBrowse(params); break;
      case 'latest': this.rLatest(); break;
      case 'manga-detail': this.rDetail(params.id); break;
      case 'favorites': this.rFavorites(); break;
      case 'admin': this.rAdmin(); break;
      case 'contact': this.rContact(); break;
      case 'about': this.rAbout(); break;
      case 'profile': this.rProfile(); break;
      default: this.rHome();
    }
  },
  search(q) { clearTimeout(this.sTmr); const dd = document.getElementById('searchDD'); if (q.length < 2) { dd.classList.remove('open'); return; } this.sTmr = setTimeout(async () => { try { const d = await this.api(`/manga?search=${encodeURIComponent(q)}&limit=8`); dd.innerHTML = d.mangas.length ? d.mangas.map(m => `<div class="sd-item" onclick="App.go('manga-detail',{id:${m.id}})"><img src="${m.cover_image}" onerror="this.src='${PH}/40x56?text=?'"><div><h4>${m.title}</h4><span class="type-${m.type}">${m.type}</span> · ${m.chapters_count} ch.</div></div>`).join('') : `<div style="padding:16px;text-align:center;color:var(--t3)">${this.t('search_no_result')}</div>`; dd.classList.add('open'); } catch (e) {} }, 300); },

  // ══ PROFILE PAGE ══
  async rProfile() {
    const a = document.getElementById('app');
    if (!this.user) {
      a.innerHTML = `<div class="empty"><i class="fas fa-user"></i><h3>${this.t('fav_login')}</h3>
        <button class="btn-pri" onclick="App.openAuth()" style="margin-top:14px">${this.t('nav_login')}</button></div>`;
      return;
    }

    a.innerHTML = `
      <section class="sec" style="max-width:600px;margin:0 auto">
        <div class="sec-h"><h2><i class="fas fa-user-cog"></i> ${this.t('profile_title')}</h2></div>

        <!-- User info card -->
        <div class="adm-form" style="margin-bottom:24px;text-align:center">
          <div class="com-av" style="width:72px;height:72px;font-size:1.8rem;margin:0 auto 12px">
            ${this.user.username.charAt(0).toUpperCase()}
          </div>
          <h3 style="margin-bottom:4px">${this.esc(this.user.username)}</h3>
          <p style="color:var(--t3);font-size:.85rem">${this.user.email}</p>
          <span style="display:inline-block;margin-top:8px;padding:3px 12px;border-radius:50px;font-size:.72rem;font-weight:600;
                background:${this.user.role === 'admin' ? 'var(--warn)' : 'var(--accentL)'};
                color:${this.user.role === 'admin' ? '#000' : 'var(--accent)'}">${this.user.role.toUpperCase()}</span>
        </div>

        <!-- Change username -->
        <div class="adm-form" style="margin-bottom:16px">
          <h3><i class="fas fa-user-edit" style="color:var(--accent)"></i> ${this.t('profile_change_username')}</h3>
          <form onsubmit="App.updateProfile(event,'username')">
            <div class="fi" style="margin-bottom:10px">
              <label>${this.t('profile_new_username')}</label>
              <input type="text" id="profNewUsername" minlength="3" required value="${this.esc(this.user.username)}" placeholder="${this.t('profile_new_username')}">
            </div>
            <div class="fi" style="margin-bottom:14px">
              <label>${this.t('profile_current_password')} *</label>
              <input type="password" id="profCurPass1" required placeholder="••••••">
            </div>
            <button type="submit" class="btn-pri btn-sm"><i class="fas fa-save"></i> ${this.t('profile_save')}</button>
          </form>
        </div>

        <!-- Change password -->
        <div class="adm-form">
          <h3><i class="fas fa-lock" style="color:var(--accent)"></i> ${this.t('profile_change_password')}</h3>
          <form onsubmit="App.updateProfile(event,'password')">
            <div class="fi" style="margin-bottom:10px">
              <label>${this.t('profile_current_password')} *</label>
              <input type="password" id="profCurPass2" required placeholder="••••••">
            </div>
            <div class="fi" style="margin-bottom:14px">
              <label>${this.t('profile_new_password')}</label>
              <input type="password" id="profNewPass" minlength="6" required placeholder="••••••">
            </div>
            <button type="submit" class="btn-pri btn-sm"><i class="fas fa-save"></i> ${this.t('profile_save')}</button>
          </form>
        </div>
      </section>`;
  },

  async updateProfile(e, type) {
    e.preventDefault();
    try {
      const body = {};

      if (type === 'username') {
        body.username = document.getElementById('profNewUsername').value.trim();
        body.current_password = document.getElementById('profCurPass1').value;
      } else {
        body.password = document.getElementById('profNewPass').value;
        body.current_password = document.getElementById('profCurPass2').value;
      }

      const d = await this.api('/auth/update-profile', {
        method: 'PUT',
        body: JSON.stringify(body)
      });

      // Update stored user
      if (d.user) {
        this.user.username = d.user.username;
        localStorage.setItem('my_user', JSON.stringify(this.user));
        this.renderNav();
      }

      this.toast(this.t('profile_updated'), 'ok');
      if (type === 'username') this.rProfile();
    } catch (er) {
      this.toast(er.message, 'err');
    }
  },

  // ══ HOME ══
  async rHome() {
    const a = document.getElementById('app'); a.innerHTML = `<div class="spin-w"><div class="spin"></div></div>`;
    try {
      const [ft, lt, pp] = await Promise.all([this.api('/manga/featured'), this.api('/manga/latest?limit=18'), this.api('/manga/popular?limit=10')]);
      a.innerHTML = `${this.heroHTML(ft)}
        <section class="sec"><div class="sec-h"><h2><i class="fas fa-fire"></i> ${this.t('home_popular')}</h2><a href="browse" onclick="App.go('browse',{sort:'-views'})">${this.t('home_see_all')} <i class="fas fa-arrow-right"></i></a></div><div class="mgrid">${pp.map(m => this.cardHTML(m)).join('')}</div></section>
        <section class="sec"><div class="sec-h"><h2><i class="fas fa-clock"></i> ${this.t('home_latest')}</h2><a href="latest" onclick="App.go('latest')">${this.t('home_see_all')} <i class="fas fa-arrow-right"></i></a></div><div class="ugrid">${lt.slice(0, 12).map(m => this.uHTML(m)).join('')}</div></section>`;
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

  async rFavorites() { const a = document.getElementById('app'); if (!this.user) { a.innerHTML = `<div class="empty"><i class="fas fa-heart"></i><h3>${this.t('fav_login')}</h3><button class="btn-pri" onclick="App.openAuth()" style="margin-top:14px">${this.t('nav_login')}</button></div>`; return; } a.innerHTML = `<div class="spin-w"><div class="spin"></div></div>`; try { const d = await this.api('/auth/favorites'); a.innerHTML = `<section class="sec"><div class="sec-h"><h2><i class="fas fa-heart"></i> ${this.t('fav_title')} (${d.favorites.length})</h2></div>${d.favorites.length ? `<div class="mgrid">${d.favorites.map(m => this.cardHTML(m)).join('')}</div>` : `<div class="empty"><i class="fas fa-heart-broken"></i><h3>${this.t('fav_none')}</h3></div>`}</section>`; } catch (e) { a.innerHTML = `<div class="empty"><p>${e.message}</p></div>`; } },

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


    // ══ DASHBOARD ══
  async loadDashboard() {
    const pane = document.getElementById('ap-dash');
    try {
      const s = await this.api('/stats');

      const badge = document.getElementById('unreadBadge');
      if (badge && s.unread_messages > 0) {
        badge.style.display = 'inline';
        badge.textContent = s.unread_messages;
      }

      const colors = ['#8b5cf6','#3b82f6','#10b981','#f59e0b','#ec4899','#ef4444','#06b6d4','#84cc16'];
      const typeColors = {'manga':'#ef4444','manhwa':'#3b82f6','manhua':'#10b981','webtoon':'#f59e0b'};
      const statusColors = {'ongoing':'#10b981','completed':'#3b82f6','hiatus':'#f59e0b','cancelled':'#ef4444'};

      pane.innerHTML = `
        <!-- ═══ STAT CARDS ═══ -->
        <div class="dash-cards">
          ${this.dashCard('fas fa-users', this.t('dash_total_users'), s.total_users, '#3b82f6',
            `<div class="dc-sub"><span>${s.admin_count} ${this.t('dash_admins')}</span><span>${s.user_count} ${this.t('dash_normal_users')}</span></div>`)}
          ${this.dashCard('fas fa-book', this.t('dash_total_mangas'), s.total_mangas, '#8b5cf6',
            `<div class="dc-sub">${s.type_stats.map(t=>`<span>${t.type}: ${t.count}</span>`).join('')}</div>`)}
          ${this.dashCard('fas fa-layer-group', this.t('dash_total_chapters'), s.total_chapters, '#10b981')}
          ${this.dashCard('fas fa-comments', this.t('dash_total_comments'), s.total_comments, '#f59e0b')}
          ${this.dashCard('fas fa-eye', this.t('dash_total_views'), this.fN(s.total_views), '#ec4899')}
          ${this.dashCard('fas fa-star', this.t('dash_avg_rating'), `${s.avg_rating} / 5`, '#f59e0b')}
          ${this.dashCard('fas fa-heart', this.t('dash_total_favorites'), s.total_favorites, '#ef4444')}
          ${this.dashCard('fas fa-envelope', this.t('dash_messages'),
            `${s.total_messages}`, '#06b6d4',
            s.unread_messages > 0 ? `<div class="dc-alert">${s.unread_messages} ${this.t('dash_unread')}</div>` : '')}
        </div>

        <div class="dash-grid">
          <!-- ═══ PIE: BY TYPE ═══ -->
          <div class="dash-box">
            <h3><i class="fas fa-chart-pie"></i> ${this.t('dash_by_type')}</h3>
            <div class="dash-pie-wrap">
              <div class="dash-donut" style="background:conic-gradient(${this.conicGrad(s.type_stats.map(t=>({val:t.count,color:typeColors[t.type]||'#888'})),s.total_mangas)})">
                <div class="dash-donut-center">${s.total_mangas}</div>
              </div>
              <div class="dash-legend">
                ${s.type_stats.map(t => `
                  <div class="dash-leg-item">
                    <span class="dash-leg-dot" style="background:${typeColors[t.type]||'#888'}"></span>
                    <span class="dash-leg-label">${t.type}</span>
                    <span class="dash-leg-val">${t.count}</span>
                    <span class="dash-leg-pct">${s.total_mangas ? Math.round(t.count/s.total_mangas*100) : 0}%</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- ═══ BAR: BY STATUS ═══ -->
          <div class="dash-box">
            <h3><i class="fas fa-signal"></i> ${this.t('dash_by_status')}</h3>
            <div class="dash-bars">
              ${s.status_stats.map(st => {
                const pct = s.total_mangas ? Math.round(st.count / s.total_mangas * 100) : 0;
                const col = statusColors[st.status] || '#888';
                return `
                  <div class="dash-bar-row">
                    <span class="dash-bar-label">${this.t('status_' + st.status)}</span>
                    <div class="dash-bar-track">
                      <div class="dash-bar-fill" style="width:${pct}%;background:linear-gradient(90deg,${col},${col}aa)">
                        <span>${st.count}</span>
                      </div>
                    </div>
                    <span class="dash-bar-pct">${pct}%</span>
                  </div>`;
              }).join('')}
            </div>
          </div>

          <!-- ═══ GENRES ═══ -->
          <div class="dash-box dash-wide">
            <h3><i class="fas fa-tags"></i> ${this.t('dash_by_genre')}</h3>
            <div class="dash-genre-grid">
              ${s.genre_stats.map((g, i) => `
                <div class="dash-genre-chip" style="border-left:3px solid ${colors[i % colors.length]}">
                  <span class="dash-genre-name">${g.name}</span>
                  <span class="dash-genre-count" style="background:${colors[i % colors.length]}">${g.count}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- ═══ TOP MANGAS ═══ -->
          <div class="dash-box">
            <h3><i class="fas fa-trophy" style="color:var(--warn)"></i> ${this.t('dash_top_mangas')}</h3>
            <div class="dash-top-list">
              ${s.top_mangas.map((m, i) => `
                <div class="dash-top-item" onclick="App.go('manga-detail',{id:${m.id}})">
                  <div class="dash-top-rank" style="color:${i===0?'#f59e0b':i===1?'#94a3b8':i===2?'#cd7f32':'var(--t3)'}">#${i+1}</div>
                  <img src="${m.cover_image}" class="dash-top-img" onerror="this.style.display='none'">
                  <div class="dash-top-info">
                    <div class="dash-top-title">${m.title}</div>
                    <div class="dash-top-meta">
                      <span class="mc-type type-${m.type}" style="font-size:.55rem;padding:1px 6px">${m.type}</span>
                      <span><i class="fas fa-eye"></i> ${this.fN(m.views)}</span>
                      <span><i class="fas fa-star" style="color:var(--warn)"></i> ${m.rating}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- ═══ RECENT USERS ═══ -->
          <div class="dash-box">
            <h3><i class="fas fa-user-clock"></i> ${this.t('dash_recent_users')}</h3>
            <div class="dash-users-list">
              ${s.recent_users.map(u => `
                <div class="dash-user-item">
                  <div class="com-av" style="width:36px;height:36px;font-size:.8rem">${u.username.charAt(0).toUpperCase()}</div>
                  <div class="dash-user-info">
                    <div class="dash-user-name">${u.username}</div>
                    <div class="dash-user-email">${u.email || ''}</div>
                  </div>
                  <div style="text-align:right">
                    <span class="dash-user-role ${u.role}">${u.role}</span>
                    <div class="dash-user-date">${this.tAgo(u.created_at)}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>`;
    } catch (e) {
      pane.innerHTML = `<div class="empty"><p>${e.message}</p></div>`;
    }
  },

  dashCard(icon, label, value, color, extra = '') {
    return `
      <div class="dash-card" style="--dc-color:${color}">
        <div class="dc-icon"><i class="${icon}"></i></div>
        <div class="dc-body">
          <div class="dc-value">${value}</div>
          <div class="dc-label">${label}</div>
          ${extra}
        </div>
      </div>`;
  },

  conicGrad(items, total) {
    if (!total) return '#333 0deg 360deg';
    let deg = 0;
    const parts = [];
    items.forEach(item => {
      const angle = (item.val / total) * 360;
      parts.push(`${item.color} ${deg}deg ${deg + angle}deg`);
      deg += angle;
    });
    if (deg < 360) parts.push(`var(--bg3) ${deg}deg 360deg`);
    return parts.join(',');
  },
  statCard(icon, label, value, color) {
    return `
      <div style="background:var(--bgc);border:1px solid var(--border);border-radius:var(--r-lg);padding:20px;
                  border-top:3px solid ${color}">
        <div style="display:flex;align-items:center;gap:12px">
          <div style="width:44px;height:44px;border-radius:12px;background:${color}20;display:flex;align-items:center;justify-content:center">
            <i class="${icon}" style="color:${color};font-size:1.1rem"></i>
          </div>
          <div>
            <div style="font-size:1.4rem;font-weight:800;color:var(--t1)">${value}</div>
            <div style="font-size:.78rem;color:var(--t3)">${label}</div>
          </div>
        </div>
      </div>`;
  },


    // ══ ADMIN USERS ══
  admUserSearch: '',

  async loadAdminUsers(page = 1) {
    const pane = document.getElementById('ap-users');
    try {
      const params = new URLSearchParams({ page, limit: 15 });
      if (this.admUserSearch) params.set('search', this.admUserSearch);

      const d = await this.api(`/admin/users?${params}`);

      pane.innerHTML = `
        <div style="display:flex;gap:10px;margin-bottom:16px;align-items:center;flex-wrap:wrap">
          <div style="flex:1;min-width:200px;position:relative">
            <i class="fas fa-search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--t3)"></i>
            <input type="text" value="${this.esc(this.admUserSearch)}"
                   placeholder="${this.t('browse_search')}..."
                   oninput="App.admUserSearch=this.value"
                   onkeydown="if(event.key==='Enter')App.loadAdminUsers()"
                   style="width:100%;padding:10px 14px 10px 38px;background:var(--bgi);border:1px solid var(--border);border-radius:var(--r-md);color:var(--t1);outline:none">
          </div>
          <button class="btn-pri btn-sm" onclick="App.loadAdminUsers()"><i class="fas fa-search"></i></button>
          <span style="color:var(--t3);font-size:.85rem">${d.pagination.total} ${this.t('admin_user_count')}</span>
        </div>

        ${d.users.length ? `
          <div style="overflow-x:auto">
            <table class="atbl">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>${this.t('admin_username') || 'Username'}</th>
                  <th>Email</th>
                  <th>${this.t('admin_role')}</th>
                  <th>${this.t('admin_comments_count')}</th>
                  <th>${this.t('nav_favorites')}</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${d.users.map(u => `
                  <tr>
                    <td><strong>${u.id}</strong></td>
                    <td>
                      <div style="display:flex;align-items:center;gap:8px">
                        <div class="com-av" style="width:28px;height:28px;font-size:.7rem">${u.username.charAt(0).toUpperCase()}</div>
                        ${u.username}
                      </div>
                    </td>
                    <td style="font-size:.82rem;color:var(--t3)">${u.email || ''}</td>
                    <td><span class="dash-user-role ${u.role}">${u.role}</span></td>
                    <td>${u.comments_count || 0}</td>
                    <td>${u.favorites_count || 0}</td>
                    <td style="font-size:.75rem;color:var(--t3)">${this.tAgo(u.created_at)}</td>
                    <td>
                      <div class="acts">
                        <button class="btn-sm btn-sec" onclick="App.openEditUser(${u.id},'${this.esc(u.username)}','${u.role}')" title="${this.t('admin_edit_user')}">
                          <i class="fas fa-edit"></i>
                        </button>
                        ${u.id !== this.user.id ? `
                          <button class="btn-sm btn-dan" onclick="App.deleteUser(${u.id})" title="${this.t('admin_delete_user')}">
                            <i class="fas fa-trash"></i>
                          </button>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          ${this.pagHTML(d.pagination, 'loadAdminUsers')}
        ` : `<div class="empty"><p>${this.t('search_no_result')}</p></div>`}

        <!-- Edit user modal -->
        <div id="editUserModal" style="display:none;position:fixed;inset:0;z-index:3100;background:rgba(0,0,0,.7);
             backdrop-filter:blur(4px);align-items:center;justify-content:center">
          <div style="background:var(--bg1);border:1px solid var(--border);border-radius:var(--r-xl);
               padding:28px;max-width:420px;width:95%;position:relative">
            <button onclick="document.getElementById('editUserModal').style.display='none'"
                    style="position:absolute;top:12px;right:12px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:var(--t3)">
              <i class="fas fa-times"></i>
            </button>
            <div id="editUserContent"></div>
          </div>
        </div>`;
    } catch (e) {
      pane.innerHTML = `<div class="empty"><p>${e.message}</p></div>`;
    }
  },

  openEditUser(id, username, role) {
    const modal = document.getElementById('editUserModal');
    const content = document.getElementById('editUserContent');
    modal.style.display = 'flex';
    content.innerHTML = `
      <h3 style="margin-bottom:16px"><i class="fas fa-user-edit" style="color:var(--accent)"></i> ${this.t('admin_edit_user')} #${id}</h3>
      <form onsubmit="App.saveAdminUser(event,${id})">
        <div class="fi" style="margin-bottom:12px">
          <label>Username</label>
          <input type="text" id="euName" value="${username}" minlength="3">
        </div>
        <div class="fi" style="margin-bottom:12px">
          <label>${this.t('admin_role')}</label>
          <select id="euRole">
            <option value="user" ${role === 'user' ? 'selected' : ''}>User</option>
            <option value="admin" ${role === 'admin' ? 'selected' : ''}>Admin</option>
          </select>
        </div>
        <div class="fi" style="margin-bottom:14px">
          <label>${this.t('admin_new_password')}</label>
          <input type="password" id="euPass" placeholder="••••••" minlength="6">
        </div>
        <div style="display:flex;gap:10px">
          <button type="submit" class="btn-pri"><i class="fas fa-save"></i> ${this.t('admin_save')}</button>
          <button type="button" class="btn-sec" onclick="document.getElementById('editUserModal').style.display='none'">${this.t('comment_cancel')}</button>
        </div>
      </form>`;
  },

  async saveAdminUser(e, id) {
    e.preventDefault();
    try {
      const body = {
        username: document.getElementById('euName').value.trim(),
        role: document.getElementById('euRole').value
      };
      const pass = document.getElementById('euPass').value;
      if (pass) body.password = pass;

      await this.api(`/admin/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body)
      });
      this.toast(this.t('admin_user_updated'), 'ok');
      document.getElementById('editUserModal').style.display = 'none';
      this.loadAdminUsers();
    } catch (er) { this.toast(er.message, 'err'); }
  },

  async deleteUser(id) {
    if (!confirm(this.t('confirm_delete'))) return;
    try {
      await this.api(`/admin/users/${id}`, { method: 'DELETE' });
      this.toast(this.t('admin_user_deleted'), 'ok');
      this.loadAdminUsers();
    } catch (e) { this.toast(e.message, 'err'); }
  },


  // ══ ADMIN MESSAGES ══
  msgFilter: 'all',

  async loadAdminMessages(page = 1) {
    const pane = document.getElementById('ap-msgs');
    try {
      const params = new URLSearchParams({ page, limit: 15 });
      if (this.msgFilter !== 'all') params.set('status', this.msgFilter);

      const d = await this.api(`/messages/all?${params}`);

      pane.innerHTML = `
        <!-- Filters -->
        <div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap">
          ${['all', 'unread', 'replied', 'unreplied'].map(f => `
            <button class="btn-sm ${this.msgFilter === f ? 'btn-pri' : 'btn-sec'}"
                    onclick="App.msgFilter='${f}';App.loadAdminMessages()">
              ${this.t('admin_filter_' + f) || this.t('admin_all')}
            </button>
          `).join('')}
          <span style="margin-left:auto;color:var(--t3);font-size:.85rem">${d.pagination.total} message(s)</span>
        </div>

        ${d.messages.length ? `
          <div style="display:flex;flex-direction:column;gap:12px">
            ${d.messages.map(m => `
              <div style="background:var(--bgc);border:1px solid var(--border);border-radius:var(--r-md);padding:16px;
                          ${!m.is_read ? 'border-left:3px solid var(--accent)' : ''}">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;flex-wrap:wrap;gap:6px">
                  <div>
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                      <div class="com-av" style="width:28px;height:28px;font-size:.7rem">${m.user?.username?.charAt(0).toUpperCase() || '?'}</div>
                      <strong style="font-size:.9rem">${m.user?.username || '?'}</strong>
                      ${!m.is_read ? `<span style="background:var(--accent);color:#fff;padding:1px 6px;border-radius:50px;font-size:.6rem;font-weight:700">${this.t('admin_unread')}</span>` : ''}
                    </div>
                    <div style="font-size:.95rem;font-weight:600;color:var(--t1)">${this.esc(m.subject)}</div>
                  </div>
                  <div style="display:flex;gap:6px;align-items:center">
                    <span style="font-size:.7rem;color:var(--t3)">${this.tAgo(m.created_at)}</span>
                    <button class="btn-sm btn-dan" onclick="App.delMsg(${m.id})" title="${this.t('comment_delete')}">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>

                <p style="color:var(--t2);font-size:.88rem;line-height:1.6;margin-bottom:10px;
                          background:var(--bg3);padding:10px;border-radius:var(--r-sm)">${this.esc(m.content)}</p>

                ${m.admin_reply ? `
                  <div style="background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);border-radius:var(--r-sm);padding:12px;margin-bottom:8px">
                    <div style="font-size:.75rem;font-weight:600;color:var(--ok);margin-bottom:4px">
                      <i class="fas fa-check-circle"></i> ${this.t('contact_admin_reply')} — ${this.tAgo(m.replied_at)}
                    </div>
                    <p style="color:var(--t1);font-size:.88rem">${this.esc(m.admin_reply)}</p>
                  </div>
                ` : ''}

                <!-- Reply form -->
                <div style="display:flex;gap:8px;align-items:flex-start">
                  <textarea id="reply_${m.id}" rows="2" placeholder="${this.t('admin_reply_ph')}"
                            style="flex:1;padding:8px 12px;background:var(--bgi);border:1px solid var(--border);
                                   border-radius:var(--r-md);color:var(--t1);outline:none;font-size:.85rem;resize:vertical">${m.admin_reply || ''}</textarea>
                  <button class="btn-pri btn-sm" onclick="App.replyMsg(${m.id})" style="white-space:nowrap">
                    <i class="fas fa-reply"></i> ${this.t('admin_reply')}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
          ${this.pagHTML(d.pagination, 'loadAdminMessages')}
        ` : `<div class="empty"><i class="fas fa-inbox"></i><h3>${this.t('contact_no_messages')}</h3></div>`}`;
    } catch (e) {
      pane.innerHTML = `<div class="empty"><p>${e.message}</p></div>`;
    }
  },

  async replyMsg(id) {
    const textarea = document.getElementById(`reply_${id}`);
    const reply = textarea?.value?.trim();
    if (!reply) return this.toast(this.t('fill_required'), 'wrn');
    try {
      await this.api(`/messages/${id}/reply`, {
        method: 'POST',
        body: JSON.stringify({ reply })
      });
      this.toast(this.t('contact_replied'), 'ok');
      this.loadAdminMessages();
    } catch (e) { this.toast(e.message, 'err'); }
  },

  async delMsg(id) {
    if (!confirm(this.t('confirm_delete'))) return;
    try {
      await this.api(`/messages/${id}`, { method: 'DELETE' });
      this.toast(this.t('success_deleted'), 'ok');
      this.loadAdminMessages();
    } catch (e) { this.toast(e.message, 'err'); }
  },


  // ══ ADMIN ══
  admSearch: '', // search term for admin manga list
  admMangas: [], // cached list

  async rAdmin() {
    const a = document.getElementById('app');
    if (!this.user || this.user.role !== 'admin') {
      a.innerHTML = `<div class="empty"><i class="fas fa-lock"></i><h3>${this.t('access_denied')}</h3></div>`;
      return;
    }
    a.innerHTML = `
      <div class="admin">
        <div class="adm-h">
          <div class="adm-logo"><img src="assets/logo.png" alt=""><span>MANGA YUME</span></div>
          <h1><i class="fas fa-cog"></i> ${this.t('admin_panel')}</h1>
        </div>
        <div class="adm-tabs">
          <button class="adm-tab active" onclick="App.aTab('dash',this)"><i class="fas fa-chart-bar"></i> ${this.t('admin_dashboard')}</button>
          <button class="adm-tab" onclick="App.aTab('add',this)"><i class="fas fa-plus"></i> ${this.t('admin_add_manga')}</button>
          <button class="adm-tab" onclick="App.aTab('manage',this)"><i class="fas fa-list"></i> ${this.t('admin_manage')}</button>
          <button class="adm-tab" onclick="App.aTab('chap',this)"><i class="fas fa-file-image"></i> ${this.t('admin_add_chapter')}</button>
          <button class="adm-tab" onclick="App.aTab('users',this)"><i class="fas fa-users"></i> ${this.t('admin_users')}</button>
          <button class="adm-tab" onclick="App.aTab('msgs',this)"><i class="fas fa-envelope"></i> ${this.t('admin_messages')}
            <span id="unreadBadge" style="display:none;background:var(--err);color:#fff;padding:1px 6px;border-radius:50px;font-size:.65rem;margin-left:4px"></span>
          </button>
        </div>
        <div class="adm-pane active" id="ap-dash"><div class="spin-w"><div class="spin"></div></div></div>
        <div class="adm-pane" id="ap-add">${this.addMHTML()}</div>
        <div class="adm-pane" id="ap-manage"><div class="spin-w"><div class="spin"></div></div></div>
        <div class="adm-pane" id="ap-chap">${this.addChHTML()}</div>
        <div class="adm-pane" id="ap-users"><div class="spin-w"><div class="spin"></div></div></div>
        <div class="adm-pane" id="ap-msgs"><div class="spin-w"><div class="spin"></div></div></div>
      </div>`;
    this.loadDashboard();
  },

  aTab(t, btn) {
    document.querySelectorAll('.adm-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.adm-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`ap-${t}`).classList.add('active');
    if (t === 'manage') this.loadAdmList();
    if (t === 'dash') this.loadDashboard();
    if (t === 'msgs') this.loadAdminMessages();
    if (t === 'users') this.loadAdminUsers();
  },

  // ─── ADD MANGA FORM ────────────────────
  addMHTML() {
    return `
      <div class="adm-form">
        <h3><i class="fas fa-plus-circle"></i> ${this.t('admin_new_manga')}</h3>
        <form id="amF" onsubmit="App.addManga(event)">
          <div class="fgrid">
            <div class="fi">
              <label>${this.t('admin_title')} *</label>
              <input type="text" id="amT" required>
            </div>
            <div class="fi">
              <label>${this.t('admin_alt_titles')}</label>
              <input type="text" id="amA">
            </div>
            <div class="fi">
              <label>${this.t('browse_type')} *</label>
              <select id="amTy">
                <option value="manga">${this.t('type_manga')}</option>
                <option value="manhwa">${this.t('type_manhwa')}</option>
                <option value="manhua">${this.t('type_manhua')}</option>
                <option value="webtoon">${this.t('type_webtoon')}</option>
              </select>
            </div>
            <div class="fi">
              <label>${this.t('browse_status')}</label>
              <select id="amSt">
                <option value="ongoing">${this.t('status_ongoing')}</option>
                <option value="completed">${this.t('status_completed')}</option>
                <option value="hiatus">${this.t('status_hiatus')}</option>
              </select>
            </div>
            <div class="fi">
              <label>${this.t('admin_author')} *</label>
              <input type="text" id="amAu" required>
            </div>
            <div class="fi">
              <label>${this.t('admin_artist')}</label>
              <input type="text" id="amAr">
            </div>
            <div class="fi">
              <label>${this.t('admin_year')}</label>
              <input type="number" id="amY" value="2024">
            </div>
            <div class="fi">
              <label>${this.t('admin_featured')}</label>
              <select id="amFe">
                <option value="false">${this.t('no')}</option>
                <option value="true">${this.t('yes')}</option>
              </select>
            </div>
          </div>
          <div class="fi fi-full">
            <label>${this.t('admin_description')} *</label>
            <textarea id="amD" required rows="4"></textarea>
          </div>
          <div style="margin:12px 0">
            <label style="font-size:.8rem;font-weight:600;color:var(--t2)">${this.t('browse_genres')}</label>
          </div>
          <div class="gchips" id="amG">
            ${this.genres.map(g => `<span class="gc" data-id="${g.id}" onclick="this.classList.toggle('on')">${g.name}</span>`).join('')}
          </div>
          <div class="fi" style="margin-top:14px">
            <label>${this.t('admin_cover')} *</label>
            <div class="fup">
              <input type="file" id="amC" accept="image/*">
              <i class="fas fa-cloud-upload-alt"></i>
              <p>${this.t('admin_cover_hint')}</p>
            </div>
          </div>
          <div style="margin-top:16px">
            <button type="submit" class="btn-pri">
              <i class="fas fa-save"></i> ${this.t('admin_create')}
            </button>
          </div>
        </form>
      </div>`;
  },

  async addManga(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', document.getElementById('amT').value);
    fd.append('alternative_titles', document.getElementById('amA').value);
    fd.append('type', document.getElementById('amTy').value);
    fd.append('status', document.getElementById('amSt').value);
    fd.append('author', document.getElementById('amAu').value);
    fd.append('artist', document.getElementById('amAr').value);
    fd.append('year', document.getElementById('amY').value);
    fd.append('description', document.getElementById('amD').value);
    fd.append('is_featured', document.getElementById('amFe').value);
    document.querySelectorAll('#amG .gc.on').forEach(c => fd.append('genres', c.dataset.id));
    const f = document.getElementById('amC').files[0];
    if (f) fd.append('cover', f);
    else return this.toast(this.t('image_required'), 'wrn');
    try {
      await this.api('/manga', { method: 'POST', body: fd });
      this.toast(this.t('success_created'), 'ok');
      document.getElementById('amF').reset();
      document.querySelectorAll('#amG .gc').forEach(c => c.classList.remove('on'));
    } catch (er) { this.toast(er.message, 'err'); }
  },

  // ─── MANAGE (list + search + inline edit) ────────────────────
  async loadAdmList() {
    const p = document.getElementById('ap-manage');
    try {
      const d = await this.api('/manga?limit=200');
      this.admMangas = d.mangas;
      this.admSearch = '';
      this.renderAdmList();
    } catch (e) {
      p.innerHTML = `<div class="empty"><p>${e.message}</p></div>`;
    }
  },

  renderAdmList() {
    const p = document.getElementById('ap-manage');
    const q = this.admSearch.toLowerCase().trim();
    let filtered = this.admMangas;
    if (q) {
      filtered = this.admMangas.filter(m =>
        String(m.id) === q ||
        m.title.toLowerCase().includes(q)
      );
    }

    p.innerHTML = `
      <div class="adm-search-bar" style="margin-bottom:16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <div style="flex:1;min-width:200px;position:relative">
          <i class="fas fa-search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--t3)"></i>
          <input type="text" id="admSearchInput" value="${this.esc(this.admSearch)}"
                 placeholder="${this.t('search_placeholder')}"
                 oninput="App.admSearch=this.value;App.renderAdmList()"
                 style="width:100%;padding:10px 14px 10px 38px;background:var(--bgi);border:1px solid var(--border);
                        border-radius:var(--r-md);color:var(--t1);outline:none">
        </div>
        <span style="color:var(--t3);font-size:.85rem">${filtered.length} / ${this.admMangas.length} manga(s)</span>
      </div>
      ${filtered.length ? `
        <div style="overflow-x:auto">
          <table class="atbl">
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>${this.t('admin_title')}</th>
                <th>${this.t('browse_type')}</th>
                <th>${this.t('browse_status')}</th>
                <th>Ch.</th>
                <th>${this.t('detail_views')}</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map(m => `
                <tr>
                  <td><img class="thb" src="${m.cover_image}" onerror="this.src='${PH}/40x56'"></td>
                  <td><strong>${m.id}</strong></td>
                  <td>${m.title}</td>
                  <td><span class="mc-type type-${m.type}" style="font-size:.6rem;padding:2px 8px">${m.type}</span></td>
                  <td><span class="stag s-${m.status}">${this.t('status_' + m.status)}</span></td>
                  <td>${m.chapters_count}</td>
                  <td>${this.fN(m.views)}</td>
                  <td>
                    <div class="acts">
                      <button class="btn-sm btn-sec" onclick="App.go('manga-detail',{id:${m.id}})" title="${this.t('home_details')}">
                        <i class="fas fa-eye"></i>
                      </button>
                      <button class="btn-sm btn-sec" onclick="App.openEditModal(${m.id})" title="${this.t('admin_edit')}">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button class="btn-sm btn-dan" onclick="App.delManga(${m.id})" title="${this.t('comment_delete')}">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty"><p>${this.t('admin_no_manga')}</p></div>`}
      
      <!-- Edit modal inline -->
      <div id="editModal" style="display:none;position:fixed;inset:0;z-index:3100;background:rgba(0,0,0,.7);
           backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center">
        <div style="background:var(--bg1);border:1px solid var(--border);border-radius:var(--r-xl);
             padding:28px;max-width:700px;width:95%;max-height:90vh;overflow-y:auto;position:relative">
          <button onclick="App.closeEditModal()" style="position:absolute;top:12px;right:12px;width:30px;height:30px;
                  display:flex;align-items:center;justify-content:center;border-radius:50%;color:var(--t3)">
            <i class="fas fa-times"></i>
          </button>
          <div id="editModalContent"></div>
        </div>
      </div>
    `;
  },

  openEditModal(id) {
    const modal = document.getElementById('editModal');
    const content = document.getElementById('editModalContent');
    modal.style.display = 'flex';
    content.innerHTML = `<div class="spin-w"><div class="spin"></div></div>`;
    this.loadEditForm(id);
  },

  closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
  },

  async loadEditForm(id) {
    const content = document.getElementById('editModalContent');
    try {
      const d = await this.api(`/manga/${id}`);
      const m = d.manga;
      content.innerHTML = `
        <h3 style="margin-bottom:16px"><i class="fas fa-edit" style="color:var(--accent)"></i> ${this.t('admin_edit')} — ${m.title} (ID: ${m.id})</h3>
        <form id="emF" onsubmit="App.saveM(event,${m.id})">
          <div class="fgrid">
            <div class="fi">
              <label>${this.t('admin_title')}</label>
              <input type="text" id="emT" value="${this.esc(m.title)}">
            </div>
            <div class="fi">
              <label>${this.t('admin_alt_titles')}</label>
              <input type="text" id="emA" value="${this.esc(m.alternative_titles || '')}">
            </div>
            <div class="fi">
              <label>${this.t('browse_type')}</label>
              <select id="emTy">
                ${['manga', 'manhwa', 'manhua', 'webtoon'].map(t =>
                  `<option value="${t}"${m.type === t ? ' selected' : ''}>${this.t('type_' + t)}</option>`
                ).join('')}
              </select>
            </div>
            <div class="fi">
              <label>${this.t('browse_status')}</label>
              <select id="emSt">
                ${['ongoing', 'completed', 'hiatus', 'cancelled'].map(s =>
                  `<option value="${s}"${m.status === s ? ' selected' : ''}>${this.t('status_' + s)}</option>`
                ).join('')}
              </select>
            </div>
            <div class="fi">
              <label>${this.t('admin_author')}</label>
              <input type="text" id="emAu" value="${this.esc(m.author)}">
            </div>
            <div class="fi">
              <label>${this.t('admin_artist')}</label>
              <input type="text" id="emAr" value="${this.esc(m.artist || '')}">
            </div>
            <div class="fi">
              <label>${this.t('admin_year')}</label>
              <input type="number" id="emY" value="${m.year || 2024}">
            </div>
            <div class="fi">
              <label>${this.t('admin_featured')}</label>
              <select id="emFe">
                <option value="false"${!m.is_featured ? ' selected' : ''}>${this.t('no')}</option>
                <option value="true"${m.is_featured ? ' selected' : ''}>${this.t('yes')}</option>
              </select>
            </div>
          </div>
          <div class="fi fi-full">
            <label>${this.t('admin_description')}</label>
            <textarea id="emD" rows="4">${this.esc(m.description)}</textarea>
          </div>
          <div style="margin:12px 0">
            <label style="font-size:.8rem;font-weight:600;color:var(--t2)">${this.t('browse_genres')}</label>
          </div>
          <div class="gchips" id="emG">
            ${this.genres.map(g =>
              `<span class="gc${m.genres.some(mg => mg.slug === g.slug) ? ' on' : ''}" data-id="${g.id}" onclick="this.classList.toggle('on')">${g.name}</span>`
            ).join('')}
          </div>
          <div class="fi" style="margin-top:14px">
            <label>${this.t('admin_new_cover')}</label>
            <div style="display:flex;align-items:center;gap:12px">
              <img src="${m.cover_image}" style="width:50px;height:70px;object-fit:cover;border-radius:6px" onerror="this.style.display='none'">
              <div class="fup" style="flex:1">
                <input type="file" id="emC" accept="image/*">
                <i class="fas fa-image"></i>
                <p>${this.t('admin_keep_current')}</p>
              </div>
            </div>
          </div>
          <div style="margin-top:16px;display:flex;gap:10px">
            <button type="submit" class="btn-pri">
              <i class="fas fa-save"></i> ${this.t('admin_save')}
            </button>
            <button type="button" class="btn-sec" onclick="App.closeEditModal()">
              ${this.t('comment_cancel')}
            </button>
          </div>
        </form>`;
    } catch (e) {
      content.innerHTML = `<div class="empty"><p>${e.message}</p></div>`;
    }
  },

  async saveM(e, id) {
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', document.getElementById('emT').value);
    fd.append('alternative_titles', document.getElementById('emA').value);
    fd.append('type', document.getElementById('emTy').value);
    fd.append('status', document.getElementById('emSt').value);
    fd.append('author', document.getElementById('emAu').value);
    fd.append('artist', document.getElementById('emAr').value);
    fd.append('year', document.getElementById('emY').value);
    fd.append('description', document.getElementById('emD').value);
    fd.append('is_featured', document.getElementById('emFe').value);
    document.querySelectorAll('#emG .gc.on').forEach(c => fd.append('genres', c.dataset.id));
    const f = document.getElementById('emC').files[0];
    if (f) fd.append('cover', f);
    try {
      await this.api(`/manga/${id}`, { method: 'PUT', body: fd });
      this.toast(this.t('success_modified'), 'ok');
      this.closeEditModal();
      this.loadAdmList(); // refresh the list
    } catch (er) { this.toast(er.message, 'err'); }
  },

  async delManga(id) {
    if (!confirm(this.t('confirm_delete'))) return;
    try {
      await this.api(`/manga/${id}`, { method: 'DELETE' });
      this.toast(this.t('success_deleted'), 'ok');
      this.loadAdmList();
    } catch (e) { this.toast(e.message, 'err'); }
  },

  // ─── ADD CHAPTER (pages individuelles OU fichier unique) ────────────────────
  addChHTML() {
    return `
      <div class="adm-form">
        <h3><i class="fas fa-file-image"></i> ${this.t('admin_add_chapter')}</h3>
        <form id="acF" onsubmit="App.addCh(event)">
          <div class="fgrid">
            <div class="fi">
              <label>${this.t('admin_manga_id')} *</label>
              <input type="number" id="acM" required>
              <span class="help">${this.t('admin_id_hint')}</span>
            </div>
            <div class="fi">
              <label>${this.t('admin_ch_number')} *</label>
              <input type="number" id="acN" required step="0.5" min="0">
            </div>
            <div class="fi">
              <label>${this.t('admin_ch_title')}</label>
              <input type="text" id="acT">
            </div>
          </div>

          <!-- Upload mode selector -->
          <div style="margin-top:20px;margin-bottom:16px">
            <label style="font-size:.9rem;font-weight:700;color:var(--t1);display:flex;align-items:center;gap:8px">
              <i class="fas fa-upload" style="color:var(--accent)"></i>
              ${this.t('admin_ch_pages')} — ${this.t('browse_type')} :
            </label>
            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
              <button type="button" class="btn-sm upload-mode-btn active" id="umSingle"
                      onclick="App.setUploadMode('single')">
                <i class="fas fa-file-archive"></i> Fichier unique (ZIP/CBZ/multi-images)
              </button>
              <button type="button" class="btn-sm upload-mode-btn" id="umPages"
                      onclick="App.setUploadMode('pages')">
                <i class="fas fa-images"></i> Pages individuelles
              </button>
            </div>
          </div>

          <!-- Mode: Single file upload -->
          <div id="uploadSingle">
            <div class="fup" style="padding:24px">
              <input type="file" id="acSingleFile" accept="image/*,.zip,.cbz,.cbr" multiple>
              <i class="fas fa-file-archive" style="font-size:2.5rem"></i>
              <p style="margin-top:8px;font-weight:600">
                Glissez ou sélectionnez votre(vos) fichier(s)
              </p>
              <span class="ht">
                 Un seul fichier (ZIP, CBZ, CBR contenant les images)<br>
                 Ou sélectionnez toutes les images en une fois<br>
                Les images seront ordonnées par nom de fichier
              </span>
            </div>
            <div id="singlePreview" style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px"></div>
          </div>

          <!-- Mode: Individual pages -->
          <div id="uploadPages" style="display:none">
            <div class="fi" style="margin-bottom:12px">
              <label>${this.t('admin_pages_count')} *</label>
              <input type="number" id="acPC" min="1" max="300" value="1"
                     onchange="App.genPI()" oninput="App.genPI()">
              <span class="help">${this.t('admin_pages_hint')}</span>
            </div>
            <div class="pages-inputs" id="piWrap"></div>
          </div>

          <div style="margin-top:20px">
            <button type="submit" class="btn-pri">
              <i class="fas fa-upload"></i> ${this.t('admin_upload')}
            </button>
          </div>
        </form>
      </div>`;
  },

  uploadMode: 'single',

  setUploadMode(mode) {
    this.uploadMode = mode;
    document.getElementById('uploadSingle').style.display = mode === 'single' ? '' : 'none';
    document.getElementById('uploadPages').style.display = mode === 'pages' ? '' : 'none';
    document.getElementById('umSingle').classList.toggle('active', mode === 'single');
    document.getElementById('umPages').classList.toggle('active', mode === 'pages');
  },

  genPI() {
    const n = parseInt(document.getElementById('acPC').value) || 0;
    const c = document.getElementById('piWrap');
    if (n < 1 || n > 300) { c.innerHTML = ''; return; }
    let h = '';
    for (let i = 1; i <= n; i++) {
      h += `
        <div class="page-input-item">
          <label><i class="fas fa-image"></i> ${this.t('admin_page')} ${i}</label>
          <input type="file" id="pg_${i}" accept="image/*" onchange="App.prevPg(this,${i})">
          <img class="page-preview hidden" id="pv_${i}">
        </div>`;
    }
    c.innerHTML = h;
  },

  prevPg(inp, num) {
    const pv = document.getElementById(`pv_${num}`);
    if (inp.files && inp.files[0]) {
      const r = new FileReader();
      r.onload = e => { pv.src = e.target.result; pv.classList.remove('hidden'); };
      r.readAsDataURL(inp.files[0]);
    }
  },

  async addCh(e) {
    e.preventDefault();
    const mangaId = document.getElementById('acM').value;
    const number = document.getElementById('acN').value;
    const title = document.getElementById('acT').value;

    if (!mangaId || !number) return this.toast(this.t('fill_required'), 'wrn');

    const fd = new FormData();
    fd.append('manga_id', mangaId);
    fd.append('number', number);
    fd.append('title', title);

    if (this.uploadMode === 'single') {
      // Single file or multiple files selected at once
      const fileInput = document.getElementById('acSingleFile');
      const files = fileInput.files;
      if (!files || files.length === 0) {
        return this.toast(this.t('add_image'), 'wrn');
      }

      // Sort files by name for correct ordering
      const sortedFiles = Array.from(files).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

      fd.append('pages_count', sortedFiles.length);
      sortedFiles.forEach((f, i) => {
        fd.append(`page_${i + 1}`, f);
      });

    } else {
      // Individual pages mode
      const pc = parseInt(document.getElementById('acPC').value) || 0;
      if (pc < 1) return this.toast(this.t('at_least_1_page'), 'wrn');

      fd.append('pages_count', pc);
      let has = false;
      for (let i = 1; i <= pc; i++) {
        const inp = document.getElementById(`pg_${i}`);
        if (inp && inp.files && inp.files[0]) {
          fd.append(`page_${i}`, inp.files[0]);
          has = true;
        }
      }
      if (!has) return this.toast(this.t('add_image'), 'wrn');
    }

    try {
      this.toast(this.t('upload_progress'), 'inf');
      await this.api('/chapters', { method: 'POST', body: fd });
      this.toast(this.t('chapter_added'), 'ok');
      document.getElementById('acF').reset();
      document.getElementById('piWrap').innerHTML = '';
      document.getElementById('singlePreview').innerHTML = '';
    } catch (er) {
      this.toast(er.message, 'err');
    }
  },
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
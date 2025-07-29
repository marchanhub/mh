// ===== CONFIGURAÇÃO DE IDIOMAS =====
const translations = {
    pt: {
        // Navegação
        'nav-home': 'Home',
        'nav-sobre': 'Sobre Nós',
        'nav-servicos': 'Serviços',
        'nav-portfolio': 'Portfólio',
        'nav-contacto': 'Contacto',
        
        // Hero
        'hero-title': 'Transformamos ideias em realidade digital',
        'hero-subtitle': 'Desenvolvimento web fullstack, aplicações web e PWA para impulsionar o seu negócio',
        'btn-servicos': 'Ver Serviços',
        'btn-contacto': 'Falar Connosco',
        
        // Sobre
        'sobre-title': 'Sobre a Marchan Hub',
        'sobre-text': 'Somos uma empresa especializada em desenvolvimento web fullstack, focada em criar soluções digitais inovadoras e eficientes para empresas de todos os tamanhos. Combinamos as mais recentes tecnologias com design intuitivo para entregar produtos excepcionais.',
        'stat-projetos': 'Projetos Concluídos',
        'stat-satisfacao': 'Satisfação',
        'stat-suporte': 'Suporte',
        
        // Serviços
        'servicos-title': 'Nossos Serviços',
        'servico-web-title': 'Desenvolvimento Web',
        'servico-web-desc': 'Criamos websites profissionais e responsivos usando HTML5, CSS3, JavaScript e PHP. Sites otimizados para SEO, rápidos e compatíveis com todos os dispositivos.',
        'web-feature-1': 'Design responsivo',
        'web-feature-2': 'Otimização SEO',
        'web-feature-3': 'Integração com redes sociais',
        'web-feature-4': 'Painel de administração',
        
        'servico-app-title': 'Aplicações Web',
        'servico-app-desc': 'Desenvolvemos aplicações web completas com base de dados MySQL/phpMyAdmin. Sistemas de gestão, e-commerce, dashboards e muito mais.',
        'app-feature-1': 'Base de dados MySQL',
        'app-feature-2': 'API RESTful',
        'app-feature-3': 'Autenticação segura',
        'app-feature-4': 'Backup automático',
        
        'servico-pwa-title': 'PWA - Progressive Web Apps',
        'servico-pwa-desc': 'Transformamos websites em aplicações móveis nativas. PWAs oferecem experiência offline, notificações push e instalação direta no dispositivo.',
        'pwa-feature-1': 'Funcionamento offline',
        'pwa-feature-2': 'Notificações push',
        'pwa-feature-3': 'Instalação no dispositivo',
        'pwa-feature-4': 'Performance otimizada',
        
        // Tecnologias
        'tech-title': 'Tecnologias que Utilizamos',
        
        // Portfólio
        'portfolio-title': 'Portfólio',
        'projeto-1-title': 'E-commerce Completo',
        'projeto-1-desc': 'Plataforma de vendas online com gestão de produtos',
        'projeto-2-title': 'Dashboard Empresarial',
        'projeto-2-desc': 'Sistema de gestão com relatórios em tempo real',
        'projeto-3-title': 'PWA para Restaurante',
        'projeto-3-desc': 'Aplicação móvel para pedidos online',
        
        // Contacto
        'contacto-title': 'Fale Connosco',
        'contacto-email': 'Email',
        'contacto-telefone': 'Telefone',
        'contacto-telemovel': 'Telemóvel',
        'contacto-localizacao': 'Localização',
        'form-nome': 'Nome Completo',
        'form-email': 'Email',
        'form-assunto': 'Assunto',
        'form-mensagem': 'Mensagem',
        'form-enviar': 'Enviar Mensagem',
        
        // Footer
        'footer-desc': 'Transformando ideias em soluções digitais inovadoras.',
        'footer-servicos': 'Serviços',
        'footer-web': 'Desenvolvimento Web',
        'footer-app': 'Aplicações Web',
        'footer-pwa': 'PWA',
        'footer-contacto': 'Contacto',
        'footer-direitos': 'Todos os direitos reservados.'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-sobre': 'About Us',
        'nav-servicos': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-contacto': 'Contact',
        
        // Hero
        'hero-title': 'We transform ideas into digital reality',
        'hero-subtitle': 'Fullstack web development, web applications and PWA to boost your business',
        'btn-servicos': 'View Services',
        'btn-contacto': 'Contact Us',
        
        // About
        'sobre-title': 'About Marchan Hub',
        'sobre-text': 'We are a company specialized in fullstack web development, focused on creating innovative and efficient digital solutions for companies of all sizes. We combine the latest technologies with intuitive design to deliver exceptional products.',
        'stat-projetos': 'Completed Projects',
        'stat-satisfacao': 'Satisfaction',
        'stat-suporte': 'Support',
        
        // Services
        'servicos-title': 'Our Services',
        'servico-web-title': 'Web Development',
        'servico-web-desc': 'We create professional and responsive websites using HTML5, CSS3, JavaScript and PHP. SEO optimized, fast and compatible with all devices.',
        'web-feature-1': 'Responsive design',
        'web-feature-2': 'SEO optimization',
        'web-feature-3': 'Social media integration',
        'web-feature-4': 'Admin panel',
        
        'servico-app-title': 'Web Applications',
        'servico-app-desc': 'We develop complete web applications with MySQL/phpMyAdmin database. Management systems, e-commerce, dashboards and much more.',
        'app-feature-1': 'MySQL database',
        'app-feature-2': 'RESTful API',
        'app-feature-3': 'Secure authentication',
        'app-feature-4': 'Automatic backup',
        
        'servico-pwa-title': 'PWA - Progressive Web Apps',
        'servico-pwa-desc': 'We transform websites into native mobile applications. PWAs offer offline experience, push notifications and direct device installation.',
        'pwa-feature-1': 'Offline functionality',
        'pwa-feature-2': 'Push notifications',
        'pwa-feature-3': 'Device installation',
        'pwa-feature-4': 'Optimized performance',
        
        // Technologies
        'tech-title': 'Technologies We Use',
        
        // Portfolio
        'portfolio-title': 'Portfolio',
        'projeto-1-title': 'Complete E-commerce',
        'projeto-1-desc': 'Online sales platform with product management',
        'projeto-2-title': 'Business Dashboard',
        'projeto-2-desc': 'Management system with real-time reports',
        'projeto-3-title': 'Restaurant PWA',
        'projeto-3-desc': 'Mobile application for online orders',
        
        // Contact
        'contacto-title': 'Contact Us',
        'contacto-email': 'Email',
        'contacto-telefone': 'Phone',
        'contacto-telemovel': 'Mobile',
        'contacto-localizacao': 'Location',
        'form-nome': 'Full Name',
        'form-email': 'Email',
        'form-assunto': 'Subject',
        'form-mensagem': 'Message',
        'form-enviar': 'Send Message',
        
        // Footer
        'footer-desc': 'Transforming ideas into innovative digital solutions.',
        'footer-servicos': 'Services',
        'footer-web': 'Web Development',
        'footer-app': 'Web Applications',
        'footer-pwa': 'PWA',
        'footer-contacto': 'Contact',
        'footer-direitos': 'All rights reserved.'
    },
    
    es: {
        // Navegación
        'nav-home': 'Inicio',
        'nav-sobre': 'Sobre Nosotros',
        'nav-servicos': 'Servicios',
        'nav-portfolio': 'Portafolio',
        'nav-contacto': 'Contacto',
        
        // Hero
        'hero-title': 'Transformamos ideas en realidad digital',
        'hero-subtitle': 'Desarrollo web fullstack, aplicaciones web y PWA para impulsar tu negocio',
        'btn-servicos': 'Ver Servicios',
        'btn-contacto': 'Contactar',
        
        // Sobre
        'sobre-title': 'Sobre Marchan Hub',
        'sobre-text': 'Somos una empresa especializada en desarrollo web fullstack, enfocada en crear soluciones digitales innovadoras y eficientes para empresas de todos los tamaños. Combinamos las tecnologías más recientes con diseño intuitivo para entregar productos excepcionales.',
        'stat-projetos': 'Proyectos Completados',
        'stat-satisfacao': 'Satisfacción',
        'stat-suporte': 'Soporte',
        
        // Servicios
        'servicos-title': 'Nuestros Servicios',
        'servico-web-title': 'Desarrollo Web',
        'servico-web-desc': 'Creamos sitios web profesionales y responsivos usando HTML5, CSS3, JavaScript y PHP. Sitios optimizados para SEO, rápidos y compatibles con todos los dispositivos.',
        'web-feature-1': 'Diseño responsivo',
        'web-feature-2': 'Optimización SEO',
        'web-feature-3': 'Integración con redes sociales',
        'web-feature-4': 'Panel de administración',
        
        'servico-app-title': 'Aplicaciones Web',
        'servico-app-desc': 'Desarrollamos aplicaciones web completas con base de datos MySQL/phpMyAdmin. Sistemas de gestión, e-commerce, dashboards y mucho más.',
        'app-feature-1': 'Base de datos MySQL',
        'app-feature-2': 'API RESTful',
        'app-feature-3': 'Autenticación segura',
        'app-feature-4': 'Backup automático',
        
        'servico-pwa-title': 'PWA - Aplicaciones Web Progresivas',
        'servico-pwa-desc': 'Transformamos sitios web en aplicaciones móviles nativas. Las PWAs ofrecen experiencia offline, notificaciones push e instalación directa en el dispositivo.',
        'pwa-feature-1': 'Funcionamiento offline',
        'pwa-feature-2': 'Notificaciones push',
        'pwa-feature-3': 'Instalación en dispositivo',
        'pwa-feature-4': 'Rendimiento optimizado',
        
        // Tecnologías
        'tech-title': 'Tecnologías que Utilizamos',
        
        // Portafolio
        'portfolio-title': 'Portafolio',
        'projeto-1-title': 'E-commerce Completo',
        'projeto-1-desc': 'Plataforma de ventas online con gestión de productos',
        'projeto-2-title': 'Dashboard Empresarial',
        'projeto-2-desc': 'Sistema de gestión con reportes en tiempo real',
        'projeto-3-title': 'PWA para Restaurante',
        'projeto-3-desc': 'Aplicación móvil para pedidos online',
        
        // Contacto
        'contacto-title': 'Contáctanos',
        'contacto-email': 'Email',
        'contacto-telefone': 'Teléfono',
        'contacto-telemovel': 'Móvil',
        'contacto-localizacao': 'Ubicación',
        'form-nome': 'Nombre Completo',
        'form-email': 'Email',
        'form-assunto': 'Asunto',
        'form-mensagem': 'Mensaje',
        'form-enviar': 'Enviar Mensaje',
        
        // Footer
        'footer-desc': 'Transformando ideas en soluciones digitales innovadoras.',
        'footer-servicos': 'Servicios',
        'footer-web': 'Desarrollo Web',
        'footer-app': 'Aplicaciones Web',
        'footer-pwa': 'PWA',
        'footer-contacto': 'Contacto',
        'footer-direitos': 'Todos los derechos reservados.'
    },
    
    zh: {
        // 导航
        'nav-home': '首页',
        'nav-sobre': '关于我们',
        'nav-servicos': '服务',
        'nav-portfolio': '作品集',
        'nav-contacto': '联系',
        
        // Hero
        'hero-title': '我们将想法转化为数字现实',
        'hero-subtitle': '全栈网络开发、网络应用程序和PWA，助力您的业务发展',
        'btn-servicos': '查看服务',
        'btn-contacto': '联系我们',
        
        // 关于
        'sobre-title': '关于Marchan Hub',
        'sobre-text': '我们是一家专注于全栈网络开发的公司，致力于为各种规模的企业创建创新高效的数字解决方案。我们将最新技术与直观设计相结合，提供卓越的产品。',
        'stat-projetos': '已完成项目',
        'stat-satisfacao': '满意度',
        'stat-suporte': '支持',
        
        // 服务
        'servicos-title': '我们的服务',
        'servico-web-title': '网络开发',
        'servico-web-desc': '我们使用HTML5、CSS3、JavaScript和PHP创建专业响应式网站。SEO优化、快速且兼容所有设备。',
        'web-feature-1': '响应式设计',
        'web-feature-2': 'SEO优化',
        'web-feature-3': '社交媒体集成',
        'web-feature-4': '管理面板',
        
        'servico-app-title': '网络应用程序',
        'servico-app-desc': '我们开发具有MySQL/phpMyAdmin数据库的完整网络应用程序。管理系统、电子商务、仪表板等。',
        'app-feature-1': 'MySQL数据库',
        'app-feature-2': 'RESTful API',
        'app-feature-3': '安全认证',
        'app-feature-4': '自动备份',
        
        'servico-pwa-title': 'PWA - 渐进式网络应用程序',
        'servico-pwa-desc': '我们将网站转换为原生移动应用程序。PWA提供离线体验、推送通知和直接设备安装。',
        'pwa-feature-1': '离线功能',
        'pwa-feature-2': '推送通知',
        'pwa-feature-3': '设备安装',
        'pwa-feature-4': '优化性能',
        
        // 技术
        'tech-title': '我们使用的技术',
        
        // 作品集
        'portfolio-title': '作品集',
        'projeto-1-title': '完整电子商务',
        'projeto-1-desc': '具有产品管理的在线销售平台',
        'projeto-2-title': '商业仪表板',
        'projeto-2-desc': '具有实时报告的管理系统',
        'projeto-3-title': '餐厅PWA',
        'projeto-3-desc': '在线订单移动应用程序',
        
        // 联系
        'contacto-title': '联系我们',
        'contacto-email': '邮箱',
        'contacto-telefone': '电话',
        'contacto-telemovel': '手机',
        'contacto-localizacao': '位置',
        'form-nome': '全名',
        'form-email': '邮箱',
        'form-assunto': '主题',
        'form-mensagem': '消息',
        'form-enviar': '发送消息',
        
        // 页脚
        'footer-desc': '将想法转化为创新数字解决方案。',
        'footer-servicos': '服务',
        'footer-web': '网络开发',
        'footer-app': '网络应用程序',
        'footer-pwa': 'PWA',
        'footer-contacto': '联系',
        'footer-direitos': '版权所有。'
    }
};

// ===== DETECÇÃO AUTOMÁTICA DE IDIOMA =====
function detectUserLanguage() {
    // Primeiro, verificar se há um idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('mh-language');
    if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
    }
    
    // Verificar o idioma do navegador
    const browserLanguage = navigator.language || navigator.userLanguage;
    const languageCode = browserLanguage.split('-')[0];
    
    // Mapear códigos de idioma para nossos idiomas suportados
    const languageMap = {
        'pt': 'pt', // Português
        'en': 'en', // Inglês
        'es': 'es', // Espanhol
        'zh': 'zh', // Chinês
        'zh-CN': 'zh',
        'zh-TW': 'zh'
    };
    
    return languageMap[languageCode] || 'pt'; // Padrão: Português
}

// ===== FUNÇÃO DE TRADUÇÃO =====
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Atualizar o seletor de idioma
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = language;
    }
    
    // Salvar preferência no localStorage
    localStorage.setItem('mh-language', language);
    
    // Atualizar o atributo lang do HTML
    document.documentElement.lang = language;
}

// ===== MODO ESCURO =====
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const savedTheme = localStorage.getItem('mh-theme') || 'light';
    
    // Aplicar tema salvo
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('mh-theme', newTheme);
        
        // Atualizar ícone
        darkModeToggle.innerHTML = newTheme === 'dark' 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });
}

// ===== MENU MOBILE =====
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===== SCROLL SUAVE =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMAÇÕES NO SCROLL =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.service-card, .tech-item, .portfolio-item, .contact-item');
    animateElements.forEach(el => observer.observe(el));
}

// ===== FORMULÁRIO DE CONTACTO =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Obter dados do formulário
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Mostrar loading no botão
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            try {
                // Enviar dados para o PHP
                const response = await fetch('process-contact.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showNotification(result.message, 'success');
                    form.reset();
                } else {
                    showNotification(result.message || 'Erro ao enviar mensagem', 'error');
                    if (result.errors) {
                        console.error('Erros de validação:', result.errors);
                    }
                }
            } catch (error) {
                console.error('Erro ao enviar formulário:', error);
                showNotification('Erro de conexão. Por favor, tente novamente.', 'error');
            } finally {
                // Restaurar botão
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// ===== NAVEGAÇÃO ATIVA =====
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Detectar e aplicar idioma
    const userLanguage = detectUserLanguage();
    translatePage(userLanguage);
    
    // Inicializar funcionalidades
    initDarkMode();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initActiveNavigation();
    
    // Event listener para mudança de idioma
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            translatePage(e.target.value);
        });
    }
    
    // Adicionar classe para animações CSS
    document.body.classList.add('loaded');
});

// ===== FUNÇÕES UTILITÁRIAS =====
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Cores baseadas no tipo
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// ===== DETECÇÃO DE DISPOSITIVO =====
function isMobile() {
    return window.innerWidth <= 768;
}

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

// ===== PERFORMANCE =====
// Lazy loading para imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== EXPORTAR FUNÇÕES PARA USO GLOBAL =====
window.MH = {
    translatePage,
    showNotification,
    isMobile,
    isTablet
};
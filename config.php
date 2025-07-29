<?php
/**
 * Configuração Centralizada - Marchan Hub
 * 
 * Este ficheiro contém todas as configurações principais do site.
 * Modifique aqui para personalizar o site facilmente.
 */

// ===== CONFIGURAÇÕES GERAIS =====
define('SITE_NAME', 'Marchan Hub');
define('SITE_SHORT_NAME', 'MH');
define('SITE_DESCRIPTION', 'Serviços completos de desenvolvimento web e aplicações');
define('SITE_KEYWORDS', 'desenvolvimento web, fullstack, PWA, PHP, JavaScript, CSS, HTML, aplicações web');

// ===== INFORMAÇÕES DE CONTACTO =====
define('CONTACT_EMAIL', 'carlosr@marchanhub.com');
define('CONTACT_PHONE', '+351 223 791 363');
define('CONTACT_MOBILE', '+351 915 510 790');
define('CONTACT_LOCATION', 'Portugal');

// ===== REDES SOCIAIS =====
define('SOCIAL_FACEBOOK', 'https://facebook.com/marchanhub');
define('SOCIAL_TWITTER', 'https://twitter.com/marchanhub');
define('SOCIAL_LINKEDIN', 'https://linkedin.com/company/marchanhub');
define('SOCIAL_INSTAGRAM', 'https://instagram.com/marchanhub');
define('SOCIAL_GITHUB', 'https://github.com/marchanhub');

// ===== CONFIGURAÇÕES DE EMAIL =====
define('EMAIL_FROM', 'noreply@marchanhub.com');
define('EMAIL_FROM_NAME', 'Marchan Hub');
define('EMAIL_REPLY_TO', CONTACT_EMAIL);

// ===== CONFIGURAÇÕES DE SEO =====
define('SITE_URL', 'https://marchanhub.com');
define('SITE_AUTHOR', 'Marchan Hub');
define('SITE_LANGUAGE', 'pt');
define('SITE_TIMEZONE', 'Europe/Lisbon');

// ===== CONFIGURAÇÕES DE DESENVOLVIMENTO =====
define('DEBUG_MODE', false);
define('ENABLE_LOGGING', true);
define('LOG_FILE', 'contact_log.txt');

// ===== CONFIGURAÇÕES DE SEGURANÇA =====
define('CSRF_TOKEN_ENABLED', true);
define('RATE_LIMIT_ENABLED', true);
define('MAX_REQUESTS_PER_HOUR', 10);

// ===== CONFIGURAÇÕES DE CACHE =====
define('CACHE_ENABLED', true);
define('CACHE_DURATION', 3600); // 1 hora

// ===== CONFIGURAÇÕES DE UPLOAD =====
define('MAX_FILE_SIZE', 10485760); // 10MB
define('ALLOWED_FILE_TYPES', ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx']);

// ===== FUNÇÕES UTILITÁRIAS =====

/**
 * Obter configuração
 */
function getConfig($key, $default = null) {
    return defined($key) ? constant($key) : $default;
}

/**
 * Verificar se está em modo de desenvolvimento
 */
function isDevelopment() {
    return DEBUG_MODE || $_SERVER['SERVER_NAME'] === 'localhost';
}

/**
 * Log de mensagens
 */
function logMessage($message, $type = 'INFO') {
    if (!ENABLE_LOGGING) return;
    
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] [$type] $message\n";
    
    file_put_contents(LOG_FILE, $logEntry, FILE_APPEND | LOCK_EX);
}

/**
 * Validar email
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Sanitizar input
 */
function sanitizeInput($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

/**
 * Gerar token CSRF
 */
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

/**
 * Verificar token CSRF
 */
function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

/**
 * Verificar rate limit
 */
function checkRateLimit($ip) {
    if (!RATE_LIMIT_ENABLED) return true;
    
    $cacheFile = "rate_limit_$ip.txt";
    $currentTime = time();
    
    if (file_exists($cacheFile)) {
        $data = json_decode(file_get_contents($cacheFile), true);
        
        // Limpar registos antigos (mais de 1 hora)
        $data['requests'] = array_filter($data['requests'], function($time) use ($currentTime) {
            return $currentTime - $time < 3600;
        });
        
        if (count($data['requests']) >= MAX_REQUESTS_PER_HOUR) {
            return false;
        }
    } else {
        $data = ['requests' => []];
    }
    
    $data['requests'][] = $currentTime;
    file_put_contents($cacheFile, json_encode($data));
    
    return true;
}

/**
 * Enviar email
 */
function sendEmail($to, $subject, $message, $headers = []) {
    $defaultHeaders = [
        'From: ' . EMAIL_FROM_NAME . ' <' . EMAIL_FROM . '>',
        'Reply-To: ' . EMAIL_REPLY_TO,
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/plain; charset=UTF-8'
    ];
    
    $finalHeaders = array_merge($defaultHeaders, $headers);
    
    return mail($to, $subject, $message, implode("\r\n", $finalHeaders));
}

/**
 * Obter IP do cliente
 */
function getClientIP() {
    $ipKeys = ['HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'HTTP_CLIENT_IP', 'REMOTE_ADDR'];
    
    foreach ($ipKeys as $key) {
        if (isset($_SERVER[$key])) {
            $ip = $_SERVER[$key];
            if (strpos($ip, ',') !== false) {
                $ip = trim(explode(',', $ip)[0]);
            }
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

/**
 * Detectar idioma do navegador
 */
function detectBrowserLanguage() {
    $supportedLanguages = ['pt', 'en', 'es', 'zh'];
    $browserLanguages = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '');
    
    foreach ($browserLanguages as $lang) {
        $lang = strtolower(trim(explode(';', $lang)[0]));
        $lang = substr($lang, 0, 2);
        
        if (in_array($lang, $supportedLanguages)) {
            return $lang;
        }
    }
    
    return SITE_LANGUAGE;
}

// ===== INICIALIZAÇÃO =====
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Definir timezone
date_default_timezone_set(SITE_TIMEZONE);

// Configurar headers de segurança
if (!headers_sent()) {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
}

// Log de acesso (opcional)
if (ENABLE_LOGGING) {
    $accessLog = sprintf(
        "[%s] %s %s %s %s\n",
        date('Y-m-d H:i:s'),
        getClientIP(),
        $_SERVER['REQUEST_METHOD'] ?? 'UNKNOWN',
        $_SERVER['REQUEST_URI'] ?? '/',
        $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'
    );
    
    file_put_contents('access_log.txt', $accessLog, FILE_APPEND | LOCK_EX);
}
?>
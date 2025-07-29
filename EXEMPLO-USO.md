# 📖 Guia Prático - Como Usar o Site Marchan Hub

## 🚀 Início Rápido

### 1. **Aceder ao Site**
- Abra o navegador
- Vá para `http://localhost/mh/` (se usar XAMPP)
- Ou aceda ao seu domínio se estiver em produção

### 2. **Funcionalidades Disponíveis**
- ✅ **Navegação**: Menu fixo com scroll suave
- ✅ **Multi-idioma**: 4 idiomas (PT, EN, ES, ZH)
- ✅ **Modo Escuro**: Botão no canto superior direito
- ✅ **Formulário de Contacto**: Totalmente funcional
- ✅ **Design Responsivo**: Funciona em todos os dispositivos

## 🎨 Personalização

### **Alterar Informações da Empresa**

1. **Editar `config.php`**:
```php
// Informações básicas
define('SITE_NAME', 'Sua Empresa');
define('SITE_SHORT_NAME', 'SE');
define('CONTACT_EMAIL', 'seu-email@empresa.com');
define('CONTACT_PHONE', '+351 999 999 999');
```

2. **Editar `index.html`**:
- Altere o texto das seções
- Substitua as imagens em `imagens/`
- Atualize o portfólio

### **Alterar Cores**

Edite `css/style.css`:
```css
:root {
    --primary-color: #sua-cor-principal;
    --secondary-color: #sua-cor-secundaria;
    --accent-color: #sua-cor-destaque;
}
```

### **Adicionar Novo Idioma**

1. **Em `js/script.js`**, adicione traduções:
```javascript
const translations = {
    'novo-idioma': {
        'hero-title': 'Título traduzido',
        'hero-subtitle': 'Subtítulo traduzido',
        // ... mais traduções
    }
};
```

2. **Em `index.html`**, adicione a opção:
```html
<option value="novo-idioma">🇺🇳 NOVO</option>
```

## 📧 Configurar Formulário de Contacto

### **1. Configurar Email**
Edite `config.php`:
```php
define('CONTACT_EMAIL', 'seu-email@empresa.com');
define('EMAIL_FROM', 'noreply@empresa.com');
```

### **2. Testar o Formulário**
1. Vá para a seção "Contacto"
2. Preencha todos os campos
3. Clique em "Enviar Mensagem"
4. Verifique se recebeu o email

### **3. Verificar Logs**
- `contact_log.txt` - Log de contactos
- `access_log.txt` - Log de acessos (se ativado)

## 🔧 Configurações Avançadas

### **Ativar HTTPS**
Descomente em `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### **Configurar Domínio**
Edite `config.php`:
```php
define('SITE_URL', 'https://seudominio.com');
```

### **Ativar Debug**
Para desenvolvimento, edite `config.php`:
```php
define('DEBUG_MODE', true);
define('ENABLE_LOGGING', true);
```

## 📱 Testar Responsividade

### **Dispositivos para Testar**
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

### **Ferramentas de Teste**
- **Chrome DevTools**: F12 → Toggle device toolbar
- **Responsive Design Checker**: Online
- **Dispositivos reais**: Melhor opção

## 🚀 Deploy para Produção

### **1. Preparar Ficheiros**
```bash
# Otimizar imagens
# Comprimir CSS/JS
# Verificar links
```

### **2. Upload**
- Upload via FTP/SFTP
- Ou usar Git para deploy automático

### **3. Configurar Servidor**
- Configurar domínio
- Ativar SSL/HTTPS
- Configurar email do servidor

### **4. Testar**
- Verificar formulário de contacto
- Testar em diferentes dispositivos
- Verificar velocidade de carregamento

## 🐛 Resolução de Problemas

### **Formulário não funciona**
1. Verificar se PHP está ativo
2. Verificar permissões de ficheiros
3. Verificar configuração de email
4. Verificar logs de erro

### **Site não carrega**
1. Verificar se Apache está ativo
2. Verificar caminho dos ficheiros
3. Verificar permissões
4. Verificar logs do servidor

### **Imagens não aparecem**
1. Verificar caminho das imagens
2. Verificar se ficheiros existem
3. Verificar permissões
4. Verificar formato das imagens

## 📊 Monitorização

### **Logs Importantes**
- `contact_log.txt` - Contactos recebidos
- `access_log.txt` - Acessos ao site
- Logs do servidor web

### **Métricas a Acompanhar**
- Número de visitas
- Contactos recebidos
- Tempo de carregamento
- Taxa de conversão

## 🔒 Segurança

### **Configurações Recomendadas**
- ✅ HTTPS ativo
- ✅ Headers de segurança
- ✅ Rate limiting
- ✅ Validação de inputs
- ✅ Sanitização de dados

### **Manutenção Regular**
- Atualizar dependências
- Verificar logs de segurança
- Fazer backup regular
- Monitorizar performance

## 📞 Suporte

### **Em caso de problemas**
1. Verificar logs
2. Consultar documentação
3. Testar em ambiente local
4. Contactar suporte técnico

### **Recursos Úteis**
- [Documentação PHP](https://www.php.net/docs.php)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Stack Overflow](https://stackoverflow.com/)

---

**💡 Dica**: Mantenha sempre uma cópia de backup antes de fazer alterações importantes!
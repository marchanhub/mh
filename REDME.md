# 🚀 Marchan Hub (MH) - Website Profissional

## 📋 Descrição

Website profissional da **Marchan Hub**, uma empresa especializada em desenvolvimento web fullstack. O site apresenta os serviços oferecidos, portfólio de projetos e formulário de contacto funcional.

## ✨ Características Principais

### 🌐 **Multi-idioma**
- **Português** (padrão)
- **Inglês**
- **Espanhol**
- **Chinês**
- Detecção automática do idioma do navegador
- Persistência da preferência do utilizador

### 🌙 **Modo Escuro**
- Alternância entre modo claro e escuro
- Persistência da preferência
- Transições suaves

### 📱 **Design Responsivo**
- Otimizado para desktop, tablet e mobile
- Menu hambúrguer para dispositivos móveis
- Layout adaptativo com CSS Grid e Flexbox

### 🎨 **Interface Moderna**
- Design limpo e profissional
- Animações suaves no scroll
- Ícones Font Awesome
- Gradientes e sombras modernas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript (ES6+)** - Funcionalidades interativas
- **Font Awesome** - Ícones

### Backend
- **PHP** - Processamento do formulário de contacto
- **MySQL** - Base de dados (para futuras implementações)

## 📁 Estrutura do Projeto

```
mh/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── script.js          # Funcionalidades JavaScript
├── imagens/
│   ├── LogotipoMh.png     # Logo da empresa
│   ├── pexels-padrinan-3785927.jpg
│   ├── pexels-padrinan-3785931.jpg
│   └── pexels-padrinan-3785932.jpg
├── process-contact.php    # Processamento do formulário
├── contact_log.txt        # Log de contactos (gerado automaticamente)
└── REDME.md              # Este ficheiro
```

## 🚀 Serviços Apresentados

### 1. **Desenvolvimento Web**
- Websites responsivos
- HTML5, CSS3, JavaScript, PHP
- Otimização SEO
- Integração com redes sociais
- Painel de administração

### 2. **Aplicações Web**
- Sistemas completos com base de dados
- MySQL/phpMyAdmin
- API RESTful
- Autenticação segura
- Backup automático

### 3. **PWA (Progressive Web Apps)**
- Aplicações móveis nativas
- Funcionamento offline
- Notificações push
- Instalação no dispositivo
- Performance otimizada

## 🎯 Funcionalidades Implementadas

### ✅ **Navegação**
- Menu fixo no topo
- Scroll suave entre seções
- Navegação ativa destacada
- Menu mobile responsivo

### ✅ **Formulário de Contacto**
- Validação em tempo real
- Envio via PHP
- Notificações de sucesso/erro
- Log de contactos

### ✅ **Animações**
- Fade-in no scroll
- Hover effects
- Transições suaves
- Loading states

### ✅ **Performance**
- Lazy loading de imagens
- CSS otimizado
- JavaScript modular
- Compressão de assets

## 🔧 Instalação e Configuração

### Pré-requisitos
- Servidor web (Apache/Nginx)
- PHP 7.4 ou superior
- XAMPP (recomendado para desenvolvimento local)

### Passos de Instalação

1. **Clone ou descarregue o projeto**
   ```bash
   git clone [url-do-repositorio]
   cd mh
   ```

2. **Configure o servidor web**
   - Coloque os ficheiros na pasta `htdocs` do XAMPP
   - Ou configure o seu servidor web

3. **Configure o email (opcional)**
   - Edite `process-contact.php`
   - Altere o email de destino na linha 47:
   ```php
   $to = 'seu-email@exemplo.com';
   ```

4. **Aceda ao site**
   - Abra o navegador
   - Vá para `http://localhost/mh/`

## 📧 Configuração do Formulário de Contacto

O formulário de contacto está configurado para:
- Validar todos os campos obrigatórios
- Sanitizar dados de entrada
- Enviar email com os detalhes
- Salvar log de contactos
- Retornar respostas JSON

### Personalização
Para personalizar o formulário, edite:
- `process-contact.php` - Lógica de processamento
- `js/script.js` - Validação frontend
- `css/style.css` - Estilos do formulário

## 🌍 Suporte Multi-idioma

### Adicionar Novo Idioma
1. Adicione as traduções no objeto `translations` em `js/script.js`
2. Adicione a opção no seletor de idioma em `index.html`
3. Atualize a função `detectUserLanguage()` se necessário

### Estrutura de Traduções
```javascript
const translations = {
    'codigo-idioma': {
        'chave-traducao': 'Texto traduzido',
        // ... mais traduções
    }
};
```

## 🎨 Personalização

### Cores
As cores principais estão definidas como variáveis CSS em `css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --accent-color: #f59e0b;
    /* ... outras cores */
}
```

### Fontes
O site usa a fonte Inter como padrão:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔒 Segurança

- Validação de dados no frontend e backend
- Sanitização de inputs
- Headers de segurança no PHP
- Proteção contra XSS

## 📈 SEO

- Meta tags otimizadas
- Estrutura HTML semântica
- URLs amigáveis
- Schema markup (pode ser expandido)

## 🚀 Deploy

### Para Produção
1. Configure um servidor web
2. Configure o domínio
3. Atualize as configurações de email
4. Configure SSL/HTTPS
5. Otimize imagens e assets

### Hospedagem Recomendada
- **Shared Hosting**: cPanel, Plesk
- **VPS**: DigitalOcean, Linode
- **Cloud**: AWS, Google Cloud, Azure

## 🤝 Contribuição

Para contribuir para o projeto:
1. Faça um fork
2. Crie uma branch para a sua feature
3. Commit as suas alterações
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o ficheiro LICENSE para mais detalhes.

## 📞 Contacto

- **Email**: info@marchanhub.com
- **Website**: [marchanhub.com](https://marchanhub.com)
- **Telefone**: +351 123 456 789

## 🔄 Changelog

### v1.0.0 (2024)
- ✅ Lançamento inicial
- ✅ Design responsivo
- ✅ Multi-idioma (PT, EN, ES, ZH)
- ✅ Modo escuro
- ✅ Formulário de contacto funcional
- ✅ Animações e transições
- ✅ SEO otimizado

---

**Desenvolvido com ❤️ pela Marchan Hub**

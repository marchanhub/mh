<?php
// Incluir configurações
require_once 'config.php';

// Configuração de cabeçalhos para CORS e JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Verificar se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

// Verificar rate limit
if (!checkRateLimit(getClientIP())) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Muitas tentativas. Tente novamente mais tarde.'
    ]);
    exit;
}

// Obter dados do formulário
$input = json_decode(file_get_contents('php://input'), true);

// Se não conseguir decodificar JSON, tentar dados de formulário
if (!$input) {
    $input = $_POST;
}

// Validar dados obrigatórios
$required_fields = ['nome', 'email', 'assunto', 'mensagem'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $errors[] = "O campo '$field' é obrigatório.";
    }
}

// Validar email
if (!empty($input['email']) && !validateEmail($input['email'])) {
    $errors[] = "O email fornecido não é válido.";
}

// Se há erros, retornar
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors' => $errors
    ]);
    exit;
}

// Sanitizar dados
$nome = sanitizeInput($input['nome']);
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$assunto = sanitizeInput($input['assunto']);
$mensagem = sanitizeInput($input['mensagem']);

// Configuração do email
$to = CONTACT_EMAIL;
$subject = "Nova mensagem do site: $assunto";

// Construir o corpo do email
$email_body = "
Nova mensagem recebida através do formulário de contacto do site " . SITE_NAME . ".

Detalhes:
- Nome: $nome
- Email: $email
- Assunto: $assunto
- Data/Hora: " . date('d/m/Y H:i:s') . "
- IP: " . getClientIP() . "

Mensagem:
$mensagem

---
Esta mensagem foi enviada automaticamente pelo formulário de contacto do site.
";

// Tentar enviar o email
$mail_sent = sendEmail($to, $subject, $email_body);

// Log da tentativa
logMessage("Contacto de $nome ($email) - Assunto: $assunto - Sucesso: " . ($mail_sent ? 'Sim' : 'Não'));

// Responder ao cliente
if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso! Entraremos em contacto em breve.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.'
    ]);
}
?>
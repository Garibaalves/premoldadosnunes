const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testLogin() {
  try {
    console.log('🧪 Testando login via API do NextAuth...');
    
    // Primeiro, obter o CSRF token
    console.log('🔐 Obtendo CSRF token...');
    const csrfResponse = await fetch('http://localhost:3000/api/auth/csrf');
    const csrfData = await csrfResponse.json();
    console.log('CSRF Token:', csrfData.csrfToken);
    
    // Fazer login
    console.log('🔑 Tentando fazer login...');
    const loginResponse = await fetch('http://localhost:3000/api/auth/callback/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: 'admin@premoldadosnunes.com',
        password: 'admin123',
        csrfToken: csrfData.csrfToken,
        callbackUrl: 'http://localhost:3000/admin',
        json: 'true'
      })
    });
    
    console.log('Status:', loginResponse.status);
    console.log('Headers:', Object.fromEntries(loginResponse.headers.entries()));
    
    const responseText = await loginResponse.text();
    console.log('Response:', responseText);
    
    if (loginResponse.status === 200) {
      console.log('✅ Login bem-sucedido!');
    } else {
      console.log('❌ Login falhou!');
    }
    
  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
  }
}

testLogin();
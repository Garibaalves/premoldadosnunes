const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testAuth() {
  try {
    console.log('🧪 Testando autenticação diretamente...');
    console.log('📧 Email: admin@premoldadosnunes.com');
    console.log('🔐 Senha: admin123');
    console.log('');
    
    // Buscar usuário
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'admin@premoldadosnunes.com')
      .single();
    
    if (error) {
      console.error('❌ Erro ao buscar usuário:', error.message);
      return;
    }
    
    if (!user) {
      console.error('❌ Usuário não encontrado!');
      return;
    }
    
    console.log('✅ Usuário encontrado:');
    console.log('  ID:', user.id);
    console.log('  Email:', user.email);
    console.log('  Nome:', user.name);
    console.log('  Role:', user.role);
    console.log('  Hash da senha:', user.password.substring(0, 20) + '...');
    console.log('');
    
    // Testar senha
    console.log('🔐 Testando comparação de senha...');
    const isPasswordValid = await bcrypt.compare('admin123', user.password);
    
    if (isPasswordValid) {
      console.log('✅ Senha válida!');
      console.log('');
      console.log('🎯 Simulando processo de autenticação do NextAuth...');
      
      // Simular o que o NextAuth faz
      const authResult = {
        id: user.id,
        email: user.email,
        name: user.name || user.email.split('@')[0],
        role: user.role,
      };
      
      console.log('✅ Resultado da autenticação:', JSON.stringify(authResult, null, 2));
      console.log('');
      console.log('🎉 Autenticação funcionando corretamente!');
      console.log('Se ainda há problemas no login, pode ser um problema de configuração do NextAuth.');
      
    } else {
      console.log('❌ Senha inválida!');
      console.log('');
      console.log('🔧 Tentando gerar novo hash...');
      
      const newHash = await bcrypt.hash('admin123', 12);
      console.log('Novo hash:', newHash);
      
      const testNewHash = await bcrypt.compare('admin123', newHash);
      console.log('Teste do novo hash:', testNewHash ? '✅ Válido' : '❌ Inválido');
    }
    
  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
    console.error('Stack:', error.stack);
  }
}

testAuth();
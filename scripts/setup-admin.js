const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Variáveis de ambiente do Supabase não encontradas!');
  console.error('Verifique se NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY estão configuradas no .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupAdmin() {
  try {
    console.log('🔍 Verificando se o usuário admin já existe...');
    
    // Verificar se o usuário admin já existe
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'admin@premoldadosnunes.com')
      .single();
    
    if (existingUser) {
      console.log('✅ Usuário admin já existe!');
      console.log('📧 Email:', existingUser.email);
      console.log('👤 Nome:', existingUser.name);
      console.log('🔑 Role:', existingUser.role);
      console.log('📅 Criado em:', existingUser.created_at);
      
      // Gerar novo hash da senha
      console.log('🔐 Gerando novo hash da senha...');
      const newHashedPassword = await bcrypt.hash('admin123', 12);
      
      console.log('🔄 Atualizando senha no banco...');
      const { error: updateError } = await supabase
        .from('users')
        .update({ password: newHashedPassword })
        .eq('id', existingUser.id);
      
      if (updateError) {
        console.error('❌ Erro ao atualizar senha:', updateError.message);
        return;
      }
      
      console.log('✅ Senha atualizada com sucesso!');
      
      // Verificar se a nova senha funciona
      console.log('🧪 Testando nova senha...');
      const { data: updatedUser } = await supabase
        .from('users')
        .select('*')
        .eq('email', 'admin@premoldadosnunes.com')
        .single();
      
      const isPasswordValid = await bcrypt.compare('admin123', updatedUser.password);
      if (isPasswordValid) {
        console.log('✅ Teste de senha passou!');
        console.log('\n🎉 Configuração concluída! Você pode fazer login com:');
        console.log('📧 Email: admin@premoldadosnunes.com');
        console.log('🔐 Senha: admin123');
      } else {
        console.log('❌ Teste de senha falhou!');
        console.log('Hash salvo:', updatedUser.password);
        console.log('Hash gerado:', newHashedPassword);
      }
      
      return;
    }
    
    console.log('👤 Usuário admin não encontrado. Criando...');
    
    // Hash da senha com salt rounds mais alto
    const hashedPassword = await bcrypt.hash('admin123', 12);
    console.log('🔐 Hash gerado:', hashedPassword);
    
    // Inserir usuário admin
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert({
        email: 'admin@premoldadosnunes.com',
        password: hashedPassword,
        name: 'Administrador',
        role: 'admin'
      })
      .select()
      .single();
    
    if (insertError) {
      console.error('❌ Erro ao criar usuário admin:', insertError.message);
      
      // Verificar se a tabela users existe
      const { data: tables, error: tablesError } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .eq('table_schema', 'public')
        .eq('table_name', 'users');
      
      if (tablesError || !tables || tables.length === 0) {
        console.error('❌ Tabela "users" não encontrada!');
        console.error('Execute o script SQL de criação das tabelas primeiro.');
        console.error('Consulte o arquivo SETUP.md para instruções completas.');
      }
      
      return;
    }
    
    console.log('✅ Usuário admin criado com sucesso!');
    console.log('📧 Email:', newUser.email);
    console.log('👤 Nome:', newUser.name);
    console.log('🔑 Role:', newUser.role);
    
    // Testar a senha
    console.log('🧪 Testando senha...');
    const isPasswordValid = await bcrypt.compare('admin123', newUser.password);
    if (isPasswordValid) {
      console.log('✅ Teste de senha passou!');
      console.log('\n🎉 Configuração concluída! Você pode fazer login com:');
      console.log('📧 Email: admin@premoldadosnunes.com');
      console.log('🔐 Senha: admin123');
    } else {
      console.log('❌ Teste de senha falhou!');
    }
    
  } catch (error) {
    console.error('❌ Erro inesperado:', error.message);
    console.error('Stack:', error.stack);
    console.error('\n🔧 Possíveis soluções:');
    console.error('1. Verifique se as variáveis de ambiente estão corretas');
    console.error('2. Confirme se o projeto Supabase está ativo');
    console.error('3. Execute o script SQL de criação das tabelas');
    console.error('4. Verifique as políticas RLS no Supabase');
  }
}

setupAdmin();
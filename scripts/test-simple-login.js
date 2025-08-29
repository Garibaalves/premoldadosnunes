const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testLogin() {
  try {
    console.log('🔍 Testing admin login...');
    
    // Buscar usuário admin
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', 'admin@premoldadosnunes.com')
      .single();

    if (error) {
      console.error('❌ Error fetching user:', error);
      return;
    }

    if (!user) {
      console.error('❌ Admin user not found');
      return;
    }

    console.log('✅ Admin user found:', {
      id: user.id,
      email: user.email,
      role: user.role,
      hasPassword: !!user.password
    });

    // Testar senha
    const testPassword = 'admin123';
    const isValidPassword = await bcrypt.compare(testPassword, user.password);
    
    console.log('🔐 Password test result:', isValidPassword ? '✅ Valid' : '❌ Invalid');
    
    if (isValidPassword) {
      console.log('🎉 Login test successful! Admin can authenticate.');
    } else {
      console.log('❌ Login test failed! Password does not match.');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testLogin();
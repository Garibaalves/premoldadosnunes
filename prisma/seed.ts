import { PrismaClient } from '.prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@premoldadosnunes.com' },
    update: {},
    create: {
      email: 'admin@premoldadosnunes.com',
      password: hashedPassword,
      name: 'Administrador',
      role: 'admin'
    }
  });

  console.log('✅ Admin user created:', admin.email);

  // Create sample products
  const products = [
    {
      title: 'Laje Pré-Moldada H20',
      slug: 'laje-pre-moldada-h20',
      description: 'Laje pré-moldada de alta resistência, ideal para construções residenciais e comerciais. Fabricada com concreto de alta qualidade e armadura especial.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      category: 'lajes',
      featured: true,
      price: 85.50
    },
    {
      title: 'Viga Pré-Moldada 30x60',
      slug: 'viga-pre-moldada-30x60',
      description: 'Viga pré-moldada com dimensões 30x60cm, perfeita para estruturas de médio porte. Resistência garantida e acabamento impecável.',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      category: 'vigas',
      featured: true,
      price: 120.00
    },
    {
      title: 'Pilar Pré-Moldado 40x40',
      slug: 'pilar-pre-moldado-40x40',
      description: 'Pilar pré-moldado quadrado 40x40cm, ideal para sustentação de estruturas. Fabricado com concreto de alta resistência.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'pilares',
      featured: false,
      price: 95.00
    },
    {
      title: 'Escada Pré-Moldada',
      slug: 'escada-pre-moldada',
      description: 'Escada pré-moldada com degraus antiderrapantes. Ideal para construções residenciais e comerciais.',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      category: 'escadas',
      featured: false,
      price: 180.00
    },
    {
      title: 'Bloco Estrutural 14x19x39',
      slug: 'bloco-estrutural-14x19x39',
      description: 'Bloco estrutural de concreto para alvenaria estrutural. Dimensões 14x19x39cm, alta resistência e durabilidade.',
      imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
      category: 'blocos',
      featured: true,
      price: 4.50
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product
    });
  }

  console.log('✅ Sample products created');

  // Create sample projects
  const projects = [
    {
      title: 'Residencial Vila Nova',
      description: 'Construção de 50 unidades habitacionais com estrutura pré-moldada completa. Projeto executado em 8 meses com alta qualidade e eficiência.',
      imageUrl: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop',
      category: 'residencial',
      location: 'São Paulo, SP',
      completionDate: new Date('2023-12-15'),
      featured: true
    },
    {
      title: 'Galpão Industrial ABC',
      description: 'Galpão industrial de 2000m² com estrutura pré-moldada completa. Cobertura metálica e pé-direito de 8 metros.',
      imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop',
      category: 'industrial',
      location: 'Santo André, SP',
      completionDate: new Date('2023-10-20'),
      featured: true
    },
    {
      title: 'Edifício Comercial Centro',
      description: 'Edifício comercial de 10 andares com estrutura pré-moldada. Fachada moderna e acabamento de alta qualidade.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      category: 'comercial',
      location: 'São Paulo, SP',
      completionDate: new Date('2024-01-30'),
      featured: false
    },
    {
      title: 'Condomínio Residencial Jardins',
      description: 'Condomínio com 120 apartamentos distribuídos em 6 blocos. Estrutura pré-moldada com acabamento premium.',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      category: 'residencial',
      location: 'Osasco, SP',
      completionDate: new Date('2023-08-10'),
      featured: true
    }
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project
    });
  }

  console.log('✅ Sample projects created');
  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
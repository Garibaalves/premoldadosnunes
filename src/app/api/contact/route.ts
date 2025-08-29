import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/db';
import { ContactCreateInput } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactCreateInput = await request.json();
    
    const { data: contact, error } = await supabase
      .from('contacts')
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        subject: body.subject,
      })
      .select()
      .single();
    
    if (error) {
      throw error;
    }
    
    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data: contacts, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
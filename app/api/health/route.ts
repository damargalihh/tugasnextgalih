import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      POSTGRES_URL: !!process.env.POSTGRES_URL,
      AUTH_SECRET: !!process.env.AUTH_SECRET,
      POSTGRES_URL_value: process.env.POSTGRES_URL ? 'Set (hidden)' : 'NOT SET',
      AUTH_SECRET_value: process.env.AUTH_SECRET ? 'Set (hidden)' : 'NOT SET',
    };

    return NextResponse.json({
      status: 'OK',
      environment: process.env.NODE_ENV,
      checks: envCheck,
      message: 'Environment variables check',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'ERROR',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

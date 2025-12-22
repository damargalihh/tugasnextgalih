import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, {
  connection: {
    application_name: 'nextjs-dashboard',
  },
  ssl: 'require',
  max: 1,
});

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

export async function GET() {
  // Only allow queries in development
  if (process.env.NODE_ENV === 'production') {
    return Response.json(
      { error: 'Direct database queries are disabled in production' },
      { status: 403 }
    );
  }

  try {
  	const result = await listInvoices();
    return Response.json({ data: result, count: result.length });
  } catch (error) {
    console.error('Database query error:', error);
  	return Response.json(
      { error: 'Failed to fetch data from database' },
      { status: 500 }
    );
  }
}


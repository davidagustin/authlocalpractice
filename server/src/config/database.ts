import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL database');
    
    // Drop existing users table to clear old schema
    await client.query('DROP TABLE IF EXISTS users');
    console.log('Dropped existing users table');
    
    // Create users table with new schema (no name field)
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Created new users table without name field');
    
    client.release();
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

export default pool;

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// **Handle GET Requests**
export async function GET() {
  try {
    const tweets = await prisma.tweet.findMany();
    return NextResponse.json(tweets, { status: 200 });
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// **Handle POST Requests**
export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON request body
    const { userId, username, githubRepo, problemDesc } = body;

    // Validate input
    if (!userId || !username || !githubRepo || !problemDesc) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create a new tweet (post)
    const tweet = await prisma.tweet.create({
      data: { userId, username, githubRepo, problemDesc }
    });

    return NextResponse.json({ message: 'Tweet posted successfully', tweet }, { status: 201 });
  } catch (error) {
    console.error('Error creating tweet:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

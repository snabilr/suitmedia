'use client';

import Banner from '@/components/Banner';
import ListPost from '@/components/ListPost';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Suspense fallback={<Loading />}>
        <Banner />
        <ListPost />
      </Suspense>
    </main>
  );
}

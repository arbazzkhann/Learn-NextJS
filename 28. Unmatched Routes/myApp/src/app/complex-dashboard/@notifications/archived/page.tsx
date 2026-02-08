import Card from '@/app/components/Card';
import Link from 'next/link';

export default function ArchivedNotification() {
  return (
    <Card>
      <div>ArchivedNotification</div>
      <div>
        <Link href="/complex-dashboard" className='text-blue-600'>Default</Link>
      </div>
    </Card>
  );
}
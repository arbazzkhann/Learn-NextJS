import Card from '../../components/Card';
import Link from 'next/link';

export default function page() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/complex-dashboard/archived" className='text-blue-600'>Archived</Link>
      </div>
    </Card>
  );
}
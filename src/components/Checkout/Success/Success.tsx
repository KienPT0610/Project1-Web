import React from 'react';
import { Button, Result } from 'antd';
import { FaBuffer } from 'react-icons/fa6';
import Link from 'next/link';

const Success = () => (
  <Result
    status="success"
    title="Your order is successfully place"
    subTitle="Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis."
    extra={[
      <Button key="dashboard" size="large" icon={<FaBuffer />} className="rounded-md border-2 text-orange-500 border-orange-500" variant="outlined">
        <Link href={'/dashboard'} replace>Go to Dashboard</Link>
      </Button>
    ]}
  />
);

export default Success;
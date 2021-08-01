import { useRouter } from 'next/router';
import React from 'react';

const DonorDetail = () => {
    const router = useRouter()
    const { donorId } = router.query
  return (
    <div>
      
    </div>
  );
};

export default DonorDetail;
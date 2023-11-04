import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//show modal after successful paymenent
const Confirm = ({ isConfirmModal, setIsConfirmModal }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setIsConfirmModal(false);
    setLoading(true);
    router.push(`/orders`);
  };
  return (
    <div>
      {isConfirmModal && (
        <div className='fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50'>
          <div className='modal-content bg-slate-200 p-4 rounded-lg shadow-lg'>
            <h2 className='text-custom-orange text-xlg font-semibold mb-4'>Thank You.</h2>

            <Image
              src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1698910032/HAMFOODS/check-mark_u1e3kx.png'
              alt='thanks'
              width={200}
              height={200}
              className='object-contain'
            />
            <p className='text-green-600'>Your Order is being prepared</p>
            <button onClick={handleClose} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-4'>
              {isLoading ? <Spinner /> : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Confirm;

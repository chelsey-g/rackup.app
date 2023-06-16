import { useState } from 'react';
import SearchFilter from '@/searchfilter';

const PlayerEntryModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-pink-600">
          <div className="bg-black p-8 max-w-sm mx-auto">
            <span
              className="text-pink-600 text-2xl font-bold float-right cursor-pointer"
              onClick={closeModal}
            ></span>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">enter players:</h2>
            <SearchFilter />
            </div>
          </div>
      )}
    </>
  );
};

export default PlayerEntryModal;

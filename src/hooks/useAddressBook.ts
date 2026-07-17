import { useState, useEffect } from 'react';
import { isValidPublicKey } from '../lib/stellar';

export function useAddressBook() {
  const [savedAddresses, setSavedAddresses] = useState<string[]>([]);

  useEffect(() => {
    const loaded = localStorage.getItem('veilsplit_address_book');
    if (loaded) {
      try {
        setSavedAddresses(JSON.parse(loaded));
      } catch (e) {
        console.error('Failed to parse address book', e);
      }
    }
  }, []);

  const saveAddress = (address: string) => {
    if (isValidPublicKey(address) && !savedAddresses.includes(address)) {
      const newAddresses = [address, ...savedAddresses].slice(0, 10); // Keep last 10
      setSavedAddresses(newAddresses);
      localStorage.setItem('veilsplit_address_book', JSON.stringify(newAddresses));
    }
  };

  const removeAddress = (address: string) => {
    const newAddresses = savedAddresses.filter(a => a !== address);
    setSavedAddresses(newAddresses);
    localStorage.setItem('veilsplit_address_book', JSON.stringify(newAddresses));
  }

  return { savedAddresses, saveAddress, removeAddress };
}

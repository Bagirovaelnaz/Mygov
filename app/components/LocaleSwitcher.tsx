'use client';

import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';

export default function LocaleSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState<'az' | 'en'>('az');

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('locale='))
      ?.split('=')[1] as 'az' | 'en' | undefined;

    if (cookieLocale) setLocale(cookieLocale);
  }, []);

  function changeLocale(newLocale: 'az' | 'en') {
    // Cookie update
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 il
    setLocale(newLocale);
    router.refresh(); // app router üçün səhifəni yeniləyir
  }

  return (
    <div>
      <button
        style={{fontWeight: locale === 'az' ? 'bold' : 'normal'}}
        onClick={() => changeLocale('az')}
      >
        AZ
      </button>
      <button
        style={{fontWeight: locale === 'en' ? 'bold' : 'normal', marginLeft: '8px'}}
        onClick={() => changeLocale('en')}
      >
        EN
      </button>
    </div>
  );
}

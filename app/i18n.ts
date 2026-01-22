import { getRequestConfig } from "next-intl/server";
import {cookies} from 'next/headers';

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "az";
  return {
    locale,
    messages: (await import(`./components/messages/${locale}.json`)).default,
  };
});

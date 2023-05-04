import { IncomingMessage } from 'http';
import parser from 'ua-parser-js';

export const RequestErrorHandling = async (func: any) => {
  try {
    return (await func).data;
  } catch (error: any) {
    return {
      error: error?.response?.status,
    };
  }
};

const PrivatePages = ['/account', '/play-game'];

export const HasPermissionPage = (session: any, url: string) => {
  const isPrivate = IsPrivatePage(url);
  const hasToken = session?.user?.token;
  // user has access to page
  if (isPrivate && hasToken) return true;
  // user has no access to page
  else return false;
};

export const IsPrivatePage = (url: string) => {
  return PrivatePages.some((i) => url.includes(i));
};

export const IsAccountPage = (url: string) => {
  return url.includes('/account');
};

export const Server401HomeRedirect = () => {
  return {
    redirect: {
      destination: '/?login=true',
      permanent: false,
    },
  };
};

export const Server401LogOutCallback = (url: string) => {
  const hasQuestionMark = url.includes('?');
  return {
    redirect: {
      destination: url + `${hasQuestionMark ? '&' : '?'}login=true`,
      permanent: false,
    },
  };
};

export const Server401LoginCallback = (url: string) => {
  const hasQuestionMark = url.includes('?');
  return {
    redirect: {
      destination: url + `${hasQuestionMark ? '&' : '?'}login=true`,
      permanent: false,
    },
  };
};

//toCurreny Helper

export const currency = (locale = 'tr-TR', currency = 'TRY') => {
  const options = {
    style: 'currency',
    currency,
  };
  return new Intl.NumberFormat(locale, options);
};

export const IsUserAgentMobile = (req: IncomingMessage) => {
  const ua = parser(req.headers['user-agent']);

  return ua.device?.type === 'mobile' || ua.device?.type === 'tablet';
};

export const ObjectToArray = (obj: any) => {
  const result = [];
  for (const key in obj) {
    result.push({ value: key, label: obj[key], iso: key });
  }
  return result;
};

//localstorage get, set withExpiry

export const getLocalStorage = (key: string) => {
  const itemStr = localStorage.getItem(String(key));

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() < item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.data;
};

export const setLocalStorage = (key: string, value: any, ttl?: string) => {
  // `item` is an object which contains the original value
  const item = {
    data: value,
    expiry: ttl || null,
  };
  localStorage.setItem(String(key), JSON.stringify(item));
};

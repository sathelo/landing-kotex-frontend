const getMock = (subscription) => {
  return {
    id: 12345678,
    displayName: 'TestUser',
    firstName: 'Иван',
    lastName: 'Иванов',
    messagesCount: 0,
    img: {
      x1: 'https://avatars.mds.yandex.net/get-kino-vod-users-avatar/27708/21213-11.jpg/40x40',
      x2: 'https://avatars.mds.yandex.net/get-kino-vod-users-avatar/27708/21213-11.jpg/80x80',
    },
    integrations: {
      items: [
        {
          service: 'yandex',
          subscription,
          uid: 1130000012345678,
          login: 'test@example.com',
          name: 'test@example.com',
          email: 'test@example.com',
          billingFeatures: [],
        },
      ],
      stats: { total: 1, limit: 10, offset: 0 },
    },
    isAuthorized: true,
  };
};

export default function (user) {
  if (process.env.NODE_ENV === 'production' && process.env.IN_KP === true) {
    return user;
  }

  const url = new URL(window.location.href);
  const subscription = url.searchParams.get('_subscription');

  if (subscription) {
    return getMock(subscription === '1');
  }

  return user;
}

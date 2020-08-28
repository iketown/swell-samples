module.exports = {
  async redirects() {
    return [
      {
        source: "/mockups/:slugId",
        destination: "/mockups/:slugId/home",
        permanent: true,
      },
    ];
  },
};

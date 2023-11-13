const getCurrent = async (req, res) => {
  const { email, id } = req.user;

  res.json({
    success: true,
    data: {
      id,
      email,
    },
  });
};

export { getCurrent };

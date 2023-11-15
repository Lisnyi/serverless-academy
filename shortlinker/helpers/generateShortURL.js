const { PORT = 3000 } = process.env;

const generateShortURL = (id) => {
  return `http://localhost:${PORT}/${id}`;
};

export { generateShortURL };

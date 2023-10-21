const getImagePath = () => {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return '';
  }
  return 'DQM3-db/';
};

export { getImagePath }; 
const getIdFromPicture = (url) => {
    return url.match(/[^/]+$/)[0]
};

export default getIdFromPicture;
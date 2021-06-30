import axios from 'axios';

const baseUrl = 'https://dog.ceo/api'

export const getBreeds = () => {
    return axios.get(`${baseUrl}/breeds/list/all`).then(
        (response) => {
            const breedList = [];
            // eslint-disable-next-line array-callback-return
            Object.keys(response.data.message).map( (breed) => {
                response.data.message[breed].length > 0
                ? 
                Array.prototype.push.apply(breedList, response.data.message[breed].map( (subBreed) => {
                    return { value: `${breed}/${subBreed}`, label: `- ${subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}`, subBreed: true}
                }))
                :
                breedList.push({ value: breed, label: breed.charAt(0).toUpperCase() + breed.slice(1), subBreed: false })
            });
            return breedList
        }
    )
}

export const getPictures = (breedName) => {
    return axios.get(`${baseUrl}/breed/${breedName.toLowerCase()}/images`).then(
        (response) => {
            const imageArray = response.data.message.map( (element) => {
                return element
            });
            return imageArray
        }
    )
}

export default getBreeds;
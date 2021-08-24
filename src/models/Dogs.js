import axios from 'axios'

class Dogs {
  resource = 'https://dog.ceo/api/'

  getBreeds () {
    return axios(`${this.resource}breeds/list/all`, {
      method: 'get'
    })
  }

  getSubBreeds (bread) {
    return axios(`${this.resource}breed/${bread}/list`, {
      method: 'get'
    })
  }

  getBreedImage (bread) {
    return axios(`${this.resource}breed/${bread}/images/random`, {
      method: 'get'
    })
  }

  getBreedImages (bread, count) {
    return axios(`${this.resource}breed/${bread}/images/random/${count}`, {
      method: 'get'
    })
  }
}

export default new Dogs()

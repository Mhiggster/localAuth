import axios from 'axios'
import Render from './render'

export default class {
    constructor () {
        this.render = new Render
    }

    bootDictionary () {
        return  axios.get(location.href + '/src/data/words.json');
    } 

    async run () {
        this.dictionary = await this.bootDictionary();

        this.render.imutate(this.dictionary.data)
    }
}
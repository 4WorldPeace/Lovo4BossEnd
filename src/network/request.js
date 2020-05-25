import Axios from "axios";
import Vue from 'vue'

export function request(config) {
		const instance = new Axios(config);
		return instance(config);
}